import { AnimatedBorderButton, Button } from "@/components/common";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/i18n";
import { useMemo, memo } from "react";

interface Dot {
  left: number;
  top: number;
  delay: number;
  duration: number;
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

// Generar dots solo una vez (costante)
const generateSpacedDots = (count: number = 15): Dot[] => {
  const dots: Dot[] = [];
  const minDistance = 15;
  let attempts = 0;
  const maxAttempts = 300;
  
  while (dots.length < count && attempts < maxAttempts) {
    const newDot = {
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
    };
    
    const isFarEnough = dots.every(dot => {
      const distance = Math.sqrt(
        Math.pow(newDot.left - dot.left, 2) + Math.pow(newDot.top - dot.top, 2)
      );
      return distance >= minDistance;
    });
    
    if (isFarEnough) {
      dots.push(newDot);
    }
    attempts++;
  }
  
  return dots;
};

export const Hero = memo((): React.JSX.Element => {
  const { t } = useLang();
  
  // Memoizar los dots - reducidos a 15 para mejor rendimiento
  const animatedDots = useMemo(() => generateSpacedDots(15), []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/images/hero-bg.webp" alt="Hero background" fetchPriority="high" decoding="async" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Static green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {animatedDots.map((dot, i) => (
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column — text: below image on mobile, left on desktop */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {t.hero.badge}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight animate-fade-in animate-delay-100">
                {t.hero.heading1}
                <span className="text-primary glow-text font-extrabold">{t.hero.heading2}</span>
                <br />
                {t.hero.heading3}
                <br />
                <span className="italic font-normal font-serif text-foreground">{t.hero.heading4}</span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                {t.hero.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 animate-fade-in animate-delay-300">
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
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/images/profile-photo.webp" alt="Valentina Burbano" fetchPriority="high" decoding="async" className="w-full aspect-4/5 object-cover rounded-2xl" />
                <div className="absolute bottom-2 right-2 md:-bottom-4 md:right-4 glass rounded-xl px-3 py-2 md:px-4 md:py-3 animate-float text-xs md:text-sm">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-medium">{t.hero.available}</span>
                  </div>
                </div>
                <div className="absolute top-2 -left-2 md:-top-4 md:-left-4 glass rounded-xl px-3 py-2 md:px-4 md:py-3 animate-float animate-delay-500 text-xs md:text-sm">
                  <div className="text-xl md:text-2xl font-bold text-primary">1+</div>
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
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10" />
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
});
Hero.displayName = "Hero";
