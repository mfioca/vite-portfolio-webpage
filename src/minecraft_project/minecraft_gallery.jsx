import React, { useState } from 'react';
import { DividerLine, IntroSection } from '../SharedComponents';
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
    const [renderKey, setRenderKey] = useState(0);

    const toggleSection = (key) => {
        setOpenSections((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    
        setRenderKey((prev) => prev + 1); // Forces a small re-render
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
                return <RowsPhotoAlbum 
                    photos={photos} 
                    onClick={({ index }) => openLightbox(photos, index)}
                    targetRowHeight={250}
                    spacing={15}
                    layout="rows"
                    imageProps={{ loading: "eager" }} // Force immediate image load
                />;
            case "columns":
                return <ColumnsPhotoAlbum 
                    photos={photos} 
                    onClick={({ index }) => openLightbox(photos, index)}
                    targetRowHeight={250}
                    spacing={15}
                    layout="columns"
                    imageProps={{ loading: "eager" }} // Force immediate image load
                />;
            case "masonry":
            default:
                return <MasonryPhotoAlbum
                    photos={photos}
                    onClick={({ index }) => openLightbox(photos, index)}
                    targetRowHeight={250}
                    spacing={15}
                    layout="masonry"
                    imageProps={{ loading: "eager" }} // Force immediate image load
                />;
        }
    };
    

    return (
        <div className="standard-padding-margin">
            <IntroSection title={ title }>
                { description }
            </IntroSection>
            <DividerLine />
            <div className="base-max-width">
                {sections.map(({ key, name, photos, description, collapsible = true }) => (
                    <div key={ key } className="collapsible-section">
                    {collapsible ? (
                        <h2 className="section-title" onClick={() => toggleSection(key)}>
                        {openSections[key] ? `▼ ${ name }` : `▶ ${ name }`}
                        </h2>
                    ) : (
                        <h2 className="section-title">{ name }</h2> // No toggle for non-collapsible sections
                    )}

                    { description }

                    {/* Auto-open section if it's non-collapsible */}
                    { (openSections[key] || !collapsible) && (
    <div key={renderKey}>
        {getPhotoAlbumComponent(photos, albumStyle)}
    </div>
)}

                    { collapsible && <DividerLine /> } {/* No divider if it's a single section */}
                    </div>
                ))}
            </div>
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

/*<MasonryPhotoAlbum photos={photos} onClick={({ index }) => openLightbox(photos, index)} />; */