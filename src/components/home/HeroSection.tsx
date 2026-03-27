import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Shield, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ─── TYPEWRITER ────────────────────────────────────────────────── */
const WORDS = ["Operations", "Growth", "Efficiency", "Success"];

const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const word = WORDS[index % WORDS.length];
    const speed = deleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayed(word.slice(0, displayed.length + 1));
        if (displayed.length + 1 === word.length) {
          setPause(true);
          setTimeout(() => { setDeleting(true); setPause(false); }, 1800);
        }
      } else {
        setDisplayed(word.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, deleting, index, pause]);

  return (
    <span className="relative inline-block">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
        {displayed}
      </span>
      <motion.span
        className="inline-block w-[3px] h-[0.85em] bg-blue-400 ml-1 align-middle rounded-full"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
};

/* ─── CANVAS PARTICLE FIELD ─────────────────────────────────────── */
const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const NUM = 70;
    const particles = Array.from({ length: NUM }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.5 + 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        // Connect nearby
        particles.forEach((q) => {
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(96,165,250,${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        });

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,197,253,${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };

    draw();
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.6 }} />;
};

/* ─── MAGNETIC BUTTON ───────────────────────────────────────────── */
const MagneticBtn = ({ children, className, to }: { children: React.ReactNode; className?: string; to: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <Link to={to} className={className}>
        {children}
      </Link>
    </motion.div>
  );
};

