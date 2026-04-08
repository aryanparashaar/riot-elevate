import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronDown } from "lucide-react";
import { usePageLoader } from "@/components/skeleton/usePageLoader";
import {
  HomeSkeleton,
  PageFadeIn,
} from "@/components/skeleton/PageSkeletons";
 
const faqs = [
  { q: "What is RIOT Ecommerce, and how can you help my business?", a: "RIOT Ecommerce is a specialized ecommerce business support company that provides backend management, CRM solutions, order processing, inventory management, customer support solutions, Website development and management, Digital marketing and Graphic designing. We help businesses scale efficiently by streamlining operations and enhancing customer satisfaction." },
  { q: "Do you work with startups, or only established ecommerce brands?", a: "We work with businesses of all sizes—whether you're a startup launching your first store or an enterprise looking to optimize your backend processes, we provide customized support to meet your needs." },
  { q: "What ecommerce industries do RIOT Ecommerce support?", a: "We assist all ecommerce industries, including fashion, beauty, electronics, home decor, health & wellness, and more. No matter your niche, we ensure smooth backend operations." },
  { q: "What ecommerce tasks can RIOT Ecommerce handle?", a: "We offer a wide range of services, including: Customer Support & CRM Management – Reducing ticket volume and response time, Order & Inventory Management – Ensuring seamless order processing and stock updates, Product Listing & Optimization – Enhancing visibility and conversion rates, Website Maintenance & Performance Optimization – Keeping your site running smoothly, Process Automation – Saving time with automated workflows." },
  { q: "Do you provide customer service solutions?", a: "Yes! We specialize in CRM integration, chat support, email support, and issue resolution, ensuring your customers get quick responses and better service experiences" },
  { q: "Can you help with ecommerce scaling and automation?", a: "Absolutely! We implement process automation, workflow optimizations, and data-driven strategies to scale your business efficiently." },
  { q: "How RIOT Ecommerce you reduce support tickets for ecommerce brands?", a: "By self-service options, and streamlined CRM workflows, we reduce ticket volumes by up to 40%, leading to faster response times and better customer experiences." },
  { q: "How do I get started with RIOT Ecommerce?", a: "Simply reach out to us on support@riotecommerce.com or here! We’ll discuss your business needs, identify pain points, and create a tailored strategy to enhance your ecommerce operations." },
  { q: "What platforms do you support?", a: "We work with a variety of ecommerce platforms and CRM tools to provide seamless backend solutions." },
  { q: "Do RIOT Ecommerce offer ongoing support or one-time services?", a: " We provide both ongoing support and one-time solutions, depending on your business requirements. Whether you need long-term backend management or specific project-based assistance, we’ve got you covered." },
  { q: "What results have you achieved for other ecommerce businesses?", a: "We have successfully: Reduced ticket volumes by 40% for customer support teams, Resolved over 1 million support tickets with high efficiency, Served 40+ clients across 15+ global markets, Achieved 99.9% accuracy in backend operations." },
  { q: "Who are the experts behind RIOT Ecommerce?", a: "At RIOT Ecommerce, we have a team of experienced professionals.Our experts ensure seamless processes, improved efficiency, and outstanding customer service for your online business." },
  { q: "How does RIOT protect my business and customer data?", a: "Security is our top priority. We follow strict data protection policies, comply with industry standards, and implement secure encryption to safeguard your business and customer information. Your data remains confidential and accessible only to authorized personnel." },
  { q: "How much do RIOT Ecommerce services cost?", a: "Our pricing depends on the services you need, the complexity of your operations, and the level of support required. We offer flexible plans tailored to your business needs. Contact us here for a custom quote." },
  { q: "Does RIOT Ecommerce provide marketing services?", a: "Yes, we also assist with marketing-related services, such as email automation, digital marketing, and social media marketing." },
  { q: "When should I consider working with RIOT Ecommerce?", a: "If you're struggling with high support tickets, inefficient workflows, backend issues, or need expert guidance to scale your ecommerce business, RIOT Ecommerce is the perfect partner to help you streamline operations and grow efficiently." },
  { q: "What are the benefits of working with RIOT Ecommerce?", a: "By partnering with us, you get: - Reduced ticket count & faster customer support - Scalable backend operations, Secure and reliable data management, Expert support for seamless ecommerce workflows, Global expertise with 40+ satisfied clients." },
 
];
 
const FAQ = () => {
  const { loading } = usePageLoader("faq");
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