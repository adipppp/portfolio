import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-zinc-950/20 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-zinc-50 font-sans"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-zinc-400 leading-relaxed text-lg"
        >
          <p>
            I'm a Computer Science student at Universitas Indonesia. My focus is on backend architecture, infrastructure, and systems programming—diving into the parts of software that most people don't see.
          </p>
          <p>
            I'm naturally drawn to understanding how things work under the hood: how schedulers allocate CPU time, why GPU memory access patterns matter, and how applications become bottlenecks under heavy load. I learn best by building things until they break—and then understanding exactly why.
          </p>

          {/* Accent block for personality */}
          <div className="mt-12 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 pl-8 border-l-cyan-500/80 font-mono text-sm text-zinc-400">
            <span className="block text-cyan-400 font-bold mb-3 uppercase tracking-wide text-xs">Extra Curriculars & Hobbies</span>
            <p className="leading-relaxed">
              Solving PicoCTF security challenges, completing CryptoHack cryptography exercises, and training ML models on Kaggle. 
              Outside of technical domains, I watch series like <span className="text-zinc-200">JoJo's Bizarre Adventure</span>, <span className="text-zinc-200">Spider-Noir</span>, <span className="text-zinc-200">DanDaDan</span>, and <span className="text-zinc-200">The Sandman</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
