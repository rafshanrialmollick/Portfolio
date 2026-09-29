import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, User, Tag } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function PortfolioModal({ project, onClose }) {
  const { isDark } = useTheme();

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`relative w-full max-w-4xl border rounded-2xl overflow-hidden shadow-2xl my-auto ${
            isDark
              ? "bg-[#0e1526] border-white/10 text-white"
              : "bg-white border-slate-200 text-slate-900"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition duration-200 ${
              isDark
                ? "bg-black/60 text-white hover:bg-st-primary hover:text-slate-950"
                : "bg-white/80 text-slate-900 shadow-md hover:bg-st-primary hover:text-slate-950"
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-56 sm:h-72 md:h-96 w-full bg-slate-900 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-st-primary/10 text-st-primary text-xs font-bold rounded-full mb-2">
                {project.subCategory}
              </span>
              <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                {project.title}
              </h2>
            </div>

            {/* Project Metadata Bar */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl border text-xs sm:text-sm ${
                isDark
                  ? "bg-[#101828] border-white/5"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-st-primary flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">
                    Client / Org
                  </p>
                  <p className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    {project.client}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-st-primary flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">
                    Date
                  </p>
                  <p className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    {project.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Tag className="w-4 h-4 text-st-primary flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">
                    Tech Stack
                  </p>
                  <p className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    {project.subCategory}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {project.description}
            </p>

            {/* Modal Actions */}
            <div className={`pt-4 flex flex-wrap items-center justify-between gap-4 border-t ${isDark ? "border-white/10" : "border-slate-200"}`}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="st-btn-primary gap-2 text-xs sm:text-sm py-2.5 px-6"
              >
                <span>Live Preview / Code</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onClose}
                className={`px-5 py-2 rounded-full font-medium text-xs sm:text-sm transition ${
                  isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Close Window
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
