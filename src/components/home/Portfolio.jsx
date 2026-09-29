import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import SectionHeading from "../common/SectionHeading";
import PortfolioModal from "../common/PortfolioModal";
import { useTheme } from "../../context/ThemeContext";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const { isDark } = useTheme();

  return (
    <section
      id="portfolio"
      className={`relative py-16 md:py-24 max-w-full overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#090d1a]" : "bg-slate-100/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          watermark="Portfolio"
          subtitle="Portfolio"
          title="Featured Projects"
        />

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData.slice(0, visibleCount).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border shadow-xl transition-all duration-300 ${
                isDark ? "bg-[#0e1526] border-white/5 hover:border-st-primary/50" : "bg-white border-slate-200 hover:border-st-primary"
              }`}
            >
              {/* Image Container with Zoom */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-st-primary text-xs font-bold uppercase tracking-wider mb-1">
                    {item.subCategory}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">
                    {item.title}
                  </h3>
                  <span className="text-xs text-slate-200 font-medium underline">
                    View Project Details →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < portfolioData.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="st-btn-primary"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
