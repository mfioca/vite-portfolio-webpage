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
    const [lightboxImages, setLightboxImages] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

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
                    defaultContainerWidth = { 800 } 
                    debounce={500} // Adjust debounce value as needed
                    onClick={({ index }) => openLightbox(photos, index)} />;
            case "columns":
                return <ColumnsPhotoAlbum 
                    photos={photos} 
                    defaultContainerWidth = { 800 } 
                    debounce={500} // Adjust debounce value as needed
                    onClick={({ index }) => openLightbox(photos, index)} />;
            case "masonry":
            default:
                return <MasonryPhotoAlbum 
                    photos={photos} 
                    defaultContainerWidth = { 800 } 
                    debounce={500} // Adjust debounce value as needed
                    onClick={({ index }) => openLightbox(photos, index)} />;
        }
    };

    return (
        <div className="standard-padding-margin">
            <IntroSection title={ title }>
                { description }
            </IntroSection>
            <DividerLine />
            <div className="base-max-width">
                {sections.map(({ key, name, photos, description }) => (
                    <div key={ key } className="collapsible-section">
                        <h2 className="section-title">{ name }</h2>

                        { description }

                        {/* Auto-open section if it's non-collapsible */}
                        { getPhotoAlbumComponent(photos, albumStyle) }
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

/*<MasonryPhotoAlbum photos={photos} onClick={({ index }) => openLightbox(photos, index)} />; 

{ (openSections[key] || !collapsible) && getPhotoAlbumComponent(photos, albumStyle) }


*/