import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Heart, TrendingUp, Cpu, BarChart2, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Heart,
    step: "01",
    title: "We Believe in Loyalty",
    description:
      "Long-term partnerships built on trust, transparency, and a shared commitment to success. Your growth isn't a project — it's our mission.",
    accent: "#3b82f6",
    gradient: "from-blue-600 to-cyan-500",
    glow: "rgba(59,130,246,0.3)",
    tag: "Partnership",
    bullets: ["Trust-first approach", "Transparent reporting", "Shared KPIs"],
  },
  {
    icon: TrendingUp,
    step: "02",
    title: "Your Ecommerce Growth",
    description:
      "We streamline your operations with expert backend support, efficient order management, and seamless customer service — so you focus on scaling.",
    accent: "#10b981",
    gradient: "from-emerald-500 to-teal-400",
    glow: "rgba(16,185,129,0.3)",
    tag: "Growth",
    bullets: ["Backend streamlining", "Order management", "CX optimization"],
  },
  {
    icon: Cpu,
    step: "03",
    title: "Ecommerce Process Manager",
    description:
      "Seamless order processing, inventory management, customer support, and backend ops — keeping your business running like clockwork at any scale.",
    accent: "#f59e0b",
    gradient: "from-amber-500 to-orange-400",
    glow: "rgba(245,158,11,0.3)",
    tag: "Operations",
    bullets: ["Inventory control", "Fulfillment ops", "SOP systems"],
  },
  {
    icon: BarChart2,
    step: "04",
    title: "Data-Driven Strategies",
    description:
      "Analytics and industry insights that optimize your operations, enhance customer experiences, and drive smarter decisions for sustainable growth.",
    accent: "#8b5cf6",
    gradient: "from-violet-500 to-purple-400",
    glow: "rgba(139,92,246,0.3)",
    tag: "Strategy",
    bullets: ["Real-time analytics", "Growth insights", "Smarter decisions"],
  },
];

/* ─── STEP CARD ─────────────────────────────────────────────────── */
const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.93 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.13, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group rounded-3xl p-7 h-full flex flex-col overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1.5px solid rgba(255,255,255,0.08)`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${step.glow}, transparent 65%)`,
        }}
      />

      {/* Big step number */}
      <span
        className="absolute top-5 right-5 text-7xl font-black leading-none select-none transition-all duration-500 opacity-[0.07] group-hover:opacity-[0.14]"
        style={{ color: step.accent }}
      >
        {step.step}
      </span>

      {/* Tag */}
      <div className="flex items-center gap-2 mb-6">
        <span
          className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white"
          style={{ background: step.accent }}
        >
          {step.tag}
        </span>
      </div>

      {/* Icon */}
      <div
        className="w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${step.accent}20` }}
      >
        <Icon size={22} style={{ color: step.accent }} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-extrabold text-white mb-3 tracking-tight leading-snug">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-white/45 leading-relaxed mb-6 flex-1">
        {step.description}
      </p>

      {/* Bullet points */}
      <ul className="space-y-2 mb-6">
        {step.bullets.map((b, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.13 + 0.4 + i * 0.07 }}
            className="flex items-center gap-2 text-xs text-white/55 font-medium"
          >
            <CheckCircle2 size={13} style={{ color: step.accent, flexShrink: 0 }} />
            {b}
          </motion.li>
        ))}
      </ul>

      {/* Bottom gradient bar */}
      <motion.div
        className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r ${step.gradient}`}
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ duration: 1.1, delay: index * 0.13 + 0.3, ease: "easeOut" }}
      />

      {/* Connector arrow — hidden on last card */}
      {index < steps.length - 1 && (
        <div className="hidden lg:flex absolute top-1/2 -right-4 z-10 -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full"
          style={{ background: "#0a0d14", border: "1.5px solid rgba(255,255,255,0.08)" }}>
          <ArrowRight size={14} className="text-white/30" />
        </div>
      )}
    </motion.div>
  );
};

/* ─── MAIN SECTION ──────────────────────────────────────────────── */
const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-[#060810]">
      {/* Animated orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)" }}
        animate={{ x: [0, 25, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%)" }}
        animate={{ x: [0, -20, 0], y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full border border-blue-500/30 text-blue-400 bg-blue-500/10 mb-5">
            Our Process
          </span> */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Why we{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              stand out?
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto leading-relaxed">
            A battle-tested framework that eliminates guesswork and delivers predictable,
            measurable outcomes every single time.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-14 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1.5px solid rgba(255,255,255,0.07)",
          }}
        >
          <div>
            <p className="text-white font-extrabold text-xl mb-1">
              Ready to see it in action?
            </p>
            <p className="text-white/40 text-sm">
              Walk through our full process and see exactly how we scale your business.
            </p>
          </div>
          <Link
            to="/how-it-works"
            className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-600/30 group"
          >
            See Full Process
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;