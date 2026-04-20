import { memo } from "react";
import type { Icon } from "@tabler/icons-react";

interface ProcessStepProps {
  icon: Icon;
  index: number;
  title: string;
  description: string;
  isLast: boolean;
}

export const ProcessStep = memo(({ icon: TablerIcon, index, title, description, isLast }: ProcessStepProps): React.JSX.Element => (
  <div className="flex-1 text-center relative px-1 md:px-2">
    {/* Connector line */}
    {!isLast && (
      <div
        className="absolute top-5 left-[calc(50%+20px)] right-[calc(-50%+20px)] h-0.5 z-[1] hidden md:block"
        style={{
          background: "linear-gradient(90deg, var(--color-primary), color-mix(in srgb, var(--color-primary) 20%, transparent))",
        }}
      />
    )}

    {/* Dot */}
    <div className="w-10 h-10 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center mx-auto mb-3 relative z-[2]">
      <TablerIcon className="w-4 h-4 text-primary" stroke={1.5} />
    </div>

    <h3 className="text-xs md:text-sm font-semibold mb-1">{title}</h3>
    <p className="text-[11px] md:text-xs text-muted-foreground leading-snug">
      {description}
    </p>

    {/* Mobile step number */}
    <span className="md:hidden absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
      {index + 1}
    </span>
  </div>
));

ProcessStep.displayName = "ProcessStep";
