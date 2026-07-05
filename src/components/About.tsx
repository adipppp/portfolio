import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-zinc-950/20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center text-zinc-50 font-sans"
        >
          About & Core Competencies
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Philosophy & Bio (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-zinc-400 leading-relaxed text-lg"
          >
            <p>
              I'm a computer science student at Universitas Indonesia building
              production-grade backend systems and APIs.
            </p>
            <p>
              I'm drawn to the parts of software that most people don't see:
              how schedulers allocate CPU time, why GPU memory access patterns
              matter more than raw compute, and how an application becomes a bottleneck when
              media processing and business logic share the same thread. I learn best
              by building things until they break — and then understanding exactly why.
            </p>
            <p>
              Most of my work spans high-performance REST APIs, background job architectures,
              and orchestration pipelines. My ideal playground is at the intersection of infrastructure,
              backend architecture, and DevOps.
            </p>

            {/* Accent block for personality */}
            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 pl-6 border-l-cyan-500/80 font-mono text-sm text-zinc-400">
              <span className="block text-cyan-400 font-bold mb-2 uppercase tracking-wide text-xs">Extra Curriculars & Hobbies</span>
              Solving PicoCTF security challenges, completing CryptoHack cryptography exercises, and training ML models on Kaggle. 
              Outside of technical domains, I watch series like <span className="text-zinc-200">JoJo's Bizarre Adventure</span>, <span className="text-zinc-200">Spider-Noir</span>, <span className="text-zinc-200">DanDaDan</span>, and <span className="text-zinc-200">The Sandman</span>.
            </div>
          </motion.div>

          {/* Right Column: The Arsenal / Skills (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl font-bold text-zinc-100 font-mono mb-4 uppercase tracking-wider text-xs text-cyan-400">
              // The Arsenal
            </h3>
            
            <div className="space-y-4">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div 
                    key={group.title}
                    className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-800 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <h4 className="font-semibold text-zinc-200 text-sm">{group.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800 font-mono text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
