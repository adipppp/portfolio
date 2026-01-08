import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, GitBranch, Terminal } from "lucide-react";

const GithubStats = ({ username }: { username: string }) => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
        );
        const data = await response.json();

        setStats({
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  if (loading)
    return (
      <div className="animate-pulse text-slate-500 text-sm">
        Loading GitHub stats...
      </div>
    );
  if (!stats) return null;

  const statItems = [
    { label: "Repositories", value: stats.public_repos, icon: Terminal },
    { label: "Followers", value: stats.followers, icon: Users },
    { label: "Following", value: stats.following, icon: GitBranch },
  ];

  return (
    <div className="mt-12 pt-8 border-t border-slate-800/50 w-full max-w-2xl">
      <div className="flex flex-wrap justify-center gap-8 mb-8">
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
            <div className="text-left">
              <div className="text-xl font-bold text-white leading-none">
                {item.value}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
                {item.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Top Languages - Kartu Visual Dinamis */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/50 p-6 flex flex-col items-center justify-center min-h-[150px]"
      >
        <p className="text-sm font-medium text-slate-400 mb-4">
          Bahasa Pemrograman Teratas
        </p>
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0f172a&title_color=3b82f6&text_color=94a3b8`}
          alt="Bahasa Pemrograman Teratas"
          className="w-full h-auto max-w-[400px]"
          loading="lazy"
          onError={(e) => {
            // Hide the component if image fails to load
            (e.target as HTMLImageElement).parentElement?.style.setProperty(
              "display",
              "none",
            );
          }}
        />
      </motion.div>
    </div>
  );
};

export default GithubStats;
