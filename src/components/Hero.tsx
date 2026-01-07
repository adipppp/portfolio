
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import GithubStats from './GithubStats';

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
          transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
          className="inline-block p-3 rounded-2xl bg-blue-500/10 mb-6"
        >
          <Code2 className="w-12 h-12 text-blue-500" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6 py-2 leading-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
        >
          Backend Engineer & Architect
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10"
        >
          Membangun solusi sisi server yang skalabel, kokoh, dan berkinerja tinggi. 
          Spesialisasi dalam sistem terdistribusi, desain API, dan infrastruktur cloud.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex gap-4"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:email@example.com" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Change 'octocat' to your real GitHub username */}
        <GithubStats username="octocat" />
      </motion.div>
    </section>
  );
};

export default Hero;
