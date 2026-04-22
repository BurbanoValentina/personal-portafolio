import { memo } from "react";
import type { Icon } from "@tabler/icons-react";

interface ServiceCardProps {
  icon: Icon;
  index: number;
  title: string;
  description: string;
  tags: string[];
}

export const ServiceCard = memo(({ icon: TablerIcon, index, title, description, tags }: ServiceCardProps): React.JSX.Element => (
  <div
    className="glass rounded-2xl p-5 min-h-56 flex flex-col hover:glow-border transition-all duration-500 group animate-fade-in"
    style={{ animationDelay: `${(index + 2) * 100}ms` }}
  >
    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <TablerIcon className="w-5 h-5 text-primary" stroke={1.5} />
    </div>

    <h3 className="text-base md:text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed line-clamp-3">{description}</p>

    <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
      {tags.map((tag, tIdx) => (
        <span
          key={tIdx}
          className="px-2.5 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
));

ServiceCard.displayName = "ServiceCard";
