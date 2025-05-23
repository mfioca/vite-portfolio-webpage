import { useState, useEffect } from 'react';
import { applyDamage, applyCriticalMiss, getHPColorClass, rollForHit } from './functions';
import weapons from './weapons.json';
import { BorderBox, BodyContainer }from '../SharedComponents.jsx';


 /*function created to test attack roll results
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

  // added to track max hitpoints for conditional rendering of font color classnames
  const maxHP = character.maxHitpoints || character.combat?.hitpoints;
  const hpClass = getHPColorClass(character.combat.hitpoints, maxHP);

  const handleAttack = () => {
    const rollResult = rollForHit(character, opponent);
      setResult(rollResult);

      // Critical miss check
      if (rollResult.roll === 1) {
        const updatedSelf = applyCriticalMiss(character);
        const updateType = label === "Hero" ? 'GENERATE_HERO' : 'GENERATE_MONSTER';
        dispatch({ type: updateType, payload: updatedSelf });

        // ✅ Check for self-death
        if (updatedSelf.combat.hitpoints <= 0) {
          const winner = label === "Hero" ? "Monster" : "Hero";
          dispatch({ type: 'SET_WINNER', payload: winner });
          return; // stop further logic
        }
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
    <BodyContainer className= "combat-table section-height">
      <h3>{ label }</h3>
      {weaponData && (
          <>
            <p><strong>Weapon:</strong> { weaponData.name } ({ weaponData.type } ) //
            Damage: { weaponData.damage.dice }d{ weaponData.damage.sides }</p>
          </>
        )}
      <div >
        <table className="combat-table-centered-table">
          <tbody>
            <tr>
              <td>Hitpoints</td>
              <td>Armor Class</td>
              <td>Number to Hit</td>
            </tr>
            <tr>
              <td className={ hpClass }>{ hitpoints }</td>
              <td>{ armorClass }</td>
              <td>{ numberToHit }</td>
            </tr>
          </tbody>
        </table>
      </div>
      { label === "Hero" && character.weapon === null && (
        <p className="reminder-warning">Reminder: Don't forget to equip a weapon.</p> // reminder to equip a weapon before attacking
      )}
      <span className="button-slot">
      {!winner && 
        typeof currentTurn === 'string' && 
        currentTurn === label.toLowerCase() && 
        !hasAttacked && (
          <button 
            className="center-div center-margin button" 
            onClick={ handleAttack }
          >
            { label } Attacks
          </button>
      )}
      </span>
      {result.roll && (
        <div>
          <table className="combat-table-centered-table">
            <tbody>
              <tr>
                <td>Attack Roll</td>
                <td>Result</td>
                {result.hit && opponent._lastDamage !== undefined && <td>Damage Dealt</td>}
              </tr>
              <tr>
                <td>{ result.roll }</td>
                <td>
                  <span className={ result.hit ? 'result-hit' : 'result-miss' }>
                    { result.hit ? "Hit" : "Miss" }
                  </span>
                </td>
                {result.hit && opponent._lastDamage !== undefined && (
                  <td>{ opponent._lastDamage }</td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {/* SECTION FOR ADDITIONAL MESSAGES FOR CRITICAL MISS / CRITICAL HIT AND TOTAL DAMAGE DEALT */}
      { result.roll === 1 && (
        <p className="reminder-warning result-miss">Critical Miss! You hurt yourself for 2 HP.</p>
      )}
      { result.roll === 20 && (
        <p className="reminder-warning result-hit">Critical Hit! Damage was doubled.</p>
      )}
    </BodyContainer>
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
    <div className="combat-summary-wrapper flex-column">
      <div className="combat-summary-row flex-row-space-between  ">
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
    </div>
  );
};

export default CombatSummary;




/*
old version of the combat summary stat table
<div className="stat-block">
      <table >
        <tbody>
          <tr>
            <td>Hitpoints:</td>
            <td>{ hitpoints }</td>
          </tr>
          <tr>
            <td>Armor Class:</td>
            <td>{ armorClass }</td>
          </tr>
          <tr>
            <td>Number to Hit:</td>
            <td>{ numberToHit }</td>
          </tr>
        </tbody>
      </table>
    </div>
*/