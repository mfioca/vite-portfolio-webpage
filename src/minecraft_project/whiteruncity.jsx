import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyContainer, IntroSection, DividerLine } from '../SharedComponents';
import MinecraftGallery from './minecraft_gallery';
import { 
    building_enterance, 
    building_section_1, 
    building_section_2, 
    building_keep, 
    side_by_side, 
    building_random_extras,
    city_gates_details,
    section_1_details,
    section_2_details
 } from './whiterun_photos';



const WhiterunProject = () => {
    return (
        <div>
            <Tabs className="vertical-tabs">
                <div className="vertical-tabs-layout">
                    <TabList>
                        <Tab>Construction of City</Tab>
                        <Tab>Side By Side Comparison</Tab>
                        <Tab>After Project pictures</Tab>
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
                                title="City Gates"
                                photos = { building_enterance }
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
                            <MinecraftGallery
                                title= "Main Street & Market District"
                                photos = { building_section_1 }
                                description = {
                                    <>
                                        <p>
                                            The bustling heart of Whiterun, filled with market stalls, shops, and inns, begins to take shape in this section. 
                                            These images capture the gradual planning and construction process, starting with the foundational outlines that helped 
                                            define the scale and layout of the district. The open space beneath the structures reflects the city's natural topography, 
                                            carefully preserved to stay true to the original Skyrim design. As the build progresses, the framework of key buildings emerges, 
                                            showcasing the transition from initial planning to completed structures, even as finer details remain a work in progress.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title= "Residential & Guild Districts"
                                photos = { building_section_2 }
                                description = {
                                    <>
                                        <p>
                                            This section showcases the various homes, guild halls, and back alleys that give Whiterun its unique charm. 
                                            As construction progresses, the images highlight efforts to match perspectives from Skyrim, ensuring accuracy 
                                            in scale and positioning. This phase also introduces RTX shading, enhancing lighting and depth for a more immersive feel. 
                                            Due to Skyrim’s approach of adjusting interior and exterior dimensions separately, this area required creative problem-solving 
                                            to maintain both visual authenticity and practical in-game functionality.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title= "Dragonsreach Keep"
                                photos = { building_keep }
                                description = {
                                    <>
                                        <p>
                                            This section highlights the gradual construction of Whiterun’s Keep, showcasing its evolving design, the bridge, and the pool area. 
                                            The images also capture the initial empty space beneath parts of the build, reflecting the natural elevation changes in the city’s terrain. 
                                            As construction progressed, structural details were refined, bringing the keep closer to its final form while maintaining the integrity of the landscape.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title= "Construction Overview & Terrain Work"
                                photos = { building_random_extras }
                                description = {
                                    <>
                                        <p>
                                            This section highlights the gradual construction of Whiterun’s Keep, showcasing its evolving design, the bridge, and the pool area. 
                                            The images also capture the initial empty space beneath parts of the build, reflecting the natural elevation changes in the city’s terrain. 
                                            As construction progressed, structural details were refined, bringing the keep closer to its final form while maintaining the integrity of the landscape.
                                        </p>
                                    </>
                                }
                            />
                        </TabPanel>
                        <TabPanel>
                            <IntroSection title="Skyrim vs Minecraft Side-by-Side">
                                <p>
                                    Explore direct comparisons between my Minecraft recreation and the original Whiterun from Skyrim.
                                </p>
                                
                            </IntroSection>
                            <DividerLine />
                            <MinecraftGallery
                                title= "Skyrim / Minecraft Side-by-Side"
                                photos = { side_by_side }
                                testprop = { 800 / 1000 }
                                gridRowHeight="400px" // Custom row height
                                collapsible={false} // Ensures this section is always open
                                description = {
                                    <>
                                        <p>
                                            This section showcases side-by-side comparisons of Whiterun as it appears in
                                            <i> Skyrim </i> and my <i> Minecraft </i> recreation. I aimed to match perspectives
                                            as closely as possible to highlight similarities and differences.
                                        </p>
                                        <p><strong>Note:</strong> The <em>Skyrim</em> images may appear slightly <strong>overexposed</strong> or <strong>brighter than intended</strong> due to limitations in screen capture software and HDR settings. This is a common issue when capturing modern games, as certain lighting effects and contrast adjustments don’t always translate perfectly to screenshots.</p>
                                    </>
                                }
                            />
                        </TabPanel>
                        <TabPanel>
                            <IntroSection title="After Build Detail Screenshots">
                                <p>
                                    This section highlights detailed views of the completed Whiterun build in <i>Minecraft</i>. 
                                    These screenshots capture the final structure, intricate design elements, and the overall atmosphere 
                                    that brings the city to life.
                                </p>
                                <p>
                                    <strong>Key focus areas include:</strong>
                                </p>
                                <ul className="default-list">
                                    <li><strong>Architectural Details</strong> – Close-up shots showcasing the craftsmanship and accuracy of the build.</li>
                                    <li><strong>Environmental Details</strong> – Careful placement of grass, flowers, and small decorative elements to enhance immersion.</li>
                                    <li><strong>Final Adjustments</strong> – Small tweaks and refinements that improved the overall aesthetic.</li>
                                </ul>
                                <p>
                                    These images offer a closer look at the effort that went into replicating <i>Skyrim’s</i> Whiterun in a block-based world. 
                                    Explore the gallery to see how all the elements came together in the final version.
                                </p>
                            </IntroSection>
                            <DividerLine />
                            <MinecraftGallery 
                                title="Whiterun City Gates - Final Details"
                                photos = { city_gates_details }
                                description = {
                                    <>
                                        <p>
                                            The Whiterun City Gates serve as the primary entrance to the bustling city, 
                                            standing as a fortified barrier between the outside world and the heart of Skyrim. 
                                            This section showcases detailed screenshots of the gates, surrounding walls, and 
                                            their architectural integration into the overall city structure.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Main Street & Market District - Final Details"
                                photos={ section_1_details }
                                description={
                                    <>
                                        <p>
                                            This section highlights the <i>final detailing and structural refinements</i> of the <i>Main Street & Market District</i>. 
                                            With the core buildings completed, attention shifts to <i>exterior decorations, interior layouts, and immersive elements</i> that bring Whiterun to life. 
                                        </p>
                                        <p>
                                            From the <i>market stalls and vendor setups</i> to the <i>interior furnishings of homes and shops</i>, every detail has been carefully considered to 
                                            maintain authenticity while adapting to Minecraft’s block-based constraints. This phase ensures that the district not only <i>resembles its Skyrim counterpart</i> but 
                                            also feels like a functional and lived-in space within the game world.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title= "Residential & Guild Districts - Final Details"
                                photos = { section_2_details }
                                description={
                                    <>
                                        <p>
                                            This section of Whiterun features a mix of homes, guild halls, and key locations such as <i>Jorrvaskr</i>, the <i>Skyforge</i>, and the <i>Temple of Kynareth</i>. 
                                            While maintaining accurate exteriors was a priority, some interior layouts required slight distortions to fit within Minecraft’s block limitations, 
                                            ensuring the city’s overall proportions remained true to <i>Skyrim</i>.
                                        </p>
                                        <p>
                                            Larger buildings, such as the Companions' longhouse and the temple, were particularly challenging due to their unique designs and scale.
                                            In some cases, adjustments were made to interior walls, staircases, and spacing to accommodate the outer framework while keeping the essential 
                                            look and feel of the structures intact.
                                        </p>
                                        <p>
                                            One of the biggest challenges was recreating the <i>hawk statue at the Skyforge</i>. With no direct reference images available, 
                                            the statue had to be constructed entirely by eye, using in-game views from <i>Skyrim</i> to estimate its shape and proportions.
                                            Despite the limitations, the final version captures the essence of the original monument overlooking the forge.
                                        </p>
                                        <p>
                                            This area reflects the blend of careful planning and necessary compromises involved in translating a 3D-rendered RPG world into <i>Minecraft</i>'s block-based aesthetic.
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

export default WhiterunProject;


/*  placeholder section
<TabPanel>
                        <div className=" standard-padding-margin placeholder-container">
                            <p className="placeholder-text">After-project pictures will be added soon. Stay tuned!</p>
                        </div>
                        </TabPanel>
*/