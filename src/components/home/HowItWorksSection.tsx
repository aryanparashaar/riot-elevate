import { MessageSquare, Target, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "../SectionHeading";
import AnimatedSection from "../AnimatedSection";

const steps = [
  { icon: MessageSquare, step: "01", title: "Consultation", description: "We dive deep into your business goals, pain points, and growth aspirations to understand your unique needs." },
  { icon: Target, step: "02", title: "Strategy", description: "Our experts craft a tailored ecommerce strategy with clear milestones, KPIs, and actionable roadmaps." },
  { icon: Rocket, step: "03", title: "Implementation", description: "We deploy solutions with precision — from CRM setup to backend optimization — with minimal disruption." },
  { icon: TrendingUp, step: "04", title: "Growth & Optimization", description: "Continuous monitoring, A/B testing, and iterative improvements to maximize ROI and scale sustainably." },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-hero">
      <div className="container-wide">
        <SectionHeading
          label="How It Works"
          title="Our Proven Process"
          description="A structured approach that delivers measurable results every time."
          light
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                <span className="text-5xl font-display font-bold text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">
                  {step.step}
                </span>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <step.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-hero-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-hero-foreground/50 leading-relaxed">{step.description}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/10" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
