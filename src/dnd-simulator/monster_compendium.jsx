import React from 'react';
import { Link } from 'react-router-dom';
import monsters from './monsters.json';
import CharacterSheet from './statsheet';
import { BodyContainer } from '../SharedComponents';

function MonsterCompendium() {
  return (
    <div>
        <button className="center-div center-margin button" type="submit">
            <Link 
                to="/dnd-simulator" 
                style={{
                    color: 'white',
                    textDecoration: 'none',
                }}>
                ← Return to Combat Simulator
            </Link>
        </button>
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