/* ─── 3D TILT CARD ──────────────────────────────────────────────── */
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const sRotX = useSpring(rotX, { stiffness: 150, damping: 20 });
  const sRotY = useSpring(rotY, { stiffness: 150, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotX.set((py - 0.5) * -12);
    rotY.set((px - 0.5) * 12);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: sRotX, rotateY: sRotY, transformPerspective: 900 }}
      onMouseMove={handleMove}
      onMouseLeave={() => { rotX.set(0); rotY.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── FLOATING STAT BADGE ───────────────────────────────────────── */
const StatBadge = ({
  icon: Icon, value, label, delay, className, color,
}: {
  icon: React.ElementType; value: string; label: string;
  delay: number; className?: string; color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.7, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.5, type: "spring", stiffness: 200 }}
    className={`absolute z-20 flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-md border ${className}`}
    style={{
      background: "rgba(10,13,20,0.85)",
      borderColor: `${color}30`,
      boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${color}15`,
    }}
  >
    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
      style={{ background: `${color}22` }}>
      <Icon size={16} style={{ color }} />
    </div>
    <div>
      <p className="text-white font-extrabold text-sm leading-none mb-0.5">{value}</p>
      <p className="text-white/40 text-[10px] leading-none">{label}</p>
    </div>
  </motion.div>
);

/* ─── DASHBOARD MOCKUP ──────────────────────────────────────────── */
const DashboardMockup = () => {
  const bars = [65, 82, 55, 91, 73, 88, 96];
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <TiltCard className="relative w-full">
      {/* Outer glow ring */}
      <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-blue-500/30 via-cyan-400/10 to-violet-500/20 blur-[1px]" />

      <div className="relative rounded-[20px] overflow-hidden border border-white/10"
        style={{ background: "linear-gradient(135deg, #0d1117 0%, #0a0d14 100%)" }}>

        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]"
          style={{ background: "rgba(255,255,255,0.02)" }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <div className="flex-1 mx-3">
            <div className="h-5 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center px-3 max-w-[220px]">
              <span className="text-[9px] text-white/25">dashboard.riotecommerce.com</span>
            </div>
          </div>
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        </div>

        {/* Dashboard content */}
        <div className="p-5 space-y-4">
          {/* Top stat cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Orders Today", value: "1,284", change: "+12%", color: "#3b82f6" },
              { label: "Revenue", value: "$48.2K", change: "+8%", color: "#10b981" },
              { label: "Tickets Solved", value: "99.1%", change: "+3%", color: "#8b5cf6" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="rounded-xl p-3 border border-white/[0.07]"
                style={{ background: `${card.color}0d` }}
              >
                <p className="text-[9px] text-white/40 mb-1">{card.label}</p>
                <p className="text-white font-extrabold text-sm">{card.value}</p>
                <p className="text-[9px] font-bold mt-0.5" style={{ color: card.color }}>{card.change}</p>
              </motion.div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="rounded-xl border border-white/[0.06] p-4"
            style={{ background: "rgba(255,255,255,0.02)" }}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] font-bold text-white/60">Weekly Performance</p>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold">Live</span>
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-md"
                  style={{ background: `linear-gradient(180deg, #3b82f6, #1d4ed8)` }}
                  initial={{ height: 0 }}
                  animate={{ height: animated ? `${h}%` : 0 }}
                  transition={{ delay: 1.2 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {["M","T","W","T","F","S","S"].map((d, i) => (
                <span key={i} className="flex-1 text-center text-[8px] text-white/20">{d}</span>
              ))}
            </div>
          </div>

          {/* Live feed */}
          <div className="space-y-2">
            {[
              { text: "Order #8821 fulfilled", time: "just now", color: "#10b981" },
              { text: "Ticket #4401 resolved", time: "2m ago", color: "#3b82f6" },
              { text: "New vendor onboarded", time: "5m ago", color: "#f59e0b" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 + i * 0.15 }}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-white/[0.05]"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                <p className="text-[10px] text-white/60 flex-1">{item.text}</p>
                <p className="text-[9px] text-white/25">{item.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

/* ─── MAIN HERO ─────────────────────────────────────────────────── */
const HeroSection = () => {
  return (
    <section className="relative bg-[#060810] min-h-screen flex items-center overflow-hidden pt-20">

      {/* Particle field */}
      <ParticleField />

      {/* Deep gradient orbs */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)" }}
        animate={{ x: [0, 40, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-8%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 65%)" }}
        animate={{ x: [0, -30, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute top-[40%] left-[50%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)" }}
        animate={{ x: [0, 20, -20, 0], y: [0, -25, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Diagonal accent line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-[38%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
        <div className="absolute top-[35%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-0 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/8 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-blue-300 text-xs font-bold tracking-wider uppercase">
                Ecommerce Growth Partners
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-6 space-y-1">
              {["Scale Your", "Ecommerce"].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight"
                >
                  {line}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
              >
                <Typewriter />
              </motion.div>
            </div>

            {/* Sub text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="text-base sm:text-lg text-white/45 leading-relaxed max-w-lg mb-10"
            >
              We bring your ticket count down with efficient CRM solutions and seamless
              backend support — helping businesses resolve queries faster, enhance
              satisfaction, and scale effortlessly.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <MagneticBtn
                to="/contact"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-white font-bold text-sm overflow-hidden"
                
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500" />
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2.5">
                  Start Scaling
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 rounded-2xl shadow-lg shadow-blue-500/40" />
              </MagneticBtn>

              <MagneticBtn
                to="/how-it-works"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                
              >
                See How It Works
                <ArrowRight size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </MagneticBtn>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex items-center gap-6"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2.5">
                {["CB","DA","HR","MK","SR"].map((init, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#060810] flex items-center justify-center text-[9px] font-black text-white"
                    style={{ background: ["#3b82f6","#10b981","#f59e0b","#8b5cf6","#ef4444"][i], zIndex: 5 - i }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xs">★</span>
                  ))}
                </div>
                <p className="text-white/40 text-xs">
                  <span className="text-white/70 font-semibold">60+ brands</span> trust RIOT
                </p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <p className="text-white/35 text-xs leading-relaxed">
                <span className="text-white/60 font-semibold">1M+</span> tickets<br />resolved
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT — Dashboard ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* Stat badges */}
            <StatBadge
              icon={TrendingUp} value="↑ 70%" label="Efficiency boost"
              delay={1.3} color="#10b981"
              className="-top-5 -left-4 sm:-left-8"
            />
            <StatBadge
              icon={Shield} value="99%" label="Error-free rate"
              delay={1.5} color="#3b82f6"
              className="-bottom-5 -right-4 sm:-right-8"
            />
            <StatBadge
              icon={Globe} value="15+" label="Countries served"
              delay={1.7} color="#8b5cf6"
              className="top-1/2 -right-4 sm:-right-10 -translate-y-1/2"
            />
            <StatBadge
              icon={Zap} value="24/7" label="Live support"
              delay={1.9} color="#f59e0b"
              className="top-1/3 -left-4 sm:-left-10"
            />

            <DashboardMockup />

            {/* Bottom reflection blur */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-16 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.2) 0%, transparent 70%)", filter: "blur(12px)" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #060810)" }}
      />
    </section>
  );
};

export default HeroSection;