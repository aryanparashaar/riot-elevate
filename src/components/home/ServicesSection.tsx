import { motion } from "framer-motion";
import { Headphones, BarChart3, Settings, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import SectionHeading from "../SectionHeading";
import AnimatedSection from "../AnimatedSection";

const services = [
  { icon: Headphones, title: "CRM & Customer Experience", description: "Slash ticket volume by 60% with intelligent workflows, AI-powered routing, and proactive support systems that turn customers into advocates." },
  { icon: BarChart3, title: "Revenue Analytics", description: "Real-time dashboards and predictive insights that surface growth opportunities and eliminate revenue leaks across every channel." },
  { icon: Settings, title: "Backend Operations", description: "Bulletproof order management, inventory sync, and fulfillment optimization — engineered to scale with zero downtime." },
  { icon: Zap, title: "Intelligent Automation", description: "Custom automation pipelines that eliminate 80% of repetitive tasks, reducing costs while accelerating every workflow." },
  { icon: ShieldCheck, title: "Marketplace Management", description: "End-to-end Amazon, Walmart, and multi-channel management — from listing optimization to advertising and compliance." },
  { icon: TrendingUp, title: "Growth Engineering", description: "Data-backed growth strategies that consistently deliver 3-5x ROI through conversion optimization, retention, and market expansion." },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container-wide relative z-10">
        <SectionHeading
          label="What We Do"
          title="Full-Stack Ecommerce Operations"
          description="Every service engineered to remove friction, unlock growth, and give your team leverage to move faster."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="card-premium p-6 sm:p-8 h-full group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                  <service.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-display font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
