import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { education } from "../data/education";

const Education = () => {
  return (
    <section
      id="education"
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
          Education
        </motion.h2>

        <div 
          className="relative border-l ml-4 md:ml-6 space-y-12"
          style={{ borderColor: "var(--color-border)" }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
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
                      {edu.school}
                    </h3>
                    <div 
                      className="flex items-center gap-2 font-mono text-sm font-semibold mt-1"
                      style={{ color: "var(--color-accent)" }}
                    >
                      <GraduationCap className="w-4 h-4" /> {edu.degree}
                    </div>
                  </div>
                  <div 
                    className="flex flex-col text-xs font-mono md:items-end gap-1"
                    style={{ color: "var(--color-text-2)" }}
                  >
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" style={{ color: "var(--color-border)" }} /> {edu.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" style={{ color: "var(--color-border)" }} /> {edu.location}
                    </div>
                  </div>
                </div>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-2)" }}
                >
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
