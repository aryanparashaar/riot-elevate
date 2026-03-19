import AnimatedSection from "@/components/AnimatedSection";
import ServicesSection from "@/components/home/ServicesSection";
import CTASection from "@/components/home/CTASection";

const Services = () => {
  return (
    <>
      <section className="bg-gradient-hero pt-32 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="blur" className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary mb-4">Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-hero-foreground leading-tight mb-6">
              Full-Stack Ecommerce Operations
            </h1>
            <p className="text-lg text-hero-foreground/50 leading-relaxed">
              From CRM transformation to marketplace domination — we build the operational backbone that lets high-growth brands scale without breaking.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <ServicesSection />
      <CTASection />
    </>
  );
};

export default Services;
