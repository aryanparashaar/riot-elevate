import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Heart, Award, Rocket } from "lucide-react";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across 15+ countries",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.3)",
    bg: "rgba(59,130,246,0.06)",
    border: "rgba(59,130,246,0.15)",
    iconBg: "rgba(59,130,246,0.12)",
    iconColor: "#3b82f6",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    description: "Industry-leading loyalty",
    icon: Heart,
    gradient: "from-rose-500 to-pink-400",
    glow: "rgba(244,63,94,0.3)",
    bg: "rgba(244,63,94,0.06)",
    border: "rgba(244,63,94,0.15)",
    iconBg: "rgba(244,63,94,0.12)",
    iconColor: "#f43f5e",
  },
  {
    value: 12,
    suffix: "+",
    label: "Years of Excellence",
    description: "Deep domain expertise",
    icon: Award,
    gradient: "from-amber-500 to-orange-400",
    glow: "rgba(245,158,11,0.3)",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.15)",
    iconBg: "rgba(245,158,11,0.12)",
    iconColor: "#f59e0b",
  },
  {
    value: 150,
    suffix: "+",
    label: "Brands Scaled",
    description: "From startup to enterprise",
    icon: Rocket,
    gradient: "from-violet-500 to-purple-400",
    glow: "rgba(139,92,246,0.3)",
    bg: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.15)",
    iconBg: "rgba(139,92,246,0.12)",
    iconColor: "#8b5cf6",
  },
];

/* ─── ANIMATED COUNTER ──────────────────────────────────────────── */
const Counter = ({
  target,
  suffix,
  gradient,
}: {
  target: number;
  suffix: string;
  gradient: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className={`text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}
    >
      {count}
      {suffix}
    </div>
  );
};

/* ─── RING PROGRESS ─────────────────────────────────────────────── */
const RingProgress = ({
  value,
  max,
  color,
  size = 56,
}: {
  value: number;
  max: number;
  color: string;
  size?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const radius = 20;
  const circ = 2 * Math.PI * radius;
  const pct = Math.min(value / max, 1);

  return (
    <div ref={ref} style={{ width: size, height: size }} className="relative">
      <svg width={size} height={size} viewBox="0 0 48 48" className="-rotate-90">
        <circle cx="24" cy="24" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3.5" />
        <motion.circle
          cx="24" cy="24" r={radius}
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: inView ? circ * (1 - pct) : circ }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </svg>
    </div>
  );
};

/* ─── STAT CARD ─────────────────────────────────────────────────── */
const StatCard = ({
  stat,
  index,
}: {
  stat: typeof stats[0];
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.93 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group cursor-default rounded-3xl p-7 overflow-hidden"
      style={{
        background: stat.bg,
        border: `1.5px solid ${stat.border}`,
        boxShadow: `0 4px 24px rgba(0,0,0,0.04)`,
      }}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${stat.glow}, transparent 70%)`,
        }}
      />

      {/* Top row: icon + ring */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: stat.iconBg }}
        >
          <Icon size={22} style={{ color: stat.iconColor }} />
        </div>
        <RingProgress
          value={stat.value}
          max={stat.suffix === "%" ? 100 : stat.value}
          color={stat.iconColor}
        />
      </div>

      {/* Counter */}
      <Counter target={stat.value} suffix={stat.suffix} gradient={stat.gradient} />

      {/* Labels */}
      <p className="mt-2 text-sm font-bold text-[#0a0d14]">{stat.label}</p>
      <p className="mt-0.5 text-xs text-gray-400">{stat.description}</p>

      {/* Bottom accent bar */}
      <motion.div
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${stat.gradient}`}
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ duration: 1, delay: index * 0.12 + 0.5, ease: "easeOut" }}
      />
    </motion.div>
  );
};

/* ─── MAIN SECTION ──────────────────────────────────────────────── */
const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 sm:py-24 bg-white overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Soft orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06), transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-4">
            Our Impact
          </span> */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a0d14] tracking-tight mb-3">
            Numbers that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              speak for themselves
            </span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Real results, real clients, real growth — across every market we operate in.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>

        {/* Bottom trust bar - Infinite Marquee */}

      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-12 pt-10 border-t border-gray-100 overflow-hidden"
      >
        <div className="relative flex">
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, white, transparent)" }} />
          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, white, transparent)" }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 pt-10 border-t border-gray-100 overflow-hidden"
          >
            <div className="relative flex">
              {/* Left fade */}
              <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, white, transparent)" }} />
              {/* Right fade */}
              <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, white, transparent)" }} />

              <motion.div
                className="flex gap-10 shrink-0"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                {[...Array(2)].flatMap((_, arrayIndex) =>
                  [
                    { emoji: "🌍", text: "15+ Countries", color: "#3b82f6", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)" },
                    { emoji: "⚡", text: "24/7 Operations", color: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
                    { emoji: "🔒", text: "99% Error-Free", color: "#10b981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)" },
                    { emoji: "📈", text: "70% Avg. Efficiency Gain", color: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)" },
                  ].map((item, i) => (
                    <div
                      key={`${arrayIndex}-${i}`}
                      className="flex items-center gap-3 px-6 py-3 rounded-full shrink-0"
                      style={{ background: item.bg, border: `1.5px solid ${item.border}` }}
                    >
                      <span className="text-2xl">{item.emoji}</span>
                      <span className="text-base font-extrabold tracking-tight whitespace-nowrap" style={{ color: item.color }}>
                        {item.text}
                      </span>
                    </div>
                  ))
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;