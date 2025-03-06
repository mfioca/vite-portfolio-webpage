import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyContainer } from '../SharedComponents';
import MinecraftGallery from './minecraft_gallery';
import { building_enterance, building_section_1, building_section_2, building_keep, side_by_side, building_random_extras } from './whiterun_photoes';

const construction = [
    { key: 'enterance', name: 'Entrance', photos: building_enterance, albumStyle: "Masonry", description: (
        <>
            <p>
                The entrance to Whiterun serves as the foundation of the city’s design, carefully adapting Skyrim’s natural topography into 
                the structured world of <i>Minecraft</i>. These images highlight the early construction phases, starting from a flat surface 
                and gradually shaping the elevation changes seen in the original game. The space beneath the city was intentionally left open 
                at this stage, demonstrating the planning process before the full terrain was completed.
            </p>
        </>
    ) },
    { key: 'section1', name: 'Main Street & Market District', photos: building_section_1, albumStyle: "Rows", description: (
        <>
            <p>
                The bustling heart of Whiterun, filled with market stalls, shops, and inns, begins to take shape in this section. 
                These images capture the gradual planning and construction process, starting with the foundational outlines that helped 
                define the scale and layout of the district. The open space beneath the structures reflects the city's natural topography, 
                carefully preserved to stay true to the original Skyrim design. As the build progresses, the framework of key buildings emerges, 
                showcasing the transition from initial planning to completed structures, even as finer details remain a work in progress.
            </p>
        </>
    ) },
    { key: 'section2', name: 'Residential & Guild Districts', photos: building_section_2, albumStyle: "Columns", description: (
        <>
            <p>
                This section showcases the various homes, guild halls, and back alleys that give Whiterun its unique charm. 
                As construction progresses, the images highlight efforts to match perspectives from Skyrim, ensuring accuracy 
                in scale and positioning. This phase also introduces RTX shading, enhancing lighting and depth for a more immersive feel. 
                Due to Skyrim’s approach of adjusting interior and exterior dimensions separately, this area required creative problem-solving 
                to maintain both visual authenticity and practical in-game functionality.
            </p>
        </>
    ) },
    { key: 'keep', name: 'Dragonsreach Keep', photos: building_keep, albumStyle: "Masonry", description: (
        <>
            <p>
                This section highlights the gradual construction of Whiterun’s Keep, showcasing its evolving design, the bridge, and the pool area. 
                The images also capture the initial empty space beneath parts of the build, reflecting the natural elevation changes in the city’s terrain. 
                As construction progressed, structural details were refined, bringing the keep closer to its final form while maintaining the integrity of the landscape.
            </p>
        </>
    ) },
    { key: 'random_extras', name: 'Construction Overview & Terrain Work', photos: building_random_extras, albumStyle: "Rows", description: (
        <>
            <p>
                These images provide a broader, zoomed-out perspective of Whiterun’s construction progress. 
                They capture the overall layout of the city as it was being built, allowing for a better 
                assessment of scale and structural alignment.
            </p>
            <p>
                Some images highlight the significant amount of empty space beneath the city, showcasing the process of filling it with dirt 
                using fill console commands to create a solid foundation. This step was crucial in ensuring the terrain closely matched the elevation 
                changes and natural topography of the original Whiterun.
            </p>
        </>
    ) },
];

const sideByside_section = [
    {
      key: "side_by_side",
      name: "Skyrim / Minecraft Side-by-Side",
      photos: side_by_side,
      albumStyle: "Columns",
      description: (
        <>
          <p>
            This section showcases side-by-side comparisons of Whiterun as it appears in
            <i> Skyrim </i> and my <i> Minecraft </i> recreation. I aimed to match perspectives
            as closely as possible to highlight similarities and differences.
          </p>
          <p><strong>Note:</strong> The <em>Skyrim</em> images may appear slightly <strong>overexposed</strong> or <strong>brighter than intended</strong> due to limitations in screen capture software and HDR settings. This is a common issue when capturing modern games, as certain lighting effects and contrast adjustments don’t always translate perfectly to screenshots.</p>
        </>
      ),
      collapsible: false, // This ensures it's always open and non-collapsible
    }
  ];

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
                            <MinecraftGallery
                                title="Whiterun City from Elder Scrolls Skyrim"
                                description={
                                    <>
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
                                    </>
                                }
                                sections={ construction }
                            />
                        </TabPanel>
                        <TabPanel>
                            <MinecraftGallery
                                title="Skyrim vs Minecraft Side-by-Side"
                                description="Explore direct comparisons between my Minecraft recreation and the original Whiterun from Skyrim."
                                sections={ sideByside_section } // Single section, auto-opens
                            />
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

export default WhiterunProject;
