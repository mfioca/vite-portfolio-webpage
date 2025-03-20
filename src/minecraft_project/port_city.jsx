import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyContainer, IntroSection, DividerLine } from '../SharedComponents';
import MinecraftGallery from './minecraft_gallery';
import { 
    town_generalviews,
    town_buildings,
    town_scenery

 } from './port_city_photos';



const PortCityProject = () => {
    return (
        <div>
            <Tabs className="vertical-tabs">
                <div className="vertical-tabs-layout">
                    <TabList>
                        <Tab>Town</Tab>
                        <Tab>Port and marketplace</Tab>
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
                                title="Aerial Views"
                                photos={ town_generalviews }
                                description={
                                    <>
                                        <p>
                                            These aerial views provide a sweeping look at the <i>Port City</i>, showcasing its unique layout, architectural planning, and integration with the surrounding landscape. 
                                            From high above, the city’s structure comes into focus, revealing the carefully arranged districts, winding streets, and the connection between the town and its bustling port.
                                        </p>
                                        <p>
                                            The aerial perspectives highlight the strategic positioning of key locations, including the market square, residential areas, and the watchtower overseeing both the town and the port. 
                                            On the opposite side, a smaller tower stands as part of the kingdom’s beacon warning system, inspired by the Beacons of Minas Tirith. Additionally, a Skyrim-inspired logging platform, similar to the one found in Riverwood, sits at the edge of town, reinforcing its role as a functional and self-sustaining settlement. These images capture the town’s balance between functionality and design, offering a bird’s-eye view of its intricate details and overall aesthetic.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Buildings and key places"
                                photos={ town_buildings }
                                description={
                                    <>
                                        <p>
                                            The <i>Port City</i> is more than just a hub for trade—it’s a fully realized settlement with key locations that serve both practical and cultural roles. 
                                            Each building contributes to the town’s identity, from its blacksmith and bustling inn to its central town hall, which resembles a cathedral.
                                        </p>
                                        <p>
                                            Among these structures is a seemingly modest farmhouse, which conceals a vast underground farm that helps sustain both the port city and nearby Whiterun. 
                                            A quiet cemetery rests on the outskirts, adding a sense of history and reverence. Overlooking the landscape, the watchtower provides a defensive vantage 
                                            point, while the logging camp, inspired by Skyrim’s Riverwood, reinforces the town’s self-sufficiency. These images highlight the town’s essential locations, 
                                            blending practicality with architectural charm.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Town Scenery & Decorative Details"
                                photos={ town_scenery }
                                description={
                                    <>
                                        <p>
                                            These close-up shots highlight the finer details that bring the <i>Port City</i> to life, showcasing the effort put into its atmosphere and aesthetic.  
                                            From carefully placed fences lining the pathways to subtle variations in the cobblestone streets—like scattered mossy stones that don’t always show up clearly in images—every element is designed to create a lived-in feel.  
                                        </p>
                                        <p>
                                            The town’s decorative elements extend beyond just roads and structures. Flowers and greenery are placed throughout, while light poles fitted with lanterns cast a warm glow over the walkways.  
                                            Among these scenes is a barely-visible house ruin, its foundation just peeking out from the ground, with scattered oak logs marking the remnants of a long-forgotten structure, adding a touch of history and mystery to the town.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            
                        </TabPanel>
                        <TabPanel>
                        <div className=" standard-padding-margin placeholder-container">
                            <p className="placeholder-text">After-project pictures will be added soon. Stay tuned!</p>
                        </div>
                        </TabPanel>
                        
                    </BodyContainer>
                </div>
            </Tabs>
        </div>
    );
};

export default PortCityProject;


/*  placeholder section
<TabPanel>
                        <div className=" standard-padding-margin placeholder-container">
                            <p className="placeholder-text">After-project pictures will be added soon. Stay tuned!</p>
                        </div>
                        </TabPanel>
*/