import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../../data/portfolioData";
import SectionHeading from "../common/SectionHeading";
import { useTheme } from "../../context/ThemeContext";

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section
      id="skills"
      className={`relative py-16 md:py-24 max-w-full overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#090d1a]" : "bg-slate-100/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          watermark="Skills"
          subtitle="Skills"
          title="Technical Stack & Expertise"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <h2
              className={`text-xl sm:text-2xl lg:text-3xl font-bold leading-snug ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {skillsData.headingTitle}
            </h2>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {skillsData.headingSubtitle}
            </p>
          </motion.div>

          {/* Right Progress Bars Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {skillsData.skillsList.map((skill, id) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                  <span className={isDark ? "text-white" : "text-slate-900"}>
                    {skill.name}
                  </span>
                  <span className="text-st-primary font-bold">{skill.percentage}%</span>
                </div>
                <div
                  className={`h-2.5 w-full rounded-full overflow-hidden p-0.5 ${
                    isDark ? "bg-slate-800" : "bg-slate-200"
                  }`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: id * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-st-primary to-amber-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
