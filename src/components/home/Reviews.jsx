import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { reviewsData } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Reviews() {
  return (
    <section className="relative py-24 bg-[#070b15] overflow-hidden">
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
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-[#0e1526] p-8 rounded-2xl border border-white/5 flex flex-col justify-between h-full shadow-xl relative group hover:border-st-primary/40 transition duration-300">
                  
                  {/* Quote Icon & Review Text */}
                  <div className="space-y-4 mb-6">
                    <div className="w-10 h-10 opacity-60">
                      <img src="/images/icon/quote.png" alt="quote" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed italic">
                      "{review.comment}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-st-primary/30">
                      <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-st-primary transition">
                        {review.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">
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
