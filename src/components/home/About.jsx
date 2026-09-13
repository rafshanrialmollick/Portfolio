import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { aboutData } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#090d1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading watermark="About Me" subtitle="About Me" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative max-w-md w-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-st-primary/30 to-st-primary/0 rounded-2xl blur-lg" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-st-dark-card">
                <img
                  src={aboutData.image}
                  alt={aboutData.title}
                  className="w-full h-[480px] object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              {aboutData.title}
            </h2>
            <h4 className="text-xl font-semibold text-st-primary">
              {aboutData.subtitle}
            </h4>
            <p className="text-slate-300 text-base leading-relaxed">
              {aboutData.bio}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-4 border-y border-white/10 text-sm">
              {aboutData.details.map((info, id) => (
                <div key={id} className="flex items-center gap-2">
                  <span className="font-semibold text-white min-w-[90px]">{info.label} :</span>
                  <span className="text-slate-300">{info.value}</span>
                </div>
              ))}
            </div>

            {/*  Button */}
            <div className="pt-2">
              <a href={aboutData.cvLink} download className="st-btn-primary gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
