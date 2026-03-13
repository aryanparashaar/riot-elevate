import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "../SectionHeading";
import AnimatedSection from "../AnimatedSection";

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "Luxe Apparel Co.",
    text: "RIOT Ecommerce transformed our customer service operations. Our ticket resolution time dropped by 55%, and customer satisfaction scores have never been higher.",
    role: "Head of Operations",
  },
  {
    name: "James Chen",
    company: "VitaWell Supplements",
    text: "The backend automation they implemented saved us over $200K in the first year. Their team truly understands the nuances of ecommerce at scale.",
    role: "CEO",
  },
  {
    name: "Maria Gonzalez",
    company: "Casa Living",
    text: "Working with RIOT felt like having an in-house team. They were proactive, data-driven, and always aligned with our growth objectives.",
    role: "VP of Digital",
  },
  {
    name: "David Park",
    company: "TechGear Pro",
    text: "Their analytics dashboard gave us visibility we never had before. We're now making decisions backed by real-time data, not guesswork.",
    role: "CTO",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding bg-surface-offwhite">
      <div className="container-wide">
        <SectionHeading
          label="Testimonials"
          title="Trusted by Leading Brands"
          description="Hear what our clients have to say about working with RIOT Ecommerce."
        />
        <AnimatedSection>
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 sm:p-12 shadow-sm relative overflow-hidden">
              <Quote size={48} className="absolute top-6 right-6 text-primary/5" />
              <div className="min-h-[140px] flex flex-col justify-center">
                <p className="text-lg sm:text-xl text-card-foreground leading-relaxed mb-6 italic">
                  "{testimonials[current].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-display font-bold text-sm">
                      {testimonials[current].name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-card-foreground text-sm">{testimonials[current].name}</p>
                    <p className="text-xs text-muted-foreground">{testimonials[current].role} · {testimonials[current].company}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-primary" : "w-1.5 bg-border"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
