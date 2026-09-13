import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../../data/portfolioData";
import SectionHeading from "../common/SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-[#090d1a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          watermark="Skills"
          subtitle="Skills"
          title="MERN Stack Skills"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              {skillsData.headingTitle}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              {skillsData.headingSubtitle}
            </p>
          </motion.div>

          {/* Right Progress Bars Column */}
          <div className="lg:col-span-7 space-y-6">
            {skillsData.skillsList.map((skill, id) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-st-primary">{skill.percentage}%</span>
                </div>
                <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: id * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-st-primary to-amber-300 rounded-full"
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
