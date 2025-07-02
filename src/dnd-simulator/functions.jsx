import React, { useReducer } from "react";
import weapons from './weapons.json';
import monsters from './monsters.json';


export const hero = {
  name: "Hero",
  exp: 0,
  baseStats: {
    level: 1,
    strength: 0,
    constitution: 0,
    dexterity: 0,
    THACO: 20,
  },
  adjustments: {
    strength: 0,
    constitution: 0,
    dexterity: 0,
    hit: 0,
    damage: 0,
  },
  combat: {
    armorClass: 7,
    hitpoints: 20,
  },
  weapon: null,
  avatar: `DnD-avatars/hero.jpg`
};

export function calculateLevel(exp) {
  if (exp < 140) return 1;
  if (exp < 340) return 2;
  if (exp < 640) return 3;
  if (exp < 1040) return 4;
  if (exp < 1540) return 5;
  return 6; // cap or keep extending as needed
}

export function getHPColorClass(currentHP, maxHP) {
  if (!maxHP || maxHP <= 0) return ''; // avoid division by zero or bad data

  const hpPercentage = (currentHP / maxHP) * 100;

  if (hpPercentage >= 75) {
    return 'result-good'; // green
  } else if (hpPercentage < 35) {
    return 'result-bad'; // red
  } else {
    return 'result-warning'; // yellow
  }
}


//No longer used
export function AvatarTest() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {monsters.map((m, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <img
            src={ m.avatar }
            alt= {m.name }
            style={{ width: '100px', height: '100px', objectFit: 'cover', border: '1px solid #ccc' }}
          />
          <div>{ m.name }</div>
        </div>
      ))}
    </div>
  );
}


/***********************************************************************************/
/*                            Stat Generation Functions                            */
/***********************************************************************************/


//sets hitpoints based on constitution stat number.
export function getConstitutionAdjustment(con) {
  if (con === 1) return -3;
  if (con <= 3) return -2;
  if (con <= 6) return -1;
  if (con <= 14) return 0;
  if (con === 15) return 1;
  if (con === 16) return 2;
  if (con === 17) return 3;
  if (con === 18) return 4;
  if (con === 19) return 5;
  return 6; // 20
}
  
//sets Armorclass based on dexterity stat number.
export function getDexterityAdjustment(dex) {
  if (dex <= 2) return -5;
  if (dex === 3) return -4;
  if (dex === 4) return -3;
  if (dex === 5) return -2;
  if (dex === 6) return -1;
  if (dex <= 14) return 0;
  if (dex === 15) return 1;
  if (dex === 16) return 2;
  if (dex === 17) return 3;
  if (dex <= 19) return 4;
  return 5; // 20
}
  
//sets damage and hit adjustment based on strength stat number.
export function getStrengthAdjustment(str) {
  if (str === 1) return -4;
  if (str <= 3) return -3;
  if (str <= 5) return -2;
  if (str <= 7) return -1;
  if (str <= 16) return 0;
  if (str === 17) return 1;
  if (str === 18) return 2;
  if (str === 19) return 3;
  return 4; // 20
}
  
// Dice Roll (1-20) to set ability scores and adjustments
function rollStat() {
  return Math.floor(Math.random() * 20) + 1;
}

// New helper function to roll initiative (1d10, low roll goes first)
export function rollInitiative() {
  return Math.floor(Math.random() * 10) + 1;
}

/***********************************************************************************/
/*                        Character Generation Functions                           */
/***********************************************************************************/

export function generateCharacter(name = "Hero") {
  const strength = rollStat();
  const constitution = rollStat();
  const dexterity = rollStat();
  const baseSource = name === "Hero" ? hero : monster;
  const THACO = baseSource.baseStats?.THACO;

  const strengthAdjustment = getStrengthAdjustment(strength);
  const constitutionAdjustment = getConstitutionAdjustment(constitution);
  const dexterityAdjustment = getDexterityAdjustment(dexterity);
  const baseHP = (baseSource.combat?.hitpoints ?? 0) + constitutionAdjustment;
  

  return {
    name,
    baseStats: {
      level: baseSource.baseStats?.level ?? 1,
      strength,
      constitution,
      dexterity,
      THACO,
    },
    adjustments: {
      strength: strengthAdjustment,
      constitution: constitutionAdjustment,
      dexterity: dexterityAdjustment,
      hit: strengthAdjustment,
      damage: strengthAdjustment,
    },
    combat: {
      armorClass: (baseSource.combat?.armorClass ?? 10) - dexterityAdjustment,
      hitpoints: baseHP,
    },
    weapon: baseSource.weapon,
    avatar: baseSource.avatar,
    maxHitpoints: baseHP,
  };
}

const initialState = {
  hero: null,
  monster: null,
};

/***********************************************************************************/
/*                        Attack Roll Functions                                    */
/***********************************************************************************/

export function rollForHit(attacker, defender) {
  const attackAdjustment = attacker.adjustments?.hit || 0;
  const targetAC = defender.combat?.armorClass ?? 0;
  const THAC0 = attacker.baseStats?.THACO ?? 20;

  const numberToHit = THAC0 - attackAdjustment - targetAC;
  const roll = Math.floor(Math.random() * 20) + 1;

  return {
    hit: roll >= numberToHit,
    roll,
    target: numberToHit,
  };
}

//function to cause the attacker to hit themselves for 2 points of damage due to critical miss
//critical miss is a natural 1 on a 1D20 roll
export function applyCriticalMiss(attacker) {
  const currentHP = typeof attacker.combat?.hitpoints === 'number' ? attacker.combat.hitpoints : 0;
  const newHP = Math.max(0, currentHP - 2);

  return {
    ...attacker,
    combat: {
      ...attacker.combat,
      hitpoints: newHP
    },
    _lastDamage: 2,
    debugDamageCalc: `Critical Miss → You hurt yourself for 2 HP`
  };
}

export function applyDamage(defender, attacker, isCriticalHit = false) {
  const weaponName = attacker.weapon;
  const weapon = weapons.find(w => w.name === weaponName);

  if (!weapon) return defender; // fallback: weapon not found, do nothing

  const { dice, sides } = weapon.damage;
  const damageAdjustment = attacker.adjustments?.damage || 0;

  // Roll the damage dice
  let totalDamage = 0;
  const individualRolls = [];
  for (let i = 0; i < dice; i++) {
    const roll = Math.floor(Math.random() * sides) + 1;
    individualRolls.push(roll);
    totalDamage += roll;
  }

  totalDamage += damageAdjustment;

  //if the attack roll was a natural 20, rules apply double damage.
  if (isCriticalHit) {
    totalDamage *= 2;
  }

  // Don't let damage go below 0
  const adjustedDamage = Math.max(0, totalDamage);

  const currentHP = typeof defender.combat.hitpoints === 'number'
    ? defender.combat.hitpoints
    : 0;

  const newHP = Math.max(0, currentHP - adjustedDamage);

  //debug calculations to display everything to test systems.
  debugDamageCalc: `${ weapon.name } → rolled [${ individualRolls.join(', ')}] (${ dice }d${ sides }) + ${ damageAdjustment } = ${ adjustedDamage }`

  return {
    ...defender,
    combat: {
      ...defender.combat,
      hitpoints: newHP
    },
    _lastDamage: adjustedDamage, // for debug use
    debugDamageCalc: `${ weapon.name } → rolled [${ individualRolls.join(', ') }] (${ dice }d${ sides }) + ${ damageAdjustment } = ${ adjustedDamage }`
  };
}


