import React, { useState,  } from 'react';
import WhiterunProject from './minecraft_project/whiteruncity';
import DwarvenKingdom from './minecraft_project/dwarvenkingdom';
import CrowHaven from './minecraft_project/crowhaven';
import Emberhold from './minecraft_project/emberhold';
import RandomPlaces from './minecraft_project/random_places'
import { IntroSection, DividerLine } from './SharedComponents';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './minecraft_project/minecraft.css';
import 'react-tabs/style/react-tabs.css'; // Default styles for react-tabs


const MinecraftProjects = () => {
    const [isAcknowledgementsOpen, setIsAcknowledgementsOpen] = useState(false);

    return (
        <div className="minecraft-body">
            <IntroSection title="Welcome to My Minecraft Realm">
                <p><strong className="shadow">About This Web Page:</strong>&nbsp;&nbsp;
                    This section showcases a 4+ year-old Minecraft Bedrock creative realm that is a sprawling world filled with detailed cities, epic landscapes, and rich history. 
                    Every build tells a story, from grand dwarven halls carved into mountains to the meticulously recreated city of Whiterun from <i>The Elder Scrolls: Skyrim</i>.
                </p>
                <h3>Key locations include:</h3>
                <ul className= "default-list">
                    <li>A massive underground dwarven kingdom, featuring a maze inspired by <i>The Shining</i>, a great forge reminiscent of <i>WoW’s Ironforge</i>, a <i>Skyrim</i> dragon logo, and other pop culture nods.</li>
                    <li>A carefully recreated Whiterun city from <i>The Elder Scrolls: Skyrim</i>, capturing the city’s iconic layout, structures, and atmosphere.</li>
                    <li>A bustling port town with markets, cargo storage, three ships, and a working lighthouse.</li>
                    <li>A second city beyond the mountains, featuring a mining district, an abandoned underground mineshaft, a town square, a fortified keep, and another port.</li>
                    <li>A crumbling abandoned house with a collapsing tower, adding mystery to the journey between cities.</li>
                    <li>A massive 100x100 block recreation of Chichen Itza, rising from the ocean, waiting for its purpose.</li>
                    <li>A new city in the jungle, blending hobbit hole dwellings into the mountain and featuring dense, old-European-inspired row houses in the valley below. <strong>Currently in development.</strong></li>
                </ul>
                <p>
                    This world is constantly evolving, with every build adding new depth and character. Whether it’s medieval cities, ancient wonders, or hidden secrets, there’s always something to explore. With each new build, the world continues to expand, bringing new challenges, inspirations, and stories to life.
                </p>
                <div className="collapsible-section">
                    <h3 
                        className="toggle-gallery-title" 
                        onClick={() => setIsAcknowledgementsOpen(!isAcknowledgementsOpen)}
                    >
                        {isAcknowledgementsOpen ? `▼ Creator Special Thanks & Acknowledgements` : `▶ Creator Special Thanks & Acknowledgements`}
                    </h3>
                    {isAcknowledgementsOpen && (
                        <div className="collapsible-content">
                            <p>
                                Many of the structures and towns in my Minecraft realm were heavily influenced by or directly inspired by 
                                the incredible work of several Minecraft builders. Their detailed tutorials and design insights played a 
                                key role in shaping various aspects of my world.
                            </p>
                            <ul className="default-list">
                                <li>
                                    <a href="https://www.youtube.com/@lorddakr" target="_blank" rel="noopener noreferrer">
                                        Lord Dakr
                                    </a> – Known for medieval, historical, and fantasy builds with an emphasis on accuracy and detail.
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@ItsMarloe" target="_blank" rel="noopener noreferrer">
                                        ItsMarloe
                                    </a> – Creator of intricate, immersive medieval structures and world-building techniques.
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@BigTonyMC" target="_blank" rel="noopener noreferrer">
                                        BigTonyMC
                                    </a> – Specializes in detailed and creative Minecraft designs, from medieval to modern builds.
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@BlueNerdMC" target="_blank" rel="noopener noreferrer">
                                        BlueNerd
                                    </a> – Known for step-by-step tutorials on stunning fantasy and medieval-inspired builds.
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@Goldrobin" target="_blank" rel="noopener noreferrer">
                                        Goldrobin
                                    </a> – Expert in unique and aesthetically pleasing architectural styles, including custom towns and villages.
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@Gorillo" target="_blank" rel="noopener noreferrer">
                                        Gorillo
                                    </a> – Creates immersive builds and tutorials that blend creativity with functional design.
                                </li>
                            </ul>
                            <p>
                                These creators' work has provided both guidance and inspiration throughout the construction of my Minecraft 
                                realm. Their tutorials helped refine details, improve layouts, and bring ambitious ideas to life.
                            </p>
                        </div>
                    )}
                </div>
            </IntroSection>
            <DividerLine />
            <div className="center-div tabs-container">
                <Tabs className="standard-tabs">
                    <TabList className="grid-tablist">
                        <Tab>Whiterun City</Tab>
                        <Tab>Dwarven Kingdom</Tab>
                        <Tab>Crowhaven</Tab>
                        <Tab>Emberhold</Tab>
                        <Tab>Random Places</Tab>
                    </TabList>
                    <TabPanel>
                        <WhiterunProject/>
                    </TabPanel>
                    <TabPanel>
                        <DwarvenKingdom />
                    </TabPanel>
                    <TabPanel>
                        <CrowHaven />
                    </TabPanel>
                    <TabPanel>
                        <Emberhold />
                    </TabPanel>
                    <TabPanel>
                        <RandomPlaces />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default MinecraftProjects;

