import React, { useState,  } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export const MinecraftGallery = ({ photos, title, description, testprop = "1280 / 680", gridRowHeight = "150px", collapsible = true}) => {
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
                                decoding="async"
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
                plugins={ [Fullscreen, Thumbnails] }
            />
        </div>
    );
};

/*************************************************************************/
/*                           Maze Gallery                                */
/*************************************************************************/

export const MazeGallery = ({
    photos = [],
    title,
    description,
    collapsible = true
}) => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(!collapsible);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const openLightbox = (index) => {
        setCurrentSlide(index);
        setLightboxOpen(true);
    };

    return (
        <div className="standard-padding-margin">
            {collapsible ? (
                <h2
                    className="toggle-gallery-title"
                    onClick={() => setIsGalleryOpen(open => !open)}
                    style={{ cursor: 'pointer' }}
                >
                    {isGalleryOpen ? '▼' : '▶'} {title}
                </h2>
            ) : (
                <h2 className="non-collapsable-title">{title}</h2>
            )}

            { description }

            {isGalleryOpen && (
                <div
                    className="custom-gallery-grid"
                    style={{ gridAutoRows: 'auto' }}
                >
                    {photos.map((photo, index) => (
                        <div
                            key={ photo.src }
                            className="custom-gallery-item"
                            onClick={() => openLightbox(index)}
                            role="button"
                            tabIndex={0}
                            aria-label={ `Enlarge ${photo.alt}` }
                            onKeyDown={(event) => {
                                if (
                                    event.key === 'Enter' ||
                                    event.key === ' '
                                ) {
                                    event.preventDefault();
                                    openLightbox(index);
                                }
                            }}
                            style={{
                                aspectRatio: '1000 / 871',
                                minWidth: 0,
                                cursor: 'pointer',
                                backgroundColor: 'var(--colorwhite)'
                            }}
                        >
                            <img
                                src={ photo.src }
                                alt={ photo.alt }
                                width={ photo.width }
                                height={ photo.height }
                                className="custom-gallery-image"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    aspectRatio: 'auto',
                                    objectFit: 'contain',
                                    transform: 'none'
                                }}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>
            )}

            <Lightbox
                open={ lightboxOpen }
                close={() => setLightboxOpen(false)}
                slides={photos.map(photo => ({
                    src: photo.src,
                    alt: photo.alt
                }))}
                index={ currentSlide }
                plugins={ [Fullscreen, Thumbnails] }
            />
        </div>
    );
};

