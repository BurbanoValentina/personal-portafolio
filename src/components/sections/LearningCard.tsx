import { memo } from "react";
import type { Icon } from "@tabler/icons-react";

type LearningStatus = "active" | "soon" | "planned" | "completed";

interface LearningCardProps {
  icon: Icon;
  title: string;
  description: string;
  status: LearningStatus;
  statusLabel: string;
}

const statusStyles: Record<LearningStatus, string> = {
  active: "bg-primary/15 text-primary",
  soon: "bg-primary/10 text-primary/80 border border-primary/30",
  planned: "bg-[#a855f7]/15 text-[#a855f7]",
  completed: "bg-green-500/15 text-green-500",
};

export const LearningCard = memo(({ icon: TablerIcon, title, description, status, statusLabel }: LearningCardProps): React.JSX.Element => (
  <div className="glass rounded-xl p-4 flex gap-3 items-start hover:glow-border transition-all duration-500 w-full">
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
      <TablerIcon className="w-5 h-5 text-primary" stroke={1.5} />
    </div>
    <div className="min-w-0 flex-1 flex flex-col">
      <h4 className="text-base font-semibold leading-snug">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">{description}</p>
      <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full mt-3 self-start ${statusStyles[status]}`}>
        {statusLabel}
      </span>
    </div>
  </div>
));

LearningCard.displayName = "LearningCard";
