import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, User, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
];

interface NavbarProps {
  cartCount?: number;
  wishlistCount?: number;
}

export default function Navbar({ cartCount = 0, wishlistCount = 0 }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span
                className={`text-lg font-semibold tracking-[0.25em] uppercase transition-colors duration-300 ${
                  transparent ? 'text-white' : 'text-primary'
                }`}
              >
                JORIQUE
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-xs font-medium tracking-widest uppercase transition-colors duration-200 relative group ${
                    transparent
                      ? 'text-white/90 hover:text-white'
                      : 'text-secondary hover:text-primary'
                  } ${location.pathname === link.href ? (transparent ? 'text-white' : 'text-primary') : ''}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${
                      transparent ? 'bg-white' : 'bg-primary'
                    } ${location.pathname === link.href ? 'w-full' : ''}`}
                  />
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4 lg:gap-5">
              <button
                aria-label="Wishlist"
                className={`relative p-1.5 transition-colors duration-200 ${
                  transparent ? 'text-white/90 hover:text-white' : 'text-secondary hover:text-primary'
                }`}
              >
                <Heart size={18} strokeWidth={1.5} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[9px] rounded-full flex items-center justify-center font-medium">
                    {wishlistCount}
                  </span>
                )}
              </button>
              <button
                aria-label="Account"
                className={`p-1.5 transition-colors duration-200 ${
                  transparent ? 'text-white/90 hover:text-white' : 'text-secondary hover:text-primary'
                }`}
              >
                <User size={18} strokeWidth={1.5} />
              </button>
              <Link
                to="/shop"
                aria-label="Cart"
                className={`relative p-1.5 transition-colors duration-200 ${
                  transparent ? 'text-white/90 hover:text-white' : 'text-secondary hover:text-primary'
                }`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[9px] rounded-full flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Menu"
                className={`md:hidden p-1.5 transition-colors duration-200 ${
                  transparent ? 'text-white/90 hover:text-white' : 'text-secondary hover:text-primary'
                }`}
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white flex flex-col md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-border">
                <span className="text-sm font-semibold tracking-[0.25em] uppercase text-primary">JORIQUE</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 text-secondary hover:text-primary transition-colors"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
              <nav className="flex flex-col px-6 py-8 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 + 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={`block py-3 text-sm font-medium tracking-widest uppercase border-b border-border/50 transition-colors ${
                        location.pathname === link.href ? 'text-primary' : 'text-secondary hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto px-6 py-8">
                <p className="text-xs text-secondary tracking-widest uppercase">Luxury Home Textiles</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
