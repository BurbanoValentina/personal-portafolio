import { useLang } from "@/contexts/LanguageContext";

const valueIcons: string[] = ["code", "speed", "group", "lightbulb"];

export const About = (): React.JSX.Element => {
  const { t } = useLang();

  return (
    <section id="about" className="py-16 relative">
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-4 animate-fade-in">
          <span className="text-sm text-primary tracking-widest uppercase">{t.about.label}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <div className="space-y-6 animate-fade-in animate-delay-100">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t.about.title1}
              <span className="italic font-normal font-serif text-primary">
                {t.about.titleHighlight}
              </span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.about.bio1}
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.about.bio2}
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.about.bio3}
            </p>
          </div>

          {/* Right — Values Grid + Quote */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.values.map((value, idx) => (
                <div
                  key={idx}
                  className="glass rounded-2xl p-6 hover:glow-border transition-all duration-500 group animate-fade-in"
                  style={{ animationDelay: `${(idx + 2) * 100}ms` }}
                >
                  <span className="material-symbols-outlined text-3xl text-primary mb-4 block group-hover:scale-110 transition-transform duration-300">
                    {valueIcons[idx]}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote — moved here from left column */}
            <div className="glass rounded-2xl p-6 border-l-4 border-primary animate-fade-in animate-delay-600">
              <p className="text-foreground italic text-lg leading-relaxed">
                {t.about.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
