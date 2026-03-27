import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import {
  ShoppingCart, TrendingUp, Headphones, Globe,
  Package, RefreshCw, ClipboardList, Layers,
  Target, Palette, Type,
  MessageCircle, Users, Settings,
  Monitor, PenTool, BarChart2, Mail,
  ArrowRight, Sparkles, Zap, Star,
  Image as ImageIcon,
} from "lucide-react";

/* ─── FLOATING PARTICLE ─────────────────────────────────────────── */
const Particle = ({ style }: { style: React.CSSProperties }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={style}
    animate={{ y: [-20, 20, -20], opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
    transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
  />
);

/* ─── COUNTER ANIMATION ─────────────────────────────────────────── */
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);
  return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── SVG ILLUSTRATIONS ─────────────────────────────────────────── */
const OpsIllustration = () => (
  <svg viewBox="0 0 400 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="og1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25"/>
        <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.08"/>
      </linearGradient>
      <linearGradient id="og2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa"/>
        <stop offset="100%" stopColor="#2563eb"/>
      </linearGradient>
    </defs>
    <circle cx="200" cy="140" r="115" fill="url(#og1)"/>
    <circle cx="200" cy="140" r="78" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 4" opacity="0.35"/>
    <rect x="158" y="100" width="84" height="84" rx="18" fill="url(#og2)"/>
    <text x="200" y="150" textAnchor="middle" fontSize="28">📦</text>
    {[0,60,120,180,240,300].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const cx2 = 200 + 100 * Math.cos(rad);
      const cy2 = 140 + 100 * Math.sin(rad);
      return (
        <g key={i}>
          <line x1="200" y1="140" x2={cx2} y2={cy2} stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 3" opacity="0.25"/>
          <circle cx={cx2} cy={cy2} r="17" fill="#0a0d14" stroke="#3b82f6" strokeWidth="1.5"/>
          <text x={cx2} y={cy2+5} textAnchor="middle" fontSize="12">{["🚚","📋","🔄","📊","🏷️","⚙️"][i]}</text>
        </g>
      );
    })}
  </svg>
);

const BrandIllustration = () => (
  <svg viewBox="0 0 400 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#3b82f6"/>
      </linearGradient>
    </defs>
    {[
      { x:30, y:40, w:75, h:100, color:"#3b82f6", label:"Primary" },
      { x:120, y:40, w:75, h:100, color:"#0a0d14", label:"Dark" },
      { x:210, y:40, w:75, h:100, color:"#f59e0b", label:"Accent" },
      { x:300, y:40, w:75, h:100, color:"#f0f4ff", label:"Light" },
    ].map((s, i) => (
      <g key={i}>
        <rect x={s.x} y={s.y} width={s.w} height={s.h} rx="14" fill={s.color} stroke={i===3?"#cbd5e1":"none"} strokeWidth="1"/>
        <text x={s.x+s.w/2} y={s.y+s.h+16} textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="600">{s.label}</text>
      </g>
    ))}
    <rect x="30" y="178" width="340" height="72" rx="14" fill="#f8faff" stroke="#e2e8f0" strokeWidth="1.5"/>
    <text x="55" y="210" fontSize="22" fontWeight="800" fill="#0a0d14">Brand Identity</text>
    <text x="55" y="230" fontSize="10" fill="#94a3b8">Typography · Colors · Visual Elements</text>
    <circle cx="348" cy="214" r="22" fill="url(#bg1)"/>
    <text x="348" y="221" textAnchor="middle" fontSize="13" fill="white" fontWeight="800">re</text>
  </svg>
);

