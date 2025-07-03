import React from 'react';
import { NavButton } from '../SharedComponents.jsx';
import monsters from './monsters.json';
import CharacterSheet from './statsheet';
import { BodyContainer } from '../SharedComponents';

function MonsterCompendium() {
  return (
    <div>
        <NavButton to="/dnd-simulator" label="← Return to Combat Simulator" />
        <BodyContainer hasBackground={ false } className="simulator-wrapper">
            <h2>Monster Compendium</h2>
            <div className="flex-wrap-center">
                {monsters.map((monster, index) => (
                <div key={index} style={{ margin: '10px' }}>
                    <CharacterSheet
                        character={ monster }
                        dispatch={() => {}}          // No-op function
                        isRealHero={ false }
                    />
                </div>
                ))}
            </div>
        </BodyContainer>
    </div>
  );
}

export default MonsterCompendium;
