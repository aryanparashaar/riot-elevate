import { motion } from "framer-motion";
import { Skeleton, SkeletonText, SkeletonHeading, SkeletonBadge, SkeletonImage } from "./Skeleton";

/* ─────────────────────────────────────────────────────────────────────────
   Shared fade-in wrapper — real content fades in once loading ends
   ───────────────────────────────────────────────────────────────────────── */

export function PageFadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Shared dark hero skeleton — used by all pages
   ───────────────────────────────────────────────────────────────────────── */

function DarkHeroSkeleton() {
  return (
    <div className="bg-[#060810] pt-36 pb-32 min-h-[88vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6 text-center w-full space-y-6">
        {/* Label pill */}
        <div className="flex justify-center">
          <Skeleton variant="pulse" rounded="full" className="h-7 w-36 bg-white/10" />
        </div>
        {/* Heading lines */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <Skeleton variant="pulse" rounded="2xl" className="h-14 w-full bg-white/10" />
          <Skeleton variant="pulse" rounded="2xl" className="h-14 w-4/5 mx-auto bg-white/10" />
        </div>
        {/* Subtext */}
        <div className="space-y-2 max-w-xl mx-auto">
          <Skeleton variant="pulse" rounded="full" className="h-4 w-full bg-white/8" />
          <Skeleton variant="pulse" rounded="full" className="h-4 w-5/6 mx-auto bg-white/8" />
        </div>
        {/* Badge pills row */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {[80, 96, 72, 88].map((w, i) => (
            <Skeleton key={i} variant="pulse" rounded="full" className={`h-7 w-${w === 80 ? '[80px]' : w === 96 ? '[96px]' : w === 72 ? '[72px]' : '[88px]'} bg-white/10`} />
          ))}
        </div>
        {/* CTA */}
        <div className="flex justify-center pt-2">
          <Skeleton variant="pulse" rounded="full" className="h-12 w-48 bg-blue-600/30" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Stat strip skeleton
   ───────────────────────────────────────────────────────────────────────── */

function StatStripSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="bg-white pt-4 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-gray-100 rounded-2xl overflow-hidden">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="bg-white px-6 py-9 flex flex-col items-center gap-3">
              <Skeleton variant="pulse" rounded="full" className="h-9 w-20" />
              <Skeleton variant="pulse" rounded="full" className="h-3 w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Generic card grid skeleton
   ───────────────────────────────────────────────────────────────────────── */

function CardGridSkeleton({
  count = 6,
  cols = 3,
  dark = false,
  hasImage = false,
  imageHeight = "h-48",
}: {
  count?: number;
  cols?: number;
  dark?: boolean;
  hasImage?: boolean;
  imageHeight?: string;
}) {
  const colClass = cols === 2 ? "md:grid-cols-2" : cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  const cardBg   = dark ? "bg-white/5 border-white/10" : "bg-white border-gray-100";
  const lineBg   = dark ? "bg-white/10" : "bg-gray-200";

  return (
    <div className={`grid ${colClass} gap-5`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`rounded-3xl border-2 ${cardBg} p-8 flex flex-col gap-4`}>
          {hasImage && (
            <Skeleton variant="shimmer" rounded="2xl" className={`w-full ${imageHeight} ${dark ? "bg-white/10" : ""}`} />
          )}
          {/* Icon block */}
          <Skeleton variant="shimmer" rounded="2xl" className={`w-12 h-12 ${dark ? "bg-white/10" : ""}`} />
          {/* Title */}
          <Skeleton variant="pulse" rounded="full" className={`h-4 w-3/4 ${lineBg}`} />
          {/* Body lines */}
          <div className="space-y-2">
            <Skeleton variant="pulse" rounded="full" className={`h-3 w-full ${lineBg}`} />
            <Skeleton variant="pulse" rounded="full" className={`h-3 w-5/6 ${lineBg}`} />
            <Skeleton variant="pulse" rounded="full" className={`h-3 w-4/6 ${lineBg}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Section header skeleton (label + heading + subtext)
   ───────────────────────────────────────────────────────────────────────── */

function SectionHeaderSkeleton({ dark = false, align = "center" }: { dark?: boolean; align?: "center" | "left" }) {
  const lineBg = dark ? "bg-white/10" : "bg-gray-200";
  const mx     = align === "center" ? "mx-auto" : "";
  return (
    <div className={`mb-14 space-y-4 ${align === "center" ? "text-center" : ""}`}>
      <div className={`flex ${align === "center" ? "justify-center" : ""}`}>
        <Skeleton variant="pulse" rounded="full" className={`h-7 w-32 ${lineBg}`} />
      </div>
      <Skeleton variant="pulse" rounded="2xl" className={`h-11 w-1/2 ${mx} ${lineBg}`} />
      <div className={`space-y-2 max-w-lg ${mx}`}>
        <Skeleton variant="pulse" rounded="full" className={`h-3.5 w-full ${lineBg}`} />
        <Skeleton variant="pulse" rounded="full" className={`h-3.5 w-4/5 ${mx} ${lineBg}`} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HOME SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

export function HomeSkeleton() {
  return (
    <div className="overflow-hidden">
      <DarkHeroSkeleton />

      {/* Stats */}
      <StatStripSkeleton count={5} />

      {/* What we do — 6 cards */}
      <section className="bg-[#f8faff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <CardGridSkeleton count={6} cols={3} />
        </div>
      </section>

      {/* Why choose us — dark section, 4 stats */}
      <section className="bg-[#060810] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton dark />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col gap-3 items-center text-center">
                <Skeleton variant="pulse" rounded="full" className="h-12 w-24 bg-white/10" />
                <Skeleton variant="pulse" rounded="full" className="h-3 w-28 bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / CTA strip */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <CardGridSkeleton count={3} cols={3} />
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   ABOUT SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

export function AboutSkeleton() {
  return (
    <div>
      <DarkHeroSkeleton />
      <StatStripSkeleton count={5} />

      {/* Founder section */}
      <section className="bg-[#f8faff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <Skeleton variant="shimmer" rounded="3xl" className="aspect-[4/5] w-full" />
            </div>
            {/* Content */}
            <div className="space-y-5">
              <Skeleton variant="pulse" rounded="full" className="h-7 w-32" />
              <Skeleton variant="pulse" rounded="2xl" className="h-10 w-3/4" />
              <Skeleton variant="pulse" rounded="2xl" className="h-10 w-1/2" />
              <div className="space-y-2 pt-2">
                {[1,2,3,4].map(i => <Skeleton key={i} variant="pulse" rounded="full" className="h-3.5 w-full" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose + Vision */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Purpose card */}
            <div className="rounded-3xl border-2 border-gray-100 p-10 space-y-4">
              <Skeleton variant="shimmer" rounded="2xl" className="w-12 h-12" />
              <Skeleton variant="pulse" rounded="full" className="h-4 w-24" />
              <Skeleton variant="pulse" rounded="2xl" className="h-9 w-48" />
              <div className="space-y-2">
                {[1,2,3,4].map(i => <Skeleton key={i} variant="pulse" rounded="full" className="h-3.5 w-full" />)}
              </div>
              <div className="space-y-3 pt-4">
                {[1,2,3].map(i => (
                  <div key={i} className="flex gap-3">
                    <Skeleton variant="pulse" rounded="full" className="w-4 h-4 shrink-0" />
                    <Skeleton variant="pulse" rounded="full" className="h-3.5 flex-1" />
                  </div>
                ))}
              </div>
            </div>
            {/* Vision card — dark */}
            <div className="rounded-3xl bg-gray-100 overflow-hidden">
              <div className="bg-gray-300 px-8 py-5 h-16" />
              <div className="p-8 space-y-4">
                <div className="space-y-2">
                  {[1,2,3].map(i => <Skeleton key={i} variant="pulse" rounded="full" className="h-3.5 w-full bg-gray-300" />)}
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="rounded-2xl bg-gray-200 p-5 flex flex-col items-center gap-2">
                      <Skeleton variant="pulse" rounded="full" className="h-8 w-16 bg-gray-300" />
                      <Skeleton variant="pulse" rounded="full" className="h-3 w-20 bg-gray-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles — dark */}
      <section className="bg-[#060810] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton dark />
          <CardGridSkeleton count={8} cols={4} dark />
        </div>
      </section>

      {/* Story timeline */}
      <section className="bg-[#f8faff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Timeline */}
            <div className="pl-8 space-y-7 relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200 rounded-full" />
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="relative flex gap-5">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-gray-200" />
                  <div className="space-y-2 flex-1">
                    <Skeleton variant="pulse" rounded="full" className="h-3 w-12" />
                    <Skeleton variant="pulse" rounded="lg" className="h-3.5 w-full" />
                    <Skeleton variant="pulse" rounded="lg" className="h-3.5 w-4/5" />
                  </div>
                </div>
              ))}
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="rounded-2xl border border-gray-100 bg-white p-7 space-y-3">
                  <Skeleton variant="pulse" rounded="full" className="h-6 w-6" />
                  <Skeleton variant="pulse" rounded="full" className="h-10 w-20" />
                  <Skeleton variant="pulse" rounded="full" className="h-3.5 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SERVICES SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

export function ServicesSkeleton() {
  return (
    <div>
      <DarkHeroSkeleton />

      {/* Services grid — white */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <CardGridSkeleton count={6} cols={3} />
        </div>
      </section>

      {/* Process — dark */}
      <section className="bg-[#060810] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton dark />
          <CardGridSkeleton count={4} cols={4} dark />
        </div>
      </section>

      {/* Why us — light */}
      <section className="bg-[#f8faff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              {[1,2,3,4,5].map(i => <Skeleton key={i} variant="pulse" rounded="full" className="h-3.5 w-full" />)}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="rounded-2xl border border-gray-100 bg-white p-7 space-y-3">
                  <Skeleton variant="pulse" rounded="full" className="h-10 w-16" />
                  <Skeleton variant="pulse" rounded="full" className="h-3.5 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HOW IT WORKS SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

export function HowItWorksSkeleton() {
  return (
    <div>
      <DarkHeroSkeleton />

      {/* Phase strip */}
      <section className="bg-white pt-4 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid grid-cols-4 gap-px rounded-2xl overflow-hidden border border-gray-100">
            {[1,2,3,4].map(i => (
              <div key={i} className="bg-gray-100 p-8 space-y-4 h-36">
                <Skeleton variant="pulse" rounded="full" className="h-10 w-12 bg-gray-200" />
                <Skeleton variant="pulse" rounded="lg" className="h-4 w-3/4 bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 01 — foundation */}
      <section className="bg-[#f8faff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-3 mb-14">
            <Skeleton variant="pulse" rounded="full" className="h-7 w-24" />
            <Skeleton variant="pulse" rounded="2xl" className="h-11 w-1/2" />
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[1,2,3].map(i => (
              <div key={i} className={`rounded-3xl p-9 space-y-4 ${i === 2 ? "bg-blue-100" : "bg-gray-900/10"}`}>
                <Skeleton variant="shimmer" rounded="2xl" className="w-12 h-12 bg-gray-300" />
                <Skeleton variant="pulse" rounded="lg" className="h-5 w-3/4 bg-gray-300" />
                <div className="space-y-2">
                  {[1,2,3].map(j => <Skeleton key={j} variant="pulse" rounded="full" className="h-3.5 w-full bg-gray-300" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 02 — define product */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton align="left" />
          <CardGridSkeleton count={4} cols={4} />
        </div>
      </section>

      {/* Phase 03 — source — dark */}
      <section className="bg-[#060810] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton dark />
          <CardGridSkeleton count={4} cols={4} dark />
        </div>
      </section>

      {/* Phase 04 — traffic */}
      <section className="bg-[#f8faff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton align="left" />
          <div className="grid md:grid-cols-2 gap-5">
            {[1,2].map(i => (
              <div key={i} className="rounded-3xl bg-gray-900/10 overflow-hidden">
                <div className="bg-gray-300 h-20 px-8 py-6" />
                <div className="p-8 space-y-4">
                  {[1,2,3,4].map(j => (
                    <div key={j} className="flex gap-3 items-center">
                      <Skeleton variant="pulse" rounded="xl" className="w-8 h-8 bg-gray-200 shrink-0" />
                      <Skeleton variant="pulse" rounded="full" className="h-3.5 flex-1 bg-gray-200" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecommerce support */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <CardGridSkeleton count={6} cols={3} />
        </div>
      </section>

      {/* Trust metrics — dark */}
      <section className="bg-[#060810] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton dark />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-[#060810] p-12 flex flex-col items-center gap-3">
                <Skeleton variant="pulse" rounded="full" className="h-14 w-24 bg-white/10" />
                <Skeleton variant="pulse" rounded="full" className="h-3 w-32 bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   EXPERTS SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

export function ExpertsSkeleton() {
  return (
    <div>
      <DarkHeroSkeleton />

      {/* Team cards */}
      <section className="bg-white pt-4 pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-3xl overflow-hidden border-2 border-gray-100 bg-white">
                {/* Photo area */}
                <div className="relative h-72 bg-gray-100">
                  <Skeleton variant="shimmer" rounded="sm" className="w-full h-full" />
                  {/* Stats strip at bottom */}
                  <div className="absolute bottom-0 inset-x-0 flex">
                    {[1,2].map(j => (
                      <div key={j} className="flex-1 bg-gray-200 py-3 flex flex-col items-center gap-1">
                        <Skeleton variant="pulse" rounded="full" className="h-4 w-10 bg-gray-300" />
                        <Skeleton variant="pulse" rounded="full" className="h-2.5 w-14 bg-gray-300" />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Content */}
                <div className="px-7 pb-7 pt-6 space-y-4">
                  <div className="space-y-2">
                    <Skeleton variant="pulse" rounded="full" className="h-5 w-40" />
                    <Skeleton variant="pulse" rounded="full" className="h-3 w-24" />
                  </div>
                  <div className="space-y-2">
                    {[1,2,3].map(j => <Skeleton key={j} variant="pulse" rounded="full" className="h-3.5 w-full" />)}
                  </div>
                  <div className="flex gap-2.5 pt-5 border-t border-gray-100">
                    <Skeleton variant="shimmer" rounded="xl" className="flex-1 h-10" />
                    <Skeleton variant="shimmer" rounded="xl" className="flex-1 h-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Are RIOT — dark */}
      <section className="bg-[#060810] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <Skeleton variant="pulse" rounded="full" className="h-7 w-32 bg-white/10" />
              <Skeleton variant="pulse" rounded="2xl" className="h-11 w-3/4 bg-white/10" />
              {[1,2,3,4,5].map(i => <Skeleton key={i} variant="pulse" rounded="full" className="h-3.5 w-full bg-white/10" />)}
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 space-y-5">
              <div className="flex gap-3 items-center">
                <Skeleton variant="shimmer" rounded="2xl" className="w-10 h-10 bg-white/10" />
                <Skeleton variant="pulse" rounded="full" className="h-4 w-40 bg-white/10" />
              </div>
              {[1,2,3,4].map(i => (
                <div key={i} className="flex gap-3">
                  <Skeleton variant="pulse" rounded="full" className="w-4 h-4 shrink-0 bg-white/10" />
                  <Skeleton variant="pulse" rounded="full" className="h-3.5 flex-1 bg-white/10" />
                </div>
              ))}
              <div className="grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden mt-4">
                {[1,2,3].map(i => (
                  <div key={i} className="bg-[#060810] py-5 flex flex-col items-center gap-2">
                    <Skeleton variant="pulse" rounded="full" className="h-7 w-12 bg-white/10" />
                    <Skeleton variant="pulse" rounded="full" className="h-2.5 w-14 bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-[#f8faff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <CardGridSkeleton count={4} cols={4} />
          <div className="mt-5 rounded-3xl bg-gray-100 p-14">
            <div className="grid md:grid-cols-2 gap-10">
              {[1,2].map(i => (
                <div key={i} className="space-y-3">
                  <Skeleton variant="shimmer" rounded="xl" className="w-10 h-10 bg-gray-200" />
                  {[1,2,3,4].map(j => <Skeleton key={j} variant="pulse" rounded="full" className="h-3.5 w-full bg-gray-200" />)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life at RIOT — photo grid */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((_, i) => (
              <Skeleton
                key={i}
                variant="shimmer"
                rounded="3xl"
                className={`w-full ${i === 0 || i === 3 ? "col-span-2 lg:col-span-2 h-64" : "h-52"}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CAREERS SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

export function CareersSkeleton() {
  return (
    <div>
      <DarkHeroSkeleton />

      {/* Why RIOT — culture cards */}
      <section className="bg-white pt-4 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <CardGridSkeleton count={6} cols={3} />
        </div>
      </section>

      {/* Open positions */}
      <section className="bg-[#f8faff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid md:grid-cols-2 gap-5">
            {[1,2,3,4].map(i => (
              <div key={i} className="rounded-3xl bg-white border-2 border-gray-100 p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <Skeleton variant="pulse" rounded="full" className="h-6 w-28" />
                  <Skeleton variant="shimmer" rounded="xl" className="w-8 h-8" />
                </div>
                <Skeleton variant="pulse" rounded="xl" className="h-6 w-3/4" />
                <div className="space-y-2">
                  {[1,2].map(j => <Skeleton key={j} variant="pulse" rounded="full" className="h-3.5 w-full" />)}
                </div>
                <div className="flex gap-2">
                  {[1,2,3].map(j => <Skeleton key={j} variant="pulse" rounded="full" className="h-7 w-20" />)}
                </div>
                <div className="flex gap-2 pt-4 border-t border-gray-100">
                  {[1,2,3].map(j => <Skeleton key={j} variant="pulse" rounded="full" className="h-6 w-16" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life photos */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((_, i) => (
              <Skeleton
                key={i}
                variant="shimmer"
                rounded="3xl"
                className={`w-full ${i === 0 || i === 3 ? "col-span-2 lg:col-span-2 h-64" : "h-52"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — dark */}
      <section className="bg-[#060810] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton dark />
          <CardGridSkeleton count={6} cols={3} dark />
        </div>
      </section>

      {/* Application form */}
      <section className="bg-[#f8faff] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
            {/* Left info */}
            <div className="space-y-4">
              <Skeleton variant="pulse" rounded="full" className="h-7 w-20" />
              <Skeleton variant="pulse" rounded="2xl" className="h-11 w-3/4" />
              {[1,2,3,4].map(i => <Skeleton key={i} variant="pulse" rounded="full" className="h-3.5 w-full" />)}
              <div className="rounded-2xl bg-gray-100 p-7 space-y-3 mt-4">
                <Skeleton variant="pulse" rounded="full" className="h-3 w-20 bg-gray-200" />
                <Skeleton variant="pulse" rounded="full" className="h-3.5 w-full bg-gray-200" />
                <Skeleton variant="pulse" rounded="full" className="h-3.5 w-40 bg-gray-200" />
              </div>
            </div>
            {/* Right form */}
            <div className="rounded-3xl bg-white border-2 border-gray-100 p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                {[1,2,3,4].map(i => (
                  <div key={i} className="space-y-2">
                    <Skeleton variant="pulse" rounded="full" className="h-3 w-20" />
                    <Skeleton variant="shimmer" rounded="xl" className="h-11 w-full" />
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <Skeleton variant="pulse" rounded="full" className="h-3 w-24" />
                <Skeleton variant="shimmer" rounded="xl" className="h-16 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton variant="pulse" rounded="full" className="h-3 w-28" />
                <Skeleton variant="shimmer" rounded="xl" className="h-28 w-full" />
              </div>
              <Skeleton variant="shimmer" rounded="2xl" className="h-14 w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   BLOG SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

export function BlogSkeleton() {
  return (
    <div>
      <DarkHeroSkeleton />
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="rounded-3xl border-2 border-gray-100 bg-white overflow-hidden">
                <Skeleton variant="shimmer" rounded="sm" className="w-full h-52" />
                <div className="p-7 space-y-3">
                  <Skeleton variant="pulse" rounded="full" className="h-5 w-3/4" />
                  <div className="space-y-2">
                    {[1,2,3].map(j => <Skeleton key={j} variant="pulse" rounded="full" className="h-3.5 w-full" />)}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Skeleton variant="pulse" rounded="full" className="h-6 w-16" />
                    <Skeleton variant="pulse" rounded="full" className="h-6 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FAQ SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

export function FaqSkeleton() {
  return (
    <div>
      <DarkHeroSkeleton />
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="space-y-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl border-2 border-gray-100 bg-white p-6 flex items-center justify-between">
                <Skeleton variant="pulse" rounded="full" className={`h-4 ${i % 3 === 0 ? "w-3/4" : i % 3 === 1 ? "w-2/3" : "w-4/5"}`} />
                <Skeleton variant="shimmer" rounded="full" className="w-6 h-6 shrink-0 ml-4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CONTACT SKELETON
   ═══════════════════════════════════════════════════════════════════════════ */

export function ContactSkeleton() {
  return (
    <div>
      <DarkHeroSkeleton />
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div className="space-y-6">
              <Skeleton variant="pulse" rounded="full" className="h-7 w-28" />
              <Skeleton variant="pulse" rounded="2xl" className="h-11 w-3/4" />
              {[1,2,3].map(i => <Skeleton key={i} variant="pulse" rounded="full" className="h-3.5 w-full" />)}
              <div className="space-y-4 pt-4">
                {[1,2,3].map(i => (
                  <div key={i} className="flex gap-4 items-center">
                    <Skeleton variant="shimmer" rounded="xl" className="w-12 h-12 shrink-0" />
                    <div className="flex-1 space-y-2">
                      <Skeleton variant="pulse" rounded="full" className="h-3 w-20" />
                      <Skeleton variant="pulse" rounded="full" className="h-4 w-40" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Form */}
            <div className="rounded-3xl bg-white border-2 border-gray-100 shadow-xl p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                {[1,2,3,4].map(i => (
                  <div key={i} className="space-y-2">
                    <Skeleton variant="pulse" rounded="full" className="h-3 w-20" />
                    <Skeleton variant="shimmer" rounded="xl" className="h-11 w-full" />
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <Skeleton variant="pulse" rounded="full" className="h-3 w-16" />
                <Skeleton variant="shimmer" rounded="xl" className="h-32 w-full" />
              </div>
              <Skeleton variant="shimmer" rounded="2xl" className="h-14 w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}