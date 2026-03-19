import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What types of ecommerce businesses do you work with?", a: "We partner with D2C brands, multi-brand marketplaces, subscription businesses, and enterprise retailers across Shopify, WooCommerce, Magento, Amazon, Walmart, and custom platforms. If you sell online, we can optimize it." },
  { q: "How quickly can we expect results?", a: "Most clients see measurable improvements within the first 30 days. Full implementations typically take 4-8 weeks, with ongoing optimization delivering compounding results month over month." },
  { q: "What CRM and support platforms do you work with?", a: "We're platform-agnostic with deep expertise in Zendesk, Freshdesk, Salesforce Service Cloud, Intercom, Gorgias, and custom-built solutions. We adapt to your stack." },
  { q: "Do you offer a free consultation?", a: "Yes — a complimentary 30-minute strategy call where we audit your current operations, identify quick wins, and outline a high-level growth recommendation. No strings attached." },
  { q: "How do you measure success?", a: "We establish clear KPIs upfront — ticket resolution time, CSAT scores, operational cost reduction, revenue growth, or whatever matters most to your business. Every decision is data-backed and auditable." },
  { q: "Can you work alongside our existing team?", a: "Absolutely. We're designed to augment, not replace. We integrate into your existing workflows, tools, and communication channels — operating as an embedded extension of your team." },
  { q: "What industries do you specialize in?", a: "While we serve all ecommerce verticals, we have particular depth in fashion & apparel, health & wellness, home goods, electronics, and beauty & cosmetics." },
  { q: "What does pricing look like?", a: "We offer project-based, retainer, and performance-based models. Every engagement starts with a detailed proposal tailored to your specific scope, goals, and timeline." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="bg-gradient-hero pt-32 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="blur" className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary mb-4">FAQ</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-hero-foreground leading-tight mb-6">
              Questions? We've Got Answers.
            </h1>
            <p className="text-lg text-hero-foreground/50 leading-relaxed">
              Everything you need to know about partnering with RIOT Ecommerce.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container-wide max-w-3xl mx-auto relative z-10">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.div
                  className="card-premium overflow-hidden"
                  whileHover={{ scale: 1.005 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                  >
                    <span className="text-base font-display font-semibold text-card-foreground pr-4">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} className="shrink-0 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
