import { skills } from "@/data/projects";
import { Code, Server, Database, Cloud } from "lucide-react";

const skillCategories = [
  { key: "frontend", title: "Frontend", icon: Code, color: "from-blue-500 to-cyan-500" },
  { key: "backend", title: "Backend", icon: Server, color: "from-green-500 to-emerald-500" },
  { key: "database", title: "Database", icon: Database, color: "from-orange-500 to-amber-500" },
  { key: "devops", title: "DevOps & Tools", icon: Cloud, color: "from-purple-500 to-pink-500" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            SKILLS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience with modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category) => {
            const categorySkills = skills[category.key as keyof typeof skills];
            return (
              <div
                key={category.key}
                className="p-6 rounded-2xl bg-card border border-border card-hover"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
