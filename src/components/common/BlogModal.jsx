import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Share2 } from 'lucide-react';

export default function BlogModal({ blog, onClose }) {
  if (!blog) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-[#0e1526] border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-st-primary hover:text-black text-white flex items-center justify-center transition duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-4 text-xs text-st-primary font-medium">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" /> By: {blog.author}
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {blog.date}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              {blog.title}
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
              {blog.content}
            </p>

            {/* Modal Actions */}
            <div className="pt-4 flex items-center justify-between border-t border-white/10">
              <button className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-st-primary transition">
                <Share2 className="w-4 h-4" /> Share Article
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-st-primary text-black font-semibold text-xs hover:bg-st-primary-hover transition"
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
