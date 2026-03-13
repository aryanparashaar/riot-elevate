import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const CTASection = () => {
  return (
    <section className="section-padding bg-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--blue-glow)) 0%, transparent 40%)"
      }} />
      <div className="container-wide relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-hero-foreground leading-tight mb-4">
            Ready to Transform Your Ecommerce?
          </h2>
          <p className="text-base sm:text-lg text-hero-foreground/60 leading-relaxed mb-8">
            Schedule a free consultation and discover how RIOT Ecommerce can help you scale smarter, faster, and more efficiently.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:gap-3 text-base"
          >
            Schedule a Consultation <ArrowRight size={20} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
