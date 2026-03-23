import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-hero text-white relative overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] opacity-[0.03]"
        style={{ background: "radial-gradient(ellipse, hsl(0 0% 100%), transparent 70%)" }} />

      <div className="container-wide section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="RIOT Ecommerce" className="h-14 w-auto invert" />
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Engineering high-performance ecommerce operations for brands that refuse to settle for average.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:bg-white/[0.1] hover:border-white/[0.15] hover:text-white transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-5 uppercase tracking-wider text-hero-foreground/30">Navigation</h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Services", "How It Works", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item === "Home" ? "" : item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-hero-foreground/50 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-5 uppercase tracking-wider text-hero-foreground/30">Services</h4>
            <ul className="space-y-2.5">
              {["CRM Solutions", "Marketplace Management", "Revenue Analytics", "Growth Engineering", "Process Automation", "Backend Operations"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-hero-foreground/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-5 uppercase tracking-wider text-hero-foreground/30">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-hero-foreground/50">hello@riotecommerce.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-hero-foreground/50">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-hero-foreground/50">Global Operations — Remote First</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-hero-foreground/30">
            © {new Date().getFullYear()} RIOT Ecommerce. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-hero-foreground/30 hover:text-hero-foreground/50 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-xs text-hero-foreground/30 hover:text-hero-foreground/50 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
