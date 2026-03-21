import { motion } from "framer-motion";
import { Headphones, BarChart3, Settings, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import SectionHeading from "../SectionHeading";
import AnimatedSection from "../AnimatedSection";

import customerSupport from "@/assets/services/customer-support.jpg";
import digitalPresence from "@/assets/services/digital-presence.jpg";
import ecommerceOps from "@/assets/services/ecommerce-ops.jpg";
import brandGrowth from "@/assets/services/brand-growth.jpg";

const services = [
  { icon: Headphones, title: "CRM & Customer Experience", description: "Slash ticket volume by 60% with intelligent workflows, AI-powered routing, and proactive support systems that turn customers into advocates.", image: customerSupport },
  { icon: BarChart3, title: "Revenue Analytics", description: "Real-time dashboards and predictive insights that surface growth opportunities and eliminate revenue leaks across every channel.", image: brandGrowth },
  { icon: Settings, title: "Backend Operations", description: "Bulletproof order management, inventory sync, and fulfillment optimization — engineered to scale with zero downtime.", image: ecommerceOps },
  { icon: Zap, title: "Intelligent Automation", description: "Custom automation pipelines that eliminate 80% of repetitive tasks, reducing costs while accelerating every workflow.", image: digitalPresence },
  { icon: ShieldCheck, title: "Marketplace Management", description: "End-to-end Amazon, Walmart, and multi-channel management — from listing optimization to advertising and compliance.", image: ecommerceOps },
  { icon: TrendingUp, title: "Growth Engineering", description: "Data-backed growth strategies that consistently deliver 3-5x ROI through conversion optimization, retention, and market expansion.", image: brandGrowth },
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
                className="relative rounded-2xl border border-border overflow-hidden h-full group cursor-default"
              >
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/60 group-hover:from-card group-hover:via-card/95 group-hover:to-card/70 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-end min-h-[260px]">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-500">
                    <service.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-card-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
