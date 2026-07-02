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
  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(pubDate);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col justify-between p-6 bg-slate-800/30 border border-slate-700 rounded-3xl hover:border-blue-500/50 transition-colors h-full"
    >
      <div>
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
          <CalendarDays className="w-4 h-4" />
          <time dateTime={pubDate.toISOString()}>{formattedDate}</time>
        </div>
        
        <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
          <a href={`/blog/${slug}`}>
            <span className="absolute inset-0"></span>
            {title}
          </a>
        </h3>
        
        <p className="text-slate-400 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:gap-3 transition-all">
          Baca Selengkapnya <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
