import React from 'react';
import Simulator from './dnd-simulator/DnDApp';
import './dnd-simulator/dnd.css';
import { IntroSection, DividerLine } from './SharedComponents';

const DndSimulator = () => {
  return (
    <div className="standard-padding-margin page-content">
        <IntroSection title="Welcome to the D&D Combat Simulator">
            <p><strong className="shadow">About This Web Page:</strong>&nbsp;&nbsp;
                This D&D-inspired combat simulator demonstrates modular system design, structured state management, and interaction logic in a React-based frontend. Built with a reducer-driven architecture, the app models turn-based combat between two characters—each dynamically generated with base stats and derived modifiers for attack, defense, and hitpoints.
            </p>
            <p>
                The mechanics are grounded in classic tabletop logic (THAC0, initiative rolls, damage dice), but abstracted into reusable functions and components. Weapon data and combat stats are externalized into structured JSON sources, allowing flexible expansion and clean separation of logic from content.
            </p>
            <p>
                Combat proceeds through initiative, alternating turns, and real-time state transitions. Actions are resolved through a central reducer, which manages rounds, turn control, damage application, and win conditions. The UI reflects combat flow step-by-step, with all calculations and outcomes surfaced in real time.
            </p>
            <p>
                From a development perspective, the project focuses on clarity, scalability, and maintainability—prioritizing logical structure over aesthetic polish. Components like <code>CharacterCombatBlock</code> and <code>CombatSummary</code> encapsulate flow control and data presentation cleanly. A dedicated debug panel exposes internal state for transparency and iterative testing.
            </p>
        </IntroSection>
        <div className="mobile-warning">
            ⚠️ Standard CSS and Mobile layout are still in development. For best experience, use a desktop or wider screen.
        </div>
        <DividerLine/>
        <Simulator />
    </div>
  );
};

export default DndSimulator;