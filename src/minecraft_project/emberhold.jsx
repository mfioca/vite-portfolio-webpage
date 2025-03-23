import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyContainer, IntroSection, DividerLine } from '../SharedComponents';
import MinecraftGallery from './minecraft_gallery';
import { 
    emberhold_general_views,
    emberhold_fort,
    mining_district,
    town_hall,
    town_square
 } from './emberhold_photos';



const Emberhold = () => {
    return (
        <div>
            <Tabs className="vertical-tabs">
                <div className="vertical-tabs-layout">
                    <TabList>
                        <Tab>General Views and Fort</Tab>
                        <Tab>Commercial Districts</Tab>
                        <Tab>Residential Districts</Tab>
                    </TabList>
                    <BodyContainer hasBackground = { true } className="vertical-tab-content">
                        <TabPanel>
                        <IntroSection title="Emberhold: The Southern Watch of Whiterun">
                            <p>
                                Located just beyond a mountain tunnel south of <i>Whiterun</i>, <i>Emberhold</i> serves as a fortified frontier town guarding the southern reaches of the realm. 
                                Designed with both utility and defense in mind, Emberhold acts as a stronghold, economic hub, and refuge for its citizens.
                            </p>
                            <p><strong>Key aspects of the build:</strong></p>
                            <ul className="default-list">
                                <li><strong>Strategic Location</strong> – Acts as a southern defense point for Whiterun, accessible via a mountain tunnel that connects the heart of the realm to its borderlands.</li>
                                <li><strong>Economic Backbone</strong> – Anchored by a sprawling mining district with a massive, naturally generated abandoned mine that supplied the region with vital resources.</li>
                                <li><strong>Community Hubs</strong> – Features a vibrant town square centered around a towering fountain, twin inns and pubs that offer rest to travelers and locals alike.</li>
                                <li><strong>Civic Infrastructure</strong> – A town hall district includes a meeting hall, mayor’s residence, offices, and a small market, reinforcing Emberhold’s organized governance.</li>
                                <li><strong>Fortified stronghold</strong> – Wooden walls, guard towers, and lookout stations defend the town, especially its fortified keep with a small port overlooking a lake and nearby peasant village.</li>
                                <li><strong>Emergency Escape Route</strong> – Beneath the town lies a hidden cave system with functional elevators leading to a deepslate cavern, offering an escape path for citizens if danger arises.</li>
                            </ul>
                            <p>
                                Emberhold blends natural formations with deliberate design, creating a rugged yet welcoming settlement that serves both as a home and a bastion on the edge of the realm.
                            </p>
                        </IntroSection>
                            <DividerLine />
                            <MinecraftGallery
                                title="Aerial Views"
                                photos={ emberhold_general_views }
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
                                title="Emberhold fortification"
                                photos={ emberhold_fort }
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
                        </TabPanel>
                        <TabPanel>
                            <IntroSection title="Ember Hold Commercial Districts">
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
                                title="Mining District"
                                photos={ mining_district }
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
                                title="Town Hall and Market"
                                photos={ town_hall }
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
                                title="Town Square"
                                photos={ town_square }
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

export default Emberhold;


/*  placeholder section
<TabPanel>
                        <div className=" standard-padding-margin placeholder-container">
                            <p className="placeholder-text">After-project pictures will be added soon. Stay tuned!</p>
                        </div>
                        </TabPanel>
*/