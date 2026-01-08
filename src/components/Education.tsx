import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    school: "Universitas Indonesia",
    degree: "S1 Ilmu Komputer",
    period: "2022 - Saat ini",
    location: "Depok, Indonesia",
    description:
      "Berfokus pada dasar-dasar ilmu komputer, pengembangan backend, arsitektur sistem, dan infrastruktur jaringan/cloud.",
  },
  {
    school: "SMAN 8 Jakarta",
    degree: "MIPA",
    period: "2019 - 2022",
    location: "Jakarta Selatan, Indonesia",
    description:
      "Fokus pada Matematika dan Ilmu Pengetahuan Alam dengan minat awal pada teknologi.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Pendidikan
        </motion.h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pr-8 border-r-2 border-slate-800 text-right"
            >
              <div className="absolute -right-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#0f172a]" />

              <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
                <div className="flex flex-col md:flex-row-reverse md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {edu.school}
                    </h3>
                    <div className="flex items-center justify-end gap-2 text-emerald-400 font-medium">
                      {edu.degree} <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex flex-col text-sm text-slate-500 md:items-start text-left">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {edu.location}
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
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
