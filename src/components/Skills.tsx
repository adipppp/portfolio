import { Database, Server, Cloud, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const SkillCard = ({
  icon: Icon,
  title,
  skills,
  index,
}: {
  icon: any;
  title: string;
  skills: string[];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all"
  >
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-6 h-6 text-blue-500" />
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 text-sm rounded-full bg-slate-900 text-slate-400"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const coreExpertise = [
    { name: "Go", rating: 4 },
    { name: "Java", rating: 4 },
    { name: "Google Cloud", rating: 4 },
    { name: "SQL", rating: 4 },
    { name: "MongoDB", rating: 4 },
    { name: "Docker", rating: 4 },
  ];

  const skillGroups = [
    {
      icon: Server,
      title: "Backend",
      skills: ["Go", "Fiber", "Java", "Spring Boot", "Node.js"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "SQL", "Prisma"],
    },
    {
      icon: Cloud,
      title: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "CI/CD", "GCP", "Git"],
    },
    {
      icon: Cpu,
      title: "Architecture",
      skills: ["System Design", "Microservices", "Node.js Streams"],
    },
    {
      icon: Shield,
      title: "Security & Networking",
      skills: ["OIDC", "VPC Network", "Cloud Firewall", "Subnetting"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Keahlian Teknis
        </motion.h2>

        {/* Core Expertise Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {coreExpertise.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-slate-300">{item.name}</span>
                <span className="text-blue-400">{item.rating}/5</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(item.rating / 5) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {/* Row 1: 3 Groups */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.slice(0, 3).map((group, index) => (
              <SkillCard key={group.title} {...group} index={index} />
            ))}
          </div>
          {/* Row 2: 2 Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto w-full">
            {skillGroups.slice(3, 5).map((group, index) => (
              <SkillCard key={group.title} {...group} index={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
