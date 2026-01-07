import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const responsibilities = [
  "Designed and developed full-stack web applications from concept to deployment for diverse clients",
  "Built scalable e-commerce platforms, SaaS dashboards, and business management systems",
  "Implemented secure authentication systems, payment integrations (Stripe, PayPal), and third-party APIs",
  "Optimized database performance and implemented caching strategies for high-traffic applications",
  "Managed complete project lifecycles including requirements gathering, development, testing, and deployment",
  "Maintained and enhanced production applications with 99.9% uptime for multiple clients",
  "Collaborated directly with clients to translate business requirements into technical solutions",
  "Conducted code reviews and established best practices for long-term maintainability"
];

const metrics = [
  { value: "10+", label: "Projects Delivered" },
  { value: "15+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "3+", label: "Years Experience" },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
            
            <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 md:ml-16">
              {/* Timeline Dot */}
              <div className="absolute -left-[4.5rem] top-8 w-4 h-4 rounded-full bg-primary glow hidden md:block" />
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">Self-Employed</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    Freelance Full-Stack Developer
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground bg-secondary px-3 py-1.5 rounded-lg">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">2023 — Present</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6">
                Providing end-to-end web development services for startups, small businesses, 
                and agencies. Specializing in the MERN stack with a focus on building scalable, 
                production-ready applications that drive business growth.
              </p>

              {/* Responsibilities */}
              <div className="space-y-3">
                {responsibilities.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
