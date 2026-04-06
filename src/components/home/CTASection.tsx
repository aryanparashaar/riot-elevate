import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Glowing orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 60%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, hsl(var(--blue-glow)), transparent 60%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-wide relative z-10">
        <AnimatedSection variant="scale" className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-hero-foreground leading-tight mb-4">
            Ready to <span className="text-gradient">Outperform</span> Your Competition?
          </h2>
          <p className="text-base sm:text-lg text-hero-foreground/50 leading-relaxed mb-10">
            Book a free strategy call. We'll map out exactly how to unlock your next phase of growth.
          </p>
          <Link
            to="/contact"
            className="btn-glow group text-base px-8 py-4"
          >
            Book Your Strategy Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
