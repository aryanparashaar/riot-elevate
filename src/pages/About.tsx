import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  TrendingUp,
  Globe,
  Shield,
  RefreshCw,
  ArrowUpRight,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { usePageLoader } from "@/components/skeleton/usePageLoader";
import {
  HomeSkeleton,
  PageFadeIn,
} from "@/components/skeleton/PageSkeletons";

/* ─── DATA ──────────────────────────────────────────────────────────────── */



const stats = [
  { value: "5,000+", label: "Happy Customers" },
  { value: "60+", label: "Clients Served" },
  { value: "1M+", label: "Support Tickets Resolved" },
  { value: "15+", label: "Countries Served" },
  { value: "12+", label: "Years of Experience" },
];

const principles = [
  {
    icon: Users,
    title: "Customer-Centric",
    desc: "We prioritize your success with seamless ecommerce solutions that enhance efficiency and drive growth.",
  },
  {
    icon: TrendingUp,
    title: "Efficiency First",
    desc: "From website creation to CRM support, we streamline every operation to maximize your productivity.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Led",
    desc: "Ecommerce is always evolving — and so are we. We embrace the latest tech to keep your brand ahead.",
  },
  {
    icon: Shield,
    title: "Transparency & Trust",
    desc: "Open communication and honest partnerships. We build long-term relationships, not short-term fixes.",
  },
  {
    icon: Target,
    title: "Precision Execution",
    desc: "99.9% accuracy across all backend operations — fewer errors, faster fulfilment, better outcomes.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "40+ clients across 15+ global markets. We understand diverse business needs and tailor accordingly.",
  },
  {
    icon: RefreshCw,
    title: "Always Learning",
    desc: "We constantly refine our skills and adopt new strategies to deliver cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Team Collaboration",
    desc: "Success is a team effort. Ideas flow freely and challenges are tackled together — always.",
  },
];

const visionStats = [
  { value: "99%", label: "Error-Free Performance" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "70%", label: "Increase in Efficiency" },
  { value: "24×7", label: "Support Available" },
];

const storyMilestones = [
  { year: "2014", event: "Founded with a single mission: make ecommerce ops effortless" },
  { year: "2016", event: "Crossed 10,000 support tickets resolved; landed our first international client" },
  { year: "2018", event: "Expanded to 10 countries; launched our signature automation playbook" },
  { year: "2020", event: "1M+ tickets resolved; 150+ brands transformed globally" },
  { year: "2022", event: "Integrated AI-assisted operations across client workflows; crossed 15+ active markets" },
  { year: "2024", event: "Surpassed 60+ active clients; deepened presence across North America, Europe & Southeast Asia with dedicated account teams" },
  { year: "2026", event: "Moved into a brand-new office, expanded our team, and launched a fully redesigned brand — built to match the ambition of what's next" },
];

const quickLinks = [
  {
    icon: "🛎️",
    title: "Our Services",
    desc: "Explore what we offer",
    href: "/services",
  },
  {
    icon: "📈",
    title: "Ready to Grow?",
    desc: "Start scaling today",
    href: "/contact",
  },
  {
    icon: "❓",
    title: "Ask a Question",
    desc: "We're here to help",
    href: "/contact",
  },
];



