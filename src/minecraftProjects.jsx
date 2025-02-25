import React, { useState, useEffect  } from 'react';
import { DividerLine, IntroSection, BodyContainer } from './SharedComponents';
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { enterance_photos, section_1 } from "./minecraft_project/minecraft_photos";


const MinecraftProjects = () => {
    const [openSections, setOpenSections] = useState({
        enterance: false,
        section1: false,
    });
    
    const toggleSection = (section) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
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
            

            <button onClick={() => toggleSection("enterance")}>
                {openSections.enterance ? "Collapse" : "Expand"}
                <p>Enterance</p>
            </button>
            {openSections.enterance && (
                <div className="collapsible-content">
                    <MasonryPhotoAlbum photos={enterance_photos} />
                </div>
            )}

            <button onClick={() => toggleSection("section1")}>
                {openSections.section1 ? "Collapse" : "Expand"}
                <p>Section 1</p>
            </button>
            {openSections.section1 && (
                <div className="collapsible-content">
                    <MasonryPhotoAlbum photos={section_1} />
                </div>
            )}







            </div>


            
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
        */