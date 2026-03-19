import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Obsessively Results-Driven", description: "We don't celebrate effort — we celebrate outcomes. Every decision is measured against clear, quantifiable business impact." },
  { icon: Heart, title: "Radically Client-First", description: "Your growth is our growth. We build deep partnerships, not transactional vendor relationships." },
  { icon: Lightbulb, title: "Relentlessly Innovative", description: "We adopt what works before the industry catches on — giving our clients a permanent edge over competitors." },
  { icon: Users, title: "Embedded Collaboration", description: "We operate as an extension of your team — same Slack channels, same rituals, same urgency." },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="blur" className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-hero-foreground leading-tight mb-6">
              The Operations Team Behind Category-Leading Brands
            </h1>
            <p className="text-lg text-hero-foreground/50 leading-relaxed">
              RIOT Ecommerce exists to solve one problem: brands that grow faster than their operations can support. We engineer the systems, processes, and strategies that let you scale without the chaos.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection variant="fadeLeft">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">Built by Operators, for Operators</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We started where you are — buried in tickets, duct-taping fulfillment workflows, and making decisions on gut feel instead of data. We knew there had to be a better way.
                </p>
                <p>
                  Over 8 years, we've resolved more than 1 million support tickets, automated thousands of backend processes, and helped 150+ brands achieve best-in-class operational performance across 15+ countries.
                </p>
                <p>
                  Our playbook is simple: audit ruthlessly, architect precisely, execute relentlessly, and optimize continuously. No fluff. No vanity metrics. Just measurable growth.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeRight" delay={0.2}>
              <div className="rounded-2xl bg-gradient-to-br from-primary/[0.04] to-primary/[0.08] border border-border p-8 sm:p-12">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "8+", label: "Years in the Trenches" },
                    { value: "150+", label: "Brands Transformed" },
                    { value: "15+", label: "Countries Served" },
                    { value: "1M+", label: "Tickets Resolved" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="text-3xl font-display font-bold text-gradient">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface-offwhite relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container-wide relative z-10">
          <SectionHeading label="Our Values" title="What We Stand For" description="The non-negotiable principles behind every engagement, every decision, and every outcome." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="card-premium p-6 text-center h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <v.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-card-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
