import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyContainer, IntroSection, DividerLine } from '../SharedComponents';
import MinecraftGallery from './minecraft_gallery';
import * as stardew_pictures from './pelican_town_photos'



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
                                <p>
                                 Despite the challenges of translating a 2D perspective into 3D space, the spatial relationships and structure of Pelican Town remain highly accurate. Paths, yards, building placements, shoreline transitions, and even elevation shifts read clearly and match the original layout — reinforcing the town’s recognizable geometry while adapting it to the block-based medium.
                                </p>
                                <p><strong>Note:</strong> This section is still under construction as screenshots and layout are finalized.</p>
                            </IntroSection>
                            <DividerLine />
                            <MinecraftGallery
                                title="Stardew Game Grid layout Images"
                                photos={ stardew_pictures.GridReference }
                                description={
                                    <>
                                        <p>
                                            This section includes a select set of in-game screenshots from Stardew Valley, captured using a grid overlay mod. These reference images were used to determine the scale and structure of the build, providing a clear block-for-tile mapping before any terrain work began.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Stardew / Minecraft Side by Side Comparison"
                                photos={ stardew_pictures.SidebySide }
                                description={
                                    <>
                                        <p>
                                            These side-by-side screenshots compare sections of the build in Minecraft (top) with the original Stardew Valley map (bottom). Due to zoom limitations in Stardew and the challenge of matching 2D and 3D perspectives, the views are somewhat constrained — but still offer a clear sense of layout, scale, and structural accuracy.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <p>This section includes general construction screenshots taken throughout the build process.</p>
                        </TabPanel>
                        <TabPanel>
                            <IntroSection title="Pelican Town Beach">
                                <p>
                                    The beach in Pelican Town sits at the far southeastern edge of the Stardew Valley map, known for its simple pier, broken bridge, and connections to fishing, foraging, and seasonal events. In this build, the beach was one of the first zones completed, providing a natural anchor point for the rest of the layout. The area was recreated with attention to elevation, coastline shaping, and structural placement — staying faithful to the in-game layout while adapting to the surrounding terrain in the Minecraft realm.
                                </p>
                            </IntroSection>
                            <DividerLine />
                            <MinecraftGallery
                                title="Stardew Game Grid layout Images"
                                photos={ stardew_pictures.Beach }
                                description={
                                    <>
                                        <p>
                                            This photo set covers the construction of the beach area, including both structural layout and detail work added throughout the process. With the city positioned 8 blocks above water level—using the forest sewer location as a height reference—the transition between beach and town required creative elevation work. A layered waterfall system carries the river down to beach level, while a tiered tree line and a winding, snake-like path climb back up toward the city. These features help preserve the feel of the original Stardew Valley map while adapting it seamlessly into Minecraft’s terrain.
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

export default PelicanTown;


/*  placeholder section
<TabPanel>
    <div className=" standard-padding-margin placeholder-container">
        <p className="placeholder-text">After-project pictures will be added soon. Stay tuned!</p>
    </div>
</TabPanel>
*/

