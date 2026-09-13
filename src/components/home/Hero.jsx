import React from "react";
import { motion } from "framer-motion";
import { heroData } from "../../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070b15] via-[#070b15]/90 to-[#070b15]/70 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-st-primary text-xl md:text-2xl font-semibold tracking-wide"
            >
              {heroData.greeting}
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className=" fo  text-5xl sm:text-6xl md:text-7xl  text-white   uppercase"
            >
              {heroData.name.split(" ")[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-st-primary">
                {heroData.name.split(" ")[1]}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl sm:text-3xl font-medium text-slate-300 tracking-wider"
            >
              {heroData.role}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {heroData.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a href="#contact" className="st-btn-primary">
                Hire Me
              </a>
              <a href="#portfolio" className="st-btn-outline">
                View Portfolio
              </a>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative max-w-md w-full"
            >
              {/* Background Glow Ring */}
              <div className="absolute -inset-4 bg-st-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />

              <div className="relative rounded-2xl overflow-hidden border-2 border-st-primary/30 bg-st-dark-card shadow-2xl">
                <img
                  src={heroData.heroImage}
                  alt={heroData.name}
                  className="w-full h-[450px] object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Social Sidebar */}
              <div className="absolute -left-6 bottom-8 hidden sm:flex flex-col gap-3 bg-[#0d1424]/90 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-xl">
                {heroData.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-st-dark-light hover:bg-st-primary hover:text-black text-slate-300 flex items-center justify-center font-bold text-xs transition duration-300"
                    title={social.name}
                  >
                    {social.name.substring(0, 2)}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
