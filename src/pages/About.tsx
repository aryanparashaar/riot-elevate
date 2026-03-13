import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Results-Driven", description: "Every decision we make is backed by data and measured against clear business outcomes." },
  { icon: Heart, title: "Client-First", description: "Your success is our success. We build long-term partnerships, not transactional relationships." },
  { icon: Lightbulb, title: "Innovation", description: "We stay ahead of ecommerce trends so our clients always have a competitive edge." },
  { icon: Users, title: "Collaboration", description: "We work as an extension of your team, aligning our expertise with your vision." },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-hero-foreground leading-tight mb-6">
              Building the Future of Ecommerce Operations
            </h1>
            <p className="text-lg text-hero-foreground/60 leading-relaxed">
              RIOT Ecommerce was founded with a single mission: to help brands scale their ecommerce operations without the growing pains. We combine deep industry expertise with cutting-edge technology to deliver solutions that drive measurable growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What started as a small team of ecommerce operators frustrated by inefficient processes has grown into a global consultancy serving brands across 15+ countries.
                </p>
                <p>
                  Over the past 8 years, we've resolved over 1 million support tickets, automated thousands of backend processes, and helped our clients achieve a combined 98% customer retention rate.
                </p>
                <p>
                  Our approach is simple: understand the problem deeply, design a data-backed solution, execute with precision, and continuously optimize for growth.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-border p-8 sm:p-12">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "8+", label: "Years in Business" },
                    { value: "150+", label: "Brands Served" },
                    { value: "15+", label: "Countries" },
                    { value: "1M+", label: "Tickets Resolved" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface-offwhite">
        <div className="container-wide">
          <SectionHeading label="Our Values" title="What Drives Us" description="The principles that guide every engagement and decision at RIOT Ecommerce." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-border bg-card text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-card-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
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
