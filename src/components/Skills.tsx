import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";

const Skills = () => (
  <section
    id="skills"
    className="py-20 px-6 sm:px-8"
    style={{ borderTop: "1px solid var(--color-border)" }}
  >
    <div className="max-w-5xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-baseline justify-between pb-3 mb-10"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <h2
          className="text-2xl font-bold"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          Toolkit
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              {/* Group header */}
              <div className="flex items-center gap-2.5 mb-4">
                <Icon
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "var(--color-accent)" }}
                />
                <h3
                  className="text-xs font-medium uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
                >
                  {group.title}
                </h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-sm"
                    style={{
                      fontFamily: "var(--font-mono)",
                      background: "var(--color-tag)",
                      color: "var(--color-text-2)",
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

export default Skills;
