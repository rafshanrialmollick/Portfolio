import React from "react";
import { motion } from "framer-motion";
import { heroData } from "../../data/portfolioData";
import { FaGithub, FaLinkedin, FaTwitter, FaDev } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  devto: FaDev,
};

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:py-28 max-w-full overflow-hidden bg-cover bg-center transition-colors duration-300"
      style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
    >
      {/* Background Gradient Overlay */}
      <div
        className={`absolute inset-0 z-0 transition-colors duration-300 ${
          isDark
            ? "bg-gradient-to-r from-[#070b15] via-[#070b15]/95 to-[#070b15]/75"
            : "bg-gradient-to-r from-slate-50 via-slate-50/95 to-slate-100/80"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4 md:space-y-6 px-1 text-center lg:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-st-primary text-lg sm:text-xl md:text-2xl font-semibold tracking-wide"
            >
              {heroData.greeting}
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`fo text-4xl sm:text-6xl md:text-7xl uppercase font-extrabold tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {heroData.name.split(" ")[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-st-primary via-amber-400 to-yellow-500">
                {heroData.name.split(" ")[1]}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {heroData.role}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {heroData.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-2 sm:pt-4 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a href="#contact" className="st-btn-primary">
                Hire Me
              </a>
              <a href="#portfolio" className="st-btn-outline">
                View Portfolio
              </a>
            </motion.div>

            {/* Mobile Social Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4 flex lg:hidden justify-center gap-3"
            >
              {heroData.socials.map((social) => {
                const Icon = socialIcons[social.name.toLowerCase()];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition ${
                      isDark
                        ? "bg-slate-800 text-slate-300 hover:bg-st-primary hover:text-black"
                        : "bg-slate-200 text-slate-700 hover:bg-st-primary hover:text-black"
                    }`}
                    title={social.name}
                  >
                    {Icon ? <Icon size={16} /> : social.name.substring(0, 2)}
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative max-w-md w-full"
            >
              {/* Background Glow Ring */}
              <div className="absolute -inset-4 bg-st-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />

              <div
                className={`relative rounded-2xl overflow-hidden border-2 border-st-primary/30 shadow-2xl ${
                  isDark ? "bg-[#101828]" : "bg-white"
                }`}
              >
                <img
                  src={heroData.heroImage}
                  alt={heroData.name}
                  decoding="async"
                  className="w-full h-[360px] sm:h-[450px] object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Desktop Floating Social Sidebar */}
              <div
                className={`absolute -left-5 bottom-8 hidden lg:flex flex-col gap-3 backdrop-blur-md p-3 rounded-2xl border shadow-xl ${
                  isDark
                    ? "bg-[#0d1424]/90 border-white/10"
                    : "bg-white/90 border-slate-200"
                }`}
              >
                {heroData.socials.map((social) => {
                  const Icon = socialIcons[social.name.toLowerCase()];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition duration-300 ${
                        isDark
                          ? "bg-[#1e293b] text-slate-300 hover:bg-st-primary hover:text-black"
                          : "bg-slate-100 text-slate-700 hover:bg-st-primary hover:text-black"
                      }`}
                      title={social.name}
                    >
                      {Icon ? <Icon size={18} /> : social.name.substring(0, 2)}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
