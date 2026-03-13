import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-hero min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container-wide px-4 sm:px-6 lg:px-8 py-12 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Ecommerce Growth Partners
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-hero-foreground leading-[1.1] mb-6">
              Scale Your{" "}
              <span className="text-gradient">Ecommerce</span>{" "}
              Operations
            </h1>
            <p className="text-base sm:text-lg text-hero-foreground/60 leading-relaxed max-w-lg mb-8">
              We help brands streamline customer operations, optimize backend processes, and accelerate growth through data-driven ecommerce strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:gap-3"
              >
                Schedule Consultation <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/15 text-hero-foreground font-semibold rounded-lg hover:bg-white/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/5">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-6 rounded-md bg-white/5 max-w-xs" />
                </div>
              </div>
              {/* Hero video */}
              <div className="aspect-video bg-black">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/hero-video.mp4"
                />
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3 hidden sm:block"
            >
              <p className="text-xs font-semibold text-foreground">99% Client Satisfaction</p>
              <p className="text-[10px] text-muted-foreground">Based on 500+ projects</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
