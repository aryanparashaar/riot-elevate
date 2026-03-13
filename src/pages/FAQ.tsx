import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What types of ecommerce businesses do you work with?", a: "We work with D2C brands, multi-brand marketplaces, subscription businesses, and enterprise retailers across all major ecommerce platforms including Shopify, WooCommerce, Magento, and custom-built solutions." },
  { q: "How long does a typical engagement take?", a: "Depending on scope, initial implementations take 4-8 weeks. We then transition to ongoing optimization with monthly reviews. Many clients choose to retain us as long-term growth partners." },
  { q: "What CRM platforms do you support?", a: "We're platform-agnostic but have deep expertise in Zendesk, Freshdesk, Salesforce Service Cloud, Intercom, and Gorgias. We can also build custom workflows on any platform." },
  { q: "Do you offer a free consultation?", a: "Yes! We offer a complimentary 30-minute discovery call where we assess your current operations, identify quick wins, and outline a high-level strategy recommendation." },
  { q: "How do you measure success?", a: "We establish clear KPIs at the start of every engagement — whether that's ticket resolution time, customer satisfaction scores, operational cost reduction, or revenue growth. Every decision is data-backed." },
  { q: "Can you work with our existing team?", a: "Absolutely. We're designed to augment your team, not replace it. We integrate seamlessly with your existing workflows, tools, and communication channels." },
  { q: "What industries do you specialize in?", a: "While we serve all ecommerce verticals, we have particular depth in fashion & apparel, health & wellness, home goods, electronics, and beauty & cosmetics." },
  { q: "What is your pricing model?", a: "We offer flexible pricing including project-based, retainer, and performance-based models. Every engagement starts with a detailed proposal based on your specific needs and goals." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="bg-hero pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary mb-4">FAQ</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-hero-foreground leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-hero-foreground/60 leading-relaxed">
              Everything you need to know about working with RIOT Ecommerce.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                  >
                    <span className="text-base font-display font-semibold text-card-foreground pr-4">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-muted-foreground transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