const SupportIllustration = () => (
  <svg viewBox="0 0 400 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981"/>
        <stop offset="100%" stopColor="#3b82f6"/>
      </linearGradient>
    </defs>
    <rect x="30" y="25" width="190" height="60" rx="18" fill="#3b82f6"/>
    <polygon points="50,85 70,85 50,105" fill="#3b82f6"/>
    <text x="125" y="50" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">Hi! How can we help</text>
    <text x="125" y="67" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">you today? 😊</text>
    <rect x="180" y="115" width="190" height="60" rx="18" fill="#0a0d14"/>
    <polygon points="350,175 370,175 370,195" fill="#0a0d14"/>
    <text x="275" y="140" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">I need help with</text>
    <text x="275" y="157" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">my order 📦</text>
    <rect x="30" y="200" width="210" height="55" rx="18" fill="url(#sg1)"/>
    <polygon points="50,255 72,255 50,275" fill="#10b981"/>
    <text x="135" y="223" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">Resolved! Order #4521</text>
    <text x="135" y="240" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">is on its way ✅</text>
    {[0,1,2,3,4].map(i=>(
      <text key={i} x={295+i*18} y={255} fontSize="16" fill="#f59e0b">★</text>
    ))}
    <text x="340" y="272" textAnchor="middle" fontSize="9" fill="#94a3b8">1M+ tickets resolved</text>
  </svg>
);

const WebIllustration = () => (
  <svg viewBox="0 0 400 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6"/>
        <stop offset="100%" stopColor="#1d4ed8"/>
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="360" height="240" rx="14" fill="#0a0d14" stroke="#1e293b" strokeWidth="1.5"/>
    <rect x="20" y="20" width="360" height="38" rx="14" fill="#1e2535"/>
    <rect x="20" y="45" width="360" height="13" fill="#1e2535"/>
    <circle cx="45" cy="39" r="6" fill="#ef4444"/>
    <circle cx="64" cy="39" r="6" fill="#f59e0b"/>
    <circle cx="83" cy="39" r="6" fill="#10b981"/>
    <rect x="110" y="30" width="180" height="16" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1"/>
    <text x="200" y="42" textAnchor="middle" fontSize="8" fill="#64748b">riotecommerce.com</text>
    <rect x="34" y="70" width="332" height="85" rx="8" fill="url(#wg1)"/>
    <text x="200" y="106" textAnchor="middle" fontSize="16" fontWeight="800" fill="white">RIOT Ecommerce</text>
    <text x="200" y="122" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)">Scale your store effortlessly</text>
    <rect x="160" y="132" width="80" height="16" rx="8" fill="white"/>
    <text x="200" y="143" textAnchor="middle" fontSize="8" fill="#3b82f6" fontWeight="700">Get Started →</text>
    {[0,1,2].map(i=>(
      <g key={i}>
        <rect x={34+i*114} y="170" width="103" height="72" rx="8" fill="#1e2535" stroke="#334155" strokeWidth="1"/>
        <rect x={44+i*114} y="180" width="42" height="7" rx="3.5" fill="#3b82f6" opacity="0.65"/>
        <rect x={44+i*114} y="194" width="75" height="5" rx="2.5" fill="#334155"/>
        <rect x={44+i*114} y="205" width="60" height="5" rx="2.5" fill="#334155"/>
        <rect x={44+i*114} y="223" width="38" height="10" rx="5" fill="#3b82f6" opacity="0.45"/>
      </g>
    ))}
  </svg>
);

