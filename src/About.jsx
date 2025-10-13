import React, { useState, useEffect } from 'react';
import './About.css'; 
import { DividerLine, IntroSection, BodyContainer } from './SharedComponents';
import { Link } from 'react-router-dom';

/*******************************************************************/
/*                  Scrolling quote section                        */
/*******************************************************************/

const quotes = [
    {
        text: "If life is going to exist in a Universe of this size, then the one thing it cannot afford to have is a sense of proportion.",
        source: "- The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "You cannot see what I see because you see what you see. you cannot know what I know because you know what you know. What I see and what I know cannot be added to what you see and what you know because they are not of the same kind. Neither can it replace what you see and what you know, because that would be to replace yourself.",
        source: "- The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "We also live in strange places: each in a universe of our own. The people with whom we populate our universes are the shadows of whole other universes intersecting with our own.",
        source: "- The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "The mind can go either direction under stress - toward positive or toward negative: on or off. Think of it as a spectrum whose extremes are unconsciousness at the negative end and hyperconsciousness at the positive end. The way the mind will lean under stress is strongly influenced by training.",
        source: "- Dune"
    },
    {
        text: "It occured to her that mercy was the ability to stop, if only for a moment. There was no mercy where there could be no stopping.",
        source: "- Dune"
    },
    {
        text: "The mystery of life isn't a problem to solve, but a reality to experience.",
        source: "- Dune"
    },
    {
        text: "The most persistent principles of the universe were accident and error.",
        source: "- Dune"
    },
    {
        text: "I learned this, at least, by my experiment: that if one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.",
        source: "- Henry David Thoreau, Walden: Or, Life in the Woods"
    }
];

const ScrollingQuotes = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 40000); 
        return () => clearInterval(intervalId);
    }, []);

    return (
        <BodyContainer hasBackground={ true } className="center-div scrolling-quotes">
            <p 
                key={ currentQuoteIndex } 
                className="quote-text show"
            >
                { quotes[currentQuoteIndex].text }
            </p>
            <p 
                key={ currentQuoteIndex + '-src' } 
                className="quote-source show"
            >
                { quotes[currentQuoteIndex].source }
            </p>
        </BodyContainer>
    );
};

/*******************************************************************/
/*                  Feature Panel component                        */
/*******************************************************************/

const FeaturePanel = ({ title, image, children, reverse }) => {
    return (
        <section className={`feature-panel ${reverse ? 'reverse' : ''}`}>
            <div className="feature-text">
                <h2>{ title }</h2>
                { children }
            </div>
            {image && (
                <div className="feature-image">
                    <img 
                        src={`${import.meta.env.BASE_URL}/${image}`} 
                        alt={ title } 
                    />
                </div>
            )}
        </section>
    );
};

/*******************************************************************/
/*                  Main Component                                 */
/*******************************************************************/

