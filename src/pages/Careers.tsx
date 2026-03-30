import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase, MapPin, Clock, ChevronRight, X, Upload, Send,
  Users, TrendingUp, Globe, Award, BookOpen, Heart,
  Zap, Target, Star, Shield, GraduationCap, DollarSign
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

/* ─── Job Data ─── */
const jobListings = [
  {
    id: 1,
    title: "Customer Support Executive",
    department: "Customer Experience",
    location: "Remote / On-site",
    type: "Full-time",
    shortDesc: "Deliver outstanding customer support, resolve queries via email and chat, and ensure every interaction leaves a positive impression.",
    fullDesc: "As a Customer Support Executive at RIOT Ecommerce, you will be the frontline representative ensuring our clients' customers receive exceptional service. You'll handle inquiries, troubleshoot issues, and drive satisfaction metrics across multiple ecommerce platforms.",
    responsibilities: [
      "Handle customer inquiries and resolve issues via email, chat, and ticketing systems",
      "Maintain a high first-response and resolution rate",
      "Collaborate with internal teams to escalate complex issues",
      "Document recurring issues and suggest process improvements",
      "Maintain updated knowledge of client products and policies",
    ],
    requirements: [
      "Excellent written and verbal communication skills in English",
      "1+ years of customer service experience (ecommerce preferred)",
      "Familiarity with helpdesk tools like Zendesk, Freshdesk, or Gorgias",
      "Strong problem-solving and multitasking abilities",
      "Willingness to work in rotational shifts if required",
    ],
    skills: ["Communication", "Problem Solving", "CRM Tools", "Multitasking", "Empathy"],
    hours: "Full-time · Rotational shifts available",
  },
  {
    id: 2,
    title: "Ecommerce Backend Support",
    department: "Operations",
    location: "Remote / On-site",
    type: "Full-time",
    shortDesc: "Manage product listings, process orders, update inventories, and resolve backend issues to keep ecommerce operations seamless.",
    fullDesc: "Join our operations team to ensure the smooth backend functioning of leading ecommerce stores. You'll handle everything from catalog management to order fulfillment, keeping the engine running behind successful online brands.",
    responsibilities: [
      "Manage product listings, descriptions, and pricing across platforms",
      "Process and track orders from placement to delivery",
      "Monitor and update inventory levels in real time",
      "Identify and resolve backend errors and discrepancies",
      "Generate operational reports and performance dashboards",
    ],
    requirements: [
      "Experience with ecommerce platforms (Shopify, Amazon Seller Central, WooCommerce)",
      "Strong attention to detail and organizational skills",
      "Proficiency in Excel/Google Sheets for data management",
      "Ability to work independently and meet deadlines",
      "Basic understanding of ecommerce workflows and logistics",
    ],
    skills: ["Shopify", "Amazon Seller Central", "Excel", "Inventory Management", "Data Entry"],
    hours: "Full-time · Standard business hours",
  },
  {
    id: 3,
    title: "Marketing Intern",
    department: "Marketing",
    location: "Remote",
    type: "Internship",
    shortDesc: "Collaborate with the marketing team to develop strategies that drive traffic, boost brand awareness, and generate qualified leads.",
    fullDesc: "This internship offers hands-on experience in digital marketing within the ecommerce industry. You'll work alongside seasoned marketers to plan and execute campaigns, analyze performance data, and contribute fresh ideas to growing brands.",
    responsibilities: [
      "Assist in creating content for social media, blogs, and email campaigns",
      "Research market trends and competitor strategies",
      "Support SEO and SEM initiatives",
      "Help manage paid advertising campaigns",
      "Track and report on key marketing metrics",
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in Marketing, Communications, or related field",
      "Strong interest in digital marketing and ecommerce",
      "Familiarity with social media platforms and analytics tools",
      "Creative thinking and eagerness to learn",
      "Basic knowledge of Canva, Google Analytics, or similar tools is a plus",
    ],
    skills: ["Social Media", "Content Writing", "SEO Basics", "Analytics", "Canva"],
    hours: "Internship · Flexible hours",
  },
  {
    id: 4,
    title: "Operations Associate",
    department: "Operations",
    location: "On-site",
    type: "Full-time",
    shortDesc: "Coordinate cross-functional operations, streamline workflows, and ensure efficient day-to-day execution across client accounts.",
    fullDesc: "As an Operations Associate, you'll play a critical role in coordinating workflows, managing client deliverables, and ensuring that our ecommerce support services run like clockwork. This is a high-impact role for someone who thrives in fast-paced environments.",
    responsibilities: [
      "Coordinate daily operations across multiple client accounts",
      "Streamline internal workflows and SOPs",
      "Monitor team performance and ensure SLA adherence",
      "Liaise with clients to understand evolving requirements",
      "Prepare reports and presentations for leadership reviews",
    ],
    requirements: [
      "2+ years of experience in operations or project coordination",
      "Strong organizational and communication skills",
      "Proficiency with project management tools (Asana, Trello, Monday.com)",
      "Analytical mindset with attention to KPIs and metrics",
      "Experience in ecommerce or BPO environments is preferred",
    ],
    skills: ["Project Management", "Process Optimization", "Client Relations", "Reporting", "SLA Management"],
    hours: "Full-time · Monday to Saturday",
  },
];

const cultureHighlights = [
  { icon: TrendingUp, title: "Fast-Growing Company", desc: "Be part of a rapidly scaling ecommerce support firm with global reach." },
  { icon: Users, title: "Supportive Team Culture", desc: "Collaborate with driven professionals who celebrate each other's wins." },
  { icon: BookOpen, title: "Learning Opportunities", desc: "Access training programs, mentorship, and hands-on skill development." },
  { icon: Target, title: "Career Growth", desc: "Clear progression paths with performance-based promotions and rewards." },
  { icon: Globe, title: "Global Exposure", desc: "Work with international brands across diverse ecommerce ecosystems." },
  { icon: Zap, title: "Performance-Driven", desc: "Thrive in a results-oriented environment that rewards initiative and impact." },
];

const benefits = [
  { icon: TrendingUp, title: "Career Growth Opportunities", desc: "Clear pathways to advance your career with regular promotions." },
  { icon: GraduationCap, title: "Skill Development", desc: "Continuous learning through training, workshops, and mentorship." },
  { icon: Heart, title: "Supportive Work Culture", desc: "A positive, inclusive environment where everyone's voice matters." },
  { icon: DollarSign, title: "Competitive Compensation", desc: "Fair pay packages with performance-based incentives and bonuses." },
  { icon: Award, title: "Performance Recognition", desc: "Regular rewards and recognition for outstanding contributions." },
  { icon: Star, title: "Learning Environment", desc: "Stay ahead with exposure to the latest ecommerce tools and trends." },
];

const lifeImages = [
  "https://static.wixstatic.com/media/b2a005_a29a46864f254bdda2ef4289f16d2e9d~mv2.jpg/v1/fill/w_635,h_371,fp_0.48_0.31,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG20231016185833~2%20(1).jpg",
  "https://static.wixstatic.com/media/b2a005_fe5c41a6f9dd416a8fa9d07fe3983d7e~mv2.png/v1/fill/w_634,h_371,fp_0.75_0.56,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_3495_HEIC.png",
  "https://static.wixstatic.com/media/b2a005_6444cd1352ca476492139c5f8242bbab~mv2.png/v1/fill/w_634,h_371,fp_0.41_0.36,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_3481_HEIC.png",
  "https://static.wixstatic.com/media/b2a005_8d26f8c4a67b4d60a7f469995e795d43~mv2.png/v1/crop/x_0,y_672,w_4032,h_1087/fill/w_635,h_371,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_9896_HEIC.png",
  "https://static.wixstatic.com/media/b2a005_04e036055e944a63adcb40805e0c0594~mv2.jpeg/v1/fill/w_635,h_372,fp_0.51_0.56,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-04-08%20at%206_16_03%20PM.jpeg",
  "https://static.wixstatic.com/media/b2a005_eabc33643c47471ea0816286f72294ed~mv2.jpeg/v1/fill/w_635,h_372,fp_0.16_0.44,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-06-10%20at%2011_55_43%20AM.jpeg",
];

/* ─── Component ─── */
const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobListings[0] | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", position: "", message: "" });
  const [fileName, setFileName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.position) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Application Submitted!", description: "We'll review your application and get back to you soon." });
    setFormData({ name: "", email: "", phone: "", position: "", message: "" });
    setFileName("");
  };

  const scrollToPositions = () => {
    document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToApply = () => {
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden">
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero pt-24 pb-16">
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/20 mb-6"
            >
              We're Hiring
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] text-hero-foreground"
            >
              Join the Team That Powers{" "}
              <span className="text-gradient">Ecommerce Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-lg sm:text-xl text-hero-foreground/60 leading-relaxed max-w-2xl"
            >
              Build your career with a fast-growing ecommerce support company working with global brands. We're looking for passionate people ready to make an impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button onClick={scrollToPositions} size="lg" className="btn-glow text-base px-8 py-6 rounded-xl">
                View Open Positions
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
              <Button onClick={scrollToApply} variant="outline" size="lg" className="btn-glow-outline text-base px-8 py-6 rounded-xl">
                Apply Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ WHY WORK AT RIOT ══════ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="Culture"
            title="Why Work at RIOT Ecommerce?"
            description="We're building a workplace where ambition meets opportunity — and every team member has the tools to grow."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureHighlights.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08} variant="fadeUp">
                <div className="card-premium p-6 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ OPEN POSITIONS ══════ */}
      <section id="open-positions" className="section-padding bg-surface-offwhite">
        <div className="container-wide">
          <SectionHeading
            label="Opportunities"
            title="Open Positions"
            description="Explore our current openings and find the role that's right for you."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {jobListings.map((job, i) => (
              <AnimatedSection key={job.id} delay={i * 0.1} variant="fadeUp">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="card-premium p-6 cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-md bg-primary/10 text-primary mb-3">
                        {job.department}
                      </span>
                      <h3 className="text-xl font-display font-bold text-foreground">{job.title}</h3>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{job.shortDesc}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{job.type}</span>
                    <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{job.department}</span>
                  </div>
                  <div className="mt-5 pt-5 border-t border-border">
                    <Button size="sm" className="w-full">View Details & Apply</Button>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ JOB DETAIL MODAL ══════ */}
      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader>
                <span className="inline-block px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-md bg-primary/10 text-primary mb-2 w-fit">
                  {selectedJob.department}
                </span>
                <DialogTitle className="text-2xl font-display">{selectedJob.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground mt-1">
                  {selectedJob.location} · {selectedJob.type} · {selectedJob.hours}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">About This Role</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedJob.fullDesc}</p>
                </div>

                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">Responsibilities</h4>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">Requirements</h4>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display font-semibold text-foreground mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((s) => (
                      <span key={s} className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <Button onClick={() => { setSelectedJob(null); scrollToApply(); }} className="w-full btn-glow" size="lg">
                  Apply for This Position
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ══════ LIFE AT RIOT ══════ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="Our Vibe"
            title="Life at RIOT Ecommerce"
            description="Get a glimpse into our workspace, team activities, and the energy that drives us every day."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {lifeImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.08} variant="scale">
                <div className="relative rounded-2xl overflow-hidden group aspect-video">
                  <img
                    src={img}
                    alt={`Life at RIOT Ecommerce ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-hero/0 group-hover:bg-hero/20 transition-colors duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ BENEFITS ══════ */}
      <section className="section-padding bg-surface-offwhite">
        <div className="container-wide">
          <SectionHeading
            label="Perks"
            title="Benefits of Joining RIOT"
            description="We invest in our people so they can do their best work and grow with us."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.08} variant="fadeUp">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-premium p-6 text-center h-full group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                    <b.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ APPLICATION FORM ══════ */}
      <section id="apply-form" className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="Apply"
            title="Submit Your Application"
            description="Fill out the form below and we'll get back to you within 48 hours."
          />
          <div className="max-w-2xl mx-auto">
            <AnimatedSection variant="fadeUp">
              <form onSubmit={handleSubmit} className="card-premium p-6 sm:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your full name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 9876543210" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applying For *</Label>
                    <select
                      id="position"
                      value={formData.position}
                      onChange={e => setFormData(p => ({ ...p, position: e.target.value }))}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a position</option>
                      {jobListings.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume / CV</Label>
                  <label className="flex items-center gap-3 px-4 py-3 rounded-md border border-dashed border-input bg-background cursor-pointer hover:border-primary/40 transition-colors">
                    <Upload className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{fileName || "Click to upload your resume (PDF, DOC)"}</span>
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={e => setFileName(e.target.files?.[0]?.name || "")}
                    />
                  </label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Cover Note (Optional)</Label>
                  <Textarea id="message" placeholder="Tell us why you'd be a great fit..." rows={4} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} />
                </div>
                <Button type="submit" size="lg" className="w-full btn-glow text-base py-6">
                  Submit Application
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="relative py-20 sm:py-28 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        </div>
        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection variant="blur">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-hero-foreground leading-tight">
              Ready to Build Your Career{" "}
              <span className="text-gradient">With Us?</span>
            </h2>
            <p className="mt-5 text-lg text-hero-foreground/50 max-w-xl mx-auto">
              Take the first step towards an exciting career in ecommerce. We'd love to hear from you.
            </p>
            <motion.div
              className="mt-10"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Button onClick={scrollToApply} size="lg" className="btn-glow text-base px-10 py-6 rounded-xl animate-pulse">
                Apply Now
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Careers;
