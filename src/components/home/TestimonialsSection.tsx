import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Juan I. Lopez",
    company: "Luxe Apparel Co.",
    role: "Director of Customer Experience",
    text: "At Sensibo, we've had the pleasure of working with RIOT Ecommerce Solutions for our e-commerce and IoT support needs. Their proficiency in customer understanding and backend management has been remarkable. Partnering with them has not only optimized our operations but also enhanced our customer service capabilities.",
    rating: 5,
    accent: "#3b82f6",
    tag: "Customer Support",
  },
  {
    name: "Galia F.",
    company: "VitaWell Supplements",
    role: "CEO & Co-Founder",
    text: "Riot Enterprise and their agents are such a pleasure to work with. They are always willing to hear feedback, they take ownership for their mistakes and grow in their expertise as agents according to the job load requirements.",
    rating: 5,
    accent: "#10b981",
    tag: "Operations",
  },
  {
    name: "Gabriel F.",
    company: "Casa Living",
    role: "Chief Executive Officer",
    text: "RIOT Enterprise is considered a vital part of the business' sustainability and growth. They communicate daily through Slack and have monthly meetings with the client where they report their monthly progress. They are deeply embedded in how we run our business.",
    rating: 5,
    accent: "#f59e0b",
    tag: "Brand Growth",
  },
  {
    name: "David Park",
    company: "TechGear Pro",
    role: "Chief Technology Officer",
    text: "Their analytics dashboard gave us visibility we never had before. We went from gut-feel decisions to real-time, data-backed moves that directly moved revenue. The RIOT team is sharp, responsive, and genuinely invested in our success.",
    rating: 5,
    accent: "#8b5cf6",
    tag: "Digital Strategy",
  },
];

/* ─── STAR RATING ───────────────────────────────────────────────── */
const StarRating = ({ count, color }: { count: number; color: string }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        fill={i < count ? color : "transparent"}
        stroke={i < count ? color : "#d1d5db"}
        strokeWidth={1.5}
      />
    ))}
  </div>
);

