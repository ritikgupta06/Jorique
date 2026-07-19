import "dotenv/config";
import express from "express";
import cors from "cors";
import { registerAuthRoutes, authRequired } from "./auth.js";

if (!process.env.JWT_SECRET) {
  throw new Error("Missing JWT_SECRET");
}

const app = express();
const requestedPort = Number(process.env.PORT || 5000);

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "jorique-backend" });
});

registerAuthRoutes(app);

app.get("/api/auth/me", authRequired, (req, res) => {
  res.json({ user: req.user });
});

app.get("/api/dashboard/user", authRequired, (req, res) => {
  res.json({
    welcome: `Welcome back, ${req.user.fullName}`,
    stats: [
      { label: "Orders", value: "03" },
      { label: "Wishlist", value: "12" },
      { label: "Rewards", value: "480" },
    ],
    recentOrders: [
      { id: "JRQ-1024", status: "Processing", total: "$248" },
      { id: "JRQ-1018", status: "Delivered", total: "$129" },
    ],
  });
});

app.get("/api/dashboard/admin", authRequired, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access required." });
  }

  res.json({
    stats: [
      { label: "Revenue", value: "$18.4k" },
      { label: "Orders", value: "126" },
      { label: "Customers", value: "842" },
      { label: "Pending", value: "09" },
    ],
    activity: [
      "New order JRQ-1031 placed",
      "Inventory updated for bedding collection",
      "Customer review pending approval",
    ],
  });
});

function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`JORIQUE backend running on http://localhost:${port}`);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      const fallbackPort = port + 1;
      console.warn(
        `Port ${port} is already in use. Trying ${fallbackPort} instead.`,
      );
      startServer(fallbackPort);
      return;
    }

    console.error("Server startup error:", error);
    process.exit(1);
  });
}

startServer(requestedPort);
