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
    <AnimatedSection className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12 lg:mb-16`}>
      {label && (
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary mb-4">
          {label}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight ${light ? "text-hero-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? "text-hero-foreground/60" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
};

export default SectionHeading;
