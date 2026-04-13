import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Valentina demonstrates an exceptional ability to solve complex problems. Her dedication to continuous learning and her focus on teamwork make her stand out in any project.",
    name: "Braulio Esteban Burbano",
    role: "Systems Engineer",
    initials: "BB",
  },
  {
    quote:
      "Her passion for software development is genuine and contagious. She always brings innovative ideas and has a growth mindset that inspires everyone around her.",
    name: "Aedel Fernando Suárez",
    role: "Systems Engineer",
    initials: "AS",
  },
  {
    quote:
      "Working with Valentina is enriching. Her attention to detail and ability to translate complex requirements into elegant solutions is truly remarkable.",
    name: "Juan Manuel Imachi",
    role: "Software Developer",
    initials: "JI",
  },
];

export const Testimonials = (): React.JSX.Element => {
  const [active, setActive] = useState<number>(0);

  const next = (): void => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = (): void => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm text-primary tracking-widest uppercase">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Kind words from{" "}
            <span className="italic font-normal font-serif text-primary">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 relative animate-fade-in">
            {/* Quote icon */}
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            {/* Quote text */}
            <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground mb-8 min-h-[120px]">
              "{testimonials[active].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-sm font-bold text-white">
                {testimonials[active].initials}
              </div>
              <div>
                <div className="font-semibold">{testimonials[active].name}</div>
                <div className="text-sm text-primary">{testimonials[active].role}</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === active
                      ? "w-12 bg-primary"
                      : "w-6 bg-muted hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
