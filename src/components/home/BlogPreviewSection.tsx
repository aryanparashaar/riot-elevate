import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeading from "../SectionHeading";
import AnimatedSection from "../AnimatedSection";

export const blogPosts = [
  {
    slug: "ecommerce-customer-retention-strategies",
    title: "7 Retention Plays That Turned One-Time Buyers into Lifetime Customers",
    excerpt: "Data-backed tactics to boost LTV by up to 300% — without increasing ad spend by a single dollar.",
    category: "Strategy",
    readTime: "6 min read",
    author: "RIOT Team",
    date: "March 10, 2026",
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
    content: `Scaling customer support is one of the biggest challenges growing ecommerce brands face. Here's how to do it right.\n\n## Build a Knowledge Base First\n\nBefore hiring more agents, create comprehensive self-service resources. A well-structured FAQ and help center can deflect 30-40% of incoming tickets.\n\n## Implement Tiered Support\n\nNot all issues require the same level of expertise. Create tiers so simple queries are handled quickly while complex issues get specialist attention.\n\n## Use AI as an Augmentation Tool\n\nAI shouldn't replace human agents — it should empower them. Use AI for suggested responses, sentiment analysis, and automatic categorization.\n\n## Measure What Matters\n\nTrack CSAT, first response time, resolution time, and ticket deflection rate. These metrics tell you if you're scaling effectively or just adding headcount.`,
  },
];

const BlogPreviewSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container-wide relative z-10">
        <SectionHeading
          label="Insights"
          title="Actionable Intelligence"
          description="Battle-tested frameworks, strategies, and playbooks from the frontlines of ecommerce growth."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="card-premium h-full flex flex-col group"
              >
                <div className="h-44 bg-gradient-to-br from-primary/[0.04] to-primary/[0.08] flex items-center justify-center relative overflow-hidden">
                  <span className="text-5xl font-display font-bold text-primary/[0.06] group-hover:text-primary/[0.12] transition-colors duration-500">{post.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
