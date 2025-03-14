import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyContainer, IntroSection, DividerLine } from '../SharedComponents';
import MinecraftGallery from './minecraft_gallery';




const DwarvenKingdom = () => {
    return (
        <div>
            <Tabs className="vertical-tabs">
                <div className="vertical-tabs-layout">
                    <TabList>
                        <Tab>Construction of City</Tab>
                    </TabList>
                    <BodyContainer hasBackground = { true } className="vertical-tab-content">
                        <TabPanel>
                            <IntroSection title="Dwarven Kingdom: The First Great Build">
                                <p>
                                    This sprawling underground kingdom was the first build in my <i>Minecraft</i> realm, originally conceived as a 
                                    mental exercise during an unemployment phase. Inspired by <i>The Lord of the Rings</i>, <i>World of Warcraft</i>, 
                                    and <i>DragonLance</i>, it quickly grew into an expansive, multi-layered city beneath the mountains.
                                </p>
                                <p><strong>Key aspects of the build:</strong></p>
                                <ul className="default-list">
                                    <li><strong>Epic Scale & Grand Architecture</strong> – Vast halls, towering pillars, and massive stonework create the feel of an ancient, long-lived civilization.</li>
                                    <li><strong>Functional Districts</strong> – Organized sections for governance, industry, residential life, and recreation, bringing realism to the city.</li>
                                    <li><strong>Hidden Passages & Secrets</strong> – Concealed exits, underground pathways, and even a <i>Khazad-dûm</i>-inspired bridge leading to a hidden entrance.</li>
                                    <li><strong>Blending Fantasy & Practicality</strong> – While inspired by fantasy, every chamber, walkway, and room is built with the idea that dwarves could logically live and work there.</li>
                                    <li><strong>Environmental Details</strong> – Trees, fountains, apartments built into walls, and even a bathhouse add life beyond just stone and lava.</li>
                                    <li><strong>Underground Depths & The Balrog’s Domain</strong> – A massive cave system featuring a custom-built <i>Balrog</i> statue, abandoned mines, and a vast, multi-level excavation site.</li>
                                </ul>
                                <p>
                                    From its regal halls to its treacherous depths, this dwarven kingdom was the foundation of my entire realm. 
                                    Explore the different sections, each crafted to reflect the culture, industry, and mystery of an ancient underground empire.
                                </p>
                            </IntroSection>
                            
                            <DividerLine />
                            
                        </TabPanel>
                        
                    </BodyContainer>
                </div>
            </Tabs>
        </div>
    );
};

export default DwarvenKingdom;


/*  placeholder section
<TabPanel>
                        <div className=" standard-padding-margin placeholder-container">
                            <p className="placeholder-text">After-project pictures will be added soon. Stay tuned!</p>
                        </div>
                        </TabPanel>
*/