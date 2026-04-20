import { Download } from "lucide-react";

export const AnimatedBorderButton = (): React.JSX.Element => {
  return (
    <a
      href="/Valentina Burbano FullStack Software Engineering.pdf"
      download="Valentina Burbano FullStack Software Engineering.pdf"
      className="relative bg-transparent border border-border
                text-foreground hover:border-primary/50 transition-all
                duration-1000 focus:outline-none focus-visible:ring-2
                focus-visible:ring-primary focus-visible:ring-offset-2
                disabled:opacity-50 disabled:cursor-not-allowed group
                px-4 py-2 text-lg font-medium rounded-full overflow-visible
                animated-border"
    >
      {/* Animated SVG border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,2 L 170,2 A 28,28 0 0 1 198,30 A 28,28 0 0 1 170,58 L 30,58 A 28,28 0 0 1 2,30 A 28,28 0 0 1 30,2 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="120 336"
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative flex items-center justify-center gap-2">
        <Download className="w-5 h-5" />
        Download CV
      </span>
    </a>
  );
};
