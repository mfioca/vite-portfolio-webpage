import React from 'react';

import { BodyContainer } from '../SharedComponents.jsx';
import { ChatBubble, ShowcaseComponent } from './ai_showcase_components.jsx';
import './ai_showcase.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 


import * as prompts from './ai_prompts.jsx';
import chatData from './chatData.json';

const TarotReader = () => {
    return (
        <div className="standard-padding-margin">
            <Tabs className="vertical-tabs">
                <div className="vertical-tabs-layout">
                    <TabList>
                        <Tab>Tarot Reader / Salesman</Tab>
                        <Tab>Disenchanted Oracle</Tab>
                        <Tab>Disenchanted Oracle V 2.0</Tab>
                    </TabList>
                    <BodyContainer hasBackground = { true } className="vertical-tab-content">
                        <TabPanel>
                            <ShowcaseComponent
                                title= "Tarot Reader and Herb salesman"
                                titleDescription = {
                                    <>
                                        <p>
                                            Inspired by my brother’s support in learning AI prompt engineering, I decided to build upon one of his examples: a Tarot Reader. This prompt features a sarcastic, burnt-out reader who works in a whimsical herbal remedy shop. What sets this character apart is their unique approach to delivering readings—they blend sharp, irreverent humor with a playful, child-like fairy-tale storytelling style.  
                                        </p>
                                        <p>
                                            The result is a reading that’s as entertaining as it is insightful, with the reader crafting whimsical tales for each card drawn, all while maintaining their jaded, no-nonsense attitude. This project pushed my skills in blending storytelling, humor, and interactive design, proving that even a disenchanted oracle can create a truly magical experience.
                                        </p>
                                    </>
                                }
                                prompt = { prompts.tarotReaderPrompt }
                                chatDescription = {
                                    <>
                                        <p>
                                            The chat box below shows an example of a chat simulation between a "customer" and the salesman.
                                        </p>
                                        <p>
                                            You can hover over the chat box and scroll with your mouse wheel or use the "next Message" button below.
                                        </p>
                                    </>
                                }
                                chatData= { <ChatBubble data={ chatData.tarotReader } /> }
                            />
                        </TabPanel>
                        <TabPanel>
                            <ShowcaseComponent
                                title="Disenchanted Oracle"
                                titleDescription = {
                                    <>
                                        <p>
                                            Inspired by the Tarot Reader and Salesman prompt, I wanted to craft a unique MyChatGPT experience that I could share with others. By focusing on the character’s distinct personality and tarot-reading abilities, I refined the concept into a standalone, immersive chatbot. Stripping away the original sales-driven elements of the herbal remedy shop, I emphasized the sarcastic humor, whimsical storytelling, and insightful readings that make this oracle so captivating.  
                                        </p>
                                    </>
                                }
                                prompt = { prompts.DisenchantedOraclePrompt }
                                chatDescription = {
                                    <>
                                        <p>
                                            The chat box below shows an example of a chat simulation between a "customer" and the salesman.
                                        </p>
                                        <p>
                                            The result is a highly engaging and entertaining bot that blends playful irreverence with thought-provoking tarot interpretations, offering users a truly one-of-a-kind interaction. Whether you’re seeking a peek into your future or just some lighthearted banter, the Disenchanted Oracle delivers an experience that’s as quirky as it is enlightening.
                                        </p>
                                    </>
                                }
                                chatData = { <ChatBubble data={ chatData.disenchantedOracle } /> }
                            />
                        </TabPanel>
                        <TabPanel>
                            <ShowcaseComponent
                                title="Disenchanted Oracle V 2.0"
                                titleDescription = {
                                    <>
                                        <p>
                                            Inspired by the Tarot Reader and Salesman prompt, I wanted to craft a unique MyChatGPT experience that I could share with others. By focusing on the character’s distinct personality and tarot-reading abilities, I refined the concept into a standalone, immersive chatbot. Stripping away the original sales-driven elements of the herbal remedy shop, I emphasized the sarcastic humor, whimsical storytelling, and insightful readings that make this oracle so captivating.  
                                        </p>
                                    </>
                                }
                                prompt = { prompts.TarotReaderV3Prompt }
                                chatDescription = {
                                    <>
                                        <p>
                                            The chat box below shows an example of a chat simulation between a "customer" and the salesman.
                                        </p>
                                        <p>
                                            The result is a highly engaging and entertaining bot that blends playful irreverence with thought-provoking tarot interpretations, offering users a truly one-of-a-kind interaction. Whether you’re seeking a peek into your future or just some lighthearted banter, the Disenchanted Oracle delivers an experience that’s as quirky as it is enlightening.
                                        </p>
                                    </>
                                }
                                chatData = { <ChatBubble data={ chatData.tarotReaderV3 } /> }
                            />
                        </TabPanel>
                    </BodyContainer>
                </div>
            </Tabs>
        </div>
    );
};

export default TarotReader;