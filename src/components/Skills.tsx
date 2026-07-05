import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 sm:px-8"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-16 text-center"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
        >
          Core Competencies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div 
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="p-6 rounded-sm transition-all"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="p-2.5 rounded-sm"
                    style={{
                      background: "var(--color-accent-dim)",
                      border: "1px solid var(--color-accent)",
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
                  </div>
                  <h4 
                    className="font-bold text-base"
                    style={{ color: "var(--color-text)" }}
                  >
                    {group.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2.5 py-1 rounded-sm font-mono text-xs"
                      style={{
                        background: "var(--color-tag)",
                        color: "var(--color-text-2)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
