import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">R</span>
              </div>
              <span className="font-display font-bold text-lg">
                RIOT<span className="text-primary">ecommerce</span>
              </span>
            </Link>
            <p className="text-sm text-hero-foreground/60 leading-relaxed mb-6">
              Empowering ecommerce brands with data-driven strategies, seamless operations, and scalable growth solutions.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-hero-foreground/40">Navigation</h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Services", "How It Works", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item === "Home" ? "" : item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-hero-foreground/60 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-hero-foreground/40">Services</h4>
            <ul className="space-y-2.5">
              {["CRM Solutions", "Backend Support", "Customer Operations", "Ecommerce Strategy", "Performance Analytics", "Process Automation"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-hero-foreground/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-hero-foreground/40">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-hero-foreground/60">hello@riotecommerce.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-hero-foreground/60">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-hero-foreground/60">Global Operations — Remote First</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-hero-foreground/40">
            © {new Date().getFullYear()} RIOT Ecommerce. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-hero-foreground/40 hover:text-hero-foreground/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-hero-foreground/40 hover:text-hero-foreground/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
