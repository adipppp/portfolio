import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

interface Props {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  tags: string[];
}

const BlogCard = ({ slug, title, description, pubDate, tags }: Props) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(pubDate);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col justify-between p-6 rounded-sm transition-all h-full"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div>
        <div className="flex items-center gap-2 text-sm mb-4 font-mono" style={{ color: "var(--color-text-2)" }}>
          <CalendarDays className="w-4 h-4" style={{ color: "var(--color-border)" }} />
          <time dateTime={pubDate.toISOString()}>{formattedDate}</time>
        </div>
        
        <h3 
          className="text-xl font-bold mb-3 transition-colors group-hover:opacity-80"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
        >
          <a href={`/blog/${slug}`}>
            <span className="absolute inset-0"></span>
            {title}
          </a>
        </h3>
        
        <p className="leading-relaxed mb-6 text-sm" style={{ color: "var(--color-text-2)" }}>
          {description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-6">
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

        <div 
          className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
          style={{ color: "var(--color-accent)" }}
        >
          Read More <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
