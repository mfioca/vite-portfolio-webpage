import React from 'react';
import { DividerLine, IntroSection } from './SharedComponents.jsx';  


const Home = () => {
    return (
        <div className="standard-padding-margin page-content">      
            <IntroSection title="Welcome to to my home page">
                <p>
                    This site is a collection of projects that reflect how I approach systems, workflows, and problem-solving.
                </p>
                <p>
                    I built it as a hands-on way to explore AI tools, data workflows, and front-end development while applying them to real use cases. The focus isn’t on visual design, but on building functional, structured solutions that make complex problems easier to understand and manage.
                </p>
                <p>
                    The projects here range from operational analysis and data visualization to AI-driven tools and long-form builds. Together, they demonstrate how I approach ambiguous problems, break them into manageable pieces, and build systems that work in practice.
                </p>
            </IntroSection>
            <DividerLine />
            <div className="base-max-width home-content">
            <h2 className="shadow" >Professional Profile</h2>
                <div className="home-container">
                    <p className="home-text">
                        With over 20 years across diverse industries, I bring a balanced blend of analytical rigor and collaborative leadership to every role.
                        Known for my precision, integrity, and dedication to detail, I’m deeply motivated by the potential for data-driven solutions to streamline
                        processes and support effective decision-making. My colleagues often describe me as adaptable and reliable, someone who can be counted on
                        for consistency and excellence, whether working independently or as part of a team. My work philosophy is grounded in integrity,
                        continuous learning, and a commitment to completing every task the right way.
                        <br/><br/>
                        My career has been marked by an ability to translate complex data into actionable insights, always with a focus on optimizing efficiency 
                        and compliance. I excel in developing custom reports, auditing data for accuracy, and implementing automated workflows that not only save 
                        time but also elevate standards of operational efficiency. From credentialing in healthcare to onboarding in tech, my experience with 
                        cross-functional teams has honed my problem-solving skills, and I’m passionate about finding creative, data-centered solutions that drive results.
                    </p>
                    <img 
                        src={`${import.meta.env.BASE_URL}image.png`} 
                        alt="Your Name" 
                        className="home-image" 
                    />
                </div>
                <p>
                    Driven by curiosity and a proactive approach to problem-solving, I thrive in environments that challenge me to adapt and learn. I am 
                    energized by the opportunity to support teams in achieving their goals, whether through data analytics, process improvements, or simply 
                    lending a hand where it’s needed. Above all, my work is defined by a dedication to integrity and the pursuit of excellence—a philosophy I bring 
                    to every project and team I work with.
                </p>
            </div>
        </div>
    );
};

export default Home;
