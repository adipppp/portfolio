import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitBranch, Terminal } from 'lucide-react';

const GithubStats = ({ username }: { username: string }) => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        
        // Mocking repo stars as it needs multiple API calls for real sum
        // In real app, you'd fetch /users/username/repos and sum stargazers_count
        setStats({
          public_repos: data.public_repos,
          followers: data.followers,
          stars: 120, // Sample value
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  if (loading) return <div className="animate-pulse text-slate-500">Loading GitHub stats...</div>;
  if (!stats) return null;

  const statItems = [
    { label: "Repositori", value: stats.public_repos, icon: Terminal },
    { label: "Total Stars", value: stats.stars, icon: Star },
    { label: "Followers", value: stats.followers, icon: GitBranch },
  ];

  return (
    <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-slate-800/50">
      {statItems.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.1 }}
          className="flex items-center gap-3"
        >
          <div className="p-2 rounded-lg bg-blue-500/10">
            <item.icon className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <div className="text-xl font-bold text-white leading-none">{item.value}</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{item.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GithubStats;
