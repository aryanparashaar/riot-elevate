import { motion } from "framer-motion";
import { MessageSquare, Target, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "../SectionHeading";
import AnimatedSection from "../AnimatedSection";

const steps = [
  { icon: MessageSquare, step: "01", title: "Discovery", description: "We audit your operations, map pain points, and identify the highest-impact opportunities in your ecommerce stack." },
  { icon: Target, step: "02", title: "Strategic Blueprint", description: "Our team architects a custom playbook with milestones, KPIs, and a clear roadmap tailored to your growth stage." },
  { icon: Rocket, step: "03", title: "Precision Execution", description: "We deploy solutions rapidly — CRM, automation, analytics — with zero disruption to your live operations." },
  { icon: TrendingUp, step: "04", title: "Scale & Optimize", description: "Continuous A/B testing, performance monitoring, and iterative improvements that compound growth month over month." },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="Our Process"
          title="Engineered for Results"
          description="A battle-tested framework that eliminates guesswork and delivers predictable, measurable outcomes."
          light
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative p-6 rounded-2xl glass-panel hover:border-primary/20 transition-all duration-500 group h-full"
              >
                <span className="text-6xl font-display font-bold text-primary/[0.06] absolute top-4 right-4 group-hover:text-primary/[0.12] transition-colors duration-500">
                  {step.step}
                </span>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-500">
                  <step.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-hero-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-hero-foreground/45 leading-relaxed">{step.description}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/10" />
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
