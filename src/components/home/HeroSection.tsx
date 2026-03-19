import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const words = ["Dominate", "Your", "Marketplace."];

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, hsl(var(--blue-glow)), transparent 70%)" }}
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-wide px-4 sm:px-6 lg:px-8 py-12 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Ecommerce Growth Partners
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-hero-foreground leading-[1.08] mb-6">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`inline-block mr-3 ${i === 2 ? "text-gradient" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base sm:text-lg text-hero-foreground/55 leading-relaxed max-w-lg mb-10"
            >
              We engineer high-performance ecommerce operations — from CRM to fulfillment — that turn growing brands into category leaders.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-glow group">
                Start Scaling <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/how-it-works" className="btn-glow-outline group">
                <Play size={16} className="group-hover:scale-110 transition-transform" /> See How It Works
              </Link>
            </motion.div>
          </div>

          {/* Right — Video mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative glass-panel overflow-hidden shadow-2xl shadow-primary/5">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-6 rounded-md bg-white/5 max-w-xs" />
                </div>
              </div>
              {/* Video */}
              <div className="aspect-video bg-black/50">
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

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-5 -left-5 glass-panel-light px-5 py-3.5 hidden sm:block"
            >
              <p className="text-xs font-bold text-foreground">99% Client Satisfaction</p>
              <p className="text-[10px] text-muted-foreground">Based on 500+ projects</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute -top-4 -right-4 glass-panel-light px-4 py-2.5 hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[11px] font-semibold text-foreground">Live Operations</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
