import React from 'react';
import weapons from './weapons.json';
import { BorderBox } from '../SharedComponents.jsx';
import { getHPColorClass } from './functions';

const CharacterSheet = ({ character, dispatch, isRealHero }) => {
  const { name, baseStats, combat } = character;
  const hpClass = getHPColorClass(combat.hitpoints, character.maxHitpoints);

  return (
    <BorderBox className="section-height box-background-standard character-sheet-wrapper ">
      <h2>{ name }</h2>


<div className="avatar-stat-layout">
          <div className="avatar-slot">
              <img
                src={
                  character.avatar
                    ? `${ import.meta.env.BASE_URL }${ character.avatar }`
                    : `${ import.meta.env.BASE_URL }DnD-avatars/monster-placeholder.png`
                }
                alt={`${ character.name } Avatar`}
                className="character-avatar"
              />
            </div>
          <div className="stat-block">
            <table>
              <tbody>
                {Object.entries(baseStats).map(([key, value]) => (
                  <tr key={ `base-${key}` }>
                    <td>{ key.charAt(0).toUpperCase() + key.slice(1) }:</td>
                    <td>{ value }</td>
                  </tr>
                ))}
                {Object.entries(combat).map(([key, value]) => (
                  <tr key={ `combat-${key}` }>
                    <td>{ key.charAt(0).toUpperCase() + key.slice(1) }:</td>
                    <td>
                      {key === "hitpoints" && value === "Dead" ? (
                        <span>{ value }</span>
                      ) : key === "hitpoints" ? (
                        <span className={ hpClass }>{ value === 0 ? "Dead" : value }</span>
                      ) : (
                        value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
      </div>
  <div>
    {character.weapon ? (
      <h4>
        Weapon: { character.weapon } 
        {(() => {
          const weaponData = weapons.find(w => w.name === character.weapon);
          return weaponData ? ` (${ weaponData.damage.dice }d${ weaponData.damage.sides })` : '';
        })()}
      </h4>
    ) : (
      <h4>Weapon: Unarmed</h4>
    )}
  </div>
  {/* drop down list to select weapon for hero only */}
      {isRealHero && character.name === "Hero" && (
        <div className="weapon-section">
          <label htmlFor="weapon-select">Select Weapon:</label>
          <select
            id="weapon-select"
            value={ character.weapon }
            onChange={(e) => {
              const newWeapon = e.target.value;
              if (character.name === "Hero") {
                dispatch({ type: 'UPDATE_HERO_WEAPON', payload: newWeapon });
              }
            }}
          >
            {weapons.map((weapon) => (
              <option key={ weapon.name } value={ weapon.name }>
                { weapon.name } ({ weapon.damage.dice }d{ weapon.damage.sides })
              </option>
            ))}
          </select>
        </div>
      )}
  </BorderBox>
  );
};

export default CharacterSheet;





/*
            <div className="avatar-slot">
              <img
                src={
                  character.avatar
                    ? `${ import.meta.env.BASE_URL }${ character.avatar }`
                    : `${ import.meta.env.BASE_URL }DnD-avatars/monster-placeholder.png`
                }
                alt={`${ character.name } Avatar`}
                className="character-avatar"
              />
            </div>
            <div className="stat-block">
            <table>
              <tbody>
                {Object.entries(baseStats).map(([key, value]) => (
                  <tr key={ `base-${key}` }>
                    <td>{ key.charAt(0).toUpperCase() + key.slice(1) }:</td>
                    <td>{ value }</td>
                  </tr>
                ))}
                {Object.entries(combat).map(([key, value]) => (
                  <tr key={ `combat-${key}` }>
                    <td>{ key.charAt(0).toUpperCase() + key.slice(1) }:</td>
                    <td>
                      {key === "hitpoints" && value === "Dead" ? (
                        <span>{ value }</span>
                      ) : key === "hitpoints" ? (
                        <span className={ hpClass }>{ value === 0 ? "Dead" : value }</span>
                      ) : (
                        value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          */