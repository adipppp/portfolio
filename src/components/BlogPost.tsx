import type { ReactNode } from "react";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  pubDate: Date;
  tags: string[];
  children: ReactNode;
}

const BlogPost = ({ title, pubDate, tags, children }: Props) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(pubDate);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 px-4 max-w-3xl mx-auto"
    >
      <a
        href="/blog"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-10 transition-colors font-mono text-sm font-semibold"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </a>

      <header className="mb-12 border-b border-zinc-900 pb-8">
        <div className="flex items-center gap-2 text-zinc-400 text-sm mb-4 font-mono">
          <CalendarDays className="w-4 h-4 text-zinc-600" />
          <time dateTime={pubDate.toISOString()}>{formattedDate}</time>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100 font-sans">
          {title}
        </h1>

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 font-mono text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Prose Container */}
      <div className="prose prose-invert max-w-none prose-zinc 
        [&_a]:text-cyan-400 hover:[&_a]:text-cyan-300
        [&_pre]:border [&_pre]:border-zinc-800/80 [&_pre]:bg-zinc-950/50
        [&_blockquote]:border-cyan-500 [&_blockquote]:bg-cyan-950/10 [&_blockquote]:not-italic [&_blockquote]:py-1 [&_blockquote]:rounded-r-lg
      ">
        {children}
      </div>
    </motion.article>
  );
};

export default BlogPost;
