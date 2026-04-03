import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Zap } from "lucide-react";
import logo from "@/assets/riotecommerce.png";

/* ─── DATA ──────────────────────────────────────────────────────────── */

const navLinks = [
  { label: "Home",         to: "/" },
  { label: "About",        to: "/about" },
  { label: "Services",     to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Our Experts",  to: "/experts" },
  { label: "Careers",      to: "/careers" },
  { label: "Contact",      to: "/contact" },
];

const services = [
  "Website Development",
  "Product Listing & Catalogue",
  "Order Processing",
  "Inventory Management",
  "CRM & Customer Support",
  "Vendor Sourcing & Management",
  "Logistics Management",
  "Return & Refund Handling",
  "SEO & Content Strategy",
  "Paid Traffic Management",
  "SOP Creation",
  "Business Scale-Up Strategy",
];

const contactItems = [
  { icon: Mail,   label: "support@riotecommerce.com", href: "mailto:support@riotecommerce.com" },
  { icon: Phone,  label: "+91-9910069513",          href: "tel:+91-9910069513" },
  { icon: MapPin, label: "1129, 11th Floor, Eros Cooperate Park, Sector 2, 122051",  href: null },
];

/* ─── Custom SVG social icons ───────────────────────────────────────── */

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const socialLinks = [
  {
    Icon: LinkedInIcon,
    url: "https://www.linkedin.com/company/riot-ecommerce/?viewAsMember=true",
    label: "LinkedIn",
    hoverColor: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
  },
  {
    Icon: InstagramIcon,
    url: "https://www.instagram.com/riotecommerce/",
    label: "Instagram",
    hoverColor: "hover:bg-[#E1306C] hover:border-[#E1306C]",
  },
  {
    Icon: FacebookIcon,
    url: "https://www.facebook.com/RIOTecommerce",
    label: "Facebook",
    hoverColor: "hover:bg-[#1877F2] hover:border-[#1877F2]",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────────── */

const Footer = () => {
  return (
    <footer className="bg-[#060810] text-white relative overflow-hidden">

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-blue-700/10 blur-[120px] pointer-events-none" />

      {/* ── MAIN GRID ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.4fr_1.2fr] gap-12 lg:gap-8">

          {/* ── BRAND COLUMN ── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="inline-block mb-5">
              <img
                src={logo}
                alt="RIOT Ecommerce"
                className="h-20 w-auto  brightness-200"
              />
            </Link>

            <p className="text-[13px] text-white/40 leading-relaxed mb-7 max-w-xs">
              Engineering high-performance ecommerce operations for brands that refuse
              to settle for average. Your ops. Our obsession.
            </p>

            {/* Credibility mini-strip */}
            {/* <div className="flex flex-wrap gap-2 mb-7">
              {["12+ Years", "60+ Clients", "15+ Countries"].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/45 text-[10px] font-bold tracking-wide"
                >
                  <Zap size={9} className="text-blue-400" />
                  {badge}
                </span>
              ))}
            </div> */}

            {/* Social icons */}
            <div className="flex gap-2.5">
              {socialLinks.map(({ Icon, url, label, hoverColor }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 ${hoverColor}`}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── NAVIGATION ── */}
          <div>
            {/* Section heading — high contrast */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-4 rounded-full bg-blue-500" />
              <h4 className="text-white font-black text-sm tracking-[0.15em] uppercase">
                Navigation
              </h4>
            </div>

            <ul className="space-y-3">
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="group flex items-center gap-1.5 text-[13px] text-white/45 hover:text-white transition-colors duration-200"
                  >
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 text-blue-400 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 shrink-0"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── SERVICES ── */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-4 rounded-full bg-blue-500" />
              <h4 className="text-white font-black text-sm tracking-[0.15em] uppercase">
                Services
              </h4>
            </div>

            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="group flex items-center gap-1.5 text-[13px] text-white/45 hover:text-white transition-colors duration-200"
                  >
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 text-blue-400 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 shrink-0"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT ── */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-4 rounded-full bg-blue-500" />
              <h4 className="text-white font-black text-sm tracking-[0.15em] uppercase">
                Contact
              </h4>
            </div>

            <ul className="space-y-4 mb-8">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="group flex items-start gap-3 hover:text-white transition-colors duration-200"
                    >
                      <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-200 mt-0.5">
                        <Icon size={13} className="text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[13px] text-white/45 group-hover:text-white/80 transition-colors leading-snug pt-1">
                        {label}
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={13} className="text-blue-400" />
                      </div>
                      <span className="text-[13px] text-white/45 leading-snug pt-1">{label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl bg-blue-600 p-5 cursor-default"
            >
              <p className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-200 mb-1">
                Ready to scale?
              </p>
              <p className="text-white font-black text-sm leading-snug mb-3">
                Let's talk about your ecommerce growth
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-[11px] font-black text-white/80 hover:text-white transition-colors"
              >
                Get in touch
                <ArrowUpRight size={12} />
              </Link>
            </motion.div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="mt-14 pt-7 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25 font-medium">
            © {new Date().getFullYear()} RIOT Ecommerce. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-white/20">
            <span className="text-[10px] font-semibold tracking-wide">Engineered for ecommerce excellence</span>
            <Zap size={10} className="text-blue-500/60" />
          </div>

          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-[11px] text-white/25 hover:text-white/60 transition-colors duration-200 font-medium"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;