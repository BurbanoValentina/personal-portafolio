interface Value {
  icon: string;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: "code",
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: "speed",
    title: "Performance",
    description: "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: "group",
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    description: "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = (): React.JSX.Element => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-4 animate-fade-in">
          <span className="text-sm text-primary tracking-widest uppercase">About Me</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <div className="space-y-6 animate-fade-in animate-delay-100">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Building the future,{" "}
              <span className="italic font-normal font-serif text-primary">
                one component at a time.
              </span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate Software Engineering student with a focus on full-stack
              web and mobile development. My journey started with a curiosity for how
              things work on the web, and it has evolved into a deep commitment to
              modern frontend and backend technologies.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I specialize in React, TypeScript, SpringBoot, and MongoDB — building
              everything from interactive learning platforms to 3D mathematical
              visualizers. My approach combines technical excellence with a keen eye
              for design and user experience.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond coding, I serve as Engineering Faculty Representative at UCC
              (2025–2027), compete in chess at national university tournaments
              (ASCUN 2025), and mentor fellow students as an academic monitor.
            </p>

            {/* Quote */}
            <div className="glass rounded-2xl p-6 border-l-4 border-primary mt-8">
              <p className="text-foreground italic text-lg leading-relaxed">
                "A software engineer in training, committed to continuous learning
                and with a mindset of constant progress when facing new challenges."
              </p>
            </div>
          </div>

          {/* Right — Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-6 hover:glow-border transition-all duration-500 group animate-fade-in"
                style={{ animationDelay: `${(idx + 2) * 100}ms` }}
              >
                <span className="material-symbols-outlined text-3xl text-primary mb-4 block group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </span>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
