
import { Database, Server, Cloud, Shield, Cpu, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillCard = ({ icon: Icon, title, skills, index }: { icon: any, title: string, skills: string[], index: number }) => (
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
        <span key={skill} className="px-3 py-1 text-sm rounded-full bg-slate-900 text-slate-400">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillGroups = [
    {
      icon: Server,
      title: "Backend Core",
      skills: ["Node.js", "Go", "Python", "Java", "gRPC", "REST API"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Prisma"]
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"]
    },
    {
      icon: Shield,
      title: "Security",
      skills: ["OAuth2", "JWT", "HTTPS", "Encryption", "Security Auditing"]
    },
    {
      icon: Cpu,
      title: "Architecture",
      skills: ["Microservices", "Event-Sourcing", "Message Queues", "DDD"]
    },
    {
      icon: MessageSquare,
      title: "Communication",
      skills: ["Kafka", "RabbitMQ", "MQTT", "WebSockets"]
    }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} {...group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