/* ─── SERVICE DATA ──────────────────────────────────────────────── */
const services = [
  {
    id: "ecommerce-ops", icon: ShoppingCart, label: "Operations", number: "01",
    title: "Ecommerce Operations & Backend Support",
    tagline: "We manage your entire ecommerce backend so you never miss a beat.",
    description: "At RIOT Ecommerce, we handle every layer of your backend operations — from the moment an order is placed to the moment it lands at your customer's door. We build the systems, manage the vendors, and fix the fires so you can focus on growth.",
    gradient: "from-blue-600 via-blue-500 to-cyan-400",
    accentColor: "#3b82f6",
    Illustration: OpsIllustration,
    items: [
      { icon: Layers, title: "Outsourced Ecommerce Solutions", desc: "We manage your entire ecommerce backend, from order processing to inventory control, ensuring smooth day-to-day operations." },
      { icon: Package, title: "Product Sourcing & Listing", desc: "Identifying, verifying, and adding high-quality products to your ecommerce store with optimised titles and descriptions." },
      { icon: ShoppingCart, title: "Order Entry, Processing & Fulfillment", desc: "We ensure seamless order management, tracking, and delivery for a great customer experience every time." },
      { icon: RefreshCw, title: "Refund & Exchange Management", desc: "Streamlining return and refund processes to maintain customer satisfaction and operational efficiency." },
      { icon: TrendingUp, title: "Vendor & Stock Management", desc: "Keeping track of supplier relationships, stock levels, and procurement strategies to avoid shortages and overstocking." },
      { icon: ClipboardList, title: "SOP Creation & Management", desc: "Developing structured workflows and standard operating procedures to maintain consistency and efficiency." },
    ],
  },
  {
    id: "brand-building", icon: Target, label: "Branding", number: "02",
    title: "Brand Building & Growth",
    tagline: "Build a brand that customers trust, recognise, and love.",
    description: "Your brand is more than a logo — it's the feeling customers get every time they interact with you. We build cohesive brand identities that create instant recognition and long-term loyalty in competitive markets.",
    gradient: "from-amber-500 via-orange-400 to-pink-500",
    accentColor: "#f59e0b",
    Illustration: BrandIllustration,
    items: [
      { icon: Palette, title: "Brand Colors", desc: "Crafting a consistent, psychology-backed colour palette that speaks your brand's personality and builds instant recognition." },
      { icon: ImageIcon, title: "Visual Elements", desc: "Designing icons, patterns, and graphic elements that unify every touchpoint of your brand identity." },
      { icon: PenTool, title: "Custom Logo Design", desc: "Creating a timeless, scalable logo that captures the essence of your brand and stands out in the market." },
      { icon: Type, title: "Typography", desc: "Selecting and pairing fonts that convey your brand's tone — from bold and authoritative to friendly and approachable." },
    ],
  },
  {
    id: "customer-support", icon: Headphones, label: "Support", number: "03",
    title: "Customer Support & Virtual Assistance",
    tagline: "Real people, real help — 24/7 support that keeps customers coming back.",
    description: "Customer retention starts with every single interaction. Our support teams operate as a true extension of your brand — knowledgeable, empathetic, and resolution-focused. We don't just close tickets; we build loyalty.",
    gradient: "from-emerald-500 via-teal-400 to-cyan-500",
    accentColor: "#10b981",
    Illustration: SupportIllustration,
    items: [
      { icon: MessageCircle, title: "Live Chat & Email Support", desc: "Providing real-time customer support to address queries, complaints, and concerns efficiently and with empathy." },
      { icon: Users, title: "Direct-to-Consumer Support", desc: "Offering dedicated customer support solutions that enhance user experience and build lasting brand loyalty." },
      { icon: Settings, title: "Admin & Virtual Assistance", desc: "Taking care of administrative and operational tasks to help businesses focus on what matters most — growth." },
    ],
  },
  {
    id: "website-digital", icon: Globe, label: "Digital", number: "04",
    title: "Website & Digital Presence",
    tagline: "A powerful online presence that converts visitors into customers.",
    description: "In today's digital-first world, your website is your storefront, your sales rep, and your first impression — all in one. We build fast, beautiful, conversion-optimised ecommerce experiences and fuel them with strategic content and marketing.",
    gradient: "from-violet-600 via-purple-500 to-blue-500",
    accentColor: "#8b5cf6",
    Illustration: WebIllustration,
    items: [
      { icon: Monitor, title: "Website Designing & Maintenance", desc: "Building user-friendly, high-performance ecommerce websites designed for seamless online shopping experiences." },
      { icon: BarChart2, title: "Social Media Engagement", desc: "Growing your brand's social presence with strategic content, community management, and engagement campaigns." },
      { icon: PenTool, title: "Content Writing & Marketing", desc: "Crafting compelling product descriptions, blog posts, and landing pages that rank, convert, and build authority." },
      { icon: Mail, title: "Digital Marketing", desc: "Running data-driven paid and organic campaigns across Google, Meta, and email to drive qualified traffic and revenue." },
    ],
  },
];

const stats = [
  { value: 8, suffix: "+", label: "Years Experience", icon: Star },
  { value: 60, suffix: "+", label: "Clients Served", icon: Users },
  { value: 99, suffix: "%", label: "Error-Free Rate", icon: Zap },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: Sparkles },
];

/* ─── MAIN COMPONENT ────────────────────────────────────────────── */
const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const particles = Array.from({ length: 12 }, (_, i) => ({
    width: `${6 + (i % 4) * 4}px`,
    height: `${6 + (i % 4) * 4}px`,
    left: `${8 + i * 7.5}%`,
    top: `${20 + (i % 5) * 15}%`,
    background: ["#3b82f6","#60a5fa","#93c5fd","#bfdbfe"][i % 4],
    opacity: 0.15 + (i % 3) * 0.1,
  }));

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#060810] pt-36 pb-32 min-h-[85vh] flex items-center">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 70%)" }}
          animate={{ x:[0,30,0], y:[0,20,0], scale:[1,1.1,1] }}
          transition={{ duration:8, repeat:Infinity, ease:"easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)" }}
          animate={{ x:[0,-20,0], y:[0,-30,0], scale:[1,1.15,1] }}
          transition={{ duration:10, repeat:Infinity, ease:"easeInOut", delay:1 }}
        />
        <motion.div
          className="absolute top-[30%] right-[20%] w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)" }}
          animate={{ x:[0,15,-15,0], y:[0,-20,10,0] }}
          transition={{ duration:12, repeat:Infinity, ease:"easeInOut", delay:2 }}
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"linear-gradient(rgba(59,130,246,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.05) 1px,transparent 1px)", backgroundSize:"60px 60px" }}
        />
        {particles.map((p, i) => <Particle key={i} style={p as React.CSSProperties} />)}

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="fadeLeft">
              <motion.span
                initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-[0.2em] uppercase rounded-full border border-blue-500/30 text-blue-400 bg-blue-500/10 mb-6"
              >
                <Sparkles size={12} /> Our Services
              </motion.span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                What we{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">offer</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                    initial={{ scaleX:0 }} animate={{ scaleX:1 }}
                    transition={{ delay:0.8, duration:0.6 }}
                  />
                </span>{" "}
                for your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">success</span>
              </h1>
              <p className="text-lg text-white/50 leading-relaxed mb-10">
                Expert-driven solutions to streamline your ecommerce operations, enhance efficiency, and drive growth. We handle the details — you achieve success.
              </p>
              <div className="flex flex-wrap gap-3">
                {services.map((s) => (
                  <motion.a
                    key={s.id} href={`#${s.id}`}
                    whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                    className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/30 transition-all duration-200"
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>

            {/* Hero orbit graphic */}
            <AnimatedSection variant="fadeRight" delay={0.2}>
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <motion.div
                  className="absolute inset-[28%] rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-2xl shadow-blue-500/30"
                  animate={{ rotate:[0,4,-4,0], scale:[1,1.03,1] }}
                  transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-1">⚡</div>
                    <p className="text-white font-extrabold text-xs tracking-widest">RIOT</p>
                  </div>
                </motion.div>
                <div className="absolute inset-[8%] rounded-full border border-blue-500/15 border-dashed" />
                {services.map((s, i) => {
                  const angle = (i * 90 - 45) * (Math.PI / 180);
                  const r = 38;
                  const x = 50 + r * Math.cos(angle);
                  const y = 50 + r * Math.sin(angle);
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={s.id}
                      className="absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 rounded-2xl flex items-center justify-center shadow-xl"
                      style={{ left:`${x}%`, top:`${y}%`, background:`linear-gradient(135deg,${s.accentColor}ee,${s.accentColor}88)` }}
                      animate={{ y:[0,-8,0], rotate:[0,3,-3,0] }}
                      transition={{ duration:3+i*0.7, repeat:Infinity, ease:"easeInOut", delay:i*0.5 }}
                      whileHover={{ scale:1.2 }}
                    >
                      <Icon size={22} className="text-white" />
                    </motion.div>
                  );
                })}
                <motion.div
                  className="absolute top-1 right-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold"
                  animate={{ opacity:[0.6,1,0.6] }} transition={{ duration:2.5, repeat:Infinity }}
                >
                  24/7 Support
                </motion.div>
                <motion.div
                  className="absolute bottom-3 left-1 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold"
                  animate={{ opacity:[1,0.6,1] }} transition={{ duration:3, repeat:Infinity, delay:1 }}
                >
                  60+ Clients
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ SERVICE SECTIONS ════════════════════════════════════════ */}
      {services.map((service, si) => {
        const isEven = si % 2 === 0;
        const isOpen = activeService === service.id;
        const { Illustration } = service;

        return (
          <section key={service.id} id={service.id} className="relative overflow-hidden" style={{ background: isEven ? "#ffffff" : "#f8faff" }}>
            {/* Top accent bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${service.gradient}`} />
            {/* BG glow */}
            <div
              className="absolute top-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.05]"
              style={{ background:`radial-gradient(circle,${service.accentColor},transparent 70%)`, right: isEven ? "-10%" : undefined, left: isEven ? undefined : "-10%", top:"-20%" }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
              <div className={`grid lg:grid-cols-2 gap-14 items-center mb-12 ${!isEven ? "direction-rtl" : ""}`}
                style={{ direction: !isEven ? "rtl" : "ltr" }}>

                {/* Text */}
                <div style={{ direction:"ltr" }}>
                  <AnimatedSection variant={isEven ? "fadeLeft" : "fadeRight"}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-6xl font-black opacity-[0.08] leading-none select-none" style={{ color:service.accentColor }}>
                        {service.number}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                        style={{ background:`${service.accentColor}18`, color:service.accentColor }}>
                        {service.label}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0d14] mb-4 leading-tight tracking-tight">
                      {service.title}
                    </h2>
                    <p className="font-semibold mb-3 text-base" style={{ color:service.accentColor }}>
                      {service.tagline}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.items.map((item, ii) => (
                        <span key={ii} className="px-3 py-1.5 rounded-full text-xs font-medium border"
                          style={{ borderColor:`${service.accentColor}40`, color:service.accentColor, background:`${service.accentColor}08` }}>
                          {item.title}
                        </span>
                      ))}
                    </div>
                    <motion.button
                      onClick={() => setActiveService(isOpen ? null : service.id)}
                      whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
                      className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl text-white font-bold text-sm"
                      style={{ background:`linear-gradient(135deg,${service.accentColor},${service.accentColor}bb)`, boxShadow:`0 8px 24px ${service.accentColor}40` }}
                    >
                      {isOpen ? "Show Less" : "Explore All Services"}
                      <motion.span animate={{ x: isOpen ? -3 : [0,4,0] }} transition={{ repeat: isOpen?0:Infinity, duration:1.5 }}>
                        <ArrowRight size={16}/>
                      </motion.span>
                    </motion.button>
                  </AnimatedSection>
                </div>

                {/* Illustration */}
                <div style={{ direction:"ltr" }}>
                  <AnimatedSection variant={isEven ? "fadeRight" : "fadeLeft"} delay={0.15}>
                    <motion.div
                      className="relative rounded-3xl overflow-hidden"
                      style={{ background:`linear-gradient(135deg,${service.accentColor}12,${service.accentColor}04)`, border:`1.5px solid ${service.accentColor}20` }}
                      whileHover={{ scale:1.01 }}
                      transition={{ type:"spring", stiffness:200 }}
                    >
                      <div className="p-6 aspect-[4/3]">
                        <Illustration />
                      </div>
                      {/* shimmer */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background:`linear-gradient(105deg,transparent 40%,${service.accentColor}14 50%,transparent 60%)` }}
                        animate={{ x:["-100%","200%"] }}
                        transition={{ duration:3, repeat:Infinity, repeatDelay:5, ease:"easeInOut" }}
                      />
                    </motion.div>
                  </AnimatedSection>
                </div>
              </div>

              {/* Expanded cards */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity:0, height:0 }}
                    animate={{ opacity:1, height:"auto" }}
                    exit={{ opacity:0, height:0 }}
                    transition={{ duration:0.4, ease:[0.4,0,0.2,1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-10 border-t" style={{ borderColor:`${service.accentColor}20` }}>
                      <p className="text-xs font-black tracking-[0.25em] uppercase mb-8" style={{ color:service.accentColor }}>
                        All {service.label} Services
                      </p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {service.items.map((item, ii) => {
                          const ItemIcon = item.icon;
                          const isDark = ii % 3 === 0;
                          const isAccent = ii % 3 === 1;
                          return (
                            <motion.div
                              key={ii}
                              initial={{ opacity:0, y:30, scale:0.95 }}
                              animate={{ opacity:1, y:0, scale:1 }}
                              transition={{ delay:ii*0.08, type:"spring", stiffness:200 }}
                              whileHover={{ y:-6, scale:1.02 }}
                              className="rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-xl transition-all duration-300"
                              style={{
                                background: isDark ? "#0a0d14" : isAccent ? `linear-gradient(135deg,${service.accentColor},${service.accentColor}cc)` : "#ffffff",
                                border: isDark||isAccent ? "none" : `1.5px solid ${service.accentColor}20`,
                                boxShadow: isAccent ? `0 12px 32px ${service.accentColor}40` : undefined,
                              }}
                            >
                              <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                                style={{ background: isDark||isAccent ? "rgba(255,255,255,0.15)" : `${service.accentColor}18` }}>
                                <ItemIcon size={20} style={{ color: isDark||isAccent ? "white" : service.accentColor }}/>
                              </div>
                              <h4 className="font-extrabold text-sm leading-snug"
                                style={{ color: isDark||isAccent ? "white" : "#0a0d14" }}>
                                {item.title}
                              </h4>
                              <p className="text-xs leading-relaxed flex-1"
                                style={{ color: isDark||isAccent ? "rgba(255,255,255,0.6)" : "#64748b" }}>
                                {item.desc}
                              </p>
                              <a href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold mt-1 group"
                                style={{ color: isDark||isAccent ? "rgba(255,255,255,0.8)" : service.accentColor }}>
                                Get started
                                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform"/>
                              </a>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        );
      })}

      {/* ═══ ANIMATED STATS ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#060810] py-24">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background:"radial-gradient(ellipse at center,rgba(59,130,246,0.1) 0%,transparent 60%)" }}
          animate={{ scale:[1,1.1,1] }}
          transition={{ duration:8, repeat:Infinity, ease:"easeInOut" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-center text-xs font-black tracking-[0.3em] uppercase text-blue-400 mb-3">By the Numbers</p>
            <h2 className="text-4xl font-extrabold text-center text-white mb-16 tracking-tight">
              Results that speak for themselves
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y:-6, scale:1.03 }}
                    transition={{ type:"spring", stiffness:300, damping:20 }}
                    className="rounded-2xl p-8 text-center border border-white/10 bg-white/5 backdrop-blur hover:border-blue-500/40 hover:bg-blue-600/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
                      <StatIcon size={18} className="text-blue-400"/>
                    </div>
                    <p className="text-5xl font-black text-white mb-2">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix}/>
                    </p>
                    <p className="text-white/40 text-xs tracking-wide">{stat.label}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Services;