import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import PortfolioModal from '../common/PortfolioModal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <section id="portfolio" className="relative py-24 bg-[#090d1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <SectionHeading watermark="Portfolio" subtitle="Portfolio" title="Featured Projects" />

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.slice(0, visibleCount).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(item)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-st-dark-card border border-white/5 shadow-xl"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b15] via-[#070b15]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-st-primary text-xs font-semibold uppercase tracking-wider mb-1">
                    {item.subCategory}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <span className="text-xs text-slate-300 font-medium underline">
                    View Project Details →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < portfolioData.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="st-btn-primary"
            >
              Load More
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Detail Modal */}
      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
