import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 border-t border-zinc-900 bg-zinc-950/20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center text-zinc-50 font-sans"
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="font-bold text-zinc-100 text-lg">{group.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-zinc-950 text-zinc-400 border border-zinc-800 font-mono text-xs"
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
