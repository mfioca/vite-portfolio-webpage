import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyContainer, IntroSection, DividerLine } from '../SharedComponents';
/*import MinecraftGallery from './minecraft_gallery';*/



const PelicanTown = () => {
    return (
        <div>
            <Tabs className="vertical-tabs">
                <div className="vertical-tabs-layout">
                    <TabList>
                        <Tab>General</Tab>
                        <Tab>Beach</Tab>
                    </TabList>
                    <BodyContainer hasBackground = { true } className="vertical-tab-content">
                        <TabPanel>
                            <IntroSection title="Pelican Town from StarDew Valley">
                                <p>
                                    This project is a faithful, full-scale recreation of the Stardew Valley overworld, built block-for-tile using a grid overlay mod to match the 1:1 layout of the PC version. After scouting a large coastal location within my realm, I began terraforming the terrain to match the structure and elevation of the in-game map. The build focuses on recreating every outdoor location and building in its proper relative position, while leaving interiors out to maintain scope. Screenshots and reference captures from the original game guide each stage of the layout, terrain shaping, and construction.
                                </p>
                                <p><strong>Note:</strong> This section is still under construction as screenshots and layout are finalized.</p>
                            </IntroSection>
                            <DividerLine />
                            <p>This section showcases reference images from Stardew Valley with the grid overlay used to plan the build layout.</p>

                            <DividerLine />
                            <p>
                                This section features side-by-side screenshots of Stardew Valley and the Minecraft recreation, captured directly from my desktop using ShareX. These comparisons highlight structural layout, scale accuracy, and how the original design translates into block form.
                            </p>

                            <DividerLine />
                            <p>This section includes general construction screenshots taken throughout the build process.</p>
                        </TabPanel>
                        <TabPanel>
                            <IntroSection title="Pelican Town Beach">
                                <p>
                                    Beach section of Pelican Town
                                </p>
                            </IntroSection>
                            <DividerLine />
                            
                            <div className=" standard-padding-margin placeholder-container">
                                <p className="placeholder-text">project pictures will be added soon. Stay tuned!</p>
                            </div>
                            
                        </TabPanel>
                        
                        
                    </BodyContainer>
                </div>
            </Tabs>
        </div>
    );
};

export default PelicanTown;


/*  placeholder section
<TabPanel>
    <div className=" standard-padding-margin placeholder-container">
        <p className="placeholder-text">After-project pictures will be added soon. Stay tuned!</p>
    </div>
</TabPanel>
*/

/*
<TabPanel>
                            <IntroSection title="Pelican Town from StarDew Valley">
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
                                title="Mountain Initial Planning"
                                photos={ skyhold_vale_photos.skyvale_mountain_planning }
                                description={
                                    <>
                                        <p>
                                            These images capture the mountain during the early stages of construction, as the hobbit-style hillside homes were being built into the slope.  
                                            They were taken before the valley was cleared or other areas of the city had begun development, offering a focused look at the earliest phase of Skyhold Vale’s expansion.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Mountain Detail Progress"
                                photos={ skyhold_vale_photos.skyvale_mountain_progress }
                                description={
                                    <>
                                        <p>
                                            These images capture construction progress on the hobbit homes built into the mountain, highlighting the addition of exterior details like walls, trim, and plant-based accents. The shots also show the evolving path that winds upward toward the summit, providing a backdrop as the hillside architecture takes shape.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Mountain Final Details"
                                photos={ skyhold_vale_photos.skyvale_mountain_final_details }
                                description={
                                    <>
                                        <p>
                                            These final shots of the mountain area highlight smaller details added to complete the build — including bushes, benches, and natural accents placed along the main path. While the core structure was already in place, these finishing touches bring the hillside to life and give the space a more settled, immersive feel.
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
                                photos={ skyhold_vale_photos.skyvale_outskirts1 }
                                description={
                                    <>
                                        <p>
                                            This first set of images highlights the initial efforts to expand Skyhold Vale’s outskirts. Building outward from the original generated village, this section captures early progress in adapting and extending the default structures to establish a cohesive edge around the city’s perimeter. 
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Outskirts section 2"
                                photos={ skyhold_vale_photos.skyvale_outskirts2 }
                                description={
                                    <>
                                        <p>
                                            This new cluster of structures represents a second outskirts community, situated on the opposite side of the city from the original outskirts housing. These homes are modeled after a different type of default Minecraft village, slightly larger, and designed to evoke a sense of modest wealth. The area forms a small but distinct neighborhood, hinting at a more structured and possibly prosperous expansion beyond the central city.
                                        </p>
                                    </>
                                }
                            />
                        </TabPanel>
*/