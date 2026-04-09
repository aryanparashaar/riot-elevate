import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Clock, Search, ArrowUpRight, Zap,
  TrendingUp, Package, Headphones, Globe, Target, BarChart2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import { usePageLoader } from "@/components/skeleton/usePageLoader";
import { BlogSkeleton, PageFadeIn } from "@/components/skeleton/PageSkeletons";

/* ─── STATIC BLOG DATA ──────────────────────────────────────────────── */

const categories = ["All", "Operations", "Branding", "Support", "Growth", "Digital"];

const blogPosts = [
  {
    slug: "reduce-ecommerce-support-tickets",
    category: "Support",
    icon: Headphones,
    accent: "#10b981",
    title: "How to Reduce Ecommerce Support Tickets by 40% Without Sacrificing Quality",
    excerpt: "Support tickets are the silent killer of ecommerce margins. Here's the exact framework we use to cut volume while actually improving customer satisfaction scores.",
    date: "Mar 18, 2025",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "vendor-management-playbook",
    category: "Operations",
    icon: Package,
    accent: "#3b82f6",
    title: "The Vendor Management Playbook: How Top D2C Brands Never Run Out of Stock",
    excerpt: "Stockouts are avoidable. We break down the vendor relationship structures and inventory signals that keep 60+ brands running without disruption.",
    date: "Feb 28, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "brand-identity-ecommerce-trust",
    category: "Branding",
    icon: Target,
    accent: "#f59e0b",
    title: "Why Brand Identity Is Your Strongest Pricing Tool in Ecommerce",
    excerpt: "Customers don't just buy products — they buy identities. Here's how a cohesive brand system lets you charge premium prices and win loyalty.",
    date: "Feb 14, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "sop-creation-ecommerce-operations",
    category: "Operations",
    icon: BarChart2,
    accent: "#3b82f6",
    title: "SOPs: The Unsexy Secret Behind Every Scalable Ecommerce Operation",
    excerpt: "Most ecommerce founders hate documentation. The ones who do it anyway scale faster, make fewer errors, and sleep better. We'll show you how.",
    date: "Jan 30, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "scaling-d2c-with-crm",
    category: "Growth",
    icon: TrendingUp,
    accent: "#8b5cf6",
    title: "Scaling D2C Brands With CRM: Turning One-Time Buyers Into Loyal Customers",
    excerpt: "A well-configured CRM isn't just a support tool — it's a revenue engine. Here's how we use customer data to drive repeat purchases at scale.",
    date: "Jan 15, 2025",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "ecommerce-website-conversion-rate",
    category: "Digital",
    icon: Globe,
    accent: "#ec4899",
    title: "10 Website Changes That Doubled Conversion Rates for Our Clients",
    excerpt: "Traffic is expensive. Conversion is leverage. We analysed 60+ ecommerce stores and found the same 10 friction points killing sales — here's how to fix them.",
    date: "Jan 3, 2025",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "order-fulfillment-best-practices",
    category: "Operations",
    icon: Package,
    accent: "#3b82f6",
    title: "Order Fulfillment Best Practices: From Placement to Doorstep",
    excerpt: "Fulfillment errors don't just cost money — they cost trust. Here's the end-to-end process we've refined across 1M+ orders to keep customers happy.",
    date: "Dec 20, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "digital-marketing-ecommerce-roi",
    category: "Digital",
    icon: Globe,
    accent: "#ec4899",
    title: "Paid vs Organic: Where Should Your Ecommerce Marketing Budget Go in 2025?",
    excerpt: "The answer isn't binary — it's strategic. We break down exactly how to allocate across channels based on your stage, margin, and growth goals.",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "customer-satisfaction-metrics",
    category: "Support",
    icon: Headphones,
    accent: "#10b981",
    title: "The 5 Customer Satisfaction Metrics Every Ecommerce Brand Must Track",
    excerpt: "CSAT, NPS, FRT, FCR, CES — not just acronyms. These five numbers tell you everything about your support health and customer retention trajectory.",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    featured: false,
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

/* ─── FEATURED POST ─────────────────────────────────────────────────── */

function FeaturedPost({ post }: { post: typeof blogPosts[0] }) {
  const Icon = post.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group rounded-3xl overflow-hidden border-2 border-gray-100 bg-white hover:border-blue-200 hover:shadow-2xl transition-all duration-300 lg:grid lg:grid-cols-[1.2fr_1fr] mb-6"
    >
      {/* Visual panel */}
      <div
        className="relative h-64 lg:h-full min-h-[260px] flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${post.accent}18, ${post.accent}08)` }}
      >
        {/* Big faint label */}
        <span
          className="absolute text-[7rem] font-black select-none leading-none opacity-[0.06] pointer-events-none"
          style={{ color: post.accent }}
        >
          {post.category}
        </span>
        {/* Icon circle */}
        <div
          className="relative w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500"
          style={{ background: `linear-gradient(135deg, ${post.accent}, ${post.accent}bb)` }}
        >
          <Icon size={36} className="text-white" strokeWidth={1.8} />
        </div>
        {/* Featured badge */}
        <div className="absolute top-5 left-5">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#060810]/70 backdrop-blur-sm border border-white/15 text-white text-[10px] font-black tracking-wider uppercase">
            <Zap size={9} className="text-blue-400" /> Featured
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-10 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="px-3 py-1 rounded-full text-[10px] font-black tracking-[0.15em] uppercase border"
            style={{ color: post.accent, borderColor: `${post.accent}40`, background: `${post.accent}10` }}
          >
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-gray-400 text-[11px] font-semibold">
            <Clock size={11} />{post.readTime}
          </span>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h2 className="font-black text-[#0a0d14] text-2xl sm:text-3xl leading-snug mb-4 group-hover:text-blue-600 transition-colors duration-200">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-300 text-[12px] font-semibold">{post.date}</span>
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-black transition-all duration-200 self-start"
          >
            Read Article <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── POST CARD ─────────────────────────────────────────────────────── */

function PostCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const Icon = post.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group rounded-3xl overflow-hidden border-2 border-gray-100 bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Visual header */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden shrink-0"
        style={{ background: `linear-gradient(135deg, ${post.accent}15, ${post.accent}06)` }}
      >
        <span
          className="absolute text-[5rem] font-black select-none leading-none opacity-[0.07] pointer-events-none"
          style={{ color: post.accent }}
        >
          {post.category}
        </span>
        <div
          className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500"
          style={{ background: `linear-gradient(135deg, ${post.accent}, ${post.accent}bb)` }}
        >
          <Icon size={24} className="text-white" strokeWidth={1.8} />
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-black tracking-[0.15em] uppercase border"
            style={{ color: post.accent, borderColor: `${post.accent}40`, background: `${post.accent}10` }}
          >
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-gray-300 text-[11px] font-semibold">
            <Clock size={10} />{post.readTime}
          </span>
        </div>

        <Link to={`/blog/${post.slug}`}>
          <h3 className="font-black text-[#0a0d14] text-base leading-snug mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-[13px] leading-relaxed flex-1 mb-5 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-5 border-t border-gray-100">
          <span className="text-gray-300 text-[11px] font-semibold">{post.date}</span>
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-blue-600 text-[12px] font-black hover:gap-2.5 transition-all duration-200 group/link"
          >
            Read more
            <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────── */

const Blog = () => {
  const { loading }                   = usePageLoader("blog");
  const [activeCategory, setCategory] = useState("All");
  const [search, setSearch]           = useState("");

  const filtered = blogPosts.filter((p) => {
    const matchesCat  = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = search.trim() === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchSearch;
  });

  const featured = filtered.find((p) => p.featured);
  const rest     = filtered.filter((p) => !p.featured);

  if (loading) return <BlogSkeleton />;

  return (
    <PageFadeIn>
      {/* ══ HERO ════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#060810] pt-36 pb-32 min-h-[62vh] flex items-center">
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
            <SectionLabel light>Blog</SectionLabel>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.04] mb-6 tracking-tight">
              The Growth{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
                  Playbook
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500/0 via-blue-400/60 to-blue-500/0 rounded-full"/>
              </span>
            </h1>
            <p className="text-lg text-white/45 max-w-xl mx-auto leading-relaxed mb-10">
              Frameworks, case studies, and hard-won insights from scaling 60+ ecommerce brands globally.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"/>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles…"
                className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/10 border border-white/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-blue-500/60 focus:bg-white/15 transition-all"
              />
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent"/>
      </section>

      {/* ══ POSTS ════════════════════════════════════════════════════ */}
      <section className="bg-white pt-4 pb-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-[12px] font-black transition-all duration-200 border-2 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-500 border-gray-100 hover:border-blue-200 hover:text-blue-600"
                }`}
              >
                {cat}
                <span className={`ml-1.5 text-[10px] ${activeCategory === cat ? "text-blue-200" : "text-gray-300"}`}>
                  {cat === "All" ? blogPosts.length : blogPosts.filter(p => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Search result count */}
          {search.trim() && (
            <p className="text-gray-400 text-sm mb-8">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} for{" "}
              <span className="font-bold text-[#0a0d14]">"{search}"</span>
              {" "}<button onClick={() => setSearch("")} className="text-blue-500 hover:text-blue-600 underline">Clear</button>
            </p>
          )}

          {/* No results */}
          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-gray-400 text-lg font-semibold">No articles found.</p>
              <button onClick={() => { setSearch(""); setCategory("All"); }} className="mt-4 text-blue-500 text-sm font-bold hover:underline">
                View all articles
              </button>
            </div>
          )}

          {/* Featured */}
          {featured && activeCategory === "All" && !search.trim() && (
            <FeaturedPost post={featured} />
          )}

          {/* Grid */}
          {rest.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(activeCategory === "All" && !search.trim() ? rest : filtered).map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </PageFadeIn>
  );
};

export default Blog;