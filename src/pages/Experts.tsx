import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import { Linkedin, Mail, ArrowUpRight, Users, Zap, Target, Globe, RefreshCw, CheckCircle2 } from "lucide-react";

/* ─── DATA ──────────────────────────────────────────────────────────── */

const experts = [
  {
    name: "Chirag Bhutani",
    role: "CEO & Founder",
    bio: "15+ years in ecommerce operations. Chirag architects the systems and strategies that help brands scale from 6 to 8 figures without operational chaos.",
    
    email: "cb@riotecommerce.com",
    image: "/images/team/Chirag.avif",
    linkedin: "https://www.linkedin.com/in/bhutanichirag?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    
    tag: "Strategy & Vision",
    stats: [{ v: "15+", l: "Years Exp." }, { v: "8-fig", l: "Brands Built" }],
  },
  {
    name: "Deepika Arora",
    role: "Co-Founder",
    bio: "Backend automation architect and the operational brain of RIOT. Deepika has streamlined workflows for 60+ global brands with precision and empathy.",
    
    email: "deepika@riotecommerce.com",
    image: "/images/team/Deepika.avif",
    linkedin: "https://www.linkedin.com/in/deepika-riot?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    
    tag: "Operations & Automation",
    stats: [{ v: "60+", l: "Brands Ops" }, { v: "1M+", l: "Tickets" }],
  },
  {
    name: "Harish Reddy",
    role: "Co-Founder",
    bio: "Scaled 50+ D2C brands through data-backed traffic strategies. Harish owns the full funnel — from first click to loyal repeat customer.",
    
    email: "mhr@riotecommerce.com",
    image: "/images/team/Harish.avif",
    linkedin: "https://www.linkedin.com/in/harish-reddy-mallepally-200526227?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    
    tag: "Growth & Traffic",
    stats: [{ v: "50+", l: "D2C Brands" }, { v: "15+", l: "Countries" }],
  },
];

const lifeImages = [
  "/images/life/life1.avif",
  "/images/life/life2.avif",
  "/images/life/life3.avif",
  "/images/life/life4.avif",
  "/images/life/life5.avif",
  "/images/life/life6.avif",
];

const culturePoints = [
  {
    icon: Users,
    title: "Collaboration First",
    desc: "Ideas flow freely — every voice shapes the bigger vision.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    desc: "We evolve with ecommerce, staying ahead so clients never fall behind.",
  },
  {
    icon: Target,
    title: "Customer-First Mindset",
    desc: "Every decision filtered through one question: does this help our client?",
  },
  {
    icon: Globe,
    title: "Forward-Thinkers",
    desc: "Building a community passionate about making ecommerce easy and efficient.",
  },
];

const cultureBodyLeft = `At RIOT Ecommerce, we believe that a strong work culture is the foundation of success. Our team thrives in an environment that values creativity, collaboration, and continuous learning. We foster a space where ideas flow freely, challenges are tackled with enthusiasm, and every member contributes to the bigger vision.`;

const cultureBodyRight = `We prioritize professionalism and integrity, ensuring that our work ethic reflects reliability and trust. Adaptability is at our core, allowing us to evolve with the dynamic ecommerce industry while staying committed to excellence. At RIOT, we celebrate teamwork, respect diverse perspectives, and encourage every individual to grow.`;

const riotParagraphs = [
  "At RIOT Ecommerce, we specialize in providing expert ecommerce backend support to help online businesses run smoothly. Our services include order processing, inventory management, product listing optimization, and issue resolution.",
  "With experience supporting global ecommerce businesses, we take pride in delivering efficient, scalable, and results-driven solutions. Our team is committed to enhancing online store performance and improving customer satisfaction.",
  "If you're looking for a team that simplifies ecommerce, enhances efficiency, and supports business growth — RIOT Ecommerce is the place for you.",
];

const riotHighlights = [
  "End-to-end backend operations support",
  "Serving 15+ global markets",
  "12+ years of collective expertise",
  "99% error-free performance record",
];

/* ─── HELPERS ───────────────────────────────────────────────────────── */

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase rounded-full border mb-5 ${
        light
          ? "border-blue-500/30 text-blue-400 bg-blue-500/10"
          : "border-blue-200 text-blue-600 bg-blue-50"
      }`}
    >
      {children}
    </span>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────── */

const Experts = () => {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
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
        {/* Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-blue-700/20 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

        {/* Accent lines */}
        <div className="absolute top-28 left-10 w-[1px] h-28 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />
        <div className="absolute top-44 right-16 w-[1px] h-20 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent" />
        <div className="absolute bottom-20 left-1/3 w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
          <AnimatedSection variant="blur">
            <SectionLabel light>Meet the Team</SectionLabel>

            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black text-white leading-[1.04] mb-6 tracking-tight">
              The Driving Force{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
                  Behind RIOT
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500/0 via-blue-400/60 to-blue-500/0 rounded-full" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/45 max-w-2xl mx-auto leading-relaxed mb-10">
              Led by experienced operators who've been in the trenches. Our founders
              don't just advise — they build, execute, and scale alongside you.
            </p>

            {/* Founder preview pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {experts.map((e) => (
                <span
                  key={e.name}
                  className="flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/65 text-xs font-bold tracking-wide"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[9px] font-black text-white shrink-0">
                    {/* {e.initials} */}
                  </span>
                  {e.name}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-white/40 text-xs font-semibold tracking-wide">
              {["12+ Years Combined", "60+ Brands Scaled", "15+ Countries", "1M+ Tickets Resolved"].map(
                (badge) => (
                  <span key={badge} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                    <Zap size={10} className="text-blue-400" />
                    {badge}
                  </span>
                )
              )}
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ════════════════════════════════════════════════════════════
          TEAM CARDS
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-white pt-4 pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <SectionLabel>Our Leadership</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0d14] tracking-tight">
              Passionate minds, proven results
            </h2>
            <p className="text-gray-400 text-base max-w-lg mx-auto mt-3 leading-relaxed">
              Real people. Real experience. Real results.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {experts.map((expert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:border-blue-100 transition-all duration-300 bg-white flex flex-col"
              >
                {/* ── Photo ── */}
                <div className="relative h-72 overflow-hidden bg-[#0a0d14] shrink-0">
                  {/* Gradient tint */}
                  <div className={`absolute inset-0 bg-gradient-to-br  opacity-25 z-10`} />

                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />

                  {/* Fallback initials */}
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br  flex items-center justify-center shadow-2xl`}>
                      {/* <span className="text-3xl font-black text-white">{expert.initials}</span> */}
                    </div>
                  </div>

                  {/* Expertise tag — top left */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white text-[10px] font-black tracking-wider uppercase">
                      {expert.tag}
                    </span>
                  </div>

                  {/* LinkedIn quick-link — top right */}
                  <motion.a
                    href={expert.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin size={14} />
                  </motion.a>

                  {/* Mini stats strip — bottom of photo */}
                  <div className="absolute bottom-0 inset-x-0 z-20 flex">
                    {expert.stats.map((s, si) => (
                      <div
                        key={si}
                        className={`flex-1 py-3 text-center ${si === 0 ? "bg-black/55" : "bg-black/45"} backdrop-blur-sm border-t border-white/10`}
                      >
                        <p className="text-white font-black text-sm tabular-nums leading-none">{s.v}</p>
                        <p className="text-white/55 text-[9px] font-semibold tracking-wider uppercase mt-0.5">{s.l}</p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom fade into card white */}
                  <div className="absolute bottom-[52px] left-0 right-0 h-10 bg-gradient-to-t from-black/30 to-transparent z-10" />
                </div>

                {/* ── Content ── */}
                <div className="flex flex-col flex-1 px-7 pb-7 pt-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-black text-[#0a0d14] leading-tight mb-1">
                      {expert.name}
                    </h3>
                    <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">
                      {expert.role}
                    </p>
                  </div>

                  <p className="text-gray-500 text-[13px] leading-relaxed flex-1 mb-6">
                    {expert.bio}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-2.5 pt-5 border-t border-gray-100">
                    <a
                      href={expert.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0a0d14] text-white text-xs font-bold hover:bg-blue-600 transition-colors duration-200"
                    >
                      <Linkedin size={13} />
                      LinkedIn
                    </a>
                    <a
                      href={`mailto:${expert.email}`}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-gray-100 text-gray-600 text-xs font-bold hover:border-blue-300 hover:text-blue-600 transition-all duration-200"
                    >
                      <Mail size={13} />
                      Email
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          WE ARE RIOT
      ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#060810] py-28">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-700/10 blur-[120px] pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
            {/* Left: text */}
            <AnimatedSection variant="fadeLeft">
              <SectionLabel light>Who We Are</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                We are{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  RIOT Ecommerce
                </span>
              </h2>
              <div className="space-y-4 text-white/55 text-[15px] leading-relaxed mb-8">
                {riotParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </AnimatedSection>

            {/* Right: highlights card */}
            <AnimatedSection variant="fadeRight" delay={0.15}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0">
                    <Zap size={18} className="text-white" />
                  </div>
                  <h3 className="text-white font-black text-lg">What sets us apart</h3>
                </div>

                <ul className="space-y-4 mb-10">
                  {riotHighlights.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.09, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      <span className="text-white/70 text-sm font-medium leading-snug">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Stat row */}
                <div className="grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
                  {[
                    { v: "12+", l: "Years" },
                    { v: "60+", l: "Clients" },
                    { v: "15+", l: "Countries" },
                  ].map((s, i) => (
                    <div key={i} className="bg-[#060810] py-5 text-center">
                      <p className="text-2xl font-black text-blue-400 tabular-nums mb-0.5">{s.v}</p>
                      <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          WORK CULTURE
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f8faff] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <SectionLabel>Inside RIOT</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0d14] tracking-tight">
              Our Work Culture
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mt-3 leading-relaxed">
              A strong culture is our greatest competitive advantage. We foster a space
              where creativity, collaboration, and continuous learning thrive daily.
            </p>
          </AnimatedSection>

          {/* Culture pillars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {culturePoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.09, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6, borderColor: "rgba(59,130,246,0.4)" }}
                className="rounded-3xl bg-white border-2 border-gray-100 p-8 h-full flex flex-col gap-5 transition-all duration-300 cursor-default hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                  <point.icon size={20} className="text-blue-600" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-black text-[#0a0d14] text-sm mb-2 leading-snug">{point.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Culture body — dark card */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-3xl bg-[#0a0d14] p-10 md:p-14 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full bg-blue-600/10 blur-[80px] pointer-events-none" />

              <div className="relative z-10 grid md:grid-cols-2 gap-10">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                    <Users size={18} className="text-white" />
                  </div>
                  <p className="text-white/60 text-[15px] leading-relaxed">{cultureBodyLeft}</p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/30 flex items-center justify-center mb-6">
                    <Target size={18} className="text-blue-400" />
                  </div>
                  <p className="text-white/60 text-[15px] leading-relaxed">{cultureBodyRight}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          LIFE AT RIOT
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            {/* <SectionLabel>Behind the Scenes</SectionLabel> */}
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0d14] tracking-tight">
              Life at RIOT
            </h2>
            <p className="text-gray-400 text-base max-w-lg mx-auto mt-3 leading-relaxed">
              A glimpse into the people, energy, and moments that make RIOT more
              than just a workplace.
            </p>
          </AnimatedSection>

          {/* Asymmetric photo grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {lifeImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className={`relative overflow-hidden rounded-3xl shadow-md group cursor-pointer ${
                  i === 0 ? "col-span-2 lg:col-span-2 row-span-1" : ""
                } ${i === 3 ? "lg:col-span-2" : ""}`}
              >
                <img
                  src={img}
                  alt={`Life at RIOT ${i + 1}`}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    i === 0 || i === 3 ? "h-72" : "h-56"
                  }`}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <ArrowUpRight size={13} className="text-white" />
                    </div>
                    <span className="text-white text-xs font-bold tracking-wide">Life at RIOT</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Experts;