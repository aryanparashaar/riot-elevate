import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Headphones, BarChart3, Settings,
  Zap, ShieldCheck, TrendingUp, ArrowRight, ArrowUpRight,
} from "lucide-react";

import customerSupport from "/CustomerSupport.jpg";
import digitalPresence from "/Website.jpg";
import ecommerceOps from "/Ecommerceoperation.jpg";
import brandGrowth from "/BrandBuilding.jpg";

const services = [
  {
    icon: Headphones,
    title: "Customer Support & Virtual Assistance",
    description:
      "Slash ticket volume by 60% with intelligent workflows, AI-powered routing, and proactive support systems that turn customers into advocates.",
    image: customerSupport,
    accent: "#10b981",
    gradient: "from-emerald-500 to-teal-400",
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.18)",
    glow: "rgba(16,185,129,0.25)",
    iconBg: "rgba(16,185,129,0.15)",
    tag: "Support",
    href: "/services#customer-support",
  },
  {
    icon: BarChart3,
    title: "Brand Building & Growth Analytics",
    description:
      "Real-time dashboards and predictive insights that surface growth opportunities and eliminate revenue leaks across every channel.",
    image: brandGrowth,
    accent: "#f59e0b",
    gradient: "from-amber-500 to-orange-400",
    bg: "rgba(245,158,11,0.07)",
    border: "rgba(245,158,11,0.18)",
    glow: "rgba(245,158,11,0.25)",
    iconBg: "rgba(245,158,11,0.15)",
    tag: "Branding",
    href: "/services#brand-building",
  },
  {
    icon: Settings,
    title: "Ecommerce Operations & Backend Support",
    description:
      "Bulletproof order management, inventory sync, and fulfillment optimization — engineered to scale with zero downtime.",
    image: ecommerceOps,
    accent: "#3b82f6",
    gradient: "from-blue-500 to-cyan-400",
    bg: "rgba(59,130,246,0.07)",
    border: "rgba(59,130,246,0.18)",
    glow: "rgba(59,130,246,0.25)",
    iconBg: "rgba(59,130,246,0.15)",
    tag: "Operations",
    href: "/services#ecommerce-ops",
  },
  {
    icon: Zap,
    title: "Website & Digital Presence",
    description:
      "Custom automation pipelines that eliminate 80% of repetitive tasks, reducing costs while accelerating every workflow.",
    image: digitalPresence,
    accent: "#8b5cf6",
    gradient: "from-violet-500 to-purple-400",
    bg: "rgba(139,92,246,0.07)",
    border: "rgba(139,92,246,0.18)",
    glow: "rgba(139,92,246,0.25)",
    iconBg: "rgba(139,92,246,0.15)",
    tag: "Digital",
    href: "/services#website-digital",
  },
  {
    icon: ShieldCheck,
    title: "Marketplace Management",
    description:
      "End-to-end Amazon, Walmart, and multi-channel management — from listing optimization to advertising and compliance.",
    image: ecommerceOps,
    accent: "#ef4444",
    gradient: "from-red-500 to-rose-400",
    bg: "rgba(239,68,68,0.07)",
    border: "rgba(239,68,68,0.18)",
    glow: "rgba(239,68,68,0.25)",
    iconBg: "rgba(239,68,68,0.15)",
    tag: "Marketplace",
    href: "/services",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Conversion",
    description:
      "Data-backed growth strategies that consistently deliver 3–5x ROI through conversion optimization, retention, and market expansion.",
    image: brandGrowth,
    accent: "#06b6d4",
    gradient: "from-cyan-500 to-blue-400",
    bg: "rgba(6,182,212,0.07)",
    border: "rgba(6,182,212,0.18)",
    glow: "rgba(6,182,212,0.25)",
    iconBg: "rgba(6,182,212,0.15)",
    tag: "Marketing",
    href: "/services",
  },
];

/* ─── SERVICE CARD ──────────────────────────────────────────────── */
const ServiceCard = ({
  service,
  index,
}: {
  service: typeof services[0];
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative rounded-3xl overflow-hidden cursor-default h-full flex flex-col"
      style={{
        background: service.bg,
        border: `1.5px solid ${service.border}`,
        boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
      }}
    >
      {/* ── Image area ── */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Strong gradient overlay so text always readable */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${service.accent}33 0%, transparent 50%)`,
          }}
        />
        {/* Tag badge pinned top-left */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white"
          style={{ background: service.accent }}
        >
          {service.tag}
        </div>
        {/* Arrow link top-right */}
        <Link
          to={service.href}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
          style={{ background: service.accent }}
        >
          <ArrowUpRight size={14} className="text-white" />
        </Link>
      </div>

      {/* ── Content area ── */}
      <div className="flex flex-col flex-1 p-6">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
          style={{ background: service.iconBg }}
        >
          <Icon size={20} style={{ color: service.accent }} />
        </div>

        <h3 className="font-extrabold text-[#0a0d14] text-base leading-snug mb-2 tracking-tight">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Bottom CTA */}
        <div className="mt-5 pt-4 border-t" style={{ borderColor: service.border }}>
          <Link
            to={service.href}
            className="inline-flex items-center gap-1.5 text-xs font-bold group/link"
            style={{ color: service.accent }}
          >
            Learn more
            <ArrowRight
              size={13}
              className="group-hover/link:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>

      {/* Bottom sweep bar */}
      <motion.div
        className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r ${service.gradient}`}
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ duration: 1, delay: index * 0.1 + 0.4, ease: "easeOut" }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${service.glow}, transparent 65%)`,
        }}
      />
    </motion.div>
  );
};

/* ─── MAIN SECTION ──────────────────────────────────────────────── */
const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 sm:py-24 bg-[#f8faff] overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Orbs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06), transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-4">
            What We Do
          </span> */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a0d14] tracking-tight mb-4 leading-tight">
            What we offer for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              your success
            </span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            At RIOT Ecommerce, we provide expert-driven solutions to streamline your
            ecommerce operations, enhance efficiency, and drive growth. Let us handle the
            details while you achieve success.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-[#0a0d14] text-white font-bold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-black/10 group"
          >
            Explore All Services
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;