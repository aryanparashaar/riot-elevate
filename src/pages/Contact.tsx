import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(100).optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const services = [
  "CRM & Customer Experience",
  "Marketplace Management",
  "Revenue Analytics",
  "Intelligent Automation",
  "Growth Engineering",
  "Backend Operations",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", company: "", service: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <>
      <section className="bg-gradient-hero pt-32 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="blur" className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary mb-4">Contact</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-hero-foreground leading-tight mb-6">
              Let's Build Your Growth Engine
            </h1>
            <p className="text-lg text-hero-foreground/50 leading-relaxed">
              Ready to stop firefighting and start scaling? Book a free strategy call — we'll map your next phase of growth in 30 minutes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <AnimatedSection variant="fadeLeft" className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: Mail, label: "Email", value: "hello@riotecommerce.com" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: MapPin, label: "Location", value: "Global Operations — Remote First" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="card-premium p-6">
                <h3 className="font-display font-semibold text-card-foreground mb-2">Free Strategy Call</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  30-minute discovery session. We'll audit your operations, identify quick wins, and outline a roadmap — no strings attached.
                </p>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection variant="fadeRight" delay={0.15} className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="card-premium p-8 sm:p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-card-foreground mb-2">We're On It.</h3>
                  <p className="text-muted-foreground">Our team will reach out within 24 hours with next steps. Looking forward to building something great together.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="card-premium p-6 sm:p-8 space-y-5">
                  {/* Honeypot */}
                  <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-1.5">Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-1.5">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-1.5">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-1.5">Service Required *</label>
                      <select
                        value={form.service}
                        onChange={(e) => handleChange("service", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-1.5">Message *</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                      placeholder="Tell us about your challenges and growth goals..."
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="btn-glow w-full sm:w-auto justify-center"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
