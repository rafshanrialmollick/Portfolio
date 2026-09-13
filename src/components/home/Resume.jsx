import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';

export default function Resume() {
  const renderTimelineGroup = (groupData) => (
    <div className="space-y-8">
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-st-primary/10 flex items-center justify-center p-2.5 border border-st-primary/20">
          <img src={groupData.icon} alt={groupData.title} className="w-full h-full object-contain" />
        </div>
        <h3 className="text-2xl font-bold text-white">{groupData.title}</h3>
      </div>

      {/* Timeline Items */}
      <div className="relative pl-6 space-y-8 border-l-2 border-slate-800">
        {groupData.items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative bg-[#0d1424] p-6 rounded-xl border border-white/5 shadow-lg group hover:border-st-primary/40 transition-all duration-300"
          >
            {/* Timeline Bullet Badge */}
            <div className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-st-dark-card border-2 border-st-primary group-hover:bg-st-primary transition-all duration-300" />

            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h4 className="text-lg font-bold text-white group-hover:text-st-primary transition">
                {item.title}
              </h4>
              <span className="px-3 py-1 bg-st-primary/10 text-st-primary text-xs font-semibold rounded-full border border-st-primary/20">
                {item.duration}
              </span>
            </div>

            <h5 className="text-sm font-medium text-slate-400 mb-3">
              {item.institution}
            </h5>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="resume" className="relative py-24 bg-[#070b15] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <SectionHeading watermark="Resume" subtitle="Resume" title="Qualifications & Career" />

        {/* Dual Columns: Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {renderTimelineGroup(resumeData.education)}
          {renderTimelineGroup(resumeData.experience)}
        </div>

      </div>
    </section>
  );
}
