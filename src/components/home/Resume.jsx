import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../../data/portfolioData";
import SectionHeading from "../common/SectionHeading";
import { useTheme } from "../../context/ThemeContext";

export default function Resume() {
  const { isDark } = useTheme();

  const renderTimelineGroup = (groupData) => (
    <div className="space-y-8">
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-6 sm:mb-8">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center p-2.5 border ${
            isDark
              ? "bg-st-primary/10 border-st-primary/20"
              : "bg-amber-100 border-amber-200"
          }`}
        >
          <img
            src={groupData.icon}
            alt={groupData.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
          {groupData.title}
        </h3>
      </div>

      {/* Timeline Items */}
      <div
        className={`relative pl-6 space-y-6 sm:space-y-8 border-l-2 ${
          isDark ? "border-slate-800" : "border-slate-300"
        }`}
      >
        {groupData.items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className={`relative p-5 sm:p-6 rounded-xl border shadow-lg group transition-all duration-300 ${
              isDark
                ? "bg-[#0d1424] border-white/5 hover:border-st-primary/40"
                : "bg-white border-slate-200 hover:border-st-primary"
            }`}
          >
            {/* Timeline Bullet Badge */}
            <div
              className={`absolute -left-[31px] top-6 w-4 h-4 rounded-full border-2 border-st-primary transition-all duration-300 ${
                isDark ? "bg-[#070b15]" : "bg-white"
              } group-hover:bg-st-primary`}
            />

            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h4
                className={`text-base sm:text-lg font-bold group-hover:text-st-primary transition ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {item.title}
              </h4>
              <span className="px-3 py-1 bg-st-primary/10 text-st-primary text-xs font-bold rounded-full border border-st-primary/20">
                {item.duration}
              </span>
            </div>

            <h5
              className={`text-xs sm:text-sm font-medium mb-3 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {item.institution}
            </h5>

            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="resume"
      className={`relative py-16 md:py-24 max-w-full overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#070b15]" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          watermark="Resume"
          subtitle="Resume"
          title="Qualifications & Experience"
        />

        {/* Dual Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {renderTimelineGroup(resumeData.education)}
          {renderTimelineGroup(resumeData.experience)}
        </div>
      </div>
    </section>
  );
}
