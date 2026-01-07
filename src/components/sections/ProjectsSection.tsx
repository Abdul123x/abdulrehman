import { projects } from "@/data/projects";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of production-grade applications built for real clients
            with real business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay number */}
                {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div> */}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Problem */}
                <div className="mb-4 p-3 bg-secondary/50 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Problem:{" "}
                    </span>
                    {project.problem}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-1 mb-6">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li
                      key={i}
                      className="text-xs text-muted-foreground flex items-start gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="heroOutline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>

                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
