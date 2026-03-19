import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

const SectionHeading = ({ label, title, description, light = false, center = true }: SectionHeadingProps) => {
  return (
    <AnimatedSection variant="blur" className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-14 lg:mb-20`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary mb-4"
        >
          {label}
        </motion.span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight ${light ? "text-hero-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? "text-hero-foreground/50" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
};

export default SectionHeading;
