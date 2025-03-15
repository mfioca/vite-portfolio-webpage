import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyContainer, IntroSection, DividerLine } from '../SharedComponents';
import MinecraftGallery from './minecraft_gallery';
import { 
    mountain_exterior,
    governance_district,
    great_forge_district,
    bath_houses,
    under_cave
    
 } from './dwarvenkingdom_photos';



const DwarvenKingdom = () => {
    return (
        <div>
            <Tabs className="vertical-tabs">
                <div className="vertical-tabs-layout">
                    <TabList>
                        <Tab>Dwarven Mountain & Legacy</Tab>
                    </TabList>
                    <BodyContainer hasBackground = { true } className="vertical-tab-content">
                        <TabPanel>
                            <IntroSection title="Dwarven Kingdom: The First Great Build">
                                <p>
                                    This sprawling underground kingdom was the first build in my <i>Minecraft</i> realm, originally conceived as a 
                                    mental exercise during an unemployment phase. Inspired by <i>The Lord of the Rings</i>, <i>World of Warcraft</i>, 
                                    and <i>DragonLance</i>, it quickly grew into an expansive, multi-layered city beneath the mountains.
                                </p>
                                <p><strong>Key aspects of the build:</strong></p>
                                <ul className="default-list">
                                    <li><strong>Epic Scale & Grand Architecture</strong> – Vast halls, towering pillars, and massive stonework create the feel of an ancient, long-lived civilization.</li>
                                    <li><strong>Functional Districts</strong> – Organized sections for governance, industry, residential life, and recreation, bringing realism to the city.</li>
                                    <li><strong>Hidden Passages & Secrets</strong> – Concealed exits, underground pathways, and even a <i>Khazad-dûm</i>-inspired bridge leading to a hidden entrance.</li>
                                    <li><strong>Blending Fantasy & Practicality</strong> – While inspired by fantasy, every chamber, walkway, and room is built with the idea that dwarves could logically live and work there.</li>
                                    <li><strong>Environmental Details</strong> – Trees, fountains, apartments built into walls, and even a bathhouse add life beyond just stone and lava.</li>
                                    <li><strong>Underground Depths & The Balrog’s Domain</strong> – A massive cave system featuring a custom-built <i>Balrog</i> statue, abandoned mines, and a vast, multi-level excavation site.</li>
                                </ul>
                                <p>
                                    From its regal halls to its treacherous depths, this dwarven kingdom was the foundation of my entire realm. 
                                    Explore the different sections, each crafted to reflect the culture, industry, and mystery of an ancient underground empire.
                                </p>
                            </IntroSection>
                            
                            <DividerLine />
                            <MinecraftGallery
                                title="Mountain exterior"
                                photos = { mountain_exterior }
                                description={
                                    <>
                                        <p>
                                            The exterior landscape of the Dwarven Kingdom is designed to blend natural mountainous terrain with imposing architectural features. 
                                            A towering <i>110-block-tall dwarven statue</i> stands as a guardian at the entrance, symbolizing the strength and legacy of the kingdom. 
                                            Nearby, strategically placed guard posts and watchtowers provide a vantage point over the surrounding lands, reinforcing the stronghold’s 
                                            defensive nature.
                                        </p>
                                        <p>
                                            Further enhancing the kingdom’s presence is a beacon tower, inspired by the <i>Beacons of Gondor</i>, serving as part of a long-range warning 
                                            system. Alongside the mountain’s base, a small village has formed, adding to the realm’s liveliness, while a faithful recreation of Stonehenge 
                                            sits nearby, shrouded in mystery and ancient purpose.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Governance District: The Heart of the Kingdom"
                                photos={ governance_district }
                                description={
                                    <>
                                        <p>
                                            The <i>Governance District</i> is the heart of the dwarven kingdom, where leadership, industry, and daily life converge. 
                                            With key locations such as the grand throne room, the royal dining hall, and the kingdom’s strategic map room, hese halls 
                                            are where the kingdom is ruled, its defenses are planned, and its legacy is preserved.
                                        </p>
                                        <p>
                                            This section was forged using an unconventional method—<i>dynamite excavation</i>. The entire area was blasted down to bedrock, 
                                            allowing natural formations to guide the placement of towering stone buildings. Rather than forcing a rigid layout, the design 
                                            adapted to the chaotic yet organic shapes left behind, resulting in a space that feels both intentional and ancient.
                                        </p>
                                        <p>
                                            The district also features essential industrial spaces, including a forge, armory, and alchemy lab—each built to serve the 
                                            needs of the dwarven civilization. Natural elements seamlessly integrate into the city, with cascading lava falls that feed into a river 
                                            providing both light and a sense of controlled chaos, while waterfalls are carefully carved into the stonework, adding an unexpected 
                                            touch of tranquility. The movie theater and park district, with its trees, fountain and apartments built into the walls, ensures the kingdom remains 
                                            more than just stone and fire—it is a thriving, living city.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Great Forge District: Industry & Legacy"
                                photos={great_forge_district}
                                description={
                                    <>
                                        <p>
                                            The <i>Great Forge District</i> stands as a testament to dwarven craftsmanship, blending industry, tradition, and community. 
                                            Constructed by carving out the mountain using minecraft console <i>fill air</i> commands, this district offers a sprawling open space 
                                            accessed by the grand bridge, where towering stone pillars, adorned with massive double-bladed axe sculptures, stand as symbols of the kingdom’s warrior heritage.
                                        </p>
                                        <p>
                                            As visitors pass through the Great Forge area inspired by <i>Ironforge</i> from <i>World of Warcraft</i>, they encounter specialized shops catering to 
                                            every profession in <i>Minecraft</i>. Beyond the forge lies a district filled with striking details, including a <i>Shining</i>-inspired hedge maze, a flowing lava 
                                            fall emblazoned with a large <i>Skyrim</i> dragon logo, and winding residential housing built into stone formations resembling towering trees.
                                        </p>
                                        <p>
                                            Natural elements enhance the living quarters, with lava rivers illuminating the cavern from below and a park and restaurant area adding a 
                                            rare touch of greenery and comfort. The district also houses the kingdom’s jail and features a menacing cave entrance on the lower floor, leading into the deep, 
                                            uncharted caverns below—a gateway to even greater dwarven secrets.
                                        </p>
                                    </>
                                
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="Dwarven Bath Houses: A Touch of Luxury"
                                photos={bath_houses}
                                description={
                                    <>
                                        <p>
                                            Inspired by the stunning bathhouses from <i>Spirited Away</i>, these grand bathing facilities offer a rare 
                                            glimpse into the luxurious side of dwarven life. Unlike the rugged stone fortifications found throughout the kingdom, 
                                            the bathhouses provide a serene retreat, catering to both relaxation and function.
                                        </p>
                                        <p>
                                            Each bathhouse features fully equipped locker rooms, working showers, and large communal tubs that can accommodate multiple guests. 
                                            Advanced <i>redstone</i> engineering powers interactive waterfall-like mechanisms to fill the tubs, allowing for a dynamic, immersive experience. 
                                            One of the three bathhouses even boasts a massive deep-water pool, ideal for swimming and recreation.
                                        </p>
                                        <p>
                                            Strategically spread across the kingdom’s two major districts, these bathhouses serve as both a testament to dwarven ingenuity 
                                            and a much-needed escape from the heat of the forges and the toil of underground labor.
                                        </p>
                                    </>
                                }
                            />
                            <DividerLine />
                            <MinecraftGallery
                                title="The Deep Caverns: Mines & The Balrog’s Lair"
                                photos={under_cave}
                                description={
                                    <>
                                        <p>
                                            Beneath the kingdom, lies a vast and winding deepslate cave system filled with both natural and crafted mysteries. 
                                            Narrow, twisting tunnels lead to expansive caverns, once serving as one of the kingdom’s primary mining hubs. 
                                            The network is subtly illuminated by torch-lit paths, guiding the way toward abandoned mineshafts and a custom-built 
                                            six-level mine. A massive, chain-supported scaffolding and elevator helps transport materials between layers, reinforcing the dwarven ingenuity in extracting 
                                            resources from the depths.
                                        </p>
                                        <p>
                                            One of the cavern’s most striking features is a naturally-formed, cenote-like chamber, where lava and water intermingle on the floor of a vast, circular opening. 
                                            Nestled within this eerie, glowing expanse is the kingdom’s most ominous secret—a towering, custom-built <i>Balrog</i> statue inspired by the <i>Lord of the Rings</i> movies, 
                                            menacingly emerging from the darkness below. Its presence looms over the cavern, Casting a mythical and foreboding shadow over the dwarven realm.
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

export default DwarvenKingdom;


/*  placeholder section
<TabPanel>
                        <div className=" standard-padding-margin placeholder-container">
                            <p className="placeholder-text">After-project pictures will be added soon. Stay tuned!</p>
                        </div>
                        </TabPanel>
*/