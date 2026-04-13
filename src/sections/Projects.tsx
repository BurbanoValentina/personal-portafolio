import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  github: string | null;
  githubBackend?: string;
  live: string | null;
}

const projects: Project[] = [
  {
    title: "Vector Field Simulator",
    subtitle: "Degree Project — Unity 3D",
    description:
      "An interactive 3D vector field application built in Unity, designed as a degree project to visualize and explore mathematical vector fields in real-time. Supports dynamic field generation, camera controls, and educational overlays.",
    tags: ["C#", "Unity 3D", "Mathematics", "3D Graphics"],
    image: "/projects/TrabajoDeGrado.jpeg",
    github: "https://github.com/BurbanoValentina/AplicacionVectores.git",
    live: null,
  },
  {
    title: "Math Learning Game",
    subtitle: "2D Educational Videogame",
    description:
      "A 2D educational videogame designed to make learning mathematics fun and engaging. Features multiple levels, scoring system, and adaptive difficulty. Full-stack project with a separate backend API for progress tracking.",
    tags: ["TypeScript", "CSS", "Java", "Vercel"],
    image: "/projects/VideojuegoMatematico.jpeg",
    github: "https://github.com/BurbanoValentina/FrotendProjectGame.git",
    githubBackend: "https://github.com/BurbanoValentina/BackendProjectGame.git",
    live: "https://frotendproject.vercel.app/",
  },
  {
    title: "3D Surface Calculator",
    subtitle: "GeoGebra-style 3D Visualizer",
    description:
      "A GeoGebra-inspired 3D calculator for visualizing mathematical surfaces and functions. Allows users to input equations and see real-time 3D renderings with rotation, zoom, and interactive exploration.",
    tags: ["TypeScript", "CSS", "Three.js", "Vercel"],
    image: "/projects/CalculadoraSuperficial3D.jpeg",
    github: "https://github.com/BurbanoValentina/ProyectoGrafico3D.git",
    live: "https://proyecto-grafico3-d.vercel.app/",
  },
];

export const Projects = (): React.JSX.Element => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm text-primary tracking-widest uppercase">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Projects that{" "}
            <span className="italic font-normal font-serif text-primary">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass rounded-3xl overflow-hidden group hover:glow-border transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className={`grid md:grid-cols-2 gap-0 ${idx % 2 !== 0 ? "md:direction-rtl" : ""}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${idx % 2 !== 0 ? "md:order-2" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>

                {/* Content */}
                <div className={`p-8 md:p-10 flex flex-col justify-center ${idx % 2 !== 0 ? "md:order-1" : ""}`}>
                  <span className="text-primary text-sm font-medium tracking-wide uppercase mb-2">
                    {project.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
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
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" /> Frontend
                      </a>
                    )}
                    {project.githubBackend && (
                      <a
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" /> Backend
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12 animate-fade-in">
          <a
            href="https://github.com/BurbanoValentina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm hover:text-primary hover:glow-border transition-all duration-300"
          >
            View All Projects <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
