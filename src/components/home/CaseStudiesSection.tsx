import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../SectionHeading";
import AnimatedSection from "../AnimatedSection";

const cases = [
  {
    title: "Global Fashion Brand",
    description: "Overhauled customer support operations, reducing ticket response time by 60%.",
    results: ["-60% Response Time", "+45% CSAT Score", "1M+ Tickets Managed"],
    tag: "CRM Optimization",
  },
  {
    title: "D2C Health & Wellness",
    description: "Implemented end-to-end backend automation across 3 fulfillment centers.",
    results: ["99.2% Order Accuracy", "3x Faster Processing", "$200K Saved Annually"],
    tag: "Backend Operations",
  },
  {
    title: "Multi-Brand Marketplace",
    description: "Built a unified analytics dashboard serving 50+ brand partners.",
    results: ["50+ Brands Onboarded", "Real-Time Analytics", "30% Revenue Increase"],
    tag: "Growth Strategy",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeading
          label="Case Studies"
          title="Real Results, Real Impact"
          description="Explore how we've helped brands transform their ecommerce operations."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
                {/* Color bar */}
                <div className="h-1.5 bg-gradient-to-r from-primary to-blue-400" />
                <div className="p-6 sm:p-8">
                  <span className="inline-block text-xs font-semibold tracking-wide uppercase text-primary mb-3">{item.tag}</span>
                  <h3 className="text-xl font-display font-bold text-card-foreground mb-2 flex items-center gap-2">
                    {item.title}
                    <ArrowUpRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.results.map((r, j) => (
                      <span key={j} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary border border-primary/10">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
