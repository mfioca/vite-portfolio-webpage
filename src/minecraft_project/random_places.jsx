import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyContainer, IntroSection, DividerLine } from '../SharedComponents';
import MinecraftGallery from './minecraft_gallery';
import { 
    abandoned_tower, 
    lonely_outpost, 
    whiterun_tunnel 
 } from './random_places_photos';


const RandomPlaces = () => {
    return (
        <div>
            <Tabs className="vertical-tabs">
                <div className="vertical-tabs-layout">
                    <TabList>
                        <Tab>Whiterun Tunnel</Tab>
                        <Tab>Lonely Outpost</Tab>
                        <Tab>Abandoned Tower</Tab>
                    </TabList>
                    <BodyContainer hasBackground = { true } className="vertical-tab-content">
                        <TabPanel>
                            <IntroSection title="Whiterun City from Elder Scrolls Skyrim">
                                <p>
                                    This project is a detailed recreation of Whiterun from <i>The Elder Scrolls: Skyrim</i>, built entirely in <i>Minecraft</i>. 
                                    It showcases a combination of creativity, planning, and problem-solving.
                                </p>
                                <p><strong>Key aspects of the build:</strong></p>
                                <ul className="default-list">
                                    <li><strong>Accuracy & Scale</strong> – Careful attention to proportions, ensuring structures match the in-game city layout.</li>
                                    <li><strong>Design Challenges</strong> – Adapting Skyrim’s curved architecture and terrain to Minecraft’s block-based system.</li>
                                    <li><strong>Problem-Solving</strong> – Adjusting details to maintain immersion while staying true to the source material.</li>
                                    <li><strong>Persistence & Refinement</strong> – Iterative improvements to align with Skyrim’s design, refining details over time.</li>
                                </ul>
                                <p>
                                    Explore the different stages of the build, from its early framework to the final immersive details.
                                </p>
                            </IntroSection>
                            <DividerLine />
                            <MinecraftGallery
                                title="Whiterun Tunnel"
                                photos = { whiterun_tunnel  }
                                description = {
                                    <>
                                        <p>
                                            The entrance to Whiterun serves as the foundation of the city’s design, carefully adapting Skyrim’s natural topography into 
                                            the structured world of <i>Minecraft</i>. These images highlight the early construction phases, starting from a flat surface 
                                            and gradually shaping the elevation changes seen in the original game. The space beneath the city was intentionally left open 
                                            at this stage, demonstrating the planning process before the full terrain was completed.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                           
                        </TabPanel>
                        <TabPanel>
                            <MinecraftGallery
                                title="Lonely Outpost"
                                photos = { lonely_outpost }
                                description = {
                                    <>
                                        <p>
                                            placeholder   
                                        </p>
                                    </>
                                }
                            />
                            
                        </TabPanel>
                        <TabPanel>
                            <MinecraftGallery
                                title="Lonely Outpost"
                                photos = { abandoned_tower }
                                description = {
                                    <>
                                        <p>
                                            placeholder   
                                        </p>
                                    </>
                                }
                            />
                        </TabPanel>
                    </BodyContainer>
                </div>
            </Tabs>
        </div>
    );
};

export default RandomPlaces;


/*  placeholder section
<TabPanel>
                        <div className=" standard-padding-margin placeholder-container">
                            <p className="placeholder-text">After-project pictures will be added soon. Stay tuned!</p>
                        </div>
                        </TabPanel>
*/