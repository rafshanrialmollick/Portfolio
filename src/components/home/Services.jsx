import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "../../data/portfolioData";
import SectionHeading from "../common/SectionHeading";
import { useTheme } from "../../context/ThemeContext";

export default function Services() {
  const { isDark } = useTheme();

  return (
    <section
      id="service"
      className={`relative py-16 md:py-24 max-w-full overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#070b15]" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          watermark="Services"
          subtitle="Service"
          title="What I Offer"
        />

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 shadow-xl group relative ${
                isDark
                  ? "bg-[#0e1526] border-white/5 hover:border-st-primary/50"
                  : "bg-white border-slate-200/80 hover:border-st-primary shadow-slate-200/60"
              }`}
            >
              {/* Service Icon */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center p-3 mb-6 group-hover:bg-st-primary group-hover:scale-110 transition-all duration-300 ${
                  isDark ? "bg-st-primary/10" : "bg-amber-100"
                }`}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:brightness-0 transition"
                />
              </div>

              {/* Title */}
              <h3
                className={`text-lg sm:text-xl font-bold mb-3 group-hover:text-st-primary transition-colors ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {service.title}
              </h3>

              {/* Text */}
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
