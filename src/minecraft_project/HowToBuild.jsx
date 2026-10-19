import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BodyContainer, IntroSection, DividerLine, YouTubeEmbed } from '../SharedComponents';



const HowToBuild = () => {
    return (
        <div>
            <Tabs className="vertical-tabs">
                <div className="vertical-tabs-layout">
                    <TabList>
                        <Tab>Random Builds</Tab>
                    </TabList>
                    <BodyContainer hasBackground={true} className="vertical-tab-content">
                        <TabPanel>
                            <IntroSection title="How to Build the Skyrim Dragon Logo in Minecraft">
                                <p>
                                    Set against a flowing lava fall in my <i>Dwarven Kingdom</i>,
                                    the dragon emblem from <i>Skyrim</i> brings a familiar piece of
                                    Tamriel into the underground halls. This tutorial takes that
                                    design out of the mountain and lays it flat on the ground,
                                    making it easier to follow along and recreate.
                                </p>
                                <p>
                                    The 29 × 47-block design uses obsidian, glass, and stained glass.
                                    An Excel grid stays on screen as a reference, with text
                                    annotations walking through where to place blocks and leave
                                    gaps. Build it flat as shown, or stand it upright with lava
                                    flowing behind it to bring a little of the kingdom into your
                                    own world.
                                </p>
                            </IntroSection>
                            <YouTubeEmbed
                                videoId="0czGpKrwY-w"
                                title="How to Build the Skyrim Dragon Logo in Minecraft"
                            />
                            <DividerLine />

                        </TabPanel>
                    </BodyContainer>
                </div>
            </Tabs>
        </div>
    );
};

export default HowToBuild;