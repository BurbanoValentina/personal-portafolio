import { useMemo } from "react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

interface Dot {
  left: number;
  top: number;
  duration: number;
  delay: number;
}

interface SocialLink {
  icon: LucideIcon;
  href: string;
}

const skills: string[] = [
  "React", "Next.js", "Java", "SpringBoot", "Angular", "Python",
  "Django", "JavaScript", "Arduino", "C#", "HTML", "Flutter", "TypeScript",
  "Node.js", "PostgreSQL", "MongoDB", "Docker", "AWS",
  "Vercel", "Tailwind CSS", "Figma", "Git", "GitHub Actions", "Azure"
];

const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com/BurbanoValentina" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/valentina-burbano-salazar-2473a2327/" },
];

export const Hero = (): React.JSX.Element => {
  const { t } = useLang();

  const dots: Dot[] = useMemo(() => {
    return [...Array(30)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/hero-bg.webp" alt="Hero background" fetchPriority="high" decoding="async" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-20 lg:pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column — text: below image on mobile, left on desktop */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {t.hero.badge}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight animate-fade-in animate-delay-100">
                {t.hero.heading1}
                <span className="text-primary glow-text font-extrabold">{t.hero.heading2}</span>
                <br />
                {t.hero.heading3}
                <br />
                <span className="italic font-normal font-serif text-foreground">{t.hero.heading4}</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                Hi, I'm <span className="text-foreground font-medium">{t.hero.name}</span> {t.hero.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
              <a href="#footer">
                <Button size="lg">
                  {t.hero.contactMe} <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <AnimatedBorderButton />
            </div>

            <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
              <span className="text-sm text-muted-foreground">{t.hero.followMe}</span>
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column — image: first on mobile, right on desktop */}
          <div className="relative animate-fade-in animate-delay-300 order-1 lg:order-2">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/Profile-Photo.webp" alt="Valentina Burbano" fetchPriority="high" decoding="async" className="w-full aspect-4/5 object-cover rounded-2xl" />
                <div className="absolute -bottom-4 right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">{t.hero.available}</span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animate-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">{t.hero.yearsExp}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-20 animate-fade-in animate-delay-600">
          <p className="text-center text-sm text-muted-foreground tracking-widest uppercase mb-8">
            {t.hero.techTitle}
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...skills, ...skills].map((skill, idx) => (
                <span key={idx}
                  className="inline-flex items-center px-5 py-2 rounded-full glass text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-300 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