const About = () => {
    return (
        <div className="standard-padding-margin page-content">
            <IntroSection title="Welcome to My Story">
                <p><strong className="shadow">About This Web Page:</strong>&nbsp;&nbsp;
                    This page is a window into who I am—my passions, skills, and philosophies. Whether it’s through my projects, gaming insights, 
                    or the creative journeys I’ve embarked on, you’ll find the threads that connect my curiosity, dedication, and love for building 
                    meaningful experiences. Dive in to learn more!
                </p>
            </IntroSection>
            <DividerLine />
            <ScrollingQuotes />
            <FeaturePanel
                title="About Me"
                image="/professional_headshot.png"
            >
                <p>
                    Hello! I&apos;m a passionate creator who thrives on challenges and revels in the art of building intricate virtual worlds. 
                    Whether I&apos;m reconstructing the majestic city of Whiterun in <i>Minecraft</i> or delving into the complexities of data analytics, 
                    my approach is always methodical yet imaginative. With a knack for detail, I often find myself lost in the enchanting process 
                    of transforming mere ideas into tangible structures, both in the digital realm and beyond.
                </p>
                <p>
                    Much like a Mentat from the book <em>Dune</em>, I have the ability to connect seemingly unrelated dots like a complex web of interconnected 
                    processes. This analytical prowess allows me to identify patterns, solve problems, and innovate creatively. 
                    With a penchant for humor, I approach projects and collaborations with a touch of levity, believing that a little laughter can go a 
                    long way in fostering productive interactions.
                </p>
                <p>
                    My journey reflects a commitment to continuous improvement and exploration, where each project completed fuels my motivation to keep pushing 
                    boundaries. With each new build, whether it&apos;s a complex data visualization or an elaborate <i>Minecraft</i> realm, I enjoy building new things 
                    and seeing the results of my efforts. I believe in the power of curiosity and innovation, and I approach each endeavor with a spirit of adventure 
                    and a touch of humor, ready to tackle whatever comes next!
                </p>
            </FeaturePanel>
            <FeaturePanel
                title="Developer Learning Projects"
                image="/image2.png"
                reverse
            >
                <p>
                    I’ve always learned by doing — throwing myself into projects that force me to adapt quickly and master new skills. 
                    What began as experiments with custom interfaces and dashboards grew into larger challenges: building data visualizations 
                    from scratch, coding simulators, and learning new frameworks on the fly. Along the way, I discovered how to collaborate 
                    with AI tools like ChatGPT — using them not as shortcuts, but as partners to accelerate problem-solving, troubleshoot code, 
                    and push projects further than I could alone. These experiences taught me not just the syntax of a language or the quirks 
                    of a framework, but how to stay adaptable, think creatively, and continually expand my toolkit.
                </p>
            </FeaturePanel>
            <FeaturePanel
                title="Computers and UI Design"
                image="/skyrim_theme.jpg"
            >
                <p>
                    My journey into UI design began with exploring Rainmeter, a powerful customization platform. Through extensive work with .ini and .inc files, 
                    I developed a highly intricate custom UI theme, featuring advanced widgets and a centralized setup tool that controls nearly all variables. 
                    This setup spans almost 10,000 lines of meticulously crafted code, showcasing my ability to create cohesive, functional, dynamic, 
                    and visually compelling interfaces. The theme was uploaded to DeviantArt, where it received over 500 downloads within a few months 
                    and is available&nbsp;
                    <a href="https://www.deviantart.com/franknmullet/art/Skyrim-Theme-1-0-651760185" target="_blank" rel="noopener noreferrer" className="text-body">
                        available here
                    </a>.
                </p>
            </FeaturePanel>
            <FeaturePanel
                title="My Gaming Philosophy"
                image="/gaming1.jpg"
                reverse
            >
                <p>
                    With a discerning approach to gaming, I am drawn to titles that offer depth, narrative complexity, and rewarding challenges. 
                    I have a strong preference for games that balance storytelling with well-executed mechanics, favoring immersive experiences 
                    that avoid unnecessary handholding while respecting player direction. My interests span a range of genres—from atmospheric 
                    horror to RPG and stealth—but my passion for tactical and strategic elements shines through. Whether it’s the precise combat 
                    mechanics in <i>Elden Ring</i>, the immersive storytelling of <i>Cyberpunk 2077</i>, or the methodical pace found in classics like <i>Thief</i>, 
                    I appreciate games that prioritize authentic gameplay.
                </p>
                <p>
                    I value titles that retain depth without overcomplicating mechanics, reflecting my thoughtful gaming philosophy. I enjoy games 
                    that invite careful observation and experimentation, embracing those that reward calculated, immersive play rather than fast-paced 
                    or repetitive elements. As a skilled player with the patience for tactical growth, I excel in games where a measured approach 
                    and attention to detail lead to richer, more fulfilling experiences. Whether navigating complex puzzles, adapting to nuanced 
                    combat, or exploring intricately designed worlds, my gameplay is both intentional and immersive, capturing the essence of a 
                    true strategist and storyteller.
                </p>
            </FeaturePanel>
            <FeaturePanel
                title="Whiterun in Minecraft: A Year and a Half in the Making"
                image="/minecraft_whiterun.png"
            >
                <p>
                    As a fan of The <i>Elder Scrolls V: Skyrim</i>, I took on the challenge of recreating the iconic town of Whiterun in <i>Minecraft</i>. This project 
                    took about a year and a half to complete, during which I ran both games simultaneously. Using my Skyrim character, I studied the scale, 
                    architectural details, and other nuances to ensure an accurate representation in the <i>Minecraft</i> version.
                </p>
                <p>
                    This project highlights my ability to approach challenges with precision, patience, and thorough planning. By meticulously studying the scale 
                    and design of Whiterun and translating it into <i>Minecraft</i>, I honed skills such as attention to detail, spatial awareness, and creative problem-solving. 
                    The process required persistence and the ability to adapt, as I constantly refined my work to match the original design. These traits—along with my passion 
                    for tackling complex tasks—reflect how I approach professional challenges, striving for accuracy and excellence in every detail.
                </p>
                <Link to="/MinecraftProjects" className="feature-link">
                    View the Full Minecraft Project →
                </Link>
            </FeaturePanel>
        </div>
    );
};

export default About;