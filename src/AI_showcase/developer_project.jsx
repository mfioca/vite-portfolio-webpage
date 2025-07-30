import React from 'react';

import { BodyContainer } from '../SharedComponents.jsx';
import { ChatBubble, ShowcaseComponent, ShowcaseComponentTabs } from './ai_showcase_components.jsx';
import './ai_showcase.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 


import * as prompts from './ai_prompts.jsx';
import chatData from './chatData.json';

const DeveloperPrompt = () => {
    return (
        <div className="standard-padding-margin">
            <Tabs className="vertical-tabs">
                <div className="vertical-tabs-layout">
                    <TabList>
                        <Tab>Developer Prompt</Tab>
                        <Tab>Developer 2.0 Prompt</Tab>
                        <Tab>Developer 3.0 Prompt</Tab>
                        <Tab>Developer 4.0 Prompt</Tab>
                    </TabList>
                    <BodyContainer hasBackground = { true } className="vertical-tab-content">
                        <TabPanel>
                            <ShowcaseComponentTabs
                                title="Developer Assistant"
                                titleDescription={
                                    <>
                                        <p>
                                            This prompt was meticulously crafted to reflect my communication style and systematic thinking, aiming to provide tailored support for technical projects. As part of an innovative approach, I incorporated examples of negative and positive reinforcement through the use of “Negative.pdf” and “Positive.pdf” files, intending to help the system learn my preferences and expectations. Additionally, detailed troubleshooting instructions were included to facilitate effective technical problem-solving. Unfortunately, this model did not meet the intended guidelines, requiring more effort to correct its responses than to utilize its assistance effectively.    
                                        </p>
                                    </>
                                }
                                tabs={[
                                    { label: 'Prompt', content: prompts.DeveloperPrompt1 },
                                    { label: 'Negative Guidelines', content: prompts.DeveloperPrompt1Negative },
                                    { label: 'Positive Guidelines', content: prompts.DeveloperPrompt1Postive }
                                ]}
                                chatDescription={
                                    <>
                                        <p>
                                            The chat box below showcases highlights of the successful collaboration with the model during the development of this web page.
                                        </p>
                                        <p>
                                            You can hover over the chat box and scroll with your mouse wheel or use the "next Message" button below.
                                        </p>
                                    </>
                                }
                                chatData={ <ChatBubble data={ chatData.developer1 } /> }
                            />
                        </TabPanel>
                        <TabPanel>
                            <ShowcaseComponentTabs
                                title="Developer Assitant 2.0"
                                titleDescription={
                                    <>
                                        <p>
                                            The Developer v2 prompt builds on the foundation of its predecessor, which is also available for viewing on this page. This updated version was meticulously refined to better reflect my communication style and systematic approach, providing enhanced support for technical projects. The v2 prompt introduces a comprehensive talk track, offering structured guidelines for how-to instructions, troubleshooting scenarios, and casual conversational interactions. These improvements make the v2 prompt more versatile and effective, ensuring a seamless and collaborative user experience.    
                                        </p>
                                    </>
                                }
                                tabs={[
                                    { label: 'Prompt', content: prompts.DeveloperPrompt2 },
                                    { label: 'Talk Track', content: prompts.DeveloperPrompt2TalkTrack }
                                ]}
                                chatDescription={
                                    <>
                                        <p>
                                            The chat box below showcases highlights of the successful collaboration with the model during the development of this web page.
                                        </p>
                                        <p>
                                            You can hover over the chat box and scroll with your mouse wheel or use the "next Message" button below.
                                        </p>
                                    </>
                                }
                                chatData={ <ChatBubble data={ chatData.developer2 } /> }
                            />
                        </TabPanel>
                        <TabPanel>
                            <ShowcaseComponent
                                title= "Developer Assitant 3.0"
                                titleDescription = {
                                    <>
                                        <p>
                                            The Developer v3 prompt, known as Tank 3.0, builds upon the foundation of its predecessors, both of which are available for viewing on this page. While Version 2 introduced a structured talk track for technical guidance, troubleshooting, and conversational interactions, it did not strictly adhere to those guidelines in practice.
                                        </p>
                                        <p>
                                            To address this, Version 3 was meticulously refined to embed the talk track directly into the prompt, reinforcing core principles such as responsiveness, adaptability, and strict user-led interactions. Additional customizations were made to ensure that information is only provided when explicitly requested, with a strong focus on precision and intentionality during troubleshooting.
                                        </p>
                                        <p>
                                            Tank 3.0 also incorporates personalized communication notes to better align with my systematic approach, providing an even more structured, reliable, and controlled collaboration experience. These refinements make Tank 3.0 a highly effective tool for complex problem-solving and technical projects.
                                        </p>
                                    </>
                                }
                                prompt = { prompts.DeveloperPrompt3 }
                                chatDescription = {
                                    <>
                                        <p>
                                            This version is being sunsetted and will no longer be updated. While it served as a pivotal step in shaping future versions, it no longer represents the current prompt architecture or design philosophy.
                                        </p>
                                        <p>
                                            No chat transcript is provided for this version. It did not produce responses that were distinct enough from version 2 to warrant a dedicated chat example.
                                        </p>
                                    </>
                                }
                            />
                        </TabPanel>
                        <TabPanel>
                            <ShowcaseComponent
                                title= "Developer Assitant 4.0"
                                titleDescription = {
                                    <>
                                        <p>
                                            The Developer 4.0 prompt, known as Tank 4.0, represents a major refinement in both behavior and alignment with my interaction preferences. Built on lessons learned from previous iterations, this version focuses on responsiveness, minimalism, and strict user-led control—delivering technical collaboration that is efficient, respectful, and precise.
                                        </p>
                                        <p>
                                            In an effort to continue improving the prompt and refine specific preferences, I asked the assistant to summarize its understanding of our working style. That insight became the foundation for this updated prompt, ensuring every response is shaped by clear structure, intentional flow, and a deeper awareness of how I like to think, build, and troubleshoot.
                                        </p>
                                    </>
                                }
                                prompt = { prompts.DeveloperPrompt4 }
                                chatDescription = {
                                    <>
                                        <p>
                                            This conversation tests how the assistant responds across three distinct interaction modes: brainstorming, conversational updates, and early-stage troubleshooting. The goal was to observe whether it could maintain boundaries, adapt to context, and only offer support when explicitly invited.
                                        </p>
                                        <p>
                                            The assistant navigates a THAC0 calculator concept, a state management update, and a reducer logic issue—demonstrating its ability to stay in a supporting role, ask clarifying questions, and avoid overstepping. Each segment was designed to simulate natural developer dialogue rather than isolated test prompts.
                                        </p>
                                        <p>
                                            This transcript reflects realistic pacing, scattered focus, and evolving context—an environment where the assistant must track intent, respect boundaries, and communicate like a thoughtful collaborator rather than a proactive fixer.
                                        </p>
                                    </>
                                }
                                chatData={ <ChatBubble data={ chatData.developer4 } /> }
                            />
                        </TabPanel>
                    </BodyContainer>
                </div>
            </Tabs>
        </div>
    );
};

export default DeveloperPrompt;