import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/home/CTASection";
import { Linkedin } from "lucide-react";

const experts = [
  { name: "Anika Sharma", role: "CEO & Founder", bio: "15+ years in ecommerce operations. Led CX transformation for Fortune 500 retailers before founding RIOT to democratize world-class ops.", initials: "AS" },
  { name: "Marcus Thompson", role: "Head of Growth", bio: "Scaled 50+ D2C brands from zero to $10M+ ARR. Obsessed with unit economics and sustainable growth levers.", initials: "MT" },
  { name: "Yuki Tanaka", role: "Director of Operations", bio: "Backend automation architect who's optimized multi-channel fulfillment for brands processing 100K+ orders monthly.", initials: "YT" },
  { name: "Priya Patel", role: "Lead CRM Architect", bio: "CRM systems engineer with deep expertise across Zendesk, Salesforce, Gorgias, and custom-built support stacks.", initials: "PP" },
  { name: "Oliver Brooks", role: "Analytics Lead", bio: "Former data scientist turned ecommerce analyst. Builds real-time intelligence systems that turn data into decisive action.", initials: "OB" },
  { name: "Elena Rodriguez", role: "Client Success Director", bio: "Owns the 98% retention rate. Ensures every client hits their targets through relentless follow-through and proactive strategy.", initials: "ER" },
];

const Experts = () => {
  return (
    <>
      <section className="bg-gradient-hero pt-32 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="blur" className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary mb-4">The Team</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-hero-foreground leading-tight mb-6">
              Operators Who've Been in Your Shoes
            </h1>
            <p className="text-lg text-hero-foreground/50 leading-relaxed">
              Every person on our team has lived the chaos of scaling ecommerce. That's why we're obsessively good at solving it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container-wide relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="card-premium p-6 sm:p-8 h-full group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center mb-5 shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow duration-500">
                    <span className="text-primary-foreground font-display font-bold text-lg">{expert.initials}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-card-foreground">{expert.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{expert.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{expert.bio}</p>
                  <a href="#" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Experts;
