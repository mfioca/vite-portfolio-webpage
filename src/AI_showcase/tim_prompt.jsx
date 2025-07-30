import React from 'react';

import { BodyContainer } from '../SharedComponents.jsx';
import { ChatBubble, ShowcaseComponent, ShowcaseComponentTabs } from './ai_showcase_components.jsx';
import './ai_showcase.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 


import * as prompts from './ai_prompts.jsx';
import chatData from './chatData.json';

const TimPrompt = () => {
    return (
        <div className="standard-padding-margin">
            <Tabs className="vertical-tabs">
                <div className="vertical-tabs-layout">
                    <TabList>
                        <Tab>Tim 1.0</Tab>
                        <Tab>Tim 2.0</Tab>
                    </TabList>
                    <BodyContainer hasBackground = { true } className="vertical-tab-content">
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
                                prompt = { prompts.TimTheEnchanterPrompt }
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
                                prompt = { prompts.TimTheEnchanterPrompt2 }
                                chatDescription = {
                                    <>
                                        <p>
                                            This conversation was captured during a live preview while updating Tim’s prompt within the MyGPT editor. It served as a quick vibe check to test tone, pacing, and the personality alignment of the revised configuration.
                                        </p>
                                        <p>
                                            The exchange showcases Tim’s signature mix of wit, absurdity, and honest reflection—exactly the traits the updated prompt aimed to reinforce.
                                        </p>
                                    </>
                                }
                                chatData={ <ChatBubble data={ chatData.timTheEnchanter2 } /> }
                            />
                        </TabPanel>
                    </BodyContainer>
                </div>
            </Tabs>
        </div>
    );
};

export default TimPrompt;