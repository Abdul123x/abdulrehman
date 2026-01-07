import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const techStack = [
  "React",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "Express",
  "REST APIs",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 tech-grid opacity-50" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float -translate-x-1/2" />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-float translate-x-1/2"
        style={{ animationDelay: "-3s" }}
      />

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up opacity-0">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for new projects
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0 stagger-1">
            I Build <span className="gradient-text">Scalable</span>
            <br />
            Web Applications
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up opacity-0 stagger-2">
            Full-Stack JavaScript Developer specializing in turning complex
            business problems into clean, performant, and maintainable digital
            solutions.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-up opacity-0 stagger-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-mono bg-secondary text-secondary-foreground rounded-md border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up opacity-0 stagger-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Hire Me
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-up opacity-0 stagger-5">
            <a
              href="https://github.com/Abdul123x"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdulrehman-saleem"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
