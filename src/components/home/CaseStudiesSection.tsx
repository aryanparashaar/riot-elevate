import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, TrendingUp, Package, Headphones, Globe, BarChart2, ShoppingCart } from "lucide-react";

const cases = [
  {
    tag: "Customer Support",
    icon: Headphones,
    title: "Fashion D2C Brand",
    subtitle: "Ticket chaos → 24/7 resolution engine",
    description:
      "A fast-growing fashion brand was drowning in 8,000+ monthly support tickets with a 3-day average response time. RIOT rebuilt their entire CX pipeline with smart routing, templated responses, and round-the-clock coverage.",
    results: [
      { label: "Response Time", value: "↓ 60%", color: "#10b981" },
      { label: "CSAT Score", value: "↑ 45%", color: "#3b82f6" },
      { label: "Tickets Handled", value: "1M+", color: "#8b5cf6" },
    ],
    accent: "#10b981",
    gradient: "from-emerald-500 to-teal-400",
    glow: "rgba(16,185,129,0.2)",
    border: "rgba(16,185,129,0.2)",
    bg: "rgba(16,185,129,0.05)",
    number: "01",
  },
  {
    tag: "Ecommerce Operations",
    icon: Package,
    title: "Wellness Brand Scale-Up",
    subtitle: "3 warehouses. 1 seamless operation.",
    description:
      "A D2C wellness brand scaling across 3 fulfillment centers had 12% order error rates and no inventory visibility. RIOT engineered end-to-end backend operations, SOP systems, and vendor management — delivering near-perfect accuracy at 3× throughput.",
    results: [
      { label: "Order Accuracy", value: "99.2%", color: "#f59e0b" },
      { label: "Faster Processing", value: "3×", color: "#3b82f6" },
      { label: "Annual Savings", value: "$200K", color: "#10b981" },
    ],
    accent: "#f59e0b",
    gradient: "from-amber-500 to-orange-400",
    glow: "rgba(245,158,11,0.2)",
    border: "rgba(245,158,11,0.2)",
    bg: "rgba(245,158,11,0.05)",
    number: "02",
  },
  {
    tag: "Brand Building",
    icon: TrendingUp,
    title: "Multi-Category Retailer",
    subtitle: "From unknown to category leader.",
    description:
      "A multi-category retailer with no brand identity was competing purely on price. RIOT overhauled their brand — logo, palette, typography, and digital presence — while managing their social media and content strategy end-to-end.",
    results: [
      { label: "Brand Recognition", value: "↑ 80%", color: "#8b5cf6" },
      { label: "Social Followers", value: "↑ 220%", color: "#f59e0b" },
      { label: "Revenue Lift", value: "+35%", color: "#10b981" },
    ],
    accent: "#8b5cf6",
    gradient: "from-violet-500 to-purple-400",
    glow: "rgba(139,92,246,0.2)",
    border: "rgba(139,92,246,0.2)",
    bg: "rgba(139,92,246,0.05)",
    number: "03",
  },
  {
    tag: "Website & Digital",
    icon: Globe,
    title: "Home Décor Startup",
    subtitle: "Zero to 50K monthly visitors in 6 months.",
    description:
      "A home décor startup had a slow, poorly-converting website with no SEO strategy. RIOT rebuilt the site, created an SEO-first content pipeline, and launched targeted digital marketing campaigns across Google and Meta.",
    results: [
      { label: "Organic Traffic", value: "↑ 340%", color: "#3b82f6" },
      { label: "Conversion Rate", value: "↑ 28%", color: "#10b981" },
      { label: "Ad ROAS", value: "4.8×", color: "#f59e0b" },
    ],
    accent: "#3b82f6",
    gradient: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.2)",
    border: "rgba(59,130,246,0.2)",
    bg: "rgba(59,130,246,0.05)",
    number: "04",
  },
  {
    tag: "Digital Marketing",
    icon: BarChart2,
    title: "Electronics Marketplace",
    subtitle: "Data-driven growth across 50+ brands.",
    description:
      "A marketplace managing 50+ brand partners had zero unified analytics. RIOT built real-time dashboards, launched platform-wide email marketing campaigns, and ran SEO + paid campaigns — giving every brand partner full visibility and growth.",
    results: [
      { label: "Brands Onboarded", value: "50+", color: "#06b6d4" },
      { label: "Email Open Rate", value: "↑ 55%", color: "#10b981" },
      { label: "Revenue Growth", value: "+30%", color: "#3b82f6" },
    ],
    accent: "#06b6d4",
    gradient: "from-cyan-500 to-blue-400",
    glow: "rgba(6,182,212,0.2)",
    border: "rgba(6,182,212,0.2)",
    bg: "rgba(6,182,212,0.05)",
    number: "05",
  },
  {
    tag: "Vendor & Stock",
    icon: ShoppingCart,
    title: "Sports Equipment Brand",
    subtitle: "Stockouts eliminated. Margins protected.",
    description:
      "Frequent stockouts and unpredictable supplier lead times were costing a sports equipment brand 20% in lost sales each quarter. RIOT implemented vendor management systems, stock forecasting, and SOP frameworks that eliminated the problem entirely.",
    results: [
      { label: "Stockouts", value: "↓ 95%", color: "#ef4444" },
      { label: "Supplier Lead Time", value: "↓ 40%", color: "#f59e0b" },
      { label: "Margin Recovered", value: "+22%", color: "#10b981" },
    ],
    accent: "#ef4444",
    gradient: "from-red-500 to-rose-400",
    glow: "rgba(239,68,68,0.2)",
    border: "rgba(239,68,68,0.2)",
    bg: "rgba(239,68,68,0.05)",
    number: "06",
  },
];

