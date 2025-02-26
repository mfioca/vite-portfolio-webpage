import React, { useState } from 'react';
import { DividerLine, IntroSection, BodyContainer } from '../SharedComponents';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const MinecraftGallery = ({ sections, title, description }) => {
    // Initialize openSections state dynamically based on sections array
    const initialOpenState = sections.reduce((acc, section) => {
        acc[section.key] = false;
        return acc;
    }, {});

    const [openSections, setOpenSections] = useState(initialOpenState);
    const [lightboxImages, setLightboxImages] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    // Toggle function for each section
    const toggleSection = (key) => {
        setOpenSections((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

    // Open lightbox with correct starting index
    const openLightbox = (photos, index) => {
        setLightboxImages(photos.map((photo) => ({ src: photo.src })));
        setCurrentSlide(index); // Set the clicked image as the starting slide
        setLightboxOpen(true);
    };

    return (
        <BodyContainer className="minecraft-gallery">
            <IntroSection title={title}>
                <p>{description}</p>
            </IntroSection>
            <DividerLine />

            <div className="base-max-width">
                {sections.map(({ key, name, photos, description }) => (
                    <div key={key}>
                        {/* Section Name Always Visible */}
                        <h2 className="section-title" onClick={() => toggleSection(key)}>
                            {openSections[key] ? `▼ ${name}` : `▶ ${name}`}
                        </h2>

                        {/* Description Always Visible */}
                        <p>{description}</p>

                        {/* Expandable Section (Only Images) */}
                        {openSections[key] && (
                            <MasonryPhotoAlbum
                                photos={photos}
                                onClick={({ index }) => openLightbox(photos, index)}
                            />
                        )}

                        <DividerLine />
                    </div>
                ))}
            </div>

            {/* Lightbox Component */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={lightboxImages}
                index={currentSlide} // Ensure Lightbox starts on the correct image
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </BodyContainer>
    );
};

export default MinecraftGallery;


/*
<div className="base-max-width">
                {sections.map(({ key, name, photos }) => (
                    <div key={key}>
                        <button className="test" onClick={() => toggleSection(key)}>
                            {openSections[key] ? 'Collapse' : 'Expand'} {name}
                        </button>
                        {openSections[key] && (
                            <MasonryPhotoAlbum
                                photos={photos}
                                onClick={({ index }) => openLightbox(photos, index)} 

                              
                               />
                            )}
                        </div>
                    ))}
                </div>
*/