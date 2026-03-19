import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered", description: "Across 15+ countries" },
  { value: 98, suffix: "%", label: "Client Retention", description: "Industry-leading loyalty" },
  { value: 8, suffix: "+", label: "Years of Excellence", description: "Deep domain expertise" },
  { value: 150, suffix: "+", label: "Brands Scaled", description: "From startup to enterprise" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gradient">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="section-padding bg-surface-offwhite relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.12} className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-2xl hover:bg-white/80 transition-colors duration-300"
              >
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