/* ─── RESULT PILL ───────────────────────────────────────────────── */
const ResultPill = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <div
    className="flex flex-col items-center px-2 py-3 rounded-2xl border flex-1 min-w-0"
    style={{ background: `${color}0d`, borderColor: `${color}25` }}
  >
    <span
      className="text-base font-black leading-none mb-1 whitespace-nowrap"
      style={{ color }}
    >
      {value}
    </span>
    <span className="text-[10px] text-gray-400 font-medium text-center leading-tight">
      {label}
    </span>
  </div>
);

/* ─── CASE CARD ─────────────────────────────────────────────────── */
const CaseCard = ({ item, index }: { item: typeof cases[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 45, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group rounded-3xl overflow-hidden h-full flex flex-col cursor-default"
      style={{
        background: "#ffffff",
        border: `1.5px solid ${hovered ? item.accent + "40" : "#e2e8f0"}`,
        boxShadow: hovered
          ? `0 20px 60px ${item.glow}, 0 4px 16px rgba(0,0,0,0.06)`
          : "0 2px 16px rgba(0,0,0,0.04)",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Top gradient bar */}
      <motion.div
        className={`h-1 bg-gradient-to-r ${item.gradient}`}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      {/* Ghost number */}
      <span
        className="absolute top-4 right-5 text-8xl font-black leading-none select-none pointer-events-none transition-opacity duration-500"
        style={{ color: item.accent, opacity: hovered ? 0.1 : 0.05 }}
      >
        {item.number}
      </span>

      <div className="relative z-10 p-7 flex flex-col flex-1">
        {/* Tag + icon row */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: item.bg }}
            >
              <Icon size={17} style={{ color: item.accent }} />
            </div>
            <span
              className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{ background: item.bg, color: item.accent }}
            >
              {item.tag}
            </span>
          </div>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0, scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={18} style={{ color: hovered ? item.accent : "#cbd5e1" }} />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-[#0a0d14] mb-1 tracking-tight">
          {item.title}
        </h3>
        <p className="text-sm font-semibold mb-3" style={{ color: item.accent }}>
          {item.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-6">
          {item.description}
        </p>

        {/* Results row */}
        <div className="flex gap-2">
          {item.results.map((r, j) => (
            <ResultPill key={j} {...r} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── MAIN SECTION ──────────────────────────────────────────────── */
const CaseStudiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 bg-white overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Soft orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05), transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.05), transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              {/* <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-4">
                Case Studies
              </span> */}
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a0d14] tracking-tight leading-tight mb-3">
                Case{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                  Studies
                </span>
              </h2>
              <p className="text-gray-400 text-base max-w-xl leading-relaxed">
                Real transformations for brands that needed more than advice — they needed
                execution. Here's what we delivered.
              </p>
            </div>
            {/* Summary stats */}
            <div className="flex gap-6 shrink-0">
              {[
                { value: "60+", label: "Brands", color: "#3b82f6" },
                { value: "1M+", label: "Tickets", color: "#10b981" },
                { value: "99%", label: "Satisfaction", color: "#f59e0b" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="text-center"
                >
                  <p className="text-3xl font-black" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <CaseCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-14 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, #0a0d14 0%, #0f1628 100%)",
            border: "1.5px solid rgba(255,255,255,0.06)",
          }}
        >
          <div>
            <p className="text-white font-extrabold text-xl mb-1">
              Want results like these?
            </p>
            <p className="text-white/40 text-sm">
              Tell us your challenge — we'll engineer the solution.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-600/30 group"
          >
            Start Your Transformation
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;