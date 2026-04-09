import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import {
  ArrowRight,
  Zap,
  Package,
  Tag,
  FileText,
  DollarSign,
  Grid3X3,
  Truck,
  RotateCcw,
  Star,
  TrendingUp,
  ClipboardList,
  ShoppingCart,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

/* ─── DATA ──────────────────────────────────────────────────────────── */

const phases = [
  { n: "01", title: "Build Your Foundation", sub: "Platform, brand & design", accent: "bg-[#0a0d14] border-blue-900/40" },
  { n: "02", title: "Define Your Product", sub: "Name, pricing & listing", accent: "bg-blue-600" },
  { n: "03", title: "Source Your Product", sub: "Vendors, stock & supply", accent: "bg-[#111827] border-blue-800/40" },
  { n: "04", title: "Launch & Scale", sub: "Traffic, ops & growth", accent: "bg-blue-500" },
];

const defineSteps = [
  { title: "Product Name", desc: "Choose a clear, keyword-rich product name that defines your item and helps customers find it easily online.", icon: Tag },
  { title: "Product Description", desc: "Write a detailed and engaging product description highlighting features, benefits, and usage to convert visitors.", icon: FileText },
  { title: "Product Pricing", desc: "Set competitive and transparent pricing that reflects product value. Consider market trends to boost sales.", icon: DollarSign },
  { title: "Product Category", desc: "Organize items into accurate product categories to enhance user navigation and SEO indexing.", icon: Grid3X3 },
];

const sourceSteps = [
  { n: "01", title: "Product Listing", desc: "Optimised listings crafted for discoverability and conversion across every major platform." },
  { n: "02", title: "Vendor Sourcing", desc: "We identify and vet reliable suppliers that match your product vision and quality standards." },
  { n: "03", title: "Vendor Management", desc: "Ongoing supplier relationships managed so you never miss stock or face fulfilment delays." },
  { n: "04", title: "Stock Management", desc: "Real-time inventory control to prevent overselling, stockouts, and fulfilment bottlenecks." },
];

const supportServices = [
  { title: "Logistics Management", desc: "End-to-end shipment tracking and fulfilment coordination across all channels.", icon: Truck },
  { title: "Order Processing", desc: "Accurate, fast order handling and verification to keep customers satisfied.", icon: ShoppingCart },
  { title: "SOP Creation", desc: "Custom standard operating procedures engineered precisely for your workflow.", icon: ClipboardList },
  { title: "Return & Refund Process", desc: "Streamlined return handling that protects your brand reputation and margins.", icon: RotateCcw },
  { title: "Customer Satisfaction", desc: "Proactive CRM support that turns first-time buyers into loyal, returning fans.", icon: Star },
  { title: "Business Scale Up", desc: "Strategic guidance and scalable systems to fuel your next phase of growth.", icon: TrendingUp },
];

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "1M+", label: "Support Tickets Resolved" },
  { value: "100%", label: "Client Satisfaction Rate" },
  { value: "60+", label: "Clients Served Globally" },
  { value: "70%", label: "Increase in Efficiency" },
  { value: "99%", label: "Error-Free Performance" },
];

const paidTraffic = ["Google Ads", "Meta Ads", "Email Marketing", "Social Media Ads"];
const organicTraffic = ["SEO Optimisation", "AEO Strategy", "Blog & Content", "Website Copywriting"];

const foundationCards = [
  {
    icon: "⚙️",
    heading: "Set Up Your Platform",
    body: "Set up a reliable platform with the right plugins for the website to run smoothly and scale without friction.",
  },
  {
    icon: "🎨",
    heading: "Brand & Design",
    body: "Design a unique logo, colour palette, and website interface that reflects your brand identity authentically.",
  },
];

/* ─── HELPERS ───────────────────────────────────────────────────────── */

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase rounded-full border mb-5 ${light
          ? "border-blue-500/30 text-blue-400 bg-blue-500/10"
          : "border-blue-200 text-blue-600 bg-blue-50"
        }`}
    >
      {children}
    </span>
  );
}

function PhaseLabel({ n, light = false }: { n: string; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase rounded-full border mb-5 ${light
          ? "border-blue-500/30 text-blue-400 bg-blue-500/10"
          : "border-blue-200 text-blue-600 bg-blue-50"
        }`}
    >
      Phase {n}
    </span>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────── */

const HowItWorks = () => {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#060810] pt-36 pb-32 min-h-[88vh] flex items-center">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-blue-700/20 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

        {/* Accent lines */}
        <div className="absolute top-28 left-10 w-[1px] h-28 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />
        <div className="absolute top-44 right-16 w-[1px] h-20 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
          <AnimatedSection variant="blur">
            <SectionLabel light>Our Process</SectionLabel>

            <h1 className="text-white font-black tracking-tight leading-tight mb-6 whitespace-nowrap"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)" }}>
              Dream it.{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
                  Start it.
                </span>
              </span>{" "}
              Scale it.
            </h1>

            <p className="text-lg sm:text-xl text-white/45 max-w-2xl mx-auto leading-relaxed mb-10">
              From setting up your online store to managing operations and customer
              support, we handle the entire machine so you can focus on what actually
              matters: growing your brand.
            </p>

            {/* Phase pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {phases.map((p) => (
                <span
                  key={p.n}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-bold tracking-wide"
                >
                  <span className="text-blue-400 font-black">{p.n}</span>
                  {p.title}
                </span>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-blue-700/30 hover:shadow-blue-600/40 hover:-translate-y-0.5"
            >
              Start Your Journey
              <ArrowRight size={15} />
            </a>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PHASE OVERVIEW STRIP
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white pt-4 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel>The Framework</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0d14] tracking-tight">
              Four phases to launch &amp; grow
            </h2>
            <p className="text-gray-400 text-base max-w-lg mx-auto mt-3 leading-relaxed">
              A proven end-to-end system that takes you from zero to a fully operational,
              scaling ecommerce brand.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className={`${phase.accent} p-8 h-full flex flex-col gap-4 cursor-default transition-all duration-300 relative group`}
              >
                {/* Connector arrow (not last) */}
                {i < 3 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-gray-200 items-center justify-center shadow-sm">
                    <ArrowRight size={10} className="text-blue-600" />
                  </div>
                )}
                <span className="text-6xl font-black text-white/15 leading-none tabular-nums">
                  {phase.n}
                </span>
                <div>
                  <p className="text-white font-black text-base leading-snug mb-1">{phase.title}</p>
                  <p className="text-white/45 text-xs font-medium">{phase.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PHASE 01 — BUILD YOUR FOUNDATION
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f8faff] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <PhaseLabel n="01" />
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0d14] tracking-tight leading-tight max-w-xl">
              Build your online{" "}
              <span className="text-blue-600">foundation first</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mt-3 max-w-lg">
              Before you sell anything, you need a platform that can handle growth.
              We build it fast, build it right, and brand it to stand out.
            </p>
          </AnimatedSection>

          {/* 3-col layout */}
          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {/* Left card */}
            <AnimatedSection variant="fadeLeft" delay={0.05}>
              <div className="rounded-3xl bg-[#0a0d14] p-9 h-full text-white flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl mb-6 shrink-0">
                  {foundationCards[0].icon}
                </div>
                <h3 className="font-black text-lg mb-3 leading-snug">{foundationCards[0].heading}</h3>
                <p className="text-white/55 text-sm leading-relaxed flex-1">{foundationCards[0].body}</p>
                <ul className="mt-6 space-y-2">
                  {["Shopify / WooCommerce", "Plugin Configuration", "Speed Optimisation"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/50 text-xs">
                      <CheckCircle2 size={12} className="text-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Centre hero card */}
            <AnimatedSection delay={0.1}>
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-10 text-white text-center flex flex-col items-center justify-center gap-5 min-h-[300px] shadow-2xl shadow-blue-700/30 h-full relative">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative">
                  <div className="w-20 h-20 rounded-3xl bg-white/15 backdrop-blur flex items-center justify-center text-4xl mx-auto mb-5">
                    🌐
                  </div>
                  <p className="text-3xl font-black tracking-tight leading-tight mb-2">
                    Website<br />Development
                  </p>
                  <p className="text-blue-200 text-[10px] uppercase tracking-[0.25em] font-bold">
                    Powerful · Fast · Scalable
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right card */}
            <AnimatedSection variant="fadeRight" delay={0.15}>
              <div className="rounded-3xl bg-[#0a0d14] p-9 h-full text-white flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl mb-6 shrink-0">
                  {foundationCards[1].icon}
                </div>
                <h3 className="font-black text-lg mb-3 leading-snug">{foundationCards[1].heading}</h3>
                <p className="text-white/55 text-sm leading-relaxed flex-1">{foundationCards[1].body}</p>
                <ul className="mt-6 space-y-2">
                  {["Logo & Identity", "Colour System", "UI / UX Design"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/50 text-xs">
                      <CheckCircle2 size={12} className="text-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Launch banner */}
          <AnimatedSection delay={0.2}>
            <div className="mt-5 rounded-3xl bg-blue-600 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: "linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "40px",
                }}
              />
              <div className="relative">
                <p className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-200 mb-2">
                  Ready to go
                </p>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
                  Website is ready to launch
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed max-w-lg opacity-80">
                  Powerful, user-friendly, and built for seamless online shopping — from
                  custom design to smooth, scalable functionality.
                </p>
              </div>
              <a
                href="/contact"
                className="relative shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-blue-700 font-black text-sm hover:bg-blue-50 transition-colors shadow-lg"
              >
                Explore more
                <ArrowUpRight size={14} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PHASE 02 — DEFINE YOUR PRODUCT
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <PhaseLabel n="02" />
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0d14] tracking-tight leading-tight max-w-xl">
              Define your product{" "}
              <span className="text-blue-600">with precision</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mt-3 max-w-lg">
              The right product definition is the difference between a listing that
              converts and one that gets ignored. We nail every detail.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {defineSteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.09, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6, borderColor: "rgba(59,130,246,0.5)" }}
                className="rounded-3xl p-8 flex flex-col gap-5 border border-white/10 transition-all duration-300 cursor-default"
                style={{ background: i % 2 === 0 ? "#0a0d14" : "#111827" }}
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <span className="text-[10px] font-black text-blue-500 tracking-[0.2em] uppercase block mb-2">
                    0{i + 1}
                  </span>
                  <h3 className="text-white font-black text-base mb-3 leading-snug">{item.title}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PHASE 03 — SOURCE YOUR PRODUCT
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#060810] py-28">
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-blue-700/10 blur-[120px] pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <AnimatedSection>
              <PhaseLabel n="03" light />
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Source your product{" "}
                <span className="text-blue-400">the right way</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-white/50 text-base leading-relaxed">
                From finding the right vendors to keeping shelves stocked — we manage
                every step of the sourcing chain so you never run dry or overpay.
              </p>
            </AnimatedSection>
          </div>

          {/* Connected step cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sourceSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6, borderColor: "rgba(59,130,246,0.5)" }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 flex flex-col gap-4 transition-all duration-300 cursor-default group"
              >
                {/* Step number badge */}
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-sm shrink-0">
                  {step.n}
                </div>

                {/* Connector arrow between cards */}
                {i < 3 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#0a0d14] border border-blue-500/40 items-center justify-center">
                    <ArrowRight size={10} className="text-blue-400" />
                  </div>
                )}

                <div>
                  <h4 className="text-white font-black text-sm mb-2 leading-snug">{step.title}</h4>
                  <p className="text-white/45 text-[13px] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PHASE 04 — TRAFFIC STRATEGY
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f8faff] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <PhaseLabel n="04" />
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0d14] tracking-tight leading-tight max-w-xl">
              Launch &amp; scale —{" "}
              <span className="text-blue-600">drive real traffic</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mt-3 max-w-lg">
              Traffic doesn't happen by accident. We combine paid and organic strategies
              into a compounding growth engine tailored to your brand.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Paid Traffic */}
            <AnimatedSection variant="fadeLeft" delay={0.05}>
              <div className="rounded-3xl bg-[#0a0d14] overflow-hidden h-full flex flex-col shadow-2xl">
                <div className="bg-blue-600 px-8 py-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-blue-200 tracking-[0.25em] uppercase mb-1">
                      Immediate reach
                    </p>
                    <h3 className="text-white font-black text-2xl tracking-tight">Paid Traffic</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/40 flex items-center justify-center">
                    <Zap size={20} className="text-white" />
                  </div>
                </div>
                <div className="p-8 flex-1">
                  <p className="text-white/50 text-sm leading-relaxed mb-7">
                    Targeted ad campaigns that put your brand in front of high-intent
                    buyers the moment you're ready to sell.
                  </p>
                  <ul className="space-y-4">
                    {paidTraffic.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600/40 transition-colors">
                          <ArrowRight size={12} className="text-blue-400" />
                        </div>
                        <span className="text-white/80 text-sm font-semibold">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Organic Traffic */}
            <AnimatedSection variant="fadeRight" delay={0.1}>
              <div className="rounded-3xl bg-[#0a0d14] overflow-hidden h-full flex flex-col shadow-2xl">
                <div className="bg-[#1a2540] border-b border-white/10 px-8 py-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-blue-400/70 tracking-[0.25em] uppercase mb-1">
                      Long-term compound growth
                    </p>
                    <h3 className="text-white font-black text-2xl tracking-tight">Organic Traffic</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    <TrendingUp size={20} className="text-blue-400" />
                  </div>
                </div>
                <div className="p-8 flex-1">
                  <p className="text-white/50 text-sm leading-relaxed mb-7">
                    Content and SEO strategies that build sustainable traffic — assets
                    that keep delivering long after the work is done.
                  </p>
                  <ul className="space-y-4">
                    {organicTraffic.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="w-8 h-8 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600/25 transition-colors">
                          <ArrowRight size={12} className="text-blue-400" />
                        </div>
                        <span className="text-white/80 text-sm font-semibold">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          ECOMMERCE SUPPORT
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <SectionLabel>Ongoing Support</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0d14] tracking-tight">
              Ecommerce Support Services
            </h2>
            <p className="text-gray-400 text-base max-w-lg mx-auto mt-3 leading-relaxed">
              Once you're live, we become your full operational backbone — handling
              every moving part so your brand never misses a beat.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {supportServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6, borderColor: "rgba(59,130,246,0.4)" }}
                className="group rounded-3xl border-2 border-gray-100 bg-white p-8 h-full flex flex-col gap-5 transition-all duration-300 cursor-default hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 shrink-0">
                  <service.icon
                    size={20}
                    className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <h3 className="font-black text-[#0a0d14] text-base mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TRUST METRICS
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#060810] py-28">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-blue-600/15 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel light>Why RIOT</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Numbers that speak for themselves
            </h2>
            <p className="text-white/40 text-base max-w-lg mx-auto mt-3 leading-relaxed">
              Every metric below is earned — not estimated. This is what 12+ years of
              obsessive execution looks like.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-3xl overflow-hidden border border-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.09, duration: 0.5, ease: "easeOut" }}
                whileHover={{ backgroundColor: "rgba(59,130,246,0.1)" }}
                className="bg-[#060810] p-12 text-center transition-colors duration-300 cursor-default"
              >
                <p className="text-5xl sm:text-6xl font-black text-blue-400 mb-3 tabular-nums leading-none">
                  {stat.value}
                </p>
                <p className="text-white/45 text-sm font-semibold tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default HowItWorks;