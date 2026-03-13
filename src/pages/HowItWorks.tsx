import AnimatedSection from "@/components/AnimatedSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CTASection from "@/components/home/CTASection";

const HowItWorks = () => {
  return (
    <>
      <section className="bg-hero pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary mb-4">Process</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-hero-foreground leading-tight mb-6">
              How We Work With You
            </h1>
            <p className="text-lg text-hero-foreground/60 leading-relaxed">
              Our structured approach ensures predictable outcomes, clear communication, and measurable results at every stage.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <HowItWorksSection />
      <CTASection />
    </>
  );
};

export default HowItWorks;
