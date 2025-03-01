import React from 'react';
import MinecraftGallery from './minecraft_gallery';
import { building_enterance, building_section_1, building_section_2, building_keep } from './minecraft_photos';

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

const WhiterunProject = () => {
    return (
        <MinecraftGallery

            
            title="Whiterun City from Elder Scrolls Skyrim"
            description="Explore the different stages of my Whiterun Minecraft build, from early construction to the final touches."
            sections={construction}
        />
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