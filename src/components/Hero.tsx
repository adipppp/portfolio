import { Github, Mail, Code2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import GithubStats from "./GithubStats";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="inline-block p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6"
        >
          <Code2 className="w-10 h-10 text-cyan-400" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight text-zinc-50 font-sans"
        >
          Building reliable backend services and exploring systems architecture.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-8"
        >
          Nadhif Nadhiftya Putra · Backend & Systems Developer based in Depok, Indonesia
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12 items-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-zinc-950 font-semibold rounded-xl transition-all shadow-lg shadow-cyan-600/10"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 font-semibold rounded-xl transition-all border border-zinc-700"
          >
            Contact Me
          </a>
          
          <div className="flex gap-4 sm:ml-4">
            <a
              href="https://github.com/adipppp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800 text-zinc-400 hover:text-zinc-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:fernanda.nadhiftya@gmail.com"
              className="p-3 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800 text-zinc-400 hover:text-zinc-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Monospaced Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-3 gap-8 max-w-lg w-full py-4 border-y border-zinc-900 font-mono text-sm text-zinc-400 mb-12"
        >
          <div>
            <span className="block text-zinc-300 font-bold text-lg">5+</span>
            Systems Built
          </div>
          <div>
            <span className="block text-zinc-300 font-bold text-lg">1,500+</span>
            Commits
          </div>
          <div>
            <span className="block text-zinc-300 font-bold text-lg">Go/Py/TS</span>
            Primary Stack
          </div>
        </motion.div>

        <GithubStats username="adipppp" />
      </motion.div>
    </section>
  );
};

export default Hero;
