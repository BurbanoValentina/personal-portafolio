interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

interface Certification {
  title: string;
  institution: string;
  period: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "2024 — Present",
    title: "Software Engineering Student",
    company: "Universidad Cooperativa de Colombia — Full Stack",
    description:
      "Full-stack development with React, TypeScript, SpringBoot, and MongoDB. Building cross-platform solutions with multidisciplinary teams.",
    tags: ["React", "TypeScript", "SpringBoot", "MongoDB"],
  },
  {
    period: "2025 — 2027",
    title: "Engineering Faculty Representative",
    company: "UCC — Student Government + Tutoring",
    description:
      "Elected student representative for the Engineering Faculty. Managing university well-being initiatives and academic tutoring programs.",
    tags: ["Leadership", "Communication", "Management"],
  },
  {
    period: "2025",
    title: "Freelance Development Assistant",
    company: "Independent Project",
    description:
      "Freelance web development focused on performance and user experience. Delivering responsive, modern applications for clients.",
    tags: ["Freelance", "Web Development", "UX"],
  },
  {
    period: "2025",
    title: "Professional Chess Player",
    company: "ASCUN XXXII University Games — Bucaramanga",
    description:
      "Represented UCC at the ASCUN DAF National University Games. Managing a university chess club and competing at national level.",
    tags: ["Chess", "Strategy", "Competition"],
  },
];

const certifications: Certification[] = [
  {
    title: "English B1",
    institution: "Servicio Nacional de Aprendizaje · Levels 1–13",
    period: "2023 – 2024",
  },
  {
    title: "Software Engineering Seminar",
    institution: "Universidad Cooperativa de Colombia",
    period: "2024 – 2026",
  },
  {
    title: "ASCUN XXXII National University Games",
    institution: "Official chess participant — ASCUN DAF Bucaramanga 2025",
    period: "2025",
  },
  {
    title: "University Academic Tutoring",
    institution: "Faculty of Software Engineering · UCC",
    period: "2025",
  },
];

export const Experience = (): React.JSX.Element => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm text-primary tracking-widest uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Experience that{" "}
            <span className="italic font-normal font-serif text-primary">
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A timeline of my professional growth, from curious student to active
            contributor building products and leading communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Timeline — Left */}
          <div className="lg:col-span-3 relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-12 md:pl-16 animate-fade-in"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />

                  <div className="glass rounded-2xl p-6 hover:glow-border transition-all duration-500 group">
                    <span className="text-primary text-sm font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                    <p className="text-sm text-primary/70 mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications — Right */}
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <h3 className="text-lg font-semibold text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">workspace_premium</span>
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="glass rounded-xl p-5 hover:glow-border transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${(idx + 4) * 150}ms` }}
                  >
                    <h4 className="font-semibold text-sm">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {cert.institution}
                    </p>
                    <span className="inline-block mt-2 text-xs text-primary/80">
                      {cert.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
