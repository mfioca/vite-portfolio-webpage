import React, { useState } from 'react';
import { DividerLine, IntroSection, BodyContainer } from '../SharedComponents';
import { MasonryPhotoAlbum, RowsPhotoAlbum, ColumnsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import "react-photo-album/rows.css";
import "react-photo-album/columns.css";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const MinecraftGallery = ({ sections, title, description, albumStyle = "Masonry" }) => {
    const initialOpenState = sections.reduce((acc, section) => {
        acc[section.key] = false;
        return acc;
    }, {});

    const [openSections, setOpenSections] = useState(initialOpenState);
    const [lightboxImages, setLightboxImages] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const toggleSection = (key) => {
        setOpenSections((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    

    const openLightbox = (photos, index) => {
        setLightboxImages(photos.map((photo) => ({ src: photo.src })));
        setCurrentSlide(index);
        setLightboxOpen(true);
    };

    // Choose the correct Photo Album Component based on albumStyle prop
    const getPhotoAlbumComponent = (photos, albumStyle) => {
        switch (albumStyle.toLowerCase()) {
            case "rows":
                return <RowsPhotoAlbum photos={photos} onClick={({ index }) => openLightbox(photos, index)} />;
            case "columns":
                return <ColumnsPhotoAlbum photos={photos} onClick={({ index }) => openLightbox(photos, index)} />;
            case "masonry":
            default:
                return <MasonryPhotoAlbum photos={photos} onClick={({ index }) => openLightbox(photos, index)} />;
        }
    };

    

    return (
        <div className="standard-padding-margin">
            <IntroSection title={title}>
                {description}
            </IntroSection>
            <DividerLine />

            <div className="base-max-width">
                {sections.map(({ key, name, photos, description, collapsible = true }) => (
                    <div key={key} className="collapsible-section">
                    {collapsible ? (
                        <h2 className="section-title" onClick={() => toggleSection(key)}>
                        {openSections[key] ? `▼ ${name}` : `▶ ${name}`}
                        </h2>
                    ) : (
                        <h2 className="section-title">{ name }</h2> // No toggle for non-collapsible sections
                    )}

                    { description }

                    {/* Auto-open section if it's non-collapsible */}
                    { (openSections[key] || !collapsible) && getPhotoAlbumComponent(photos, albumStyle) }

                    {collapsible && <DividerLine />} {/* No divider if it's a single section */}
                    </div>
                ))}
            </div>
            





            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={lightboxImages}
                index={currentSlide}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </div>
    );
};

export default MinecraftGallery;


/*


<div className="base-max-width">
                {sections.map(({ key, name, photos, description, albumStyle }) => (
                    <div key={key} className="collapsible-section">
                        <h2 className="section-title" onClick={() => toggleSection(key)}>
                            {openSections[key] ? `▼ ${name}` : `▶ ${name}`}
                        </h2>
                        {description}
                        {openSections[key] && getPhotoAlbumComponent(photos, albumStyle)}
                        <DividerLine />
                    </div>
                ))}
            </div>








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
            <IntroSection title={ title }>
                <p>{ description }</p>
            </IntroSection>
            <DividerLine />
            <div className="base-max-width">
                {sections.map(({ key, name, photos, description }) => (
                    <div key={ key }>
                        
                        <h2 className="section-title" onClick={() => toggleSection(key)}>
                            { openSections[key] ? `▼ ${name}` : `▶ ${name}` }
                        </h2>
                        <p>{ description }</p>
                        
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

            
            <Lightbox
                open={ lightboxOpen }
                close={() => setLightboxOpen(false)}
                slides={ lightboxImages }
                index={ currentSlide } // Ensure Lightbox starts on the correct image
                plugins={ [Fullscreen, Slideshow, Thumbnails, Zoom] }
            />
        </BodyContainer>
    );
};

export default MinecraftGallery;



*/