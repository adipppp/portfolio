import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import type { ExperienceItem } from "../types";

const experiences: ExperienceItem[] = [
  {
    id: "dtd-backend-intern",
    role: "Backend Engineer Intern",
    company: "Direktorat Transformasi Digital Universitas Indonesia",
    period: "Februari 2025 - Juli 2025 (6 Bulan)",
    location: "Depok, Indonesia",
    description: [
      "Mengembangkan RESTful API menggunakan Golang dan Fiber untuk website Asrama UI",
      "Implementasi ERD yang telah dinormalisasi untuk mengurangi redundansi data",
      "Mengimplementasikan sistem autentikasi dan authorisasi berbasis JWT",
      "Berkolaborasi dengan tim frontend untuk memastikan integrasi API yang mulus",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Pengalaman Kerja
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-slate-800"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0f172a]" />

              <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-blue-400 font-medium">
                      <Briefcase className="w-4 h-4" /> {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col text-sm text-slate-500 md:items-end">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm leading-relaxed [&_a]:text-blue-400 [&_a]:font-medium [&_a]:no-underline [&_a:hover]:underline [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-blue-300">
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
