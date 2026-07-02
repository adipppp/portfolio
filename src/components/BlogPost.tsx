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
  const formattedDate = new Intl.DateTimeFormat("id-ID", {
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
        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-10 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Blog
      </a>

      <header className="mb-12">
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
          <CalendarDays className="w-4 h-4" />
          <time dateTime={pubDate.toISOString()}>{formattedDate}</time>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
          {title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Prose Container */}
      <div className="prose prose-invert max-w-none prose-lg 
        [&_a]:text-blue-500 hover:[&_a]:text-blue-400
        [&_pre]:border [&_pre]:border-slate-800
        [&_blockquote]:border-blue-500 [&_blockquote]:bg-blue-900/10 [&_blockquote]:not-italic [&_blockquote]:py-1 [&_blockquote]:rounded-r-lg
      ">
        {children}
      </div>
    </motion.article>
  );
};

export default BlogPost;
