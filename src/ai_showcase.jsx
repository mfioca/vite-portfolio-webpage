import React from 'react';
import './ai_showcase.css';
import { DividerLine, IntroSection } from './SharedComponents.jsx'; 
import TarotReader1 from './AI_showcase/tarot_reader_1.jsx';
import Developer from './AI_showcase/developer.jsx';
import DeveloperV2 from './AI_showcase/developer_2.0.jsx'
import DisenchantedOracle from './AI_showcase/disenchanted_oracle.jsx'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Default styles for react-tabs

const AIShowcase = () => {
    return (
        <div className="ai-body">
            <IntroSection title="AI Showcase">
                <p><strong className="shadow">About This Web Page:</strong>&nbsp;&nbsp;The AI Showcase serves as a demonstration of advanced prompt engineering and AI collaboration 
                    techniques. This page highlights a curated collection of interactive conversations designed to showcase the power of OpenAI’s language models when combined with 
                    creative and technical expertise. Each example illustrates unique prompts, custom-tailored to generate engaging, insightful, and dynamic interactions.
                </p>
                <p>
                    By exploring this page, you’ll gain insight into how carefully crafted prompts can shape AI behavior, enabling applications in storytelling, education, 
                    decision support, and more. The AI Showcase is not just a testament to the potential of AI but also a reflection of the innovative approaches used to push 
                    its boundaries.
                </p>
            </IntroSection>
            <DividerLine />
            <div className="box-background border ai-showcase-container">
                <Tabs>
                    <TabList>
                        <Tab>Tarot Reader / Salesman</Tab>
                        <Tab>Disenchanted Oracle</Tab>
                        <Tab>Developer Prompt</Tab>
                        <Tab>Developer 2.0 Prompt</Tab>
                    </TabList>
                    <TabPanel>
                        <TarotReader1 />
                    </TabPanel>
                    <TabPanel>
                        <DisenchantedOracle />
                    </TabPanel>
                    <TabPanel>
                        <Developer />
                    </TabPanel>
                    <TabPanel>
                        <DeveloperV2 />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default AIShowcase;
