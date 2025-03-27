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
                            <IntroSection title="Random Places Across the Realm">
                                <p>
                                    Scattered throughout the realm are smaller, standalone locations that add depth, lore, and a sense of lived-in history to the world. 
                                    These places may not be part of the larger cities or districts, but they carry their own unique charm and purpose.
                                </p>
                                <p><strong>Key aspects of the build:</strong></p>
                                <ul className="default-list">
                                    <li><strong>Environmental Storytelling</strong> – Each location hints at a larger story, from a crumbling tower to an isolated outpost in the mountains standing guard.</li>
                                    <li><strong>Integration with the Landscape</strong> – Built to complement Minecraft’s natural terrain rather than override it.</li>
                                    <li><strong>Functional Design</strong> – Some locations, like the tunnel, serve practical roles in travel and defense.</li>
                                    <li><strong>Atmospheric Detailing</strong> – Use of lighting, ruined elements, and placement helps convey mood and mystery.</li>
                                </ul>
                                <p>
                                    These scenes provide a glimpse into the world beyond the major cities, offering moments of curiosity, reflection, and discovery.
                                </p>
                            </IntroSection>
                            <DividerLine />
                            <MinecraftGallery
                                title="Whiterun Tunnel"
                                photos = { whiterun_tunnel  }
                                collapsible={ false }
                                description={
                                    <>
                                      <p>
                                        The <i>Whiterun Tunnel</i> carves through the heart of a mountain, serving as both a functional passage and a visually striking feature of the realm. 
                                        Reinforced with wooden support structures, the tunnel blends utility with immersive detail.
                                      </p>
                                      <p>
                                        Lining both sides of the interior are massive, aquarium-like channels filled with fish, aquatic plants, and soft lighting from below—turning an otherwise 
                                        dark corridor into a vibrant, underwater experience. At the midpoint, a glass-covered bridge spans a naturally formed river cut, offering a scenic moment 
                                        along the journey. Near the entrance, an open view into a naturally generated chamber reveals a mob spawner and chest, adding a layer of mystery to this 
                                        otherwise peaceful route.
                                      </p>
                                    </>
                                }
                            />
                        </TabPanel>
                        <TabPanel>
                            <MinecraftGallery
                                title="Lonely Outpost"
                                photos = { lonely_outpost }
                                collapsible={ false }
                                description={
                                    <>
                                      <p>
                                        Perched high atop the mountain range that houses the Whiterun Tunnel, the <i>Lonely Outpost</i> stands in quiet isolation. 
                                        Overlooking a vast lake, this outpost serves as a critical midpoint in the realm’s beacon-based warning system, 
                                        inspired by the Beacons of Minas Tirith, linking <i>Emberhold</i> to <i>Whiterun</i>.
                                      </p>
                                      <p>
                                        The outpost includes a two-story main living space, with an attached tower that functions as both watch post and 
                                        utility hub—each floor offering a specific purpose, culminating in a lookout point near the top. 
                                        A narrow natural ridge leads to a smaller guard post, providing a wide vantage over the surrounding landscape and 
                                        waters below.
                                      </p>
                                    </>
                                }
                            />
                            
                        </TabPanel>
                        <TabPanel>
                        <MinecraftGallery
                            title="Abandoned Tower Ruins"
                            photos={ abandoned_tower }
                            collapsible={ false }
                            description={
                                <>
                                    <p>
                                        Tucked beside a quiet mountain and lake, this crumbling structure marks the path between Emberhold and the eastern frontier. 
                                        The ruins feature a partially collapsed tower with just one tall side still intact, a second-story wooden platform, and an open-air enchantment area below. 
                                    </p>
                                    <p>
                                        Opposite the tower stands the remains of a roofless living quarter with bunk beds, a kitchen, and hints of past shelter. 
                                        A crumbling stone wall loosely encloses the courtyard, where a broken gate still guards the entrance. 
                                        Though worn by time, the structure adds a sense of forgotten history to the surrounding road.
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