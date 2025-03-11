import React from 'react';
import WhiterunProject from './minecraft_project/whiteruncity';
import { IntroSection, DividerLine } from './SharedComponents';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Default styles for react-tabs


const MinecraftProjects = () => {

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
                    <li>A new city in the jungle, blending hobbit hole dwellings into the mountain and featuring dense, old-European-inspired row houses in the valley below.</li>
                </ul>
                <p>
                    This world is constantly evolving, with every build adding new depth and character. Whether it’s medieval cities, ancient wonders, or hidden secrets, there’s always something to explore. With each new build, the world continues to expand, bringing new challenges, inspirations, and stories to life.
                </p>
            </IntroSection>
            <DividerLine />
            <div className="center-div tabs-container">
                <Tabs className="standard-tabs">
                    <TabList>
                        <Tab>"Elder Scrolls: Skyrim" Whiterun City</Tab>
                        <Tab>Dwarven Kingdom</Tab>
                    </TabList>
                    <TabPanel>
                        {/*Whiterun Project <WhiterunProject/>*/}
                        <WhiterunProject/>
                    </TabPanel>
                    <TabPanel>
                        <p>More detailed descriptions of pictures of additional builds in this realm coming soon</p>
                    </TabPanel>
                     {/*Additional Minecraft projects can be added below */}
                </Tabs>
            </div>
        </div>
    );
};

export default MinecraftProjects;

