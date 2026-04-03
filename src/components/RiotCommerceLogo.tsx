import React from "react";

interface RiotCommerceLogoProps {
  /** Controls overall size. The component scales proportionally. */
  size?: "sm" | "md" | "lg" | "xl";
  /** Override the bubble fill color */
  bubbleColor?: string;
  /** Override the text box background */
  textBoxBg?: string;
  /** Override the text box border color */
  textBoxBorder?: string;
  /** Override the text color */
  textColor?: string;
  /** Optional class for the outer wrapper */
  className?: string;
}

const SIZES = {
  sm: { bubble: 48, fontSize: 13, textBoxH: 30, textBoxPadX: 14 },
  md: { bubble: 68, fontSize: 18, textBoxH: 42, textBoxPadX: 20 },
  lg: { bubble: 88, fontSize: 23, textBoxH: 54, textBoxPadX: 26 },
  xl: { bubble: 112, fontSize: 29, textBoxH: 68, textBoxPadX: 32 },
};

/**
 * RiotCommerceLogo
 *
 * Pixel-accurate recreation of the riotecommerce logo:
 * a solid black speech-bubble icon with a white bordered
 * text box overlapping it to the right.
 *
 * Usage:
 *   <RiotCommerceLogo />
 *   <RiotCommerceLogo size="lg" />
 *   <RiotCommerceLogo bubbleColor="#111" textColor="#000" />
 */
export const RiotCommerceLogo: React.FC<RiotCommerceLogoProps> = ({
  size = "md",
  bubbleColor = "#000000",
  textBoxBg = "#ffffff",
  textBoxBorder = "#cccccc",
  textColor = "#111111",
  className = "",
}) => {
  const s = SIZES[size];

  // Derived measurements
  const bubbleSize = s.bubble;
  const radius = bubbleSize * 0.18;          // corner radius of speech bubble
  const tailW = bubbleSize * 0.22;           // tail width
  const tailH = bubbleSize * 0.22;           // tail height (hangs below bubble)

  const textBoxH = s.textBoxH;
  const textBoxPadX = s.textBoxPadX;
  // Text box starts at ~35% of bubble width (overlapping the bubble)
  const textBoxLeft = bubbleSize * 0.32;
  // Text box is wide enough to fit the text comfortably
  const textBoxWidth = s.fontSize * 8.8 + textBoxPadX * 2;

  const totalW = textBoxLeft + textBoxWidth;
  const totalH = bubbleSize + tailH;
  // Vertically center the text box relative to bubble body
  const textBoxTop = (bubbleSize - textBoxH) / 2;

  // SVG path for speech bubble:
  // Rounded rect on top, with a bottom-left pointing tail
  const b = bubbleSize;
  const r = radius;
  const tw = tailW;
  const th = tailH;

  // The bubble body (rounded rect, no bottom-left corner — tail replaces it)
  // Using a path so we can have the tail integrated cleanly
  const bubblePath = [
    `M ${r} 0`,
    `H ${b - r}`,
    `Q ${b} 0 ${b} ${r}`,
    `V ${b - r}`,
    `Q ${b} ${b} ${b - r} ${b}`,
    // bottom-right to bottom: go left until just before the tail
    `H ${tw + r}`,
    `Q ${tw} ${b} ${tw} ${b + r * 0.5}`,
    // tail: sharp downward point bottom-left
    `L 0 ${b + th}`,
    // back up — left edge of bubble
    `L 0 ${r}`,
    `Q 0 0 ${r} 0`,
    `Z`,
  ].join(" ");

  const fontFamily =
    "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "flex-start",
        position: "relative",
        width: totalW,
        height: totalH,
        flexShrink: 0,
      }}
      aria-label="riotecommerce"
      role="img"
    >
      {/* Speech bubble SVG */}
      <svg
        width={b}
        height={totalH}
        viewBox={`0 0 ${b} ${totalH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", left: 0, top: 0 }}
      >
        <path d={bubblePath} fill={bubbleColor} />
      </svg>

      {/* Text box — overlaps bubble to the right */}
      <div
        style={{
          position: "absolute",
          left: textBoxLeft,
          top: textBoxTop,
          width: textBoxWidth,
          height: textBoxH,
          background: textBoxBg,
          border: `1px solid ${textBoxBorder}`,
          display: "flex",
          alignItems: "center",
          paddingLeft: textBoxPadX,
          paddingRight: textBoxPadX,
          boxSizing: "border-box",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily,
            fontSize: s.fontSize,
            fontWeight: 400,
            color: textColor,
            letterSpacing: "-0.01em",
            lineHeight: 1,
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          riotecommerce
        </span>
      </div>
    </div>
  );
};

export default RiotCommerceLogo;

/* ─────────────────────────────────────────────
   USAGE EXAMPLES
   ─────────────────────────────────────────────

// In Navbar:
import RiotCommerceLogo from "@/components/RiotCommerceLogo";

function Navbar() {
  return (
    <header style={{ display:"flex", alignItems:"center", padding:"16px 32px", background:"#fff" }}>
      <RiotCommerceLogo size="md" />
      <nav style={{ marginLeft: "auto" }}>...</nav>
    </header>
  );
}

// In Footer:
function Footer() {
  return (
    <footer style={{ background:"#000", padding:"40px 32px" }}>
      <RiotCommerceLogo
        size="sm"
        bubbleColor="#fff"
        textBoxBg="#000"
        textBoxBorder="#555"
        textColor="#fff"
      />
    </footer>
  );
}

// Standalone large:
<RiotCommerceLogo size="xl" />
*/