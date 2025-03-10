import React, { useState } from 'react';
import WhiterunProject from './minecraft_project/whiteruncity';
import { IntroSection, DividerLine } from './SharedComponents';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Default styles for react-tabs



import { building_enterance, building_section_1, building_section_2, building_keep, side_by_side, building_random_extras } from './minecraft_project/whiterun_photoes';
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

const MinecraftProjects = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
const [currentSlide, setCurrentSlide] = useState(0);
const [lightboxImages, setLightboxImages] = useState([]);


const openLightbox = (photos, index) => {
    setLightboxImages(photos.map(photo => ({ src: photo.src })));
    setCurrentSlide(index);
    setLightboxOpen(true);
};
    return (
        <div className="minecraft-body">
            <IntroSection title="Welcome to My Minecraft Realm">
                <p><strong className="shadow">About This Web Page:</strong>&nbsp;&nbsp;
                    This section showcases a 4+ year-old Minecraft Bedrock creative realm that is a sprawling world filled with detailed cities, epic landscapes, and rich history. 
                    Every build tells a story, from grand dwarven halls carved into mountains to the meticulously recreated city of Whiterun from <i>The Elder Scrolls: Skyrim</i>.
                </p>
                <h3>Key locations include:</h3>
                <ul className= "default-list">
                    <li>A massive underground dwarven kingdom, featuring a maze inspired by <i>The Shining</i>, a great forge reminiscent of <i>WoW’s Ironforge</i>, a <i>Skyrim</i> dragon logo, and other pop culture nods.</li>
                    <li>A carefully recreated Whiterun city from <i>The Elder Scrolls: Skyrim</i>, capturing the city’s iconic layout, structures, and atmosphere.</li>
                    <li>A bustling port town with markets, cargo storage, three ships, and a working lighthouse.</li>
                    <li>A second city beyond the mountains, featuring a mining district, an abandoned underground mineshaft, a town square, a fortified keep, and another port.</li>
                    <li>A crumbling abandoned house with a collapsing tower, adding mystery to the journey between cities.</li>
                    <li>A massive 100x100 block recreation of Chichen Itza, rising from the ocean, waiting for its purpose.</li>
                    <li>A new city in the jungle, blending hobbit hole dwellings into the mountain and featuring dense, old-European-inspired row houses in the valley below.</li>
                </ul>
                <p>
                    This world is constantly evolving, with every build adding new depth and character. Whether it’s medieval cities, ancient wonders, or hidden secrets, there’s always something to explore. With each new build, the world continues to expand, bringing new challenges, inspirations, and stories to life.
                </p>
                <DividerLine/>
                <p><strong>Note:</strong> There is an issue regarding images not rendering correctly. You may need to refresh the page or interact with it for all images to load. If you know how to fix this please email me at the link below.</p>
            </IntroSection>
            <DividerLine />
            <div className="center-div tabs-container">
                <Tabs className="standard-tabs">
                    <TabList>
                        <Tab>"Elder Scrolls: Skyrim" Whiterun City</Tab>
                        <Tab>Dwarven Kingdom</Tab>
                    </TabList>
                    <TabPanel>
                        {/*Whiterun Project <WhiterunProject/>*/}


                        <div className="custom-gallery-grid">
    {building_enterance.map((photo, index) => (
         <div key={index} className="custom-gallery-item" onClick={() => openLightbox(building_enterance, index)}>
            <img 
                src={photo.src} 
                alt={photo.alt} 
                width={photo.width} 
                height={photo.height} 
                className="custom-gallery-image"
            />
        </div>
    ))}
</div>

<DividerLine />

<div className="custom-gallery-grid">
    {building_section_1.map((photo, index) => (
         <div key={index} className="custom-gallery-item" onClick={() => openLightbox(building_section_1, index)}>
            <img 
                src={photo.src} 
                alt={photo.alt} 
                width={photo.width} 
                height={photo.height} 
                className="custom-gallery-image"
            />
        </div>
    ))}
</div>

<DividerLine />

<div className="custom-gallery-grid">
    {building_section_2.map((photo, index) => (
        <div key={index} className="custom-gallery-item" onClick={() => openLightbox(building_section_2, index)}>
            <img 
                src={photo.src} 
                alt={photo.alt} 
                width={photo.width} 
                height={photo.height} 
                className="custom-gallery-image"
            />
        </div>
    ))}
</div>

<DividerLine />

<div className="custom-gallery-grid">
    {building_keep.map((photo, index) => (
        <div key={index} className="custom-gallery-item" onClick={() => openLightbox(building_keep, index)}>
            <img 
                src={photo.src} 
                alt={photo.alt} 
                width={photo.width} 
                height={photo.height} 
                className="custom-gallery-image"
            />
        </div>
    ))}
</div>

<DividerLine />

<div className="custom-gallery-grid">
    {side_by_side.map((photo, index) => (
        <div key={index} className="custom-gallery-item" onClick={() => openLightbox(side_by_side, index)}>
            <img 
                src={photo.src} 
                alt={photo.alt} 
                width={photo.width} 
                height={photo.height} 
                className="custom-gallery-image"
            />
        </div>
    ))}
</div>

<DividerLine />

<div className="custom-gallery-grid">
    {building_random_extras.map((photo, index) => (
        <div key={index} className="custom-gallery-item" onClick={() => openLightbox(building_random_extras, index)}>
            <img 
                src={photo.src} 
                alt={photo.alt} 
                width={photo.width} 
                height={photo.height} 
                className="custom-gallery-image"
            />
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




                    </TabPanel>
                    <TabPanel>
                        <p>More detailed descriptions of pictures of additional builds in this realm coming soon</p>
                    </TabPanel>
                     {/*Additional Minecraft projects can be added below */}
                </Tabs>
            </div>
        </div>
    );
};

export default MinecraftProjects;

/*
<div className="center-div tabs-container">
                <Tabs className="standard-tabs">
                    <TabList>
                        <Tab>"Elder Scrolls: Skyrim" Whiterun City</Tab>
                        <Tab>Dwarven Kingdom</Tab>
                    </TabList>
                    <TabPanel>
                        Whiterun Project <WhiterunProject 
                        <WhiterunProject />
                        
                    </TabPanel>
                    <TabPanel>
                        <p>More detailed descriptions of pictures of additional builds in this realm coming soon</p>
                    </TabPanel>
                     Additional Minecraft projects can be added below 
                </Tabs>
            </div>
*/



/*
<div className="base-max-width">
                        <MasonryPhotoAlbum 
                            photos={building_enterance}
                            //debounce={250} // Adjust debounce value as needed
                            columns={3}
                            //targetRowHeight={250}  // Adjust this value as needed
                            spacing={5}            // Optional: Adjust spacing between images
                            onClick={({ index }) => openLightbox(building_enterance, index)}
                        />
                        
                        <DividerLine/>
                        <RowsPhotoAlbum photos={building_section_1}
                            //debounce={250} // Adjust debounce value as needed
                            rowConstraints={{
                                maxPhotos: 4
                            }}
                            targetRowHeight={250}  // Adjust this value as needed
                            spacing={5}            // Optional: Adjust spacing between images
                            onClick={({ index }) => openLightbox(building_section_1, index)}
                            
                            
                        />
                        
                        <DividerLine/>
                        <ColumnsPhotoAlbum 
                            photos={building_section_2} 
                            //debounce={250} // Adjust debounce value as needed
                            columns={3}
                            
                            spacing={5}            // Optional: Adjust spacing between images
                            onClick={({ index }) => openLightbox(building_section_2, index)}
                            
                             />
                             
                        <DividerLine/>
                        <MasonryPhotoAlbum photos={building_keep}
                            columns={3} 
                            //targetRowHeight={250}  // Adjust this value as needed
                            spacing={5}            // Optional: Adjust spacing between images
                            onClick={({ index }) => openLightbox(building_keep, index)}
                            />
                            
                    <DividerLine/>  
                    <RowsPhotoAlbum 
                        photos={building_random_extras} 
                        
                        //debounce={250} // Adjust debounce value as needed
                        rowConstraints={{
                            maxPhotos: 4
                        }} 
                        targetRowHeight={250}  // Adjust this value as needed
                            spacing={5}            // Optional: Adjust spacing between images
                            onClick={({ index }) => openLightbox(building_random_extras, index)}
                        />
                        
                </div>
*/