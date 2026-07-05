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
      className="group relative flex flex-col justify-between p-6 bg-zinc-900/20 border border-zinc-800/80 rounded-3xl hover:border-cyan-500/30 transition-all h-full"
    >
      <div>
        <div className="flex items-center gap-2 text-zinc-500 text-sm mb-4 font-mono">
          <CalendarDays className="w-4 h-4 text-zinc-600" />
          <time dateTime={pubDate.toISOString()}>{formattedDate}</time>
        </div>
        
        <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors">
          <a href={`/blog/${slug}`}>
            <span className="absolute inset-0"></span>
            {title}
          </a>
        </h3>
        
        <p className="text-zinc-450 leading-relaxed mb-6 text-sm">
          {description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-zinc-950 text-zinc-450 border border-zinc-850 font-mono text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:gap-3 transition-all">
          Read More <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
