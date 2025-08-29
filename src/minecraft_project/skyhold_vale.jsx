import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyContainer, IntroSection, DividerLine } from '../SharedComponents';
import MinecraftGallery from './minecraft_gallery';
import * as skyhold_vale_photos from './skyhold_vale_photos'


const SkyholdVale = () => {
    return (
        <div>
            <Tabs className="vertical-tabs">
                <div className="vertical-tabs-layout">
                    <TabList>
                        <Tab>Mountain</Tab>
                        <Tab>Outskirts</Tab>
                        <Tab>Inner City</Tab>
                        <Tab>Castle</Tab>
                    </TabList>
                    <BodyContainer hasBackground = { true } className="vertical-tab-content">
                        <TabPanel>
                            <IntroSection title="Skyhold Vale">
                                <p>
                                    Skyhold Vale is a sprawling vertical city nestled into the curved basin of a jungle-covered mountain. Its outer edge is framed by a dense, organically grown village—reminiscent of default Minecraft settlements—spilling up against the fortified walls of the inner city. Within those walls, 19th-century-inspired row houses rise in tightly packed clusters, with architectural echoes of old London and alpine European villages.
                                </p>
                                <p>
                                    Hobbit-style hillside homes are carved directly into the terraced slopes of the mountain, winding upward alongside a narrow stream that eventually becomes a cascading waterfall, splitting the inner city into two distinct districts. At the summit, a medieval castle commands the skyline, perched as both a protective watchtower and a crown to the city’s layered design.
                                </p>
                                <p>
                                    <strong className="shadow">Status:</strong>&nbsp;&nbsp;
                                    Skyhold Vale is still under active construction. While the core layout and major structural features are in place, many districts are evolving as new details, interior builds, and environmental touches are added. This city is being shaped section by section, with future updates planned to expand its depth, story elements, and visual cohesion.
                                </p>
                            </IntroSection>
                            <DividerLine />
                            <MinecraftGallery
                                title="Mountain"
                                photos={ skyhold_vale_photos.skyvale_mountain }
                                description={
                                    <>
                                        <p>
                                            These images capture the mountain during the early stages of construction, as the hobbit-style hillside homes were being built into the slope.  
                                            They were taken before the valley was cleared or other areas of the city had begun development, offering a focused look at the earliest phase of Skyhold Vale’s expansion.
                                        </p>
                                    </>
                                }
                            />
                        </TabPanel>
                        <TabPanel>
                            <IntroSection title="Skyhold Vale Outskirts">
                                <p>
                                    The outskirts of Skyhold Vale began as a naturally generated Minecraft village, with default-style buildings scattered around the mountain base. This area is now being expanded using similarly styled houses to preserve the organic feel of the original spawn. Future plans include continued development around the nearby lake and surrounding terrain, extending the village footprint while maintaining its rustic charm.
                                </p>
                            </IntroSection>
                            <DividerLine />
                            <MinecraftGallery
                                title="Outskirts section 1"
                                photos={ skyhold_vale_photos.skyvale_outskirts }
                                description={
                                    <>
                                        <p>
                                            This first set of images highlights the initial efforts to expand Skyhold Vale’s outskirts. Building outward from the original generated village, this section captures early progress in adapting and extending the default structures to establish a cohesive edge around the city’s perimeter. 
                                        </p>
                                    </>
                                }
                            />
                        </TabPanel>
                        <TabPanel>
                            <IntroSection title="Skyhold Vale Inner City">
                                <p>
                                    Skyhold Vale’s inner city is nestled at the base of the mountain, enclosed by protective stone walls and gently divided by a flowing river that cascades down from the upper slopes. This district serves as the heart of the settlement, featuring tightly packed row houses that reflect a blend of historical European design. The area is planned to expand with shops, inns, and pubs, creating a dense, walkable neighborhood that balances structure with charm.
                                </p>
                            </IntroSection>
                            <DividerLine />
                            <MinecraftGallery
                                title="Construction"
                                photos={ skyhold_vale_photos.skyvale_inner_city_construction }
                                description={
                                    <>
                                        <p>
                                            This set of images documents the early stages of building Skyhold Vale’s inner city. From terrain shaping to the gradual layout of row houses, the shots show the transition from planning to execution. Each step highlights the structural progress as the urban core begins to take form, setting the foundation for the district’s dense architectural style.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Detail Views"
                                photos={ skyhold_vale_photos.skyvale_inner_city_detail_views  }
                                description={
                                    <>
                                        <p>
                                            These images showcase the current state of Skyhold Vale’s inner city, highlighting the row houses as they exist today. The shots include close-up views of exterior detailing, street layouts, and the surrounding wall structure—capturing the architectural character and atmosphere of the city’s urban core as it nears completion.
                                        </p>
                                    </>
                                }
                            />
                        </TabPanel>
                        <TabPanel>
                            <IntroSection title="Skyhold Vale Castle">
                                <p>
                                    The castle at the summit of Skyhold Vale was built using a tutorial by BigTonyMC and turned out to be the perfect fit for the top of the mountain. These images showcase the castle from multiple perspectives, including exterior views from both the summit and the valley floor. Several shots also highlight the view looking down from the castle over the rest of the city, emphasizing its role as a commanding presence and final architectural centerpiece of the build.
                                </p>
                            </IntroSection>
                            <DividerLine />
                            <MinecraftGallery
                                title="Castle Exterior"
                                photos={ skyhold_vale_photos.skyvale_castle }
                                description={
                                    <>
                                        <p>
                                            This is the initial set of castle images. More pictures will be added as the build progresses.
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

export default SkyholdVale;


/*  placeholder section
<TabPanel>
                        <div className=" standard-padding-margin placeholder-container">
                            <p className="placeholder-text">After-project pictures will be added soon. Stay tuned!</p>
                        </div>
                        </TabPanel>
*/