import React from 'react';

import { BodyContainer } from '../SharedComponents.jsx';
import { ChatBubble, ShowcaseComponent } from './ai_showcase_components.jsx';
import './ai_showcase.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 
import { Link } from 'react-router-dom';

import * as pa from './prompts/personalization_prompts.jsx';
import chatData from './chats/personalization_chats.json';


const ghostsLink = (
    <Link 
        to={`/show/46573`}
        style={{
            display: 'inline-block', 
            marginTop: '10px', 
            fontSize: '0.9rem', 
            color: '#0078d4', 
            textDecoration: 'none'
        }}
    >
        TV Show Explorer page
    </Link>
);

const GPTAssistant = () => {
    return (
        <div className="standard-padding-margin">
            <Tabs className="vertical-tabs">
                <div className="vertical-tabs-layout">
                    <TabList>
                        <Tab>Personalization Assistant 1.0</Tab>
                        <Tab>Personalization Assistant 2.0</Tab>
                    </TabList>
                    <BodyContainer hasBackground = { true } className="vertical-tab-content">
                        <TabPanel>
                            <ShowcaseComponent
                                title="Personalization Assistant 1.0"
                                titleDescription = {
                                    <>
                                        <p>
                                            The Personalization Assistant was designed to help users craft their ideal ChatGPT experience by guiding them through the customization process. It focuses on the two key personalization questions within ChatGPT, ensuring responses align with each user's tone, communication style, and specific needs.
                                        </p>
                                        <p>
                                            The prompt provides structured guidance to uncover the user's preferences and emotional goals, offering clear, concise outputs tailored to fit directly into ChatGPT's personalization settings. This approach streamlines the process of fine-tuning AI interactions, making it easier for users to create a model that feels uniquely their own.
                                        </p>
                                        <p>
                                            Whether you're looking for a casual conversational partner or a highly structured assistant, this prompt ensures your ChatGPT instance responds exactly how you want, fostering a more engaging and personalized AI experience.
                                        </p>
                                    </>
                                }
                                prompt = { pa.PersonalizationAssistant }
                                chatDescription = {
                                    <>
                                        <p>
                                            The chat simulation below showcases a playful test of the Personalization Assistant prompt, featuring Flower from the US version of <em>Ghosts</em>. Both the assistant and I thought pretending to be Flower, a free-spirited, effortlessly whimsical, and delightfully scatterbrained character, would be a fun and unique way to push the prompt’s limits.
                                        </p>
                                        <p>
                                            Flower’s distinct personality, with her spontaneous energy and tendency to drift into tangents, created the perfect challenge to test how well the prompt could adapt to unconventional and unpredictable responses. The assistant had to balance guiding Flower through the personalization process while keeping up with her eccentric charm and offbeat observations.
                                        </p>
                                        <p>
                                            This interaction highlights the prompt's ability to remain structured yet flexible, demonstrating how it can navigate even the quirkiest conversations while staying focused on the task. You can learn more about the show <em>Ghosts</em> and its colorful cast of characters by visiting the&nbsp;{ ghostsLink }
                                        </p>
                                    </>
                                }
                                chatData = { <ChatBubble data={ chatData.personalizationAssistant } /> }
                                avatar={`${import.meta.env.BASE_URL}ai_avatars/modula.jpg`}
                            />
                        </TabPanel>
                        <TabPanel>
                            <ShowcaseComponent
                                title="Modula - GPT Personalization Assistant"
                                titleDescription = {
                                    <>
                                        <p>
                                            Personalization Assistant 2.0 builds on the original by aligning more closely with ChatGPT’s latest customization settings. The update reflects a deeper understanding of how prompt structure influences assistant behavior and user experience.
                                        </p>
                                        <p>
                                            I created this version to incorporate everything I’ve learned about prompt design, tone control, and user-guided interaction. It introduces clearer formatting, phase-based conversation structure, and rule-driven guidance—refining the assistant's ability to mirror the user’s intent and communication style.
                                        </p>
                                        <p>
                                            This evolution wasn’t just about making improvements—it was about precision. By applying new knowledge and cleaner logic, this version creates a more effective, user-centered tool for crafting personalized AI responses that feel intuitive and intentional.
                                        </p>
                                    </>
                                }
                                prompt = { pa.PersonalizationAssistant_2 }
                                chatDescription = {
                                    <>
                                        <p>
                                            This chat simulation showcases a live walkthrough of the updated Personalization Assistant prompt, tested within a brand-new ChatGPT account. Unlike prior sessions, this interaction took place in an environment with no saved long-term memory or behavioral history.
                                        </p>
                                        <p>
                                            The assistant guides the user through the setup of personalization settings from scratch, focusing on tone, communication preferences, and boundaries around assistant behavior. The conversation demonstrates how well the new prompt captures user intent with clarity and precision.
                                        </p>
                                        <p>
                                            This test highlights the assistant's ability to adapt responsively within a clean state—ensuring that even first-time users can establish deeply aligned settings that reflect their working style, tone, and expectations.
                                        </p>
                                    </>
                                }
                                chatData = { <ChatBubble data={ chatData.personalizationAssistant2_chat } /> }
                                link="https://chatgpt.com/g/g-6809abb94dd48191bb8a07c01000306b-modula-gpt-personalization-assistant"
                                avatar={`${import.meta.env.BASE_URL}ai_avatars/modula.jpg`}
                            />
                        </TabPanel>
                    </BodyContainer>
                </div>
            </Tabs>
        </div>
    );
};

export default GPTAssistant;