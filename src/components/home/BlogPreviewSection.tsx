import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeading from "../SectionHeading";
import AnimatedSection from "../AnimatedSection";

export const blogPosts = [
  {
    slug: "ecommerce-customer-retention-strategies",
    title: "7 Proven Customer Retention Strategies for Ecommerce in 2025",
    excerpt: "Discover data-backed tactics to keep your customers coming back and increase lifetime value by up to 300%.",
    category: "Strategy",
    readTime: "6 min read",
    author: "RIOT Team",
    date: "March 10, 2026",
    content: `Customer retention is the backbone of sustainable ecommerce growth. While acquiring new customers is important, retaining existing ones is 5-7x more cost-effective. Here are seven proven strategies that leading brands are using in 2025.\n\n## 1. Personalized Post-Purchase Journeys\n\nThe moment a customer completes a purchase is just the beginning. Design automated email sequences that provide value — shipping updates, usage tips, complementary product recommendations — to keep your brand top of mind.\n\n## 2. Loyalty Programs That Actually Work\n\nMove beyond simple point systems. Tiered loyalty programs with exclusive perks, early access, and experiential rewards drive 2.5x higher engagement than traditional models.\n\n## 3. Proactive Customer Support\n\nDon't wait for problems. Use predictive analytics to identify at-risk customers and reach out before they churn. Brands using proactive support see 25% lower churn rates.\n\n## 4. Community Building\n\nCreate spaces where your customers can connect with each other and your brand. Whether it's a Facebook group, Discord server, or in-app community, belonging drives loyalty.\n\n## 5. Subscription & Replenishment Models\n\nFor consumable products, offering auto-replenishment with a small discount locks in recurring revenue while providing convenience to customers.\n\n## 6. Data-Driven Personalization\n\nUse purchase history, browsing behavior, and preference data to deliver hyper-personalized experiences across email, web, and ads.\n\n## 7. Exceptional Unboxing Experiences\n\nPhysical touchpoints matter. Invest in packaging, handwritten notes, and surprise gifts to create shareable moments that drive word-of-mouth.`,
  },
  {
    slug: "automating-ecommerce-operations",
    title: "The Complete Guide to Automating Your Ecommerce Operations",
    excerpt: "Learn how to identify automation opportunities and implement solutions that save time and reduce errors.",
    category: "Operations",
    readTime: "8 min read",
    author: "RIOT Team",
    date: "March 5, 2026",
    content: `Automation is no longer optional for ecommerce businesses that want to scale efficiently. This guide walks you through the key areas where automation delivers the highest ROI.\n\n## Order Processing\n\nAutomate order routing, fraud detection, and fulfillment assignment to reduce processing time from hours to minutes.\n\n## Inventory Management\n\nSet up automated reorder points, supplier notifications, and stock level alerts to prevent stockouts and overstock situations.\n\n## Customer Service\n\nDeploy AI-powered chatbots for common queries, automated ticket routing, and self-service portals to handle up to 60% of support volume.\n\n## Marketing Workflows\n\nAutomate email campaigns, social media posting, and ad optimization to maintain consistent marketing output without manual effort.\n\n## Reporting & Analytics\n\nSchedule automated reports and set up real-time dashboards so your team always has access to the metrics that matter.`,
  },
  {
    slug: "scaling-customer-support-ecommerce",
    title: "How to Scale Customer Support Without Sacrificing Quality",
    excerpt: "Strategies for growing your support team and systems while maintaining the personal touch customers expect.",
    category: "Customer Experience",
    readTime: "5 min read",
    author: "RIOT Team",
    date: "February 28, 2026",
    content: `Scaling customer support is one of the biggest challenges growing ecommerce brands face. Here's how to do it right.\n\n## Build a Knowledge Base First\n\nBefore hiring more agents, create comprehensive self-service resources. A well-structured FAQ and help center can deflect 30-40% of incoming tickets.\n\n## Implement Tiered Support\n\nNot all issues require the same level of expertise. Create tiers so simple queries are handled quickly while complex issues get specialist attention.\n\n## Use AI as an Augmentation Tool\n\nAI shouldn't replace human agents — it should empower them. Use AI for suggested responses, sentiment analysis, and automatic categorization.\n\n## Measure What Matters\n\nTrack CSAT, first response time, resolution time, and ticket deflection rate. These metrics tell you if you're scaling effectively or just adding headcount.`,
  },
];

const BlogPreviewSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeading
          label="From Our Blog"
          title="Insights & Resources"
          description="Expert insights on ecommerce operations, growth strategies, and industry trends."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                <div className="h-44 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-primary/10">{post.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
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
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
