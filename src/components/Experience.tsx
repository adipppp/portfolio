import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 border-t border-zinc-900 bg-zinc-950/20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center text-zinc-50 font-sans"
        >
          Work Experience
        </motion.h2>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Glowing dot indicator */}
              <div className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-cyan-500 border border-zinc-950 transition-all duration-300 group-hover:scale-125 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

              <div className="bg-zinc-900/20 p-6 rounded-2xl border border-zinc-800/80 hover:border-zinc-800 hover:shadow-lg hover:shadow-cyan-500/[0.01] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400/95 font-mono text-sm font-semibold mt-1">
                      <Briefcase className="w-4 h-4" /> {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col text-xs text-zinc-400 font-mono md:items-end gap-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-600" /> {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-600" /> {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2.5 text-zinc-400 text-sm leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i} className="pl-2 -indent-5 ml-5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
