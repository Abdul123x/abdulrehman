import { processSteps } from "@/data/projects";

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured approach to ensure every project is delivered on time, on budget, and exceeds expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl bg-card border border-border card-hover group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                <span className="text-2xl font-bold text-primary/40 group-hover:text-primary transition-colors">
                  {step.step}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>

              {/* Connector Line (except last in row) */}
              {(index + 1) % 3 !== 0 && index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
