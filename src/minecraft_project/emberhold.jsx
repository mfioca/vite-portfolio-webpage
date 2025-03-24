import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyContainer, IntroSection, DividerLine } from '../SharedComponents';
import MinecraftGallery from './minecraft_gallery';
import { 
    emberhold_general_views,
    emberhold_fort,
    mining_district,
    town_hall,
    town_square,
    residential_sections,
    residential_buildings
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
                                            These aerial views offer a sweeping overview of <i>Emberhold</i>, showcasing its tiered layout, fortified edges, and central districts. 
                                            Built across a diverse terrain, the town seamlessly blends functionality with defensive structure, while maintaining a cohesive architectural flow.
                                        </p>
                                        <p>
                                            From above, key features like the central fountain plaza, clustered residential hubs, and the perimeter walls become more pronounced, 
                                            reflecting the thoughtful planning behind its design. The positioning of the fortified keep and its vantage over the lake and neighboring village 
                                            further emphasizes Emberhold’s strategic importance within the realm.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Emberhold Fortification"
                                photos={ emberhold_fort }
                                description={
                                    <>
                                        <p>
                                            Perched atop a natural hill, the <i>Emberhold Fort</i> commands a view of the lake, a small single-ship port, and the neighboring peasant village. 
                                            The terrain’s natural shape forms a protective peninsula and river channel, creating a lower level ideal for gatherings or future expansions. 
                                            A multi-tiered keep with striking red stained-glass windows serves as the fort’s focal point, blending form and function atop this elevated stronghold.
                                        </p>
                                    </>
                                }
                            />        
                        </TabPanel>
                        <TabPanel>
                            <IntroSection title="Emberhold Commercial Districts">
                                <p>
                                    The <i>Commercial Districts</i> of Emberhold encompass several key areas that contribute to the town’s economy, governance, and daily life. 
                                    Though spread across different parts of the city, these districts work together to form the functional and cultural backbone of the settlement.
                                </p>
                                <p><strong>Key aspects of the build:</strong></p>
                                <ul className="default-list">
                                    <li><strong>Mining District</strong> – A vital source of resources featuring a vast mine, with a functional rail system that transports minerals to both a storage shed and a nearby smelting area.</li>
                                    <li><strong>Town Hall Area</strong> – A civic center with administrative and meeting building, a mayoral residence, and a small marketplace.</li>
                                    <li><strong>Town Square</strong> – A central gathering space anchored by a large fountain, flanked by a Pub and decorative public structures.</li>
                                </ul>
                                <p>
                                    These distinct yet interwoven districts highlight Emberhold’s development as a thriving hub of commerce, leadership, and community life.
                                </p>
                            </IntroSection>
                            <MinecraftGallery
                                title="Mining District"
                                photos={ mining_district }
                                description={
                                    <>
                                        <p>
                                            Nestled into the landscape, the <i>Mining District</i> serves as one of Emberhold’s primary sources of wealth and resources. 
                                            This area features a sprawling, naturally formed abandoned mine that has been worked into the build to preserve its rugged authenticity. 
                                            A working rail system transports mined materials from the depths to a large storage shed, then onward to the smelting station for processing.
                                        </p>
                                        <p>
                                            Surrounding the industrial core are supporting structures, including a blacksmith’s forge and modest residential housing for the district’s workers. 
                                            These buildings provide both function and atmosphere, reinforcing the district’s role as a working-class hub within the broader town.
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
                                            The <i>Town Hall District</i> sits at the heart of Emberhold, nestled into a natural dip in the terrain that subtly conceals much of the central building below the surrounding ground level. 
                                            Adapted from the same structural blueprint as the mining shed, the town hall has been reimagined to house administrative offices and features an attached watchtower, 
                                            reinforcing its role in both governance and defense.
                                        </p>
                                        <p>
                                            Scattered throughout the area are small market stalls, some integrated into nearby homes, contributing to the lived-in feel of this civic hub. 
                                            The mayor’s house, tucked into a slight hillside and accessible only via a back door connected to the ground floor of the watchtower, 
                                            adds a subtle yet commanding presence to the district’s layout.
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
                                            The <i>Town Square</i> serves as the heart of Emberhold’s community, anchored by a striking multi-story fountain surrounded by benches, flowers, and greenery. 
                                            This open space offers a peaceful setting for gathering, relaxation, and reflection—bringing a sense of life to the town’s center.
                                        </p>
                                        <p>
                                            Overlooking the square is a single pub, positioned to provide a welcoming view of the fountain and communal activity. 
                                            Though modest in scale, this central plaza ties together the surrounding residential and civic areas, 
                                            reinforcing Emberhold’s balance between functionality and charm.
                                        </p>
                                    </>
                                }
                            />
                        </TabPanel>
                        <TabPanel>
                            <IntroSection title="Emberhold Residential Districts">
                                <p>
                                    The <i>Residential Districts</i> are composed of three distinct groups, each thoughtfully shaped around the terrain to create naturally flowing neighborhoods that emphasize connection and community.
                                </p>
                                <p><strong>Key aspects of the build:</strong></p>
                                <ul className="default-list">
                                    <li><strong>Central Gathering Areas</strong> – Centrally located around vibrant communal hubs, uniting the houses and serving as the heart of the section</li>
                                    <li><strong>Community Engagement and Purpose</strong> – These districts blend intimate farming communities with strategically placed guard residences, 
                                        reflecting a balance of rural livelihood, protective oversight, and everyday functionality within the town’s layout.</li>
                                </ul>
                                <p>
                                    Together, these sections create a cohesive environment where each area not only complements the others but also emphasizes community spirit and practical design.
                                </p>
                            </IntroSection>
                            <DividerLine />
                            <MinecraftGallery
                                title="General Views"
                                photos={ residential_sections }
                                description={
                                    <>
                                        <p>
                                            These aerial shots showcase the three residential sections of <i>Emberhold</i>, each arranged around shared central gathering spaces that reinforce the community-driven design of the town. 
                                            The layout follows the natural contours of the land, allowing each cluster of homes to feel both connected and distinct.
                                        </p>
                                        <p>
                                            From above, the planning behind each district becomes clear—pathways, farms, and guard housing all positioned to balance daily life with defense and functionality, 
                                            helping define the lived-in character of the realm’s southern stronghold.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Inns, Pubs & Watchposts"
                                photos={ residential_buildings }
                                description={
                                    <>
                                        <p>
                                            This section highlights Emberhold’s key support structures—its two prominent inns and pubs, each offering a place of rest and social gathering for townsfolk and travelers alike. 
                                            Interior shots reveal warm, welcoming spaces designed for community and respite.
                                        </p>
                                        <p>
                                            Alongside these are the town’s defensive outposts, including strategically placed guard towers and watch houses. 
                                            These structures emphasize Emberhold’s role as both a place of hospitality and a vigilant frontier settlement.
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