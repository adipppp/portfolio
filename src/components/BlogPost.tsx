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
      className="pt-32 pb-20 px-6 sm:px-8 max-w-3xl mx-auto"
    >
      <a
        href="/blog"
        className="inline-flex items-center gap-2 mb-10 transition-colors font-mono text-sm font-semibold hover:opacity-85"
        style={{ color: "var(--color-accent)" }}
      >
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </a>

      <header className="mb-12 pb-8" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="flex items-center gap-2 text-sm mb-4 font-mono" style={{ color: "var(--color-text-2)" }}>
          <CalendarDays className="w-4 h-4" style={{ color: "var(--color-border)" }} />
          <time dateTime={pubDate.toISOString()}>{formattedDate}</time>
        </div>

        <h1 
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
        >
          {title}
        </h1>

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-sm font-mono text-xs"
              style={{
                background: "var(--color-tag)",
                color: "var(--color-text-2)",
                border: "1px solid var(--color-border)",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Prose Container */}
      <div 
        className="prose max-w-none prose-warm 
          [&_a]:text-accent hover:[&_a]:opacity-80
          [&_pre]:border [&_pre]:border-border [&_pre]:bg-surface [&_pre]:text-text
          [&_blockquote]:border-accent [&_blockquote]:bg-accent-dim [&_blockquote]:not-italic [&_blockquote]:py-1 [&_blockquote]:rounded-sm
        "
        style={{ color: "var(--color-text)" }}
      >
        {children}
      </div>
    </motion.article>
  );
};

export default BlogPost;
