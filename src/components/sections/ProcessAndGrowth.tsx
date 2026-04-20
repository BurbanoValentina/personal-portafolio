import { memo } from "react";
import { useLang } from "@/i18n";
import {
  IconFileSearch,
  IconLayoutKanban,
  IconBuildingArch,
  IconCode,
  IconTestPipe,
  IconRocket,
  IconMessageCircle,
  IconRefresh,
  IconStack2,
  IconClock,
  IconBrain,
  IconShieldLock,
  IconLanguage,
  IconGitBranch,
  IconTargetArrow,
  IconCircleCheck,
  IconCircle,
  IconEye,
} from "@tabler/icons-react";
import type { Icon } from "@tabler/icons-react";
import { ProcessStep } from "./ProcessStep";
import { LearningCard } from "./LearningCard";

const stepIcons: Icon[] = [
  IconFileSearch,
  IconLayoutKanban,
  IconBuildingArch,
  IconCode,
  IconTestPipe,
  IconRocket,
];

const principleIcons: Icon[] = [
  IconMessageCircle,
  IconRefresh,
  IconStack2,
  IconClock,
];

const learningIcons: Icon[] = [
  IconBrain,
  IconShieldLock,
  IconLanguage,
  IconGitBranch,
];

export const ProcessAndGrowth = memo((): React.JSX.Element => {
  const { t } = useLang();

  return (
    <section id="process" className="py-16 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <span className="text-sm text-primary tracking-widest uppercase">
            {t.processAndGrowth.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            {t.processAndGrowth.title1}
            <span className="italic font-normal font-serif text-primary">
              {t.processAndGrowth.titleHighlight}
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.processAndGrowth.subtitle}
          </p>
        </div>

        {/* ── PART A: Process ── */}

        {/* Process Steps — horizontal on desktop, 2-col grid on mobile */}
        <div className="hidden md:flex gap-0 animate-fade-in animate-delay-100">
          {t.processAndGrowth.steps.map((step, idx) => (
            <ProcessStep
              key={idx}
              icon={stepIcons[idx]}
              index={idx}
              title={step.title}
              description={step.description}
              isLast={idx === t.processAndGrowth.steps.length - 1}
            />
          ))}
        </div>

        {/* Mobile fallback: 2-col grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden animate-fade-in animate-delay-100">
          {t.processAndGrowth.steps.map((step, idx) => (
            <div key={idx} className="glass rounded-xl p-4 relative">
              <span className="absolute top-3 right-3 text-[10px] font-bold text-primary bg-primary/10 w-5 h-5 rounded-full flex items-center justify-center">
                {idx + 1}
              </span>
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                {(() => {
                  const StepIcon = stepIcons[idx];
                  return <StepIcon className="w-4 h-4 text-primary" stroke={1.5} />;
                })()}
              </div>
              <h3 className="text-xs font-semibold">{step.title}</h3>
              <p className="text-[10px] text-muted-foreground mt-1 leading-snug">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8 animate-fade-in animate-delay-200">
          {t.processAndGrowth.principles.map((principle, idx) => {
            const PrincipleIcon = principleIcons[idx];
            return (
              <div key={idx} className="glass rounded-xl p-4 text-center hover:glow-border transition-all duration-500">
                <PrincipleIcon className="w-5 h-5 text-primary mx-auto mb-2" stroke={1.5} />
                <h4 className="text-xs font-semibold mb-1">{principle.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-snug">{principle.description}</p>
              </div>
            );
          })}
        </div>

        {/* ── PART B: What's Next ── */}

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start mt-8">
          {/* Left — Learning */}
          <div>
            <div className="mb-4 animate-fade-in">
              <span className="text-sm text-primary tracking-widest uppercase">
                {t.processAndGrowth.learningLabel}
              </span>
            </div>
            <div className="space-y-3">
              {t.processAndGrowth.learningItems.map((item, idx) => (
                <div key={idx} className="animate-fade-in" style={{ animationDelay: `${(idx + 3) * 100}ms` }}>
                  <LearningCard
                    icon={learningIcons[idx]}
                    title={item.title}
                    description={item.description}
                    status={item.status}
                    statusLabel={item.statusLabel}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right — Goals + Vision */}
          <div className="glass glow-border border border-primary/35 rounded-2xl p-6 mt-2 lg:mt-0 lg:translate-y-9 w-full animate-fade-in animate-delay-300">
            {/* Goals */}
            <div className="flex items-center gap-2 mb-4">
              <IconTargetArrow className="w-5 h-5 text-primary" stroke={1.5} />
              <h3 className="text-base font-semibold">{t.processAndGrowth.goalsLabel}</h3>
            </div>

            <div className="space-y-3">
              {t.processAndGrowth.goals.map((goal, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {goal.done ? (
                    <IconCircleCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" stroke={1.5} />
                  ) : (
                    <IconCircle className="w-5 h-5 text-border shrink-0 mt-0.5" stroke={1.5} />
                  )}
                  <div>
                    <h5 className={`text-base font-medium leading-snug ${goal.done ? "line-through text-muted-foreground" : ""}`}>
                      {goal.text}
                    </h5>
                    <p className="text-sm text-muted-foreground leading-snug">{goal.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Vision */}
            <div className="border-t border-border mt-5 pt-5">
              <div className="flex items-center gap-2 mb-4">
                <IconEye className="w-5 h-5 text-primary" stroke={1.5} />
                <h3 className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">
                  {t.processAndGrowth.visionLabel}
                </h3>
              </div>

              <div className="space-y-3">
                {t.processAndGrowth.visionItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <IconCircle className="w-5 h-5 text-border shrink-0 mt-0.5" stroke={1.5} />
                    <div>
                      <h5 className="text-base font-medium leading-snug">{item.text}</h5>
                      <p className="text-sm text-muted-foreground leading-snug">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ProcessAndGrowth.displayName = "ProcessAndGrowth";
