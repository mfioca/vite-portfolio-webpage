import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyContainer, IntroSection, DividerLine } from '../SharedComponents';
import MinecraftGallery from './minecraft_gallery';
import { 
    town_generalviews,
    town_buildings,
    town_scenery,
    port_general_views,
    port_buildings_details,
    port_boats
 } from './crowhaven_photos';



const CrowHaven = () => {
    return (
        <div>
            <Tabs className="vertical-tabs">
                <div className="vertical-tabs-layout">
                    <TabList>
                        <Tab>Town</Tab>
                        <Tab>Port and Marketplace</Tab>
                    </TabList>
                    <BodyContainer hasBackground = { true } className="vertical-tab-content">
                        <TabPanel>
                        <IntroSection title="Crow Haven Town District">
                            <p>
                                Nestled along the coast and bordering <i>Whiterun</i>, the <i>Port City</i> extends beyond its bustling harbor into a thriving town filled with essential infrastructure and rich details. 
                                Positioned as a key waypoint for travelers and traders, the town runs parallel to <i>Whiterun</i>, serving as both an extension of the city and a final waypoint before travelers venture 
                                through the mountain tunnel to distant locations across the realm.
                            </p>
                            <p><strong>Key aspects of the build:</strong></p>
                            <ul className="default-list">
                                <li><strong>Diverse Architecture</strong> – Featuring a blacksmith, an inn and pub, a towering town hall, and a small homestead with a hidden underground farm.</li>
                                <li><strong>Defensive & Watch Points</strong> – A strategically placed watchtower oversees both the town and port, ensuring safety and security.</li>
                                <li><strong>Natural & Historical Elements</strong> – A peaceful cemetery and remnants of an old ruined house add character and depth to the settlement.</li>
                                <li><strong>Industry & Sustainability</strong> – A logging platform inspired by <i>Skyrim’s</i> Riverwood ensures the town remains self-sufficient in resources.</li>
                            </ul>
                            <p>
                                The combination of well-planned infrastructure and environmental storytelling brings this settlement to life, making it a unique and immersive part of the realm.
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
                            <IntroSection title="Crow Haven Harbor District">
                                <p>
                                    This bustling <i>Harbor District</i> serves as a crucial trade hub, seamlessly integrating functionality and aesthetic appeal. Designed with careful attention to detail, 
                                    the city balances practical infrastructure with vibrant market activity, making it a dynamic and immersive addition to the realm.
                                </p>
                                <p><strong>Key aspects of the build:</strong></p>
                                <ul className="default-list">
                                    <li><strong>Marketplace & Trade</strong> – A lively collection of market stalls and cargo storage facilities, ensuring a steady flow of goods.</li>
                                    <li><strong>Harbor Infrastructure</strong> – Dedicated loading cranes for each vessel, facilitating efficient trade and transport.</li>
                                    <li><strong>Decorative Features</strong> – A fish enclosure in the heart of the boardwalk, covered by a uniquely designed canopy, alongside seating areas for travelers and traders.</li>
                                    <li><strong>Lighthouse & Harbor Control</strong> – A towering lighthouse guiding ships safely to shore, complemented by two harbor houses overseeing port operations.</li>
                                </ul>
                                <p>
                                    This section showcases the interplay between commerce, travel, and architectural planning, capturing the essence of a thriving maritime settlement.
                                </p>
                            </IntroSection>
                            <MinecraftGallery
                                title="Harbor District - General Views"
                                photos={ port_general_views }
                                description={
                                    <>
                                        <p>
                                            These aerial shots provide a sweeping look at the Port City’s harbor district, capturing its connection to the open sea and its role as a vital trading hub.  
                                            The port is designed with both function and detail in mind, ensuring ships can dock, unload, and restock efficiently while maintaining a visually immersive setting.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Harbor District Buildings & Key Details"
                                photos={ port_buildings_details }
                                description={
                                    <>
                                        <p>
                                            This section highlights the essential structures that define the <i>Harbor District</i> and its role as a vital trade hub.  
                                            Two harbor master buildings oversee the daily operations, ensuring the smooth movement of goods and ships.  
                                            The cargo storage area, while open-air, is secured by a perimeter wall lined with iron bars,  
                                            simulating the feel of a fenced-off shipping yard. A fully functional lighthouse stands watch over the harbor, naturally carved into the coastline like a protective crescent,  
                                            guiding ships safely to port while serving as a landmark for travelers navigating the open waters.
                                        </p>
                                        <p>
                                            Additional details include towering cranes designed for efficiently loading and unloading docked vessels,  
                                            as well as various marketplace stalls that create a lively trading environment.  
                                            A decorative covered fishery adds an extra touch of maritime charm, reinforcing the harbor’s character  
                                            as a bustling point of commerce and seafaring activity.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Harbor Ships & Boats"
                                photos={ port_boats }
                                description={
                                    <>
                                        <p>
                                            This section highlights the ships docked at the <i>Port City</i>, each designed with functionality and realism in mind. 
                                            While two of the vessels serve as modest cargo ships, the third is a larger, more intricate design reflecting the craftsmanship and trade essential to the harbor’s economy. 
                                            Cranes positioned along the docks assist in loading and unloading goods, reinforcing the port’s role as a vital hub for maritime activity.
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

export default CrowHaven;


/*  placeholder section
<TabPanel>
                        <div className=" standard-padding-margin placeholder-container">
                            <p className="placeholder-text">After-project pictures will be added soon. Stay tuned!</p>
                        </div>
                        </TabPanel>
*/