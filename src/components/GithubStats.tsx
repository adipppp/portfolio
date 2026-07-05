import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, GitBranch, Terminal } from "lucide-react";
import type { GithubUserStats } from "../types";

const GithubStats = ({ username }: { username: string }) => {
  const [stats, setStats] = useState<GithubUserStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchStats = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
          { signal: abortController.signal },
        );
        const data = await response.json();

        if (!abortController.signal.aborted) {
          setStats({
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following,
          });
          setLoading(false);
        }
      } catch (error) {
        if (!abortController.signal.aborted) {
          console.error("Error fetching GitHub stats:", error);
          setLoading(false);
        }
      }
    };

    fetchStats();

    return () => abortController.abort();
  }, [username]);

  if (loading) {
    return (
      <div className="mt-12 pt-8 w-full max-w-2xl min-h-[300px]"></div>
    );
  }
  if (!stats) return null;

  const statItems: {
    label: string;
    value: number;
    icon: typeof Terminal;
    id: string;
  }[] = [
    { label: "Repositories", value: stats.public_repos, icon: Terminal, id: "repos" },
    { label: "Followers", value: stats.followers, icon: Users, id: "followers" },
    { label: "Following", value: stats.following, icon: GitBranch, id: "following" },
  ];

  return (
    <div className="mt-12 pt-8 w-full max-w-2xl" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {statItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + statItems.indexOf(item) * 0.05 }}
            className="flex items-center gap-3"
          >
            <div 
              className="p-2 rounded-sm"
              style={{
                background: "var(--color-accent-dim)",
                border: "1px solid var(--color-accent)",
              }}
            >
              <item.icon className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
            </div>
            <div className="text-left">
              <div 
                className="text-xl font-bold leading-none"
                style={{ color: "var(--color-text)", fontFamily: "var(--font-serif)" }}
              >
                {item.value}
              </div>
              <div 
                className="text-[10px] uppercase tracking-widest mt-1"
                style={{ color: "var(--color-text-2)", fontFamily: "var(--font-mono)" }}
              >
                {item.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!imgError && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="rounded-sm overflow-hidden p-6 flex flex-col items-center justify-center min-h-[150px]"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <p 
            className="text-[10px] uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-2)" }}
          >
            Top Programming Languages
          </p>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=${username}&layout=compact&hide_border=true&bg_color=ECE7D8&title_color=2B4A36&text_color=6B5C50&icon_color=2B4A36`}
            alt="Most used programming languages on GitHub"
            className="w-full h-auto max-w-[400px]"
            width={400}
            height={200}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        </motion.div>
      )}
    </div>
  );
};

export default GithubStats;
