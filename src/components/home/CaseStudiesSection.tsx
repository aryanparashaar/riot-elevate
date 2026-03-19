import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../SectionHeading";
import AnimatedSection from "../AnimatedSection";

const cases = [
  {
    title: "Global Fashion Retailer",
    description: "Rebuilt their entire CX pipeline — from omnichannel routing to AI-assisted resolution — cutting costs while boosting satisfaction.",
    results: ["-60% Response Time", "+45% CSAT Score", "1M+ Tickets Managed"],
    tag: "CRM Transformation",
  },
  {
    title: "D2C Wellness Brand",
    description: "Engineered end-to-end fulfillment automation across 3 warehouses, delivering near-perfect accuracy at 3x the throughput.",
    results: ["99.2% Order Accuracy", "3x Faster Processing", "$200K Saved/Year"],
    tag: "Operations Automation",
  },
  {
    title: "Multi-Brand Marketplace",
    description: "Built a unified commerce analytics platform serving 50+ brand partners with real-time visibility into every metric that matters.",
    results: ["50+ Brands Onboarded", "Real-Time Dashboards", "+30% Revenue Lift"],
    tag: "Analytics & Growth",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container-wide relative z-10">
        <SectionHeading
          label="Case Studies"
          title="Proof in the Numbers"
          description="Real transformations for brands that needed more than advice — they needed execution."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="card-premium group h-full"
              >
                {/* Gradient bar */}
                <div className="h-1 bg-gradient-to-r from-primary via-blue-400 to-primary/50" />
                <div className="p-6 sm:p-8">
                  <span className="inline-block text-xs font-semibold tracking-wide uppercase text-primary mb-3">{item.tag}</span>
                  <h3 className="text-xl font-display font-bold text-card-foreground mb-2 flex items-center gap-2">
                    {item.title}
                    <ArrowUpRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
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
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
