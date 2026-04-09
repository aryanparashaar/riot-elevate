import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import { ChevronDown, Search, ArrowRight, Zap, MessageCircle } from "lucide-react";
import { usePageLoader } from "@/components/skeleton/usePageLoader";
import { FaqSkeleton, PageFadeIn } from "@/components/skeleton/PageSkeletons";

/* ─── DATA ──────────────────────────────────────────────────────────── */

const categories = ["All", "General", "Services", "Pricing", "Support", "Security"];

const faqs = [
  {
    category: "General",
    q: "What is RIOT Ecommerce, and how can you help my business?",
    a: "RIOT Ecommerce is a specialised ecommerce business support company providing backend management, CRM solutions, order processing, inventory management, customer support, website development, digital marketing, and graphic design. We help businesses scale efficiently by streamlining operations and enhancing customer satisfaction.",
  },
  {
    category: "General",
    q: "Do you work with startups, or only established ecommerce brands?",
    a: "We work with businesses of all sizes — whether you're a startup launching your first store or an enterprise optimising your backend processes, we provide customised support tailored to exactly where you are right now.",
  },
  {
    category: "General",
    q: "What ecommerce industries does RIOT Ecommerce support?",
    a: "We assist all ecommerce industries including fashion, beauty, electronics, home decor, health & wellness, and more. No matter your niche, we ensure smooth, reliable backend operations.",
  },
  {
    category: "General",
    q: "When should I consider working with RIOT Ecommerce?",
    a: "If you're struggling with high support ticket volumes, inefficient workflows, backend issues, or need expert guidance to scale — RIOT Ecommerce is the perfect partner to streamline your operations and grow efficiently.",
  },
  {
    category: "Services",
    q: "What ecommerce tasks can RIOT Ecommerce handle?",
    a: "We offer a wide range of services: Customer Support & CRM Management to reduce ticket volume and response time; Order & Inventory Management for seamless processing and stock updates; Product Listing & Optimisation to enhance visibility and conversion; Website Maintenance & Performance Optimisation; and Process Automation to save time with automated workflows.",
  },
  {
    category: "Services",
    q: "Can you help with ecommerce scaling and automation?",
    a: "Absolutely. We implement process automation, workflow optimisations, and data-driven strategies to scale your business efficiently — reducing manual work and increasing output without adding headcount.",
  },
  {
    category: "Services",
    q: "Does RIOT Ecommerce provide marketing services?",
    a: "Yes — we also assist with email automation, digital marketing, social media management, content writing, and paid traffic campaigns across Google and Meta.",
  },
  {
    category: "Services",
    q: "What platforms do you support?",
    a: "We work with a wide variety of ecommerce platforms including Shopify, WooCommerce, Amazon Seller Central, and more — plus a range of CRM and helpdesk tools to provide seamless backend solutions.",
  },
  {
    category: "Support",
    q: "Do you provide customer service solutions?",
    a: "Yes. We specialise in CRM integration, live chat support, email support, and full issue resolution — ensuring your customers get quick, empathetic responses and better service experiences every time.",
  },
  {
    category: "Support",
    q: "How does RIOT Ecommerce reduce support tickets for ecommerce brands?",
    a: "Through self-service options, proactive communication, and streamlined CRM workflows, we reduce ticket volumes by up to 40% — leading to faster response times and measurably better customer experiences.",
  },
  {
    category: "Support",
    q: "Do RIOT Ecommerce offer ongoing support or one-time services?",
    a: "We provide both. Whether you need long-term backend management as a permanent extension of your team, or specific project-based assistance for a one-time deliverable — we have you covered.",
  },
  {
    category: "Support",
    q: "How do I get started with RIOT Ecommerce?",
    a: "Simply reach out at support@riotecommerce.com or through our contact page. We'll discuss your business needs, identify pain points, and create a tailored strategy to enhance your ecommerce operations.",
  },
  {
    category: "Pricing",
    q: "How much do RIOT Ecommerce services cost?",
    a: "Our pricing depends on the services you need, the complexity of your operations, and the level of support required. We offer flexible plans tailored to your business. Contact us for a custom quote — there's no one-size-fits-all here.",
  },
  {
    category: "Security",
    q: "How does RIOT protect my business and customer data?",
    a: "Security is our top priority. We follow strict data protection policies, comply with industry standards, and implement secure practices to safeguard your business and customer information. Your data remains confidential and accessible only to authorised personnel.",
  },
  {
    category: "General",
    q: "What results have you achieved for other ecommerce businesses?",
    a: "We have reduced ticket volumes by 40% for customer support teams, resolved over 1 million support tickets with high efficiency, served 60+ clients across 15+ global markets, and maintained 99.9% accuracy in backend operations.",
  },
  {
    category: "General",
    q: "What are the benefits of working with RIOT Ecommerce?",
    a: "Partnering with us gives you: reduced ticket count and faster customer support, scalable backend operations, secure and reliable data management, expert support for seamless ecommerce workflows, and global expertise with 60+ satisfied clients behind us.",
  },
  {
    category: "General",
    q: "Who are the experts behind RIOT Ecommerce?",
    a: "Our team comprises experienced operations specialists, CRM experts, digital marketers, and ecommerce managers — each bringing deep domain expertise to ensure seamless processes, improved efficiency, and outstanding customer service for your business.",
  },
];

/* ─── HELPERS ───────────────────────────────────────────────────────── */

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase rounded-full border mb-5 ${
      light ? "border-blue-500/30 text-blue-400 bg-blue-500/10"
            : "border-blue-200 text-blue-600 bg-blue-50"
    }`}>{children}</span>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────── */

const FAQ = () => {
  const { loading } = usePageLoader("faq");
  const [openIndex, setOpenIndex]     = useState<number | null>(0);
  const [activeCategory, setCategory] = useState("All");
  const [search, setSearch]           = useState("");

  const filtered = faqs.filter((f) => {
    const matchesCat  = activeCategory === "All" || f.category === activeCategory;
    const matchSearch = search.trim() === "" ||
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchSearch;
  });

  if (loading) return <FaqSkeleton />;

  return (
    <PageFadeIn>
      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#060810] pt-36 pb-32 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-[0.055]" style={{
          backgroundImage: "linear-gradient(#3b82f6 1px,transparent 1px),linear-gradient(90deg,#3b82f6 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}/>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-blue-700/20 blur-[150px] pointer-events-none"/>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"/>
        <div className="absolute top-28 left-10 w-[1px] h-28 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent"/>
        <div className="absolute top-44 right-16 w-[1px] h-20 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"/>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center w-full">
          <AnimatedSection variant="blur">
            <SectionLabel light>FAQ</SectionLabel>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.04] mb-6 tracking-tight">
              Questions?{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
                  We've got answers.
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500/0 via-blue-400/60 to-blue-500/0 rounded-full"/>
              </span>
            </h1>
            <p className="text-lg text-white/45 max-w-xl mx-auto leading-relaxed mb-10">
              Everything you need to know about partnering with RIOT Ecommerce — straight answers, no fluff.
            </p>

            {/* Search bar */}
            <div className="relative max-w-md mx-auto">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"/>
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setOpenIndex(null); }}
                placeholder="Search questions…"
                className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/10 border border-white/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-blue-500/60 focus:bg-white/15 transition-all"
              />
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent"/>
      </section>

      {/* ══ FAQ BODY ══════════════════════════════════════════════════ */}
      <section className="bg-white pt-4 pb-24">
        <div className="max-w-3xl mx-auto px-6">

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setCategory(cat); setOpenIndex(null); }}
                className={`px-4 py-2 rounded-full text-[12px] font-black transition-all duration-200 border-2 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-500 border-gray-100 hover:border-blue-200 hover:text-blue-600"
                }`}
              >
                {cat}
                <span className={`ml-1.5 text-[10px] ${activeCategory === cat ? "text-blue-200" : "text-gray-300"}`}>
                  {cat === "All" ? faqs.length : faqs.filter(f => f.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* No results */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-base font-semibold">No questions found for "{search}"</p>
              <button onClick={() => { setSearch(""); setCategory("All"); }} className="mt-4 text-blue-500 text-sm font-bold hover:underline">
                Clear search
              </button>
            </div>
          )}

          {/* Accordion */}
          <div className="space-y-3">
            {filtered.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={`${activeCategory}-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
                  className={`rounded-2xl border-2 overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "border-blue-200 shadow-lg shadow-blue-50"
                      : "border-gray-100 hover:border-blue-100"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-7 py-5 text-left group"
                  >
                    <div className="flex items-start gap-4 flex-1 pr-4">
                      {/* Category dot */}
                      <span className={`shrink-0 mt-1 w-2 h-2 rounded-full transition-colors ${
                        isOpen ? "bg-blue-500" : "bg-gray-200 group-hover:bg-blue-300"
                      }`}/>
                      <span className={`text-[15px] font-bold leading-snug transition-colors ${
                        isOpen ? "text-blue-600" : "text-[#0a0d14] group-hover:text-blue-600"
                      }`}>
                        {faq.q}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isOpen ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500"
                      }`}
                    >
                      <ChevronDown size={15}/>
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-6 pl-[3.75rem]">
                          <p className="text-gray-500 text-[14px] leading-relaxed">
                            {faq.a}
                          </p>
                          {/* Category badge */}
                          <span className="inline-block mt-4 px-3 py-1 rounded-full text-[10px] font-black tracking-[0.15em] uppercase bg-blue-50 border border-blue-100 text-blue-500">
                            {faq.category}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ STILL HAVE QUESTIONS ══════════════════════════════════════ */}
      <section className="bg-[#f8faff] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">

            {/* Contact card */}
            <AnimatedSection variant="fadeLeft">
              <div className="rounded-3xl bg-[#060810] p-10 h-full flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: "radial-gradient(circle,#3b82f6 1px,transparent 1px)",
                  backgroundSize: "28px 28px",
                }}/>
                <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-700/10 blur-[80px] pointer-events-none"/>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shrink-0">
                    <MessageCircle size={20} className="text-white"/>
                  </div>
                  <h3 className="text-white font-black text-2xl mb-3 leading-tight">
                    Still have a question?
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                    Can't find what you're looking for? Our team responds to every message personally — usually within a few hours.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black text-sm transition-all duration-200 self-start shadow-lg shadow-blue-700/20"
                  >
                    Contact Us
                    <ArrowRight size={14}/>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Quick stats */}
            <AnimatedSection variant="fadeRight" delay={0.1}>
              <div className="grid grid-cols-2 gap-4 h-full">
                {[
                  { v: "< 24h",  l: "Average response time",     icon: Zap },
                  { v: "60+",    l: "Clients trust RIOT",         icon: Zap },
                  { v: "1M+",    l: "Support tickets resolved",   icon: Zap },
                  { v: "99.9%",  l: "Backend accuracy rate",      icon: Zap },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09, duration: 0.45 }}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl bg-white border-2 border-gray-100 p-7 flex flex-col gap-3 hover:border-blue-200 hover:shadow-lg transition-all duration-300 cursor-default"
                  >
                    <p className="text-3xl font-black text-blue-600 tabular-nums leading-none">{s.v}</p>
                    <p className="text-gray-400 text-[13px] leading-snug">{s.l}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      <CTASection />
    </PageFadeIn>
  );
};

export default FAQ;