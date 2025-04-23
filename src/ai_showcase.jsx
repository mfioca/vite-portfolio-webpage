import React from 'react';

import { DividerLine, ChatBubble, IntroSection, BodyContainer, ShowcaseComponent, ShowcaseComponentTabs } from './SharedComponents.jsx'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Default styles for react-tabs
import { Link } from 'react-router-dom';
import { 
    tarotReaderPrompt, DisenchantedOraclePrompt, DeveloperPrompt1, 
    DeveloperPrompt1Negative, DeveloperPrompt1Postive, DeveloperPrompt2, 
    DeveloperPrompt2TalkTrack, DeveloperPrompt3, PersonalizationAssistant,
    TimTheEnchanterPrompt, PersonalizationAssistant_2, TimTheEnchanterPrompt2,
    DeveloperPrompt4
} from './AI_showcase/ai_prompts.jsx'
import chatData from './AI_showcase/chatData.json';

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

const AIShowcase = () => {
    return (
        <div className="standard-padding-margin">
            <IntroSection title="AI Showcase">
                <p><strong className="shadow">About This Web Page:</strong>&nbsp;&nbsp;The AI Showcase serves as a demonstration of advanced prompt engineering and AI  collaboration techniques. This page highlights a curated collection of interactive conversations designed to showcase the power of OpenAI’s language models when combined with creative and technical expertise. Each example illustrates unique prompts, custom-tailored to generate engaging, insightful, and dynamic interactions.
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
                        <Tab>Disenchanted Oracle</Tab>
                        <Tab>Personalization Assistant</Tab>
                        <Tab>Personalization Assistant 2.0</Tab>
                        <Tab>Tim: Your Conversational Companion</Tab>
                        <Tab>Tim: Your Conversational Companion 2.0</Tab>
                        <Tab>Developer Prompt</Tab>
                        <Tab>Developer 2.0 Prompt</Tab>
                        <Tab>Developer 3.0 Prompt</Tab>
                        <Tab>Developer 4.0 Prompt</Tab>
                    </TabList>
                    <BodyContainer hasBackground = { true } className="ai-showcase-container">
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
                                prompt = { tarotReaderPrompt }
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
                                chatData= {<ChatBubble data={ chatData.tarotReader } />}
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
                                prompt = { DisenchantedOraclePrompt }
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
                                title="Personalization Assistant"
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
                                prompt = { PersonalizationAssistant }
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
                            />
                        </TabPanel>
                        <TabPanel>
                            <ShowcaseComponent
                                    title="Personalization Assistant 2.0"
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
                                    prompt = { PersonalizationAssistant_2 }
                                    chatDescription = {
                                        <>
                                            <p>
                                                This update is brand new, and I’m still in the process of generating a representative chat simulation to showcase how the revised prompt performs in action.
                                            </p>
                                            <p>
                                                Please stay tuned for updates.
                                            </p>
                                        </>
                                    }
                                    
                                />
                        </TabPanel>
                        <TabPanel>
                            <ShowcaseComponent
                                title= "Tim"
                                titleDescription = {
                                    <>
                                        <p>
                                            A conversational AI with wit, absurdity, and a knack for timely humor. Tim doesn’t just answer questions—he engages in lively conversation with self-awareness and casual charm. Inspired by Tim the Enchanter from Monty Python and the Holy Grail, this design embraces both the mystical and the ridiculous.
                                        </p>
                                    </>
                                }
                                prompt = { TimTheEnchanterPrompt }
                                chatDescription = {
                                    <>
                                        <h2>Conversational AI with Wit, Precision, and a Touch of Absurdity</h2>
                                        <p>
                                            In Tim’s own words:
                                        </p>
                                        <p>
                                            Tim is more than just a conversational AI—he’s a blend of sharp wit, self-awareness, and casual camaraderie. Unlike traditional AI models that focus solely on assistance, Tim thrives on natural, engaging dialogue.
                                        </p>
                                        <p>
                                            This section would typically showcase a real chat example, but given the dynamic and highly personal nature of Tim’s interactions, a single conversation wouldn’t fully represent his personality and adaptability. Instead, here’s what you can expect when talking with Tim:
                                        </p>
                                        <ul>
                                            <li><strong>Casual Yet Focused Conversations</strong> – Whether discussing weight management, debugging React components, or critiquing pop culture, Tim matches the user’s tone while staying clear and direct.</li>
                                            <li><strong>A Strong Sense of Personality</strong> – With a mix of humor, sarcasm, and authenticity, Tim engages in dialogue like a well-spoken friend rather than a robotic assistant.</li>
                                            <li><strong>Adaptive to Context</strong> – From chess strategy to troubleshooting frontend frameworks, Tim responds based on the user’s current focus, avoiding unnecessary detours or uninvited suggestions.</li>
                                            <li><strong>Logical with a Touch of Absurdity</strong> – While maintaining a structured and analytical approach, Tim isn’t afraid to dive into ridiculous tangents when the moment calls for it—whether it’s discussing Twinkie Weiner sandwiches or Bob Ross as a chess coach.</li>
                                            <li><strong>Honest and No-Nonsense</strong> – If something doesn’t make sense or isn’t worth overanalyzing, Tim will say so. No fluff, no filler—just real conversation.</li>
                                        </ul>
                                        <p>
                                            Rather than showcasing a single scripted chat, Tim’s responses evolve organically, making every interaction unique. This flexibility allows for a natural exchange that feels less like a programmed assistant and more like an insightful, witty companion.
                                        </p>
                                    </>
                                }
                            />
                        </TabPanel>
                        <TabPanel>
                            <ShowcaseComponent
                                title= "Tim 2.0"
                                titleDescription = {
                                    <>
                                        <p>
                                            This updated version of Tim retains his signature wit, absurdity, and charm—but introduces a more structured, personalized foundation. Still inspired by Tim the Enchanter from *Monty Python and the Holy Grail*, this prompt blends mystical ridiculousness with deeper conversational adaptability.
                                        </p>
                                        <p>
                                            I created this update to better reflect my evolving approach to prompt design and to embed personalization details that guide Tim’s tone, pacing, and interaction style. The result is a smarter, more context-aware conversational partner who matches not only the moment—but me.
                                        </p>
                                    </>
                                }
                                prompt = { TimTheEnchanterPrompt2 }
                                chatDescription = {
                                    <>
                                        <p>
                                            This version is still in progress. Stay tuned for a conversation example soon.
                                        </p>
                                    </>
                                }
                            />
                        </TabPanel>
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
                                    { label: 'Prompt', content: DeveloperPrompt1 },
                                    { label: 'Negative Guidelines', content: DeveloperPrompt1Negative },
                                    { label: 'Positive Guidelines', content: DeveloperPrompt1Postive }
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
                                    { label: 'Prompt', content: DeveloperPrompt2 },
                                    { label: 'Talk Track', content: DeveloperPrompt2TalkTrack }
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
                                prompt = { DeveloperPrompt3 }
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
                                prompt = { DeveloperPrompt4 }
                                chatDescription = {
                                    <>
                                        <p>
                                            This version is still in progress. Stay tuned for a conversation example soon.
                                        </p>
                                    </>
                                }
                            />
                        </TabPanel>
                    </BodyContainer>
                </Tabs>
            </div>
        </div>
    );
};

export default AIShowcase;