/* ─── SUB-COMPONENTS ────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase rounded-full border border-blue-500/30 text-blue-400 bg-blue-500/10 mb-5">
      {children}
    </span>
  );
}

function SectionHeading({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`text-4xl sm:text-5xl font-black tracking-tight leading-[1.07] ${
        light ? "text-white" : "text-[#0a0d14]"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

const About = () => {
  const { loading } = usePageLoader("about");

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

if (loading) return <HomeSkeleton />;

  return (
    <PageFadeIn>
      {/* ─── HERO ───────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-[#060810] pt-36 pb-32 min-h-[88vh] flex items-center"
      >
        {/* Animated grid */}
        <motion.div
          style={{
            y: heroBgY,
            backgroundImage:
              "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          className="absolute inset-0 opacity-[0.055]"
        />

        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-blue-700/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

        {/* Floating accent lines */}
        <div className="absolute top-24 left-12 w-[1px] h-32 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />
        <div className="absolute top-40 right-16 w-[1px] h-24 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent" />
        <div className="absolute bottom-16 left-1/4 w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full"
        >
          <AnimatedSection variant="blur">
            <SectionLabel>About RIOT Ecommerce</SectionLabel>

            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black text-white leading-[1.04] mb-7 tracking-tight">
              The Ops Team Behind{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
                  Category Leaders
                </span>
                {/* Underline glow */}
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500/0 via-blue-400/70 to-blue-500/0 rounded-full" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/45 max-w-2xl mx-auto leading-relaxed mb-10">
              We take the operational complexity off your plate — from website creation to
              backend management, so you can focus entirely on growing your brand.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-white/50 text-xs font-semibold tracking-wide">
              {["1M+ Tickets Resolved", "15+ Countries", "12+ Years", "99.9% Accuracy"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5"
                  >
                    <Zap size={10} className="text-blue-400" />
                    {badge}
                  </span>
                )
              )}
            </div>
          </AnimatedSection>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── STATS STRIP ────────────────────────────────────────────── */}
      <section className="bg-white pt-4 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ backgroundColor: "#eff6ff" }}
                  className="bg-white px-6 py-9 text-center transition-colors cursor-default"
                >
                  <p className="text-3xl sm:text-4xl font-black text-blue-600 mb-1 tabular-nums">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-xs font-semibold tracking-wide uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WHO WE ARE ─────────────────────────────────────────────── */}
      <section className="bg-[#f8faff] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
            {/* Left: image */}
            <AnimatedSection variant="fadeLeft">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden bg-[#0a0d14] aspect-[4/5] max-w-sm mx-auto lg:mx-0 shadow-2xl">
                  <img
                    src="/Co-founder.avif"
                    alt="Deepika Arora, Co-Founder of RIOT Ecommerce"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Name tag overlay — inside the rounded container so it clips correctly */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/80 to-transparent pt-20 pb-7 px-7">
                    <p className="text-white font-black text-lg leading-tight">
                      Deepika Arora
                    </p>
                    <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mt-0.5">
                      Co-Founder, RIOT Ecommerce
                    </p>
                  </div>
                </div>
                {/* Decorative accents — outside the image wrapper, won't bleed */}
                <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl bg-blue-600 -z-10 opacity-80" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl border-2 border-blue-300/40 -z-10" />
              </div>
            </AnimatedSection>

            {/* Right: quote + about */}
            <AnimatedSection variant="fadeRight" delay={0.15}>
              <SectionLabel>Founder's Note</SectionLabel>

              <blockquote className="text-2xl sm:text-3xl font-black text-[#0a0d14] leading-snug mb-6 relative">
                <span className="absolute -top-4 -left-2 text-8xl text-blue-100 font-serif leading-none select-none">
                  "
                </span>
                <span className="relative">
                  When you decide, do it without fear of the result. What matters is that
                  the idea is truly yours and you trust it completely.
                </span>
              </blockquote>

              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Calculate the risk, then pour in your resources and experience — that's
                how you give your vision its best chance to succeed.
              </p>

              <div className="w-12 h-0.5 bg-blue-600 mb-8" />

              <div className="space-y-3 text-sm text-gray-500 leading-relaxed">
                <p>
                  RIOT Ecommerce was born from a simple frustration: great products were
                  losing to poor operations. We built the infrastructure layer that brands
                  need but rarely have in-house — combining expert talent, battle-tested
                  processes, and relentless execution.
                </p>
                <p>
                  Today, we're the silent engine behind some of the fastest-growing
                  ecommerce brands in 15+ countries.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── PURPOSE + VISION ───────────────────────────────────────── */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">

          {/* Section header */}
          <AnimatedSection className="text-center mb-14">
            <SectionLabel>What We Stand For</SectionLabel>
            <SectionHeading className="max-w-2xl mx-auto">
              Purpose & Vision
            </SectionHeading>
            <p className="text-gray-400 text-base max-w-xl mx-auto mt-3 leading-relaxed">
              Two sides of the same coin — why we exist today, and where we're taking you tomorrow.
            </p>
          </AnimatedSection>

          {/* Equal two-column cards */}
          <div className="grid lg:grid-cols-2 gap-6">

            {/* ── PURPOSE card (light) */}
            <AnimatedSection variant="fadeLeft" delay={0.05}>
              <div className="rounded-3xl border-2 border-gray-100 bg-[#f8faff] p-10 h-full flex flex-col">
                {/* Icon badge */}
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shrink-0">
                  <Target size={20} className="text-white" strokeWidth={2.2} />
                </div>

                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-500 mb-2">
                  Why We Exist
                </span>
                <h3 className="text-3xl font-black text-[#0a0d14] tracking-tight mb-5">
                  Our Purpose
                </h3>

                <div className="space-y-3 text-gray-500 leading-relaxed text-[15px] flex-1">
                  <p>
                    At RIOT Ecommerce, our purpose is simple: make ecommerce effortless
                    for businesses of all sizes. Managing an online business demands
                    efficient operations, seamless support, and strategic growth planning
                    — that's exactly where we step in.
                  </p>
                  <p>
                    We empower brands with expert backend support, optimized workflows,
                    and cutting-edge solutions — from website creation and platform
                    management to CRM support and order processing.
                  </p>
                </div>

                <ul className="mt-8 space-y-3 border-t border-gray-100 pt-7">
                  {[
                    "Handle the entire ops stack so you don't have to",
                    "Build transparent, long-term growth partnerships",
                    "Deliver measurable results, not vanity metrics",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* ── VISION card (dark) */}
            <AnimatedSection variant="fadeRight" delay={0.1}>
              <div className="rounded-3xl bg-[#0a0d14] overflow-hidden shadow-2xl h-full flex flex-col">
                {/* Card header */}
                <div className="bg-blue-600 px-8 py-5 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/50 flex items-center justify-center">
                      <Zap size={15} className="text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-200 block leading-none mb-0.5">
                        Where We're Headed
                      </span>
                      <h3 className="text-white font-black text-lg tracking-tight leading-none">
                        Our Vision
                      </h3>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <p className="text-white/60 text-[15px] leading-relaxed mb-8 flex-1">
                    We envision a future where our partners' businesses thrive alongside
                    ours — built on empathy, trust, and mutual growth. We aim to be the
                    catalyst for digital transformation, empowering brands to achieve
                    their fullest potential while maintaining the highest standards of
                    integrity and innovation.
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {visionStats.map((s, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.04 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center hover:border-blue-500/50 hover:bg-blue-600/15 transition-all duration-200 cursor-default"
                      >
                        <p className="text-3xl font-black text-blue-400 mb-1 tabular-nums">
                          {s.value}
                        </p>
                        <p className="text-white/45 text-[11px] font-semibold tracking-wide uppercase">
                          {s.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ─── GUIDING PRINCIPLES ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060810] py-28">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-700/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel>What Drives Us</SectionLabel>
            <SectionHeading light className="max-w-2xl mx-auto">
              Principles Behind Everything We Do
            </SectionHeading>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6, borderColor: "rgba(59,130,246,0.45)" }}
                className="rounded-2xl border border-white/8 bg-white/[0.04] p-7 flex flex-col gap-4 transition-colors duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <p.icon size={17} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-2">{p.title}</h3>
                  <p className="text-white/45 text-[13px] leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR STORY / TIMELINE ───────────────────────────────────── */}
      <section className="bg-[#f8faff] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel>Our Story</SectionLabel>
            <SectionHeading className="max-w-2xl mx-auto">
              Built by Operators,{" "}
              <span className="text-blue-600">for Operators</span>
            </SectionHeading>
            <p className="text-gray-500 text-base max-w-xl mx-auto mt-4 leading-relaxed">
              We started where you are — buried in tickets, duct-taping workflows, and
              making gut-feel decisions. Over 12 years, we built the playbook so you don't
              have to.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Timeline */}
            <AnimatedSection variant="fadeLeft" delay={0.05}>
              <div className="relative pl-8">
                {/* Vertical line — full height through all 7 items */}
                <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue-600 via-blue-400/40 to-blue-300/20 rounded-full" />

                <div className="space-y-7">
                  {storyMilestones.map((m, i) => {
                    const isCurrent = m.year === "2026";
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ delay: i * 0.09, duration: 0.45, ease: "easeOut" }}
                        className="relative flex gap-5"
                      >
                        {/* Dot — larger + pulsing ring for 2026 */}
                        {isCurrent ? (
                          <div className="absolute -left-[27px] top-0.5 shrink-0">
                            <div className="w-5 h-5 rounded-full bg-blue-600 border-2 border-[#f8faff] shadow-[0_0_0_4px_rgba(59,130,246,0.25)]" />
                            {/* Pulse ring */}
                            <motion.div
                              animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
                              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                              className="absolute inset-0 rounded-full bg-blue-500"
                            />
                          </div>
                        ) : (
                          <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-[#f8faff] shrink-0 shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
                        )}

                        <div className={isCurrent ? "rounded-xl bg-blue-600 px-4 py-3 -ml-1 w-full" : ""}>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${isCurrent ? "text-blue-200" : "text-blue-600"}`}>
                              {m.year}
                            </span>
                            {isCurrent && (
                              <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[9px] font-black tracking-widest uppercase">
                                Now
                              </span>
                            )}
                          </div>
                          <p className={`text-sm font-medium leading-snug ${isCurrent ? "text-white" : "text-[#0a0d14]"}`}>
                            {m.event}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            {/* Stats grid */}
            <AnimatedSection variant="fadeRight" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "12+", label: "Years in the Trenches", icon: "🔧" },
                  { value: "150+", label: "Brands Transformed", icon: "🚀" },
                  { value: "15+", label: "Countries Served", icon: "🌐" },
                  { value: "1M+", label: "Tickets Resolved", icon: "✅" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-2xl bg-white border border-gray-100 p-7 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all group cursor-default"
                  >
                    <span className="text-2xl mb-3 block">{stat.icon}</span>
                    <p className="text-4xl font-black text-blue-600 mb-1 tabular-nums">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── QUICK LINKS ────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel>Explore More</SectionLabel>
            <SectionHeading className="max-w-lg mx-auto">
              Where Would You Like to Go?
            </SectionHeading>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {quickLinks.map((link, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.a
                  href={link.href}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group rounded-2xl border-2 border-gray-100 hover:border-blue-200 bg-white hover:shadow-xl p-10 text-center flex flex-col items-center gap-4 transition-all duration-300 cursor-pointer block"
                >
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300 inline-block">
                    {link.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#0a0d14] flex items-center justify-center gap-1.5 group-hover:text-blue-600 transition-colors">
                      {link.title}
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{link.desc}</p>
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      </PageFadeIn>
  );
};

export default About;