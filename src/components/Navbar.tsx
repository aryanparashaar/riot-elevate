import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/riotecommerce.png";

/* ─── DATA ──────────────────────────────────────────────────────────── */

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Our Experts", to: "/experts" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Careers", to: "/careers" },
];

/* ─── COMPONENT ─────────────────────────────────────────────────────── */

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* ── MAIN BAR ── */}
      <div
        className={`transition-all duration-500 ${scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-[0_2px_24px_rgba(0,0,0,0.07)]"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[90px] px-5 sm:px-8">

          {/* ── LOGO ── */}
          <Link to="/" className="relative flex items-center shrink-0 group">

            <img
              src={logo}
              alt="RIOT Ecommerce"
              className={`relative z-10 h-16 md:h-24 md:-ml-15 w-auto transition-all duration-300 ${scrolled ? "" : "brightness-200"
                }`}
            />
          </Link>

          {/* ── DESKTOP LINKS ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3.5 py-2 text-[16px] font-semibold rounded-lg transition-all duration-200 group ${isActive
                    ? scrolled
                      ? "text-blue-600"
                      : "text-white"
                    : scrolled
                      ? "text-gray-500 hover:text-gray-900"
                      : "text-white/55 hover:text-white"
                    }`}
                >
                  {/* Hover background pill */}
                  <span className={`absolute inset-0 rounded-lg transition-opacity duration-200 opacity-0 group-hover:opacity-100 ${scrolled ? "bg-gray-100" : "bg-white/10"
                    }`} />

                  <span className="relative">{link.label}</span>

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${scrolled ? "bg-blue-600" : "bg-white"
                        }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── CTA + MOBILE TOGGLE ── */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              to="/contact"
              className={`hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-black transition-all duration-200 shadow-sm ${scrolled
                ? "bg-blue-600 text-white hover:bg-blue-500 shadow-blue-700/20 hover:shadow-blue-600/30 hover:shadow-md"
                : "bg-white text-[#0a0d14] hover:bg-blue-50"
                }`}
            >
              Contact Us
              <ArrowRight size={13} />
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${scrolled
                ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                : "bg-white/10 hover:bg-white/20 text-white"
                }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden bg-[#060810]/97 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            {/* Top accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-5 py-5 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                        ? "bg-blue-600/15 text-white border border-blue-500/30"
                        : "text-white/50 hover:text-white hover:bg-white/8"
                        }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.05 }}
                className="pt-3 border-t border-white/10 mt-3"
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-black transition-colors duration-200 shadow-lg shadow-blue-700/20"
                >
                  Contact Us
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;