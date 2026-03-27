import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock, User, Tag, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export const blogPosts = [
  {
    slug: "ecommerce-customer-retention-strategies",
    title: "7 Retention Plays That Turned One-Time Buyers into Lifetime Customers",
    excerpt: "Data-backed tactics to boost LTV by up to 300% — without increasing ad spend by a single dollar.",
    category: "Strategy",
    readTime: "6 min read",
    author: "RIOT Team",
    date: "March 10, 2026",
    accent: "#3b82f6",
    gradient: "from-blue-600 to-cyan-500",
    emoji: "📈",
    image: "",
    content: `Customer retention is the backbone of sustainable ecommerce growth. While acquiring new customers is important, retaining existing ones is 5-7x more cost-effective. Here are seven proven strategies that leading brands are using in 2025.\n\n## 1. Personalized Post-Purchase Journeys\n\nThe moment a customer completes a purchase is just the beginning. Design automated email sequences that provide value — shipping updates, usage tips, complementary product recommendations — to keep your brand top of mind.\n\n## 2. Loyalty Programs That Actually Work\n\nMove beyond simple point systems. Tiered loyalty programs with exclusive perks, early access, and experiential rewards drive 2.5x higher engagement than traditional models.\n\n## 3. Proactive Customer Support\n\nDon't wait for problems. Use predictive analytics to identify at-risk customers and reach out before they churn. Brands using proactive support see 25% lower churn rates.\n\n## 4. Community Building\n\nCreate spaces where your customers can connect with each other and your brand. Whether it's a Facebook group, Discord server, or in-app community, belonging drives loyalty.\n\n## 5. Subscription & Replenishment Models\n\nFor consumable products, offering auto-replenishment with a small discount locks in recurring revenue while providing convenience to customers.\n\n## 6. Data-Driven Personalization\n\nUse purchase history, browsing behavior, and preference data to deliver hyper-personalized experiences across email, web, and ads.\n\n## 7. Exceptional Unboxing Experiences\n\nPhysical touchpoints matter. Invest in packaging, handwritten notes, and surprise gifts to create shareable moments that drive word-of-mouth.`,
  },
  {
    slug: "automating-ecommerce-operations",
    title: "The Automation Playbook: Cut Operational Costs by 40% in 90 Days",
    excerpt: "A step-by-step framework for identifying, prioritizing, and deploying automation that actually moves the needle.",
    category: "Operations",
    readTime: "8 min read",
    author: "RIOT Team",
    date: "March 5, 2026",
    accent: "#f59e0b",
    gradient: "from-amber-500 to-orange-400",
    emoji: "⚙️",
    image: "",
    content: `Automation is no longer optional for ecommerce businesses that want to scale efficiently. This guide walks you through the key areas where automation delivers the highest ROI.\n\n## Order Processing\n\nAutomate order routing, fraud detection, and fulfillment assignment to reduce processing time from hours to minutes.\n\n## Inventory Management\n\nSet up automated reorder points, supplier notifications, and stock level alerts to prevent stockouts and overstock situations.\n\n## Customer Service\n\nDeploy AI-powered chatbots for common queries, automated ticket routing, and self-service portals to handle up to 60% of support volume.\n\n## Marketing Workflows\n\nAutomate email campaigns, social media posting, and ad optimization to maintain consistent marketing output without manual effort.\n\n## Reporting & Analytics\n\nSchedule automated reports and set up real-time dashboards so your team always has access to the metrics that matter.`,
  },
  {
    slug: "scaling-customer-support-ecommerce",
    title: "Scale Support 10x Without Hiring 10x More Agents",
    excerpt: "How the smartest ecommerce brands handle exponential ticket growth while keeping quality and cost in check.",
    category: "Customer Experience",
    readTime: "5 min read",
    author: "RIOT Team",
    date: "February 28, 2026",
    accent: "#10b981",
    gradient: "from-emerald-500 to-teal-400",
    emoji: "🎧",
    image: "",
    content: `Scaling customer support is one of the biggest challenges growing ecommerce brands face. Here's how to do it right.\n\n## Build a Knowledge Base First\n\nBefore hiring more agents, create comprehensive self-service resources. A well-structured FAQ and help center can deflect 30-40% of incoming tickets.\n\n## Implement Tiered Support\n\nNot all issues require the same level of expertise. Create tiers so simple queries are handled quickly while complex issues get specialist attention.\n\n## Use AI as an Augmentation Tool\n\nAI shouldn't replace human agents — it should empower them. Use AI for suggested responses, sentiment analysis, and automatic categorization.\n\n## Measure What Matters\n\nTrack CSAT, first response time, resolution time, and ticket deflection rate. These metrics tell you if you're scaling effectively or just adding headcount.`,
  },
];

/* ─── BLOG CARD ─────────────────────────────────────────────────── */
const BlogCard = ({
  post,
  index,
  featured = false,
}: {
  post: typeof blogPosts[0];
  index: number;
  featured?: boolean;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative rounded-3xl overflow-hidden h-full flex flex-col cursor-pointer"
      style={{
        background: "#ffffff",
        border: "1.5px solid #e2e8f0",
        boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${post.accent}40`;
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${post.accent}18, 0 4px 16px rgba(0,0,0,0.06)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#e2e8f0";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
      }}
    >
      {/* ── Banner image / placeholder ── */}
      <div className={`relative overflow-hidden ${featured ? "h-56" : "h-48"}`}>
        {post.image ? (
          <>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, ${post.accent}22 0%, transparent 40%, rgba(255,255,255,0.95) 100%)`,
              }}
            />
          </>
        ) : (
          /* Placeholder — will be replaced by WordPress featured image */
          <div
            className="w-full h-full flex items-center justify-center relative"
            style={{
              background: `linear-gradient(135deg, ${post.accent}12 0%, ${post.accent}06 100%)`,
            }}
          >
            {/* Decorative pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle, ${post.accent}30 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />
            {/* Animated gradient orb */}
            <motion.div
              className="absolute w-48 h-48 rounded-full"
              style={{ background: `radial-gradient(circle, ${post.accent}25, transparent 70%)` }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Central emoji */}
            <div className="relative text-center">
              <motion.div
                className="text-6xl mb-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {post.emoji}
              </motion.div>
              <p
                className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: `${post.accent}20`, color: post.accent }}
              >
                {post.category}
              </p>
            </div>
          </div>
        )}

        {/* Top-left tag badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white z-10"
          style={{ background: post.accent }}
        >
          {post.category}
        </div>

        {/* Top-right arrow — appears on hover */}
        <Link
          to={`/blog/${post.slug}`}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300"
          style={{ background: post.accent }}
        >
          <ArrowUpRight size={14} className="text-white" />
        </Link>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-6">
        {/* Meta row */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
            <Clock size={11} /> {post.readTime}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-200" />
          <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
            <User size={11} /> {post.author}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-200" />
          <span className="text-[11px] text-gray-400 font-medium">{post.date}</span>
        </div>

        {/* Title */}
        <h3
          className="text-base font-extrabold text-[#0a0d14] leading-snug mb-2 tracking-tight transition-colors duration-300 group-hover:text-blue-600"
          style={{ "--hover-color": post.accent } as React.CSSProperties}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
          {post.excerpt}
        </p>

        {/* Bottom: read more + accent bar */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold group/link"
            style={{ color: post.accent }}
          >
            Read Article
            <ArrowRight
              size={13}
              className="group-hover/link:translate-x-1 transition-transform duration-200"
            />
          </Link>
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: `${post.accent}12`, color: post.accent }}
          >
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Sweep bar */}
      <motion.div
        className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r ${post.gradient}`}
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ duration: 1, delay: index * 0.1 + 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
};

/* ─── MAIN SECTION ──────────────────────────────────────────────── */
const BlogPreviewSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 bg-[#f8faff] overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Orbs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.05), transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-4">
              Insights
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a0d14] tracking-tight mb-3 leading-tight">
              Actionable{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                intelligence
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-lg leading-relaxed">
              Battle-tested frameworks, strategies, and playbooks from the
              frontlines of ecommerce growth.
            </p>
          </div>
          <Link
            to="/blog"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 bg-white text-[#0a0d14] text-sm font-bold hover:border-blue-300 hover:text-blue-600 transition-all duration-200 group"
          >
            View All Posts
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} featured={i === 0} />
          ))}
        </div>

        {/* ── WordPress note banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-14 rounded-3xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{
            background: "linear-gradient(135deg, #0a0d14 0%, #0f1628 100%)",
            border: "1.5px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-2xl shrink-0">
              ✍️
            </div>
            <div>
              <p className="text-white font-extrabold text-base mb-0.5">
                Fresh content, always up to date
              </p>
              <p className="text-white/40 text-sm">
                New strategies, case studies, and ecommerce playbooks — published regularly.
              </p>
            </div>
          </div>
          <Link
            to="/blog"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-600/30 group"
          >
            Explore the Blog
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;