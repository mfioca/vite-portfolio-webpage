import React, { useState,  } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const MinecraftGallery = ({ photos, title, description, testprop = "1280 / 680", gridRowHeight = "150px", collapsible = true}) => {
    const [lightboxImages, setLightboxImages] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(!collapsible); // Open by default if non-collapsible

    const openLightbox = (photos, index) => {
        setLightboxImages(photos.map((photo) => ({ src: photo.src })));
        setCurrentSlide(index);
        setLightboxOpen(true);
    };

    return (
        <div className="standard-padding-margin">
            {/* Title as the Toggle Button (Only for collapsible sections) */}
            {collapsible ? (
                    <h2 
                        className="toggle-gallery-title" 
                        onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                        style={{ cursor: "pointer" }}
                    >
                        {isGalleryOpen ? `▼ ${ title}` : `▶ ${ title}`}
                    </h2>
                ) : (
                    <h2 className="non-collapsable-title">{ title }</h2> // Non-collapsible sections just display title
                )}
            {/* Description Stays Visible */}
                { description }
            {/* Collapsible Image Grid */}
            {isGalleryOpen && (
                <div className="custom-gallery-grid" style={{ gridAutoRows: gridRowHeight }}>
                    {photos.map((photo, index) => (
                        <div key={ index } className="custom-gallery-item" onClick={() => openLightbox(photos, index)}>
                            <img 
                                src={ photo.src } 
                                alt={ photo.alt } 
                                width={ photo.width } 
                                height={ photo.height } 
                                style={{ aspectRatio: testprop }}
                                className="custom-gallery-image"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            )}
            <Lightbox
                open={ lightboxOpen }
                close={ () => setLightboxOpen(false) }
                slides={ lightboxImages }
                index={ currentSlide }
                plugins={ [Fullscreen, Slideshow, Thumbnails, Zoom] }
            />
        </div>
    );
};

export default MinecraftGallery;
