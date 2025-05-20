import { useState, useEffect } from 'react';
import { rollForHit, applyDamage, applyCriticalMiss } from './functions';
import weapons from './weapons.json';
import { BorderBox, BodyContainer }from '../SharedComponents.jsx';


/* function created to test attack roll results
function rollForHit(attacker, defender) {
  const attackAdjustment = attacker.adjustments?.hit || 0;
  const targetAC = defender.combat?.armorClass ?? 0;
  const THAC0 = attacker.baseStats?.THACO ?? 20;

  const numberToHit = THAC0 - attackAdjustment - targetAC;
  const roll = 20; // hardcoded for critical miss testing

  return {
    hit: roll >= numberToHit,
    roll,
    target: numberToHit,
  };
}
*/

//Handles most of combat functions and calculations standardized so hero and monster can be plugged in.  
// reduces redundant code.
const CharacterCombatBlock = ({
  label,
  character,
  opponent,
  currentTurn,
  hasAttacked,
  dispatch,
  winner,
  result,
  setResult
}) => {
  if (!character || !character.combat) return null;

  const attackerAdjustment = character.adjustments?.hit || 0;
  const thaco = character.baseStats?.THACO ?? 20;
  const targetAC = opponent?.combat?.armorClass ?? 0;
  const numberToHit = thaco - attackerAdjustment - targetAC;

  const { hitpoints, armorClass } = character.combat;
  const weaponName = character.weapon;
  const weaponData = weapons.find(w => w.name === weaponName);

  const handleAttack = () => {
    const rollResult = rollForHit(character, opponent);
      setResult(rollResult);

      // Critical miss check
      if (rollResult.roll === 1) {
        const updatedSelf = applyCriticalMiss(character);
        const updateType = label === "Hero" ? 'GENERATE_HERO' : 'GENERATE_MONSTER';
        dispatch({ type: updateType, payload: updatedSelf });
      }

      else if (rollResult.hit) {
        const isCritical = rollResult.roll === 20;  //applies logic for a critical hit or natural 20
        const updatedTarget = applyDamage(opponent, character, isCritical);
        const updateType = label === "Hero" ? 'GENERATE_MONSTER' : 'GENERATE_HERO';
        dispatch({ type: updateType, payload: updatedTarget });

        if (updatedTarget.combat.hitpoints <= 0) {
          dispatch({ type: 'SET_WINNER', payload: label });
          return; // Prevent round from continuing
        }
      }

    const attackType = label === "Hero" ? 'HERO_ATTACKED' : 'MONSTER_ATTACKED';
    dispatch({ type: attackType });
  };

  return (
    <div className= "combat-table max-width box-background-standard standard-padding-margin-center">
      <h3>{ label }</h3>
      <p>Hitpoints: { hitpoints }</p>
      <p>Armor Class: { armorClass }</p>
      <p>Number to Hit: { numberToHit }</p>

    
      
        { label === "Hero" && character.weapon === null && (
          <p><strong>Reminder:</strong> Don't forget to equip a weapon.</p> // reminder to equip a weapon before attacking
        )}
        

        {!winner && 
          typeof currentTurn === 'string' && 
          currentTurn === label.toLowerCase() && 
          !hasAttacked && (
            <button onClick={handleAttack}>
              { label } Attacks
            </button>
        )}
        

        {result.roll && (
          <>
            <p>Attack Roll: { result.roll }</p>
            <p>Target: { result.target }</p>
            <p>Result: { result.hit ? "Hit" : "Miss" }</p>

            {/* SECTION FOR ADDITIONAL MESSAGES FOR CRITICAL MISS / CRITICAL HIT AND TOTAL DAMAGE DEALT */}
            { result.roll === 1 && (
              <p><strong>Critical Miss!</strong> You hurt yourself for 2 HP.</p>
            )}
            { result.roll === 20 && (
              <p><strong>Critical Hit!</strong> Damage was doubled.</p>
            )}
            { result.hit && opponent._lastDamage !== undefined && (
              <p>Damage Dealt: {opponent._lastDamage}</p>
            )}
          </>
        )}

        {weaponData && (
          <>
            <p>Weapon: { weaponData.name } ({ weaponData.type } )</p>
            <p>Damage: { weaponData.damage.dice }d{ weaponData.damage.sides }</p>
          </>
        )}
    
    </div>
  );
};



// base block to display the combat data.  
const CombatSummary = ({
  hero,
  monster,
  currentTurn,
  heroHasAttacked,
  monsterHasAttacked,
  dispatch,
  winner
}) => {
  const [heroResult, setHeroResult] = useState({});
  const [monsterResult, setMonsterResult] = useState({});

  useEffect(() => {
    if (!winner) {
      setHeroResult({});
      setMonsterResult({});
    }
  }, [winner]);

  return (
    <BorderBox  className="combat-summary-wrapper">
      <div className="combat-summary-row">
        <CharacterCombatBlock
          label="Hero"
          character={ hero }
          opponent={ monster }
          currentTurn={ currentTurn }
          hasAttacked={ heroHasAttacked }
          dispatch={ dispatch }
          winner={ winner }
          result={ heroResult }
          setResult={ setHeroResult }
        />
        <CharacterCombatBlock
          label="Monster"
          character={ monster }
          opponent={ hero }
          currentTurn={ currentTurn }
          hasAttacked={ monsterHasAttacked }
          dispatch={ dispatch }
          winner={ winner }
          result={ monsterResult }
          setResult={ setMonsterResult }
        />
      </div>
    </BorderBox>
  );
};

export default CombatSummary;