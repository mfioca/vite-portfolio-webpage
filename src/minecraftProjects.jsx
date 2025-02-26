import React from 'react';
import WhiterunProject from './minecraft_project/whiteruncity';
import { BodyContainer, IntroSection, DividerLine } from './SharedComponents';

const MinecraftProjects = () => {
    return (
        <BodyContainer className="minecraft-projects">
            <IntroSection title="Minecraft Projects">
                <p>
                    This section showcases my various Minecraft builds, including detailed recreations of iconic locations.
                    Each project represents months of effort, capturing architectural and environmental details as accurately as possible.
                </p>
            </IntroSection>
            <DividerLine />
            
            {/* Whiterun Project */}
            <WhiterunProject />
            
            {/* Additional Minecraft projects can be added below */}
        </BodyContainer>
    );
};

export default MinecraftProjects;