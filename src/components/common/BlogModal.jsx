import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Share2 } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function BlogModal({ blog, onClose }) {
  const { isDark } = useTheme();

  if (!blog) return null;

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
          className={`relative w-full max-w-3xl border rounded-2xl overflow-hidden shadow-2xl my-auto ${
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

          {/* Banner Image */}
          <div className="relative h-56 sm:h-72 md:h-80 w-full overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-4 text-xs text-st-primary font-bold">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" /> By: {blog.author}
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {blog.date}
              </span>
            </div>

            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold leading-snug ${isDark ? "text-white" : "text-slate-900"}`}>
              {blog.title}
            </h2>

            <p className={`text-xs sm:text-sm leading-relaxed whitespace-pre-line ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {blog.content}
            </p>

            {/* Modal Actions */}
            <div className={`pt-4 flex items-center justify-between border-t ${isDark ? "border-white/10" : "border-slate-200"}`}>
              <button className={`inline-flex items-center gap-2 text-xs font-bold hover:text-st-primary transition ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <Share2 className="w-4 h-4" /> Share Article
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-st-primary text-slate-950 font-bold text-xs hover:bg-st-primary-hover transition"
              >
                Close Article
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
