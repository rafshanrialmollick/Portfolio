import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Calendar } from "lucide-react";
import { blogsData } from "../../data/portfolioData";
import SectionHeading from "../common/SectionHeading";
import BlogModal from "../common/BlogModal";
import { useTheme } from "../../context/ThemeContext";

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const { isDark } = useTheme();

  return (
    <section
      id="blog"
      className={`relative py-16 md:py-24 max-w-full overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#090d1a]" : "bg-slate-100/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading watermark="Blogs" subtitle="Blogs" title="Latest Articles" />

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogsData.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onClick={() => setSelectedBlog(post)}
              className={`rounded-2xl overflow-hidden border shadow-xl group cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? "bg-[#0e1526] border-white/5 hover:border-st-primary/40"
                  : "bg-white border-slate-200 hover:border-st-primary shadow-slate-200/50"
              }`}
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Info & Meta */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-st-primary font-bold">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" /> By: {post.author}
                    </span>
                    <span>|</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                  </div>

                  <h3
                    className={`text-base sm:text-lg font-bold group-hover:text-st-primary transition-colors leading-snug line-clamp-2 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {post.title}
                  </h3>
                </div>
              </div>

              <div
                className={`px-6 pb-6 text-xs font-bold flex items-center gap-1 group-hover:text-st-primary transition ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Read Full Article →
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Article Reader Modal */}
      {selectedBlog && (
        <BlogModal
          blog={selectedBlog}
          onClose={() => setSelectedBlog(null)}
        />
      )}
    </section>
  );
}
