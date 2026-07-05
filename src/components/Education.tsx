import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { education } from "../data/education";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-zinc-950/20 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center text-zinc-50 font-sans"
        >
          Education
        </motion.h2>

        <div className="relative border-r border-zinc-800 mr-4 md:mr-6 space-y-12 text-right">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pr-8 md:pr-10 group"
            >
              {/* Glowing dot indicator */}
              <div className="absolute -right-[6px] top-2 w-3 h-3 rounded-full bg-cyan-500 border border-zinc-950 transition-all duration-300 group-hover:scale-125 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

              <div className="bg-zinc-900/20 p-6 rounded-2xl border border-zinc-800/80 hover:border-zinc-800 hover:shadow-lg hover:shadow-cyan-500/[0.01] transition-all duration-300">
                <div className="flex flex-col md:flex-row-reverse md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                      {edu.school}
                    </h3>
                    <div className="flex items-center justify-end gap-2 text-cyan-450 font-mono text-sm font-semibold mt-1">
                      {edu.degree} <GraduationCap className="w-4 h-4 text-cyan-500" />
                    </div>
                  </div>
                  <div className="flex flex-col text-xs text-zinc-400 font-mono md:items-start text-left gap-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" /> {edu.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" /> {edu.location}
                    </div>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
