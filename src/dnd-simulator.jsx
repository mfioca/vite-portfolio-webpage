import React from 'react';
import Simulator from './dnd-simulator/DnDApp';
import './dnd-simulator/dnd.css';
import { IntroSection, DividerLine } from './SharedComponents';

const DndSimulator = () => {
  return (
    <div className="standard-padding-margin page-content">
        <IntroSection title="Welcome to the D&D Combat Simulator">
            <p><strong className="shadow">About This Web Page:</strong>&nbsp;&nbsp;
                This Dungeons & Dragons-inspired app is a turn-based combat simulator built in React, using a structured reducer for state management. It features two characters—a hero and a monster—each generated with randomized base stats (strength, dexterity, constitution), along with calculated adjustments for hit chance, damage, armor class, and hitpoints. These adjustments follow AD&D-style logic, with THAC0 used to determine hit thresholds.
            </p>
            <p>
                Combat follows an initiative system using a 1d10 roll, where the lower result acts first. Attacks are turn-based and resolved with a d20 roll compared against the calculated number needed to hit. Weapon data, including damage dice and type, is centralized in a weapons.json file, and damage rolls pull directly from this source. Hitpoints are reduced accordingly, and a winner is declared when one character reaches zero HP.
            </p>
            <p>
                The system tracks rounds, alternating turns, and manages state transitions automatically. Once both sides have attacked, the round increments, initiative resets, and combat continues. The UI displays all combat results in real time, including attack rolls, hit/miss results, and damage dealt. When a battle ends, attack buttons are disabled and a clear win message is shown.
            </p>
            <p>
                Combat logic is cleanly encapsulated into modular components, including a reusable CharacterCombatBlock and a coordinator CombatSummary that handles round flow. A debug section is included for real-time inspection of character data and logic output. The app is fully functional and now positioned for visual polish and presentation refinement.
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