import { useLang } from "@/i18n";
import { memo } from "react";

export const Experience = memo((): React.JSX.Element => {
  const { t } = useLang();

  const isOngoing = (period: string): boolean => /presente|present/i.test(period);

  const getStartYear = (period: string): number => {
    const match = period.match(/\d{4}/);
    return match ? Number(match[0]) : 0;
  };

  const sortByPeriod = (a: { period: string }, b: { period: string }): number => {
    const aOngoing = isOngoing(a.period);
    const bOngoing = isOngoing(b.period);

    if (aOngoing !== bOngoing) {
      return bOngoing ? 1 : -1;
    }

    return getStartYear(b.period) - getStartYear(a.period);
  };

  const experienceItems = [...t.experience.items].sort(sortByPeriod);

  const certificationItems = [...t.experience.certs].sort(sortByPeriod);

  return (
    <section id="experience" className="py-16 relative">
      <div className="container mx-auto px-6">

        {/* ── Experience Header ── */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <span className="text-sm text-primary tracking-widest uppercase">
            {t.experience.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            {t.experience.title1}
            <span className="italic font-normal font-serif text-primary">
              {t.experience.titleHighlight}
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        {/* ── Experience Timeline ── */}
        <div className="relative mb-16 lg:mb-32">
          {/* Line: left edge on mobile */}
          <div className="absolute left-2 top-0 bottom-0 w-px bg-linear-to-b from-primary/70 via-primary/35 to-transparent lg:hidden" />
          {/* Line: center on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-linear-to-b from-primary/85 via-primary/45 to-transparent" />

          <div className="space-y-8">
            {experienceItems.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              const card = (
                <div className="glass rounded-2xl p-6 flex flex-col hover:glow-border transition-all duration-500">
                  <span className="text-primary text-sm font-medium">{exp.period}</span>
                  <h3 className="text-xl font-bold mt-1 mb-1">{exp.title}</h3>
                  <p className="text-sm text-primary/70 mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );

              return (
                <div
                  key={idx}
                  className="relative flex items-center animate-fade-in"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* Left slot */}
                  <div className="hidden lg:block lg:flex-1 lg:pr-8">
                    {isLeft ? card : null}
                  </div>

                  {/* Dot */}
                  <div className="w-4 shrink-0 flex justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
                  </div>

                  {/* Right slot */}
                  <div className="flex-1 pl-4 lg:pl-8">
                    <div className="lg:hidden">{card}</div>
                    <div className="hidden lg:block">{!isLeft ? card : null}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Certifications Header ── */}
        <div id="certifications" className="text-center mb-12 md:mb-16 animate-fade-in scroll-mt-24">
          <span className="text-sm text-primary tracking-widest uppercase">
            {t.experience.certLabel}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            {t.experience.certTitle1}
            <span className="italic font-normal font-serif text-primary">
              {t.experience.certTitleHighlight}
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.experience.certSubtitle}
          </p>
        </div>

        {/* ── Certifications Timeline ── */}
        <div className="relative">
          {/* Line: left edge on mobile */}
          <div className="absolute left-2 top-0 bottom-0 w-px bg-linear-to-b from-primary/70 via-primary/35 to-transparent lg:hidden" />
          {/* Line: center on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-linear-to-b from-primary/85 via-primary/45 to-transparent" />

          <div className="space-y-8">
            {certificationItems.map((cert, idx) => {
              const isLeft = idx % 2 === 0;
              const card = (
                <div className="glass rounded-2xl p-6 flex flex-col hover:glow-border transition-all duration-500">
                  <span className="text-primary text-sm font-medium">{cert.period}</span>
                  <h4 className="text-xl font-bold mt-1 mb-1">{cert.title}</h4>
                  <p className="text-sm text-primary/70 mb-3">{cert.institution}</p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 self-start px-4 py-2 text-sm font-medium rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                    >
                      <span className="material-symbols-outlined text-base">open_in_new</span>
                      {t.experience.viewCert}
                    </a>
                  )}
                </div>
              );

              return (
                <div
                  key={idx}
                  className="relative flex items-center animate-fade-in"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* Left slot */}
                  <div className="hidden lg:block lg:flex-1 lg:pr-8">
                    {isLeft ? card : null}
                  </div>

                  {/* Dot */}
                  <div className="w-4 shrink-0 flex justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
                  </div>

                  {/* Right slot */}
                  <div className="flex-1 pl-4 lg:pl-8">
                    <div className="lg:hidden">{card}</div>
                    <div className="hidden lg:block">{!isLeft ? card : null}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
});
Experience.displayName = "Experience";
