import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, User, Tag } from "lucide-react";

export default function PortfolioModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0e1526] border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-st-primary hover:text-black text-white flex items-center justify-center transition duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full bg-slate-900 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1526] via-transparent to-transparent" />
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-st-primary/10 text-st-primary text-xs font-semibold rounded-full mb-2">
                {project.subCategory}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h2>
            </div>

            {/* Project Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-st-dark-card border border-white/5 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <User className="w-4 h-4 text-st-primary" />
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-semibold">
                    Client / Org
                  </p>
                  <p className="font-semibold text-white">{project.client}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4 text-st-primary" />
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-semibold">
                    Date
                  </p>
                  <p className="font-semibold text-white">{project.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-300 col-span-2 sm:col-span-1">
                <Tag className="w-4 h-4 text-st-primary" />
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-semibold">
                    Tech Stack
                  </p>
                  <p className="font-semibold text-white">
                    {project.subCategory}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Modal Actions */}
            <div className="pt-4 flex items-center justify-between border-t border-white/10">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="st-btn-primary gap-2 text-sm"
              >
                <span>Live Preview / Code</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full text-slate-400 hover:text-white font-medium text-sm transition"
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