/* ─── PROGRESS BAR ──────────────────────────────────────────────── */
const AutoProgressBar = ({
  duration,
  running,
  accent,
  onComplete,
  resetKey,
}: {
  duration: number;
  running: boolean;
  accent: string;
  onComplete: () => void;
  resetKey: number;
}) => {
  const [width, setWidth] = useState(0);
  const startTime = useRef<number | null>(null);
  const raf = useRef<number | null>(null);
  const pausedAt = useRef<number>(0);

  useEffect(() => {
    setWidth(0);
    startTime.current = null;
    pausedAt.current = 0;
  }, [resetKey]);

  useEffect(() => {
    if (!running) {
      if (raf.current) cancelAnimationFrame(raf.current);
      pausedAt.current = width;
      return;
    }
    const startW = pausedAt.current;
    const startT = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startT;
      const progress = Math.min(startW + (elapsed / duration) * 100, 100);
      setWidth(progress);
      if (progress < 100) {
        raf.current = requestAnimationFrame(tick);
      } else {
        onComplete();
      }
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [running, resetKey]);

  return (
    <div className="w-full h-0.5 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-none"
        style={{ width: `${width}%`, background: accent }}
      />
    </div>
  );
};

/* ─── MAIN SECTION ──────────────────────────────────────────────── */
const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const DURATION = 6000;

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgressKey((k) => k + 1);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  const t = testimonials[current];

  return (
    <section
      ref={ref}
      className="relative py-24 bg-[#060810] overflow-hidden"
    >
      {/* Orbs */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full border border-blue-500/30 text-blue-400 bg-blue-500/10 mb-5">
            Client Voices
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              industry leaders
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto leading-relaxed">
            The brands we serve don't just grow — they dominate their categories.
          </p>
        </motion.div>

        {/* ── Main layout: left info + right carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid lg:grid-cols-5 gap-8 items-stretch"
        >
          {/* ── Left: thumbnail list ── */}
          <div className="hidden lg:flex flex-col justify-center gap-3 lg:col-span-2">
            {testimonials.map((item, i) => (
              <motion.button
                key={i}
                onClick={() => goTo(i)}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 group"
                style={{
                  background: i === current
                    ? `${item.accent}12`
                    : "rgba(255,255,255,0.03)",
                  border: `1.5px solid ${i === current ? item.accent + "35" : "rgba(255,255,255,0.06)"}`,
                }}
              >
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm text-white shrink-0 transition-all duration-300"
                  style={{
                    background: i === current
                      ? `linear-gradient(135deg, ${item.accent}, ${item.accent}88)`
                      : "rgba(255,255,255,0.08)",
                    boxShadow: i === current ? `0 4px 16px ${item.accent}40` : "none",
                  }}
                >
                  {item.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-bold truncate transition-colors ${i === current ? "text-white" : "text-white/40"}`}>
                    {item.name}
                  </p>
                  <p className={`text-xs truncate transition-colors ${i === current ? "text-white/50" : "text-white/25"}`}>
                    {item.company}
                  </p>
                </div>
                {/* Active dot */}
                {i === current && (
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.accent }} />
                )}
              </motion.button>
            ))}

            {/* Summary stat */}
            <div className="mt-4 p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1.5px solid rgba(255,255,255,0.06)" }}>
              <p className="text-3xl font-black text-white mb-0.5">60+</p>
              <p className="text-xs text-white/35">Global brands trust RIOT</p>
            </div>
          </div>

          {/* ── Right: testimonial card ── */}
          <div className="lg:col-span-3">
            <div
              className="relative rounded-3xl overflow-hidden h-full"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1.5px solid ${t.accent}30`,
                boxShadow: `0 8px 48px ${t.accent}15`,
                transition: "border-color 0.4s, box-shadow 0.4s",
              }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Progress bar at top */}
              <AutoProgressBar
                duration={DURATION}
                running={!paused}
                accent={t.accent}
                onComplete={next}
                resetKey={progressKey}
              />

              {/* Pause indicator */}
              <AnimatePresence>
                {paused && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: `${t.accent}22`, color: t.accent, border: `1px solid ${t.accent}40` }}
                  >
                    Paused
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Giant quote mark */}
              <div className="absolute -bottom-4 -right-4 opacity-[0.04] pointer-events-none">
                <Quote size={160} className="text-white" />
              </div>

              {/* Content — fixed min-height prevents layout shift */}
              <div className="p-8 sm:p-10 flex flex-col" style={{ minHeight: "360px" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex flex-col flex-1"
                  >
                    {/* Tag + stars */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
                        style={{ background: `${t.accent}18`, color: t.accent }}
                      >
                        {t.tag}
                      </span>
                      <StarRating count={t.rating} color={t.accent} />
                    </div>

                    {/* Quote */}
                    <div className="relative flex-1 flex items-center">
                      <div
                        className="absolute -left-2 top-0 w-1 h-full rounded-full"
                        style={{ background: `linear-gradient(to bottom, ${t.accent}, transparent)` }}
                      />
                      <p className="text-white/80 text-lg sm:text-xl leading-relaxed pl-5 italic font-light">
                        "{t.text}"
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/[0.06]">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-sm shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${t.accent}, ${t.accent}88)`,
                          boxShadow: `0 4px 16px ${t.accent}40`,
                        }}
                      >
                        {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{t.name}</p>
                        <p className="text-white/40 text-xs">{t.role} · {t.company}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Nav controls */}
              <div className="flex items-center justify-between px-8 sm:px-10 pb-7">
                {/* Dot indicators */}
                <div className="flex gap-2">
                  {testimonials.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className="rounded-full transition-all duration-400"
                      style={{
                        width: i === current ? 28 : 8,
                        height: 8,
                        background: i === current ? item.accent : "rgba(255,255,255,0.15)",
                      }}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow controls */}
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1.5px solid rgba(255,255,255,0.08)" }}
                    aria-label="Previous"
                  >
                    <ChevronLeft size={16} className="text-white/60" />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${t.accent}, ${t.accent}bb)`,
                      boxShadow: `0 4px 12px ${t.accent}40`,
                    }}
                    aria-label="Next"
                  >
                    <ChevronRight size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Mobile: dot nav (visible only on mobile since sidebar is hidden) ── */}
        <div className="flex lg:hidden justify-center gap-2 mt-6">
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                background: i === current ? item.accent : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;