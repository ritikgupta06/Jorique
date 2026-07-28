import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="text-sm font-semibold tracking-[0.25em] uppercase text-primary">
            JORIQUE
          </Link>

          <nav className="flex items-center gap-8">
            {[
              { label: 'Home', href: '/' },
              { label: 'Shop', href: '/shop' },
              { label: 'About', href: '/about' },
              { label: 'Reviews', href: '/reviews' },
              { label: 'Connection', href: '/connection' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs font-medium tracking-widest uppercase text-secondary hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="p-1.5 text-secondary hover:text-primary transition-colors duration-200"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="p-1.5 text-secondary hover:text-primary transition-colors duration-200"
            >
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="p-1.5 text-secondary hover:text-primary transition-colors duration-200"
            >
              <Mail size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-secondary tracking-wide">
            &copy; {new Date().getFullYear()} JORIQUE. All rights reserved.
          </p>
          <p className="text-xs text-secondary/60 tracking-wide">
            Crafted for modern living.
          </p>
        </div>
      </div>
    </footer>
  );
}
