import React from 'react';

export default function SectionHeading({ watermark, subtitle, title }) {
  return (
    <div className="relative mb-16 text-center">
      <span className="st-watermark">{watermark}</span>
      <p className="st-section-subtitle">{subtitle}</p>
      <h2 className="st-section-title">{title}</h2>
    </div>
  );
}
