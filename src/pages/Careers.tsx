import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase, MapPin, Clock, ChevronRight, X, Upload, Send,
  Users, TrendingUp, Globe, Award, BookOpen, Heart,
  Zap, Target, Star, Shield, GraduationCap, DollarSign,
  CheckCircle2, ArrowUpRight, ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import { useToast } from "@/hooks/use-toast";

/* ─── DATA ──────────────────────────────────────────────────────────── */

const jobListings = [
  {
    id: 1,
    title: "Customer Support Executive",
    department: "Customer Experience",
    location: "On-site",
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
      "Willingness to work rotational shifts if required",
    ],
    skills: ["Communication", "Problem Solving", "CRM Tools", "Multitasking", "Empathy"],
    hours: "Full-time · Rotational shifts available",
  },
  {
    id: 2,
    title: "Ecommerce Backend Support",
    department: "Operations",
    location: "On-site",
    type: "Full-time",
    shortDesc: "Manage product listings, process orders, update inventories, and resolve backend issues to keep ecommerce operations seamless.",
    fullDesc: "Join our operations team to ensure the smooth backend functioning of leading ecommerce stores. You'll handle everything from catalog management to order fulfilment, keeping the engine running behind successful online brands.",
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
      "Proficiency in Excel / Google Sheets for data management",
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
    location: "On-site",
    type: "Internship",
    shortDesc: "Collaborate with the marketing team to develop strategies that drive traffic, boost brand awareness, and generate qualified leads.",
    fullDesc: "This internship offers hands-on experience in digital marketing within the ecommerce industry. You'll work alongside seasoned marketers to plan and execute campaigns, analyse performance data, and contribute fresh ideas to growing brands.",
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
      "Strong organisational and communication skills",
      "Proficiency with project management tools (Asana, Trello, Monday.com)",
      "Analytical mindset with attention to KPIs and metrics",
      "Experience in ecommerce or BPO environments is preferred",
    ],
    skills: ["Project Management", "Process Optimisation", "Client Relations", "Reporting", "SLA Management"],
    hours: "Full-time · Monday to Saturday",
  },
];

const cultureHighlights = [
  { icon: TrendingUp, title: "Fast-Growing Company",    desc: "Be part of a rapidly scaling ecommerce support firm with global reach." },
  { icon: Users,      title: "Supportive Team Culture", desc: "Collaborate with driven professionals who celebrate each other's wins." },
  { icon: BookOpen,   title: "Learning Opportunities",  desc: "Access training programmes, mentorship, and hands-on skill development." },
  { icon: Target,     title: "Career Growth",           desc: "Clear progression paths with performance-based promotions and rewards." },
  { icon: Globe,      title: "Global Exposure",         desc: "Work with international brands across diverse ecommerce ecosystems." },
  { icon: Zap,        title: "Performance-Driven",      desc: "Thrive in a results-oriented environment that rewards initiative and impact." },
];

const benefits = [
  { icon: TrendingUp,    title: "Career Growth",         desc: "Clear pathways to advance your career with regular performance reviews." },
  { icon: GraduationCap, title: "Skill Development",     desc: "Continuous learning through workshops, training, and mentorship." },
  { icon: Heart,         title: "Positive Work Culture", desc: "An inclusive environment where every voice matters and is heard." },
  { icon: DollarSign,    title: "Competitive Pay",        desc: "Fair compensation packages with performance-based incentives." },
  { icon: Award,         title: "Recognition",           desc: "Regular rewards for outstanding contributions and milestones." },
  { icon: Star,          title: "Industry Exposure",     desc: "Stay ahead with access to the latest ecommerce tools and trends." },
];

const lifeImages = [
  "https://static.wixstatic.com/media/b2a005_a29a46864f254bdda2ef4289f16d2e9d~mv2.jpg/v1/fill/w_635,h_371,fp_0.48_0.31,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG20231016185833~2%20(1).jpg",
  "https://static.wixstatic.com/media/b2a005_fe5c41a6f9dd416a8fa9d07fe3983d7e~mv2.png/v1/fill/w_634,h_371,fp_0.75_0.56,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_3495_HEIC.png",
  "https://static.wixstatic.com/media/b2a005_6444cd1352ca476492139c5f8242bbab~mv2.png/v1/fill/w_634,h_371,fp_0.41_0.36,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_3481_HEIC.png",
  "https://static.wixstatic.com/media/b2a005_8d26f8c4a67b4d60a7f469995e795d43~mv2.png/v1/crop/x_0,y_672,w_4032,h_1087/fill/w_635,h_371,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_9896_HEIC.png",
  "https://static.wixstatic.com/media/b2a005_04e036055e944a63adcb40805e0c0594~mv2.jpeg/v1/fill/w_635,h_372,fp_0.51_0.56,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-04-08%20at%206_16_03%20PM.jpeg",
  "https://static.wixstatic.com/media/b2a005_eabc33643c47471ea0816286f72294ed~mv2.jpeg/v1/fill/w_635,h_372,fp_0.16_0.44,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-06-10%20at%2011_55_43%20AM.jpeg",
];

/* ─── HELPERS ───────────────────────────────────────────────────────── */

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase rounded-full border mb-5 ${
      light
        ? "border-blue-500/30 text-blue-400 bg-blue-500/10"
        : "border-blue-200 text-blue-600 bg-blue-50"
    }`}>
      {children}
    </span>
  );
}

const departmentColors: Record<string, string> = {
  "Customer Experience": "bg-blue-50 text-blue-600 border-blue-200",
  "Operations":          "bg-slate-100 text-slate-700 border-slate-200",
  "Marketing":           "bg-indigo-50 text-indigo-600 border-indigo-200",
};

/* ─── PAGE ──────────────────────────────────────────────────────────── */

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobListings[0] | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", position: "", message: "" });
  const [fileName, setFileName] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  /* ── Form submission via Web3Forms ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.position) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const body = new FormData();
      // Replace with your actual Web3Forms access key (free at web3forms.com)
      body.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
      body.append("subject", `New Job Application – ${formData.position}`);
      body.append("from_name", formData.name);
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("phone", formData.phone);
      body.append("position", formData.position);
      body.append("message", formData.message || "No cover note provided.");
      // Attach resume file if selected
      if (resumeFile) body.append("resume", resumeFile);

      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body });
      const data = await res.json();

      if (data.success) {
        toast({ title: "Application Submitted! 🎉", description: "We'll review your application and get back to you within 48 hours." });
        setFormData({ name: "", email: "", phone: "", position: "", message: "" });
        setFileName("");
        setResumeFile(null);
      } else {
        throw new Error(data.message);
      }
    } catch {
      toast({ title: "Submission failed", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToApply = () => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  const scrollToPositions = () => document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="overflow-hidden">

      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#060810] pt-36 pb-32 min-h-[88vh] flex items-center">
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.055]" style={{
          backgroundImage: "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }} />
        {/* Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-blue-700/20 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
        {/* Accent lines */}
        <div className="absolute top-28 left-10 w-[1px] h-28 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />
        <div className="absolute top-44 right-16 w-[1px] h-20 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
          <AnimatedSection variant="blur">
            <SectionLabel light>We're Hiring</SectionLabel>

            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black text-white leading-[1.04] mb-6 tracking-tight">
              Join the Team That{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
                  Powers Growth
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500/0 via-blue-400/60 to-blue-500/0 rounded-full" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/45 max-w-2xl mx-auto leading-relaxed mb-10">
              Build your career at a fast-growing ecommerce support company working with
              global brands. We're looking for passionate people ready to make a real impact.
            </p>

            {/* Job count badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {[
                { v: `${jobListings.length}`, l: "Open Roles" },
                { v: "On-site", l: "Work Mode" },
                { v: "12+", l: "Years Building" },
                { v: "15+", l: "Countries Served" },
              ].map((b) => (
                <span key={b.l} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-bold tracking-wide">
                  <Zap size={10} className="text-blue-400" />
                  <span className="text-white/80">{b.v}</span> {b.l}
                </span>
              ))}
            </div>

            {/* Single CTA */}
            <motion.button
              onClick={scrollToPositions}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black text-sm shadow-lg shadow-blue-700/30 hover:shadow-blue-600/40 transition-all duration-200"
            >
              View Open Positions
              <ArrowRight size={15} />
            </motion.button>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ════════════════════════════════════════════════════════════
          WHY RIOT
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-white pt-4 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <SectionLabel>Culture</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0d14] tracking-tight">
              Why Work at RIOT Ecommerce?
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mt-3 leading-relaxed">
              We're building a workplace where ambition meets opportunity — and every
              team member has the tools to grow.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cultureHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6, borderColor: "rgba(59,130,246,0.4)" }}
                className="rounded-3xl border-2 border-gray-100 bg-white p-8 h-full flex flex-col gap-5 transition-all duration-300 cursor-default hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                  <item.icon size={20} className="text-blue-600" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-black text-[#0a0d14] text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          OPEN POSITIONS
      ════════════════════════════════════════════════════════════ */}
      <section id="open-positions" className="bg-[#f8faff] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <SectionLabel>Opportunities</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0d14] tracking-tight">
              Open Positions
            </h2>
            <p className="text-gray-400 text-base max-w-lg mx-auto mt-3 leading-relaxed">
              Explore our current openings and find the role that's right for you.
              All positions are on-site.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5">
            {jobListings.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl p-8 cursor-pointer flex flex-col transition-all duration-300 group"
                onClick={() => setSelectedJob(job)}
              >
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase border ${departmentColors[job.department] ?? "bg-blue-50 text-blue-600 border-blue-200"}`}>
                    {job.department}
                  </span>
                  <motion.div
                    whileHover={{ x: 3, y: -3 }}
                    className="w-8 h-8 rounded-xl bg-gray-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                  >
                    <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-black text-[#0a0d14] mb-3 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                  {job.title}
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed flex-1 mb-6">
                  {job.shortDesc}
                </p>

                {/* Meta tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { icon: MapPin, label: job.location },
                    { icon: Clock,  label: job.type },
                    { icon: Briefcase, label: job.hours.split("·")[0].trim() },
                  ].map(({ icon: Icon, label }) => (
                    <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-500 text-[11px] font-semibold">
                      <Icon size={11} />
                      {label}
                    </span>
                  ))}
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-gray-100">
                  {job.skills.slice(0, 3).map((s) => (
                    <span key={s} className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                      {s}
                    </span>
                  ))}
                  {job.skills.length > 3 && (
                    <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-gray-50 text-gray-400 border border-gray-100">
                      +{job.skills.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          JOB DETAIL SLIDE-OVER
      ════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedJob && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="fixed inset-0 bg-[#060810]/70 backdrop-blur-sm z-40"
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-xl bg-white z-50 overflow-y-auto shadow-2xl flex flex-col"
            >
              {/* Panel header */}
              <div className="bg-[#0a0d14] px-8 py-6 shrink-0">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase border ${departmentColors[selectedJob.department] ?? "bg-blue-50 text-blue-600 border-blue-200"}`}>
                    {selectedJob.department}
                  </span>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
                <h2 className="text-2xl font-black text-white mb-2 leading-tight">{selectedJob.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {[selectedJob.location, selectedJob.type, selectedJob.hours.split("·")[1]?.trim()].filter(Boolean).map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/60 text-[11px] font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Panel body */}
              <div className="flex-1 p-8 space-y-8">
                <div>
                  <h4 className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-600 mb-3">About This Role</h4>
                  <p className="text-gray-600 text-[14px] leading-relaxed">{selectedJob.fullDesc}</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-600 mb-3">Responsibilities</h4>
                  <ul className="space-y-3">
                    {selectedJob.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13px] text-gray-600">
                        <CheckCircle2 size={14} className="text-blue-500 mt-0.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-600 mb-3">Requirements</h4>
                  <ul className="space-y-3">
                    {selectedJob.requirements.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13px] text-gray-600">
                        <ChevronRight size={14} className="text-blue-400 mt-0.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-600 mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((s) => (
                      <span key={s} className="px-3 py-1.5 text-[11px] font-bold rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Panel footer CTA */}
              <div className="p-8 border-t border-gray-100 shrink-0">
                <button
                  onClick={() => { setSelectedJob(null); setFormData(p => ({ ...p, position: selectedJob.title })); scrollToApply(); }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm transition-all duration-200 shadow-lg shadow-blue-700/20"
                >
                  Apply for This Position
                  <Send size={15} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════════════
          LIFE AT RIOT
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <SectionLabel>Our Vibe</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0d14] tracking-tight">
              Life at RIOT Ecommerce
            </h2>
            <p className="text-gray-400 text-base max-w-lg mx-auto mt-3 leading-relaxed">
              A glimpse into the workspace, team activities, and the energy that
              drives us every single day.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {lifeImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className={`relative overflow-hidden rounded-3xl shadow-md group ${
                  i === 0 ? "col-span-2 lg:col-span-2" : ""
                } ${i === 3 ? "lg:col-span-2" : ""}`}
              >
                <img
                  src={img}
                  alt={`Life at RIOT ${i + 1}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    i === 0 || i === 3 ? "h-64" : "h-52"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white text-xs font-bold tracking-wide">Life at RIOT</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          BENEFITS
      ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#060810] py-28">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-blue-600/15 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <SectionLabel light>Perks</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Benefits of Joining RIOT
            </h2>
            <p className="text-white/40 text-base max-w-lg mx-auto mt-3 leading-relaxed">
              We invest in our people so they can do their best work and grow with us.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6, borderColor: "rgba(59,130,246,0.5)" }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 flex flex-col gap-5 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0">
                  <b.icon size={20} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-white font-black text-base mb-2">{b.title}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          APPLICATION FORM
      ════════════════════════════════════════════════════════════ */}
      <section id="apply-form" className="bg-[#f8faff] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">

            {/* Left: info column */}
            <AnimatedSection variant="fadeLeft">
              <SectionLabel>Apply</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-black text-[#0a0d14] tracking-tight leading-tight mb-5">
                Submit Your{" "}
                <span className="text-blue-600">Application</span>
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                Fill out the form and we'll get back to you within 48 hours. We review
                every application personally — no auto-rejections.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Response within 48 business hours",
                  "Direct review by our hiring team",
                  "Resume received securely via email",
                  "Open to all experience levels",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Contact fallback */}
              <div className="rounded-2xl bg-[#0a0d14] p-7 border border-white/5">
                <p className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-400 mb-2">Prefer email?</p>
                <p className="text-white/60 text-sm leading-relaxed mb-3">
                  Send your CV and cover note directly to our hiring team.
                </p>
                <a
                  href="mailto:careers@riotecommerce.com"
                  className="text-blue-400 text-sm font-bold hover:text-blue-300 transition-colors flex items-center gap-1.5"
                >
                  careers@riotecommerce.com
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </AnimatedSection>

            {/* Right: form */}
            <AnimatedSection variant="fadeRight" delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-white border-2 border-gray-100 shadow-xl p-8 sm:p-10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-black tracking-[0.15em] uppercase text-gray-500" htmlFor="name">
                      Full Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="name" type="text" required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full h-11 px-4 rounded-xl border-2 border-gray-100 bg-gray-50 text-[#0a0d14] text-sm placeholder:text-gray-300 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-black tracking-[0.15em] uppercase text-gray-500" htmlFor="email">
                      Email <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="email" type="email" required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full h-11 px-4 rounded-xl border-2 border-gray-100 bg-gray-50 text-[#0a0d14] text-sm placeholder:text-gray-300 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-black tracking-[0.15em] uppercase text-gray-500" htmlFor="phone">
                      Phone <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="phone" type="tel" required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      className="w-full h-11 px-4 rounded-xl border-2 border-gray-100 bg-gray-50 text-[#0a0d14] text-sm placeholder:text-gray-300 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                    />
                  </div>
                  {/* Position */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-black tracking-[0.15em] uppercase text-gray-500" htmlFor="position">
                      Position <span className="text-blue-500">*</span>
                    </label>
                    <select
                      id="position" required
                      value={formData.position}
                      onChange={e => setFormData(p => ({ ...p, position: e.target.value }))}
                      className="w-full h-11 px-4 rounded-xl border-2 border-gray-100 bg-gray-50 text-[#0a0d14] text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                    >
                      <option value="">Select a position</option>
                      {jobListings.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
                    </select>
                  </div>
                </div>

                {/* Resume upload */}
                <div className="space-y-2">
                  <label className="text-[11px] font-black tracking-[0.15em] uppercase text-gray-500">
                    Resume / CV
                  </label>
                  <label className="flex items-center gap-3 px-5 py-4 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200 group">
                    <div className="w-9 h-9 rounded-xl bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center shrink-0 transition-colors">
                      <Upload size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 group-hover:text-blue-600 truncate transition-colors">
                        {fileName || "Click to upload your resume"}
                      </p>
                      <p className="text-[11px] text-gray-300 mt-0.5">PDF, DOC, DOCX — max 5 MB</p>
                    </div>
                    <input
                      type="file" accept=".pdf,.doc,.docx" className="hidden"
                      onChange={e => {
                        const f = e.target.files?.[0];
                        if (f) { setFileName(f.name); setResumeFile(f); }
                      }}
                    />
                  </label>
                </div>

                {/* Cover note */}
                <div className="space-y-2">
                  <label className="text-[11px] font-black tracking-[0.15em] uppercase text-gray-500" htmlFor="message">
                    Cover Note <span className="text-gray-300 font-normal normal-case tracking-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message" rows={4}
                    placeholder="Tell us why you'd be a great fit..."
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-[#0a0d14] text-sm placeholder:text-gray-300 focus:outline-none focus:border-blue-400 focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white font-black text-sm shadow-lg shadow-blue-700/20 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send size={15} />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-gray-300 text-[11px]">
                  We respect your privacy. Your data is only used for this application.
                </p>
              </form>
            </AnimatedSection>

          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Careers;