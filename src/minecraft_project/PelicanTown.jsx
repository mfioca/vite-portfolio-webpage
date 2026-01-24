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
                        <Tab>Main City</Tab>
                        <Tab>Farm and Bus Area</Tab>
                        <Tab>Cindersap Forest</Tab>
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
                                title="Building progress"
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
                        <TabPanel>
                            <IntroSection title="Main City">
                                <p>
                                    This section focuses on the main city area of Pelican Town, capturing the heart of the Stardew Valley map. It includes major structures like the hospital, Pierre’s general store, the mayor’s house, the library, the blacksmith, and the local pub. Additional builds include the movie theater and a designated space for the traveling book seller. Together, these elements form the core of the town’s social and functional layout, faithfully recreated in Minecraft with attention to spacing, structure, and atmosphere.
                                </p>
                            </IntroSection>
                            <DividerLine />
                            <MinecraftGallery
                                title="Construction"
                                photos={ stardew_pictures.MainCityConstruction }
                                description={
                                    <>
                                        <p>
                                            This section covers the construction phase of Pelican Town’s central area, including the initial river layout, structural framing, and house placement. As the build progressed, details like fences, terrain shaping, and wall segments were added to define space and match the layout of the original map. The section also includes early work on the raised area leading up to the community center, establishing the key elevation shifts within the town.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Progress"
                                photos={ stardew_pictures.MainCityProgress }
                                description={
                                    <>
                                        <p>
                                            This section highlights the gradual addition of details throughout the main city build, including newly placed houses, trees, fences, and terrain shaping. These in-progress shots capture how the town fills out and takes on more character over time as each area becomes more visually complete.
                                        </p>
                                    </>
                                }
                            />
                        </TabPanel>
                        <TabPanel>
                            <IntroSection title="Farm and Bus Area">
                                <p>
                                    This section covers the farm area and the northern edge of Pelican Town, including the bus station and the main path leading toward Robin’s House. These spaces serve as key transition zones between the town, the player’s farm, and the broader valley. The build emphasizes accurate spacing, path flow, and elevation changes, recreating how these areas connect and guide movement in the original Stardew Valley map while adapting them naturally to the surrounding Minecraft terrain.
                                </p>
                            </IntroSection>
                            <DividerLine />
                            <MinecraftGallery
                                title="Construction"
                                photos={ stardew_pictures.FarmBusPathConstruction }
                                description={
                                    <>
                                        <p>
                                            This section captures the construction phase of the farm outskirts and northern access route, focusing on the bus station area and the path leading above the tunnel. The images show the terrain being gradually built up to match the original elevation changes, followed by early framing work along the southeastern border of the farm and the river that flows down toward the forest. As the layout takes shape, trees, paths, and small landscape details are added to help define the route and make the transition between zones feel natural and accurate.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Progress"
                                photos={ stardew_pictures.FarmBusPathProgress }
                                description={
                                    <>
                                        <p>
                                            This section focuses on the refinement phase of the farm and bus station area, highlighting the addition of visual and environmental details once the main layout was established. The images emphasize completed paths, fencing along the farm boundary, road details near the bus stop, and the placement of trees, flowers, and terrain accents throughout the area. Together, these finishing touches help solidify the transition between the farm, the bus station, and the surrounding paths, bringing the space closer to its final, fully realized form.
                                        </p>
                                    </>
                                }
                            />
                        </TabPanel>
                        <TabPanel>
                            <IntroSection title="Cindersap Forest">
                                <p>
                                    This section focuses on the Cindersap Forest region, a dense and organically shaped area that sits south of Pelican Town and plays a central role in exploration, foraging, and progression throughout the game. The build emphasizes natural terrain flow, irregular paths, and layered vegetation to reflect the forest’s less structured layout. Care was taken to preserve the feeling of enclosure and depth that defines this area in Stardew Valley while translating it into a cohesive three-dimensional space in Minecraft.
                                </p>
                            </IntroSection>
                            <DividerLine />
                            <MinecraftGallery
                                title="Construction"
                                photos={ stardew_pictures.ForestConstruction }
                                description={
                                    <>
                                        <p>
                                            This section documents the construction phase of the Cindersap Forest, starting with the macro layout and landmark placement before moving into terrain shaping and route definition. Early work focused on establishing the region’s navigational logic—river bends and crossings, the main pond, and the placement of key structures like the Wizard’s Tower, the Hat Mouse’s house, and the ranch area. From there, the build progresses into elevation work and boundary shaping, translating Stardew’s softer curves into Minecraft’s grid-based terrain while keeping the overall flow and relationships intact.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Progress"
                                photos={ stardew_pictures.ForestProgress }
                                description={
                                    <>
                                        <p>
                                            This section highlights the refinement phase of the Cindersap Forest as the area becomes more visually cohesive and recognizable. The images emphasize improved shoreline and river detailing, clearer path flow through the main landmarks, and the gradual addition of trees, ground cover, and natural breaks to soften hard edges where Minecraft forces sharper transitions. These progress shots focus on bringing the region closer to its final form, reinforcing the forest’s structure and spacing so it reads as a coherent slice of the original Stardew Valley map rather than a generic woodland build.
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

