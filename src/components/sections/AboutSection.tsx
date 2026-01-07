import { Code2, Zap, Shield, Layers } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Writing maintainable, well-structured code that scales with your business needs."
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Optimizing every aspect from database queries to frontend rendering for speed."
  },
  {
    icon: Shield,
    title: "Security Focused",
    description: "Implementing industry-standard security practices and authentication systems."
  },
  {
    icon: Layers,
    title: "Full-Stack Expertise",
    description: "Seamless integration between frontend, backend, and database layers."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
              ABOUT ME
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Turning Ideas Into
              <br />
              <span className="gradient-text">Production-Ready</span> Software
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Full-Stack JavaScript Developer with over 3 years of experience 
                building web applications for startups, agencies, and established businesses. 
                My focus is on creating solutions that not only look great but also perform 
                exceptionally under real-world conditions.
              </p>
              <p>
                From complex e-commerce platforms handling thousands of daily transactions 
                to SaaS dashboards processing real-time data, I've worked across diverse 
                industries and technical challenges. My approach combines modern development 
                practices with a deep understanding of business requirements.
              </p>
              <p>
                I believe in writing code that other developers can understand and maintain. 
                Every project I take on is an opportunity to deliver value—not just through 
                features, but through architecture that supports growth and change.
              </p>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
