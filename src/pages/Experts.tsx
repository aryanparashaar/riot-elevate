import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/home/CTASection";
import { Linkedin } from "lucide-react";

const experts = [
  { name: "Anika Sharma", role: "CEO & Founder", bio: "15+ years in ecommerce operations. Previously led CX transformation at a Fortune 500 retailer.", initials: "AS" },
  { name: "Marcus Thompson", role: "Head of Strategy", bio: "Growth strategist who's scaled 50+ D2C brands from startup to $10M+ in annual revenue.", initials: "MT" },
  { name: "Yuki Tanaka", role: "Director of Operations", bio: "Operations expert specializing in backend automation and multi-channel fulfillment optimization.", initials: "YT" },
  { name: "Priya Patel", role: "Lead CRM Architect", bio: "CRM specialist with deep expertise in Zendesk, Salesforce, and custom workflow automation.", initials: "PP" },
  { name: "Oliver Brooks", role: "Analytics Lead", bio: "Data scientist turned ecommerce analyst, building real-time dashboards for global brands.", initials: "OB" },
  { name: "Elena Rodriguez", role: "Client Success Manager", bio: "Dedicated to ensuring every client achieves their growth targets with a 98% retention rate.", initials: "ER" },
];

const Experts = () => {
  return (
    <>
      <section className="bg-hero pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary mb-4">Our Team</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-hero-foreground leading-tight mb-6">
              Meet Our Experts
            </h1>
            <p className="text-lg text-hero-foreground/60 leading-relaxed">
              A team of seasoned ecommerce professionals dedicated to delivering exceptional results for every client.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="group p-6 sm:p-8 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <span className="text-primary font-display font-bold text-lg">{expert.initials}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-card-foreground">{expert.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{expert.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{expert.bio}</p>
                  <a href="#" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={14} /> LinkedIn
                  </a>
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

export default Experts;
