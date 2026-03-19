import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "../SectionHeading";
import AnimatedSection from "../AnimatedSection";

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "Luxe Apparel Co.",
    text: "RIOT didn't just fix our support — they re-engineered it. Ticket resolution dropped 55%, and our CSAT has never been higher. It felt like adding a best-in-class ops team overnight.",
    role: "Head of Operations",
  },
  {
    name: "James Chen",
    company: "VitaWell Supplements",
    text: "The automation they built saved us $200K in year one. But more importantly, it freed our team to focus on growth instead of firefighting. That leverage is invaluable.",
    role: "CEO & Co-Founder",
  },
  {
    name: "Maria Gonzalez",
    company: "Casa Living",
    text: "Working with RIOT felt like having elite co-founders for operations. Proactive, data-obsessed, and always three steps ahead of the problems we hadn't even seen yet.",
    role: "VP of Digital",
  },
  {
    name: "David Park",
    company: "TechGear Pro",
    text: "Their analytics dashboard gave us visibility we never had. We went from gut-feel decisions to real-time, data-backed moves that directly moved revenue.",
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
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding bg-surface-offwhite relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container-wide relative z-10">
        <SectionHeading
          label="Client Voices"
          title="Trusted by Industry Leaders"
          description="The brands we serve don't just grow — they dominate their categories."
        />
        <AnimatedSection variant="scale">
          <div className="relative max-w-3xl mx-auto">
            <div className="relative rounded-2xl border border-border bg-card p-8 sm:p-12 shadow-lg overflow-hidden">
              <Quote size={80} className="absolute -top-2 -right-2 text-primary/[0.04]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="min-h-[160px] flex flex-col justify-center"
                >
                  <p className="text-lg sm:text-xl text-card-foreground leading-relaxed mb-8 italic">
                    "{testimonials[current].text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center shadow-lg shadow-primary/20">
                      <span className="text-primary-foreground font-display font-bold text-sm">
                        {testimonials[current].name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-card-foreground">{testimonials[current].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[current].role} · {testimonials[current].company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary/30 hover:shadow-md transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-primary shadow-sm shadow-primary/30" : "w-2 bg-border hover:bg-muted-foreground/30"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary/30 hover:shadow-md transition-all duration-300"
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
