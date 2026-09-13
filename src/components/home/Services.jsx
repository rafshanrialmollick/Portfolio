import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';

export default function Services() {
  return (
    <section id="service" className="relative py-24 bg-[#070b15] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <SectionHeading watermark="Services" subtitle="Service" title="What I Offer" />

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#0e1526] p-8 rounded-2xl border border-white/5 hover:border-st-primary/50 transition-all duration-300 shadow-xl group relative"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 rounded-xl bg-st-primary/10 flex items-center justify-center p-3 mb-6 group-hover:bg-st-primary group-hover:scale-110 transition-all duration-300">
                <img src={service.icon} alt={service.title} className="w-10 h-10 object-contain group-hover:brightness-0 transition" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-st-primary transition-colors">
                {service.title}
              </h3>

              {/* Text */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
