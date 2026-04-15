import { ExternalLink, Github } from "lucide-react";
import { useLang } from "@/i18n";
import { memo } from "react";

interface ProjectMeta {
  tags: string[];
  image: string;
  github: string | null;
  githubBackend?: string;
  live: string | null;
}

const projectsMeta: ProjectMeta[] = [
  {
    tags: ["C#", "Unity 3D", "Mathematics", "3D Graphics"],
    image: "/images/projects/TrabajoDeGrado.webp",
    github: "https://github.com/BurbanoValentina/AplicacionVectores.git",
    live: null,
  },
  {
    tags: ["TypeScript", "CSS", "Java", "Vercel"],
    image: "/images/projects/VideojuegoMatematico.webp",
    github: "https://github.com/BurbanoValentina/FrotendProjectGame.git",
    githubBackend: "https://github.com/BurbanoValentina/BackendProjectGame.git",
    live: "https://frotendproject.vercel.app/",
  },
  {
    tags: ["TypeScript", "CSS", "Three.js", "Vercel"],
    image: "/images/projects/CalculadoraSuperficial3D.webp",
    github: "https://github.com/BurbanoValentina/ProyectoGrafico3D.git",
    live: "https://proyecto-grafico3-d.vercel.app/",
  },
];

export const Projects = memo((): React.JSX.Element => {
  const { t } = useLang();

  return (
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <span className="text-sm text-primary tracking-widest uppercase">
            {t.projects.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            {t.projects.title1}
            <span className="italic font-normal font-serif text-primary">
              {t.projects.titleHighlight}
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {t.projects.items.map((project, idx) => {
            const meta = projectsMeta[idx];
            return (
              <div
                key={idx}
                className="glass rounded-3xl overflow-hidden group hover:glow-border transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className={`grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-0 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden ${idx % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <img
                      src={meta.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <span className="text-primary text-sm font-medium tracking-wide uppercase mb-2">
                      {project.subtitle}
                    </span>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {meta.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {meta.github && (
                        <a href={meta.github} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                          <Github className="w-4 h-4" /> Frontend
                        </a>
                      )}
                      {meta.githubBackend && (
                        <a href={meta.githubBackend} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                          <Github className="w-4 h-4" /> Backend
                        </a>
                      )}
                      {meta.live && (
                        <a href={meta.live} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
});
Projects.displayName = "Projects";
