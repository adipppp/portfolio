import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 sm:px-8"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-16 text-center"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          Work Experience
        </motion.h2>

        <div 
          className="relative border-l ml-4 md:ml-6 space-y-12"
          style={{ borderColor: "var(--color-border)" }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline indicator dot */}
              <div 
                className="absolute -left-[6px] top-2.5 w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125"
                style={{
                  background: "var(--color-accent)",
                  border: "2px solid var(--color-bg)",
                }}
              />

              <div 
                className="p-6 rounded-sm transition-all duration-300"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 
                      className="text-lg font-bold transition-colors"
                      style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
                    >
                      {exp.role}
                    </h3>
                    <div 
                      className="flex items-center gap-2 font-mono text-sm font-semibold mt-1"
                      style={{ color: "var(--color-accent)" }}
                    >
                      <Briefcase className="w-4 h-4" /> {exp.company}
                    </div>
                  </div>
                  <div 
                    className="flex flex-col text-xs font-mono md:items-end gap-1"
                    style={{ color: "var(--color-text-2)" }}
                  >
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" style={{ color: "var(--color-border)" }} /> {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" style={{ color: "var(--color-border)" }} /> {exp.location}
                    </div>
                  </div>
                </div>

                <ul 
                  className="list-disc list-inside space-y-2.5 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-2)" }}
                >
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
