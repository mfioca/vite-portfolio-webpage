import React, { useState, useEffect  } from 'react';
import { DividerLine, IntroSection, BodyContainer } from './SharedComponents';
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { building_enterance, building_section_1, building_section_2, building_keep } from "./minecraft_project/minecraft_photos";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const MinecraftProjects = () => {
    const [openSections, setOpenSections] = useState({
        enterance: false,
        section1: false,
        section2: false,
        section3: false
    });

    const [lightboxImages, setLightboxImages] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    
    const toggleSection = (section) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const openLightbox = (photos, index) => {
        setLightboxImages(photos.map(photo => ({ src: photo.src })));
        setLightboxOpen(true);
    };

    return (
        <div>
        <BodyContainer className="minecraft-gallery">
            <IntroSection title="Minecraft Project Gallery">
                <p>Explore the different stages of my Whiterun Minecraft build, from early construction to the final touches.</p>
            </IntroSection>
            
            <DividerLine />
            </BodyContainer>
            <div className="base-max-width">
            

            <button className="test" onClick={() => toggleSection("enterance")}>
                {openSections.enterance ? "Collapse" : "Expand"} Entrance
            </button>
            {openSections.enterance && (
                <MasonryPhotoAlbum
                    photos={building_enterance}
                    onClick={(event, photo, index) => openLightbox(building_enterance, index)}
                />
            )}

            <button className="test" onClick={() => toggleSection("section1")}>
                {openSections.section1 ? "Collapse" : "Expand"} Section 1
            </button>
            {openSections.section1 && (
                <MasonryPhotoAlbum
                    photos={building_section_1}
                    onClick={(event, photo, index) => openLightbox(building_section_1, index)}
                />
            )}

            <button className="test" onClick={() => toggleSection("section2")}>
                {openSections.section2 ? "Collapse" : "Expand"} Section 2
            </button>
            {openSections.section2 && (
                <MasonryPhotoAlbum
                    photos={building_section_2}
                    onClick={(event, photo, index) => openLightbox(building_section_2, index)}
                />
            )}

            

            <button className="test" onClick={() => toggleSection("section3")}>
                {openSections.section3 ? "Collapse" : "Expand"} Keep
            </button>
            {openSections.section3 && (
                <MasonryPhotoAlbum
                    photos={building_keep}
                    onClick={(event, photo, index) => openLightbox(building_keep, index)}
                />
            )}







            </div>
            {/* Lightbox Component */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={lightboxImages}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />

            
            </div>
    );
};

export default MinecraftProjects;

/*
<MasonryPhotoAlbum 
        photos={ enterance_photos }
        /*layout="masonry"
        spacing={10}  
        targetRowHeight={300} 
        sizes={[
            { viewport: "(max-width: 600px)", columns: 2 },
            { viewport: "(max-width: 900px)", columns: 3 },
            { viewport: "(min-width: 900px)", columns: 4 },
        ]}
       
        />


<button className="test" onClick={() => toggleSection("enterance")}>
                {openSections.enterance ? "Collapse" : "Expand"}
                <p>Enterance</p>
            </button>
            {openSections.enterance && (
                <div className="collapsible-content">
                    <MasonryPhotoAlbum photos={enterance_photos} />
                </div>
            )}

            <button className="test" onClick={() => toggleSection("section1")}>
                {openSections.section1 ? "Collapse" : "Expand"}
                <p>Section 1</p>
            </button>
            {openSections.section1 && (
                <div className="collapsible-content">
                    <MasonryPhotoAlbum photos={section_1} />
                </div>
            )}

            <button className="test" onClick={() => toggleSection("section2")}>
                {openSections.section2 ? "Collapse" : "Expand"}
                <p>Section 2</p>
            </button>
            {openSections.section2 && (
                <div className="collapsible-content">
                    <MasonryPhotoAlbum photos={section_2} />
                </div>
            )}

            <button className="test" onClick={() => toggleSection("section3")}>
                {openSections.section3 ? "Collapse" : "Expand"}
                <p>Keep</p>
            </button>
            {openSections.section3 && (
                <div className="collapsible-content">
                    <MasonryPhotoAlbum photos={keep} />
                </div>
            )}







        */