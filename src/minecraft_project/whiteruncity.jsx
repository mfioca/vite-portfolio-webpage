import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyContainer } from '../SharedComponents';
import MinecraftGallery from './minecraft_gallery';
import { building_enterance, building_section_1, building_section_2, building_keep, side_by_side } from './minecraft_photos';

const construction = [
    { key: 'enterance', name: 'Entrance', photos: building_enterance, albumStyle: "Masonry", description: (
        <>
            <p>
                The castle courtyard is the city's last line of defense before reaching Dragonsreach. 
                The walls and guard towers are carefully placed to maintain the town’s fortified presence.
            </p>
        </>
    ) },
    { key: 'section1', name: 'Main Street & Market District', photos: building_section_1, albumStyle: "Rows", description: (
        <>
            <p>
                The bustling heart of Whiterun, filled with market stalls, shops, and inns. 
                This area captures the vibrant daily life of the town’s citizens.
            </p>
        </>
    ) },
    { key: 'section2', name: 'Residential & Guild Districts', photos: building_section_2, albumStyle: "Columns", description: (
        <>
            <p>
                This section showcases the various homes, guild halls, and back alleys that give Whiterun its unique charm.
            </p>
        </>
    ) },
    { key: 'keep', name: 'Dragonsreach Keep', photos: building_keep, albumStyle: "Masonry", description: (
        <>
            <p>
                The towering keep of Jarl Balgruuf, where crucial decisions are made and history is forged.
            </p>
        </>
    ) }
];


export const side_by_side_section = [
    {
      key: "side_by_side",
      name: "Skyrim / Minecraft Side-by-Side",
      photos: side_by_side,
      description: (
        <>
          <p>
            This section showcases side-by-side comparisons of Whiterun as it appears in
            <i> Skyrim </i> and my <i> Minecraft </i> recreation. I aimed to match perspectives
            as closely as possible to highlight similarities and differences.
          </p>
        </>
      ),
      collapsible: false, // This ensures it's always open and non-collapsible
    }
  ];



const WhiterunProject = () => {
    return (
        <div className="vertical-tabs-container">
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
                                description="Explore the different stages of my Whiterun Minecraft build, from early construction to the final touches."
                                sections={ construction }
                            />
                        </TabPanel>
                        <TabPanel>
                            <MinecraftGallery
                                title="Skyrim vs Minecraft Side-by-Side"
                                description="Explore direct comparisons between my Minecraft recreation and the original Whiterun from Skyrim."
                                sections={ side_by_side_section } // Single section, auto-opens
                            />
                            </TabPanel>


                        <TabPanel><p>PLACEHOLDER</p></TabPanel>
                    
                    </BodyContainer>
                </div>
            </Tabs>
        </div>
    );
};

export default WhiterunProject;




/*
const construction = [
    { key: 'enterance', name: 'Entrance', photos: building_enterance, description: (
        <>
            <p>
                The castle courtyard is the city's last line of defense before reaching Dragonsreach. 
                The walls and guard towers are carefully placed to maintain the town’s fortified presence.
            </p>
        </>
    ) },
    { key: 'section1', name: 'Main Street & Market District', photos: building_section_1, description: (
        <>
            <p>
                The bustling heart of Whiterun, filled with market stalls, shops, and inns. 
                This area captures the vibrant daily life of the town’s citizens.
            </p>
        </>
    ) },
    { key: 'section2', name: 'Residential & Guild Districts', photos: building_section_2, description: (
        <>
            <p>
                This section showcases the various homes, guild halls, and back alleys that give Whiterun its unique charm.
            </p>
        </>
    ) },
    { key: 'keep', name: 'Dragonsreach Keep', photos: building_keep, description: (
        <>
            <p>
                The towering keep of Jarl Balgruuf, where crucial decisions are made and history is forged.
            </p>
        </>
    ) }
];
*/