import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────
   Skeleton — base primitive
   • variant="shimmer"  → light sweep (for cards, images, photo areas)
   • variant="pulse"    → fade in/out (for text lines, labels)
   ───────────────────────────────────────────────────────────────────────── */

interface SkeletonProps {
  className?: string;
  variant?: "shimmer" | "pulse";
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}

export function Skeleton({
  className,
  variant = "shimmer",
  rounded = "xl",
}: SkeletonProps) {
  const roundedMap = {
    sm:   "rounded-sm",
    md:   "rounded-md",
    lg:   "rounded-lg",
    xl:   "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  };

  if (variant === "pulse") {
    return (
      <div
        className={cn(
          "bg-gray-200 animate-pulse",
          roundedMap[rounded],
          className
        )}
      />
    );
  }

  // Shimmer variant
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gray-200",
        roundedMap[rounded],
        className
      )}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </div>
  );
}

/* ─── Compound helpers ──────────────────────────────────────────────────── */

/** Full-width text line skeleton */
export function SkeletonText({ className, width = "full" }: { className?: string; width?: string }) {
  return (
    <Skeleton
      variant="pulse"
      rounded="full"
      className={cn("h-3.5", width === "full" ? "w-full" : width, className)}
    />
  );
}

/** Heading skeleton — taller, pulse */
export function SkeletonHeading({ className }: { className?: string }) {
  return (
    <Skeleton
      variant="pulse"
      rounded="full"
      className={cn("h-8 w-2/3", className)}
    />
  );
}

/** Circular avatar / icon skeleton */
export function SkeletonCircle({ size = 12, className }: { size?: number; className?: string }) {
  return (
    <Skeleton
      variant="shimmer"
      rounded="full"
      className={cn(`w-${size} h-${size}`, className)}
    />
  );
}

/** Image block skeleton */
export function SkeletonImage({ className }: { className?: string }) {
  return (
    <Skeleton
      variant="shimmer"
      rounded="3xl"
      className={cn("w-full h-full", className)}
    />
  );
}

/** Badge pill skeleton */
export function SkeletonBadge({ className }: { className?: string }) {
  return (
    <Skeleton
      variant="pulse"
      rounded="full"
      className={cn("h-6 w-24", className)}
    />
  );
}