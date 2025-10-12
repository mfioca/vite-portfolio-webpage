import React from 'react';
import { DividerLine, IntroSection, BodyContainer } from './SharedComponents.jsx';
import {  ChatBubble , ShowcaseComponent } from './AI_showcase/ai_showcase_components.jsx';
import './AI_showcase/ai_showcase.css'
import './AI_showcase/developer_project.jsx'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 
import DeveloperPrompt from './AI_showcase/developer_project.jsx';
import TimPrompt from './AI_showcase/tim_prompt.jsx';
import GPTAssistant from './AI_showcase/personalization_assistant.jsx';
import TarotReader from './AI_showcase/tarot_reader_prompt.jsx';
import { LegislativeGuidePrompt } from './AI_showcase/prompts/legislativeguideprompt.jsx';
import lgchat from './AI_showcase/chats/legislative_chat.json';
import { StellariumGuidePrompt } from './AI_showcase/prompts/stellarium_prompt.jsx';

const AIShowcase = () => {
    return (
        <div className="standard-padding-margin">
            <IntroSection title="AI Showcase">
                <p>
                    <strong className="shadow">About This Web Page:</strong>&nbsp;&nbsp;The AI Showcase serves as a demonstration of advanced prompt engineering and AI  collaboration techniques. This page highlights a curated collection of interactive conversations designed to showcase the power of OpenAI’s language models when combined with creative and technical expertise. Each example illustrates unique prompts, custom-tailored to generate engaging, insightful, and dynamic interactions.
                </p>
                <p>
                    By exploring this page, you’ll gain insight into how carefully crafted prompts can shape AI behavior, enabling applications in storytelling, education, decision support, and more. The AI Showcase is not just a testament to the potential of AI but also a reflection of the innovative approaches used to push its boundaries.
                </p>
            </IntroSection>
            <DividerLine />
            <div className="center-div tabs-container">
                <Tabs className="standard-tabs">
                    <TabList className="grid-tablist">
                        <Tab>Tarot Reader / Salesman</Tab>
                        <Tab>Modula - GPT Personalization Assistant</Tab>
                        <Tab>Developer Prompt</Tab>
                        <Tab>Tim: Your Conversational Companion</Tab>
                        <Tab>Legislative Guide</Tab>
                        <Tab>Stellarium Guide - Astronomer</Tab>
                    </TabList>
                    <TabPanel>
                        <TarotReader />
                    </TabPanel>
                    <TabPanel>
                        <GPTAssistant />
                    </TabPanel>
                    <TabPanel>
                        <DeveloperPrompt />
                    </TabPanel>
                    <TabPanel>
                        <TimPrompt />
                    </TabPanel>
                    <TabPanel>
                        <BodyContainer hasBackground = { true } className="ai-showcase-container">
                            <ShowcaseComponent
                                title="Legislative Guide: One Big Beautiful Bill"
                                titleDescription={
                                    <>
                                        <p>
                                            This assistant functions as a legislative law professor, focused on educating users about the structure, language, and procedural mechanics of the One Big Beautiful Bull Act—a comprehensive, 1100+ page bill uploaded directly into the system as a reference document. Drawing only from the contents of this PDF, the assistant provides precise, section-based explanations using legal citations, historical framing, and neutral instructional tone. Designed to mimic a “Legislative Bills 101” classroom experience, this assistant is ideal for legal researchers, policy students, or anyone needing a clear and faithful breakdown of complex bill language.
                                        </p>
                                    </>
                                }
                                prompt ={ LegislativeGuidePrompt }
                                chatDescription={
                                    <>
                                        <p>
                                            This sample conversation highlights the assistant’s role as an academic legislative interpreter. The user inquires about geothermal leasing, geothermal royalties, and Medicaid-related provisions in the bill. Each response is delivered in “Lecture Mode,” offering structured, section-based summaries drawn directly from the bill’s text.
                                        </p>
                                        <p>
                                            The assistant also handles a follow-up clarification about eligibility for the bill’s community engagement (work/volunteering) requirements, demonstrating its ability to cite exact line references and explain exemptions cleanly and without editorializing.
                                        </p>
                                    </>
                                }
                                chatData={ <ChatBubble data={ lgchat.LegislativeGuidePromptTest } /> }
                                link="https://chatgpt.com/g/g-6862c2b5811c819185c1e7a346c56e53-legislative-guide-one-big-beautiful-bill"
                                avatar={`${import.meta.env.BASE_URL}ai_avatars/legislative.jpeg`}
                            />
                        </BodyContainer>
                    </TabPanel>
                    <TabPanel>
                        <BodyContainer hasBackground = { true } className="ai-showcase-container">
                            <ShowcaseComponent
                                title="Stellarium Guide - Astronomer"
                                titleDescription={
                                    <>
                                        <p>
                                            This prompt creates a calm, knowledgeable astronomy guide with ten years of experience using Stellarium for telescope planning and sky observation. It's designed to help beginners feel confident navigating the software, referencing the official Stellarium PDF guide for step-by-step support. Ideal for users who want patient, plain-language help identifying planets, stars, and constellations without getting overwhelmed.
                                        </p>
                                    </>
                                }
                                prompt ={ StellariumGuidePrompt }
                                chatDescription={
                                    <>
                                        <p>
                                            Still needs testing example.
                                        </p>
                                    </>
                                }
                                link="https://chatgpt.com/g/g-68e93e6c08b88191b216b44eb0e5d8dc-stellarium-guide-calm-astronomer"
                                avatar={`${import.meta.env.BASE_URL}ai_avatars/stellarium.jpeg`}
                            />
                        </BodyContainer>
                    </TabPanel>          
                </Tabs>
            </div>
        </div>
    );
};

export default AIShowcase;


