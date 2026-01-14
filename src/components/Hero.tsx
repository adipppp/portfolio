import { Github, Mail, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import GithubStats from "./GithubStats";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="inline-block p-3 rounded-2xl bg-blue-500/10 mb-6"
        >
          <Code2 className="w-12 h-12 text-blue-500" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4 py-2 leading-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
        >
          Fernanda Nadhiftya Putra
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8"
        >
          Mahasiswa Ilmu Komputer & Software Engineer. Tertarik pada arsitektur
          dan pengembangan web, Cloud Infrastructure, dan Networking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/adipppp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:fernanda.nadhiftya@gmail.com"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Change 'octocat' to your real GitHub username */}
        <GithubStats username="adipppp" />
      </motion.div>
    </section>
  );
};

export default Hero;
