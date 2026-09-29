import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { reviewsData } from "../../data/portfolioData";
import SectionHeading from "../common/SectionHeading";
import { useTheme } from "../../context/ThemeContext";

import "swiper/css";
import "swiper/css/pagination";

export default function Reviews() {
  const { isDark } = useTheme();

  return (
    <section
      className={`relative py-16 md:py-24 max-w-full overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#070b15]" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading watermark="Review" subtitle="Review" title="Client Feedback" />

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id}>
                <div
                  className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between h-full shadow-xl relative group transition duration-300 ${
                    isDark
                      ? "bg-[#0e1526] border-white/5 hover:border-st-primary/40"
                      : "bg-white border-slate-200/80 hover:border-st-primary shadow-slate-200/50"
                  }`}
                >
                  {/* Quote Icon & Review Text */}
                  <div className="space-y-4 mb-6">
                    <div className="w-9 h-9 opacity-60">
                      <img
                        src="/images/icon/quote.png"
                        alt="quote"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed italic ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      "{review.comment}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div
                    className={`flex items-center gap-4 pt-4 border-t ${
                      isDark ? "border-white/10" : "border-slate-200"
                    }`}
                  >
                    <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-st-primary/40 shrink-0">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="truncate">
                      <h4
                        className={`text-sm font-bold group-hover:text-st-primary transition truncate ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {review.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium truncate">
                        {review.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
