import { Headphones, BarChart3, Settings, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import SectionHeading from "../SectionHeading";
import AnimatedSection from "../AnimatedSection";

const services = [
  { icon: Headphones, title: "CRM Solutions", description: "Streamline customer interactions with intelligent CRM workflows that reduce ticket volume and boost satisfaction." },
  { icon: BarChart3, title: "Performance Analytics", description: "Make data-driven decisions with real-time dashboards and actionable insights across your ecommerce ecosystem." },
  { icon: Settings, title: "Backend Operations", description: "Optimize fulfillment, inventory, and order management for seamless backend performance at scale." },
  { icon: Zap, title: "Process Automation", description: "Eliminate repetitive tasks with smart automation that saves time and reduces human error." },
  { icon: ShieldCheck, title: "Quality Assurance", description: "Maintain 99% error-free operations with rigorous quality checks and continuous monitoring." },
  { icon: TrendingUp, title: "Growth Strategy", description: "Develop data-backed growth roadmaps that drive revenue, customer acquisition, and market expansion." },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeading
          label="What We Do"
          title="End-to-End Ecommerce Excellence"
          description="From strategy to execution, we provide comprehensive solutions that transform your ecommerce operations."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group relative p-6 sm:p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
