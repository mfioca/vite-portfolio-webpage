import React, { useState } from 'react';
import slides from './slides.json';

function PowerpointViewer() {
  const [index, setIndex] = useState(0);
  const [showSlides, setShowSlides] = useState(false);
  const total = slides.length;

  const nextSlide = () => setIndex((index + 1) % total);
  const prevSlide = () => setIndex((index - 1 + total) % total);

  const current = slides[index];

  return (
    <div className="powerpoint-viewer center-margin">
      <h2
        className="toggle-gallery-title"
        onClick={() => setShowSlides(!showSlides)}
        >
            {showSlides ? '▼ Powerpoint Project Presentation' : '▶ Powerpoint Project Presentation'}
        </h2>
        {showSlides && (
            <>
                <div className="slide-container box-style-standard">
                <img
                    src={`${import.meta.env.BASE_URL}powerpoint_slides/${current.asset}`}
                    alt={current.alt}
                    width={current.width}
                    height={current.height}
                    className="slide-image"
                />
                </div>
                <div className="slide-controls flex-align-center-center">
                <button className="button" onClick={prevSlide}>Previous</button>
                <span style={{ margin: '0 20px' }}>
                    {index + 1} / {total}
                </span>
                <button className="button" onClick={nextSlide}>Next</button>
                </div>
            </>
        )}
    </div>
  );
}

export default PowerpointViewer;