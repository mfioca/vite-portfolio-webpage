import { useReducer } from 'react';
import weapons from './weapons.json';
import monsters from './monsters.json';
import CharacterSheet from './statsheet';
import CombatSummary from './CombatSummary';
import { hero, generateCharacter, rollInitiative, calculateLevel } from './functions';
import { BodyContainer, BorderBox } from '../SharedComponents.jsx';


const initialState = {
  hero: null,
  heroWins: 0,
  monster: null,
  heroInitiative: null,
  monsterInitiative: null,
  currentTurn: null,
  round: 1,
  heroHasAttacked: false,
  monsterHasAttacked: false,
  winner: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'GENERATE_HERO':
      return { 
        ...state, 
        hero: {
          ...action.payload,
          exp: state.hero?.exp || 0,
          baseStats: {
            ...action.payload.baseStats,
            level: state.hero?.baseStats?.level || 1
          }
        }
      };

    case 'GENERATE_MONSTER':
      return { ...state, monster: action.payload };
    
    case 'UPDATE_HERO_WEAPON':
      if (!state.hero) return state; // ignore if hero hasn't been created yet

      return {
        ...state,
        hero: {
          ...state.hero,
          weapon: action.payload
        }
      };

    case 'ROLL_INITIATIVE': {
      const heroRoll = rollInitiative();
      const monsterRoll = rollInitiative();
      const currentTurn = heroRoll <= monsterRoll ? 'hero' : 'monster';
      return {
        ...state,
        heroInitiative: heroRoll,
        monsterInitiative: monsterRoll,
        currentTurn,
      };
    }

    case 'HERO_ATTACKED': {
      const monsterHasAlreadyAttacked = state.monsterHasAttacked;
      const advancingRound = monsterHasAlreadyAttacked;

      return {
        ...state,
        currentTurn: advancingRound ? null : 'monster',
        round: advancingRound ? state.round + 1 : state.round,
        heroInitiative: advancingRound ? null : state.heroInitiative,
        monsterInitiative: advancingRound ? null : state.monsterInitiative,
        heroHasAttacked: advancingRound ? false : true,
        monsterHasAttacked: advancingRound ? false : state.monsterHasAttacked,
      };
    }

    case 'MONSTER_ATTACKED': {
      const heroHasAlreadyAttacked = state.heroHasAttacked;
      const advancingRound = heroHasAlreadyAttacked;

      return {
        ...state,
        currentTurn: advancingRound ? null : 'hero',
        round: advancingRound ? state.round + 1 : state.round,
        heroInitiative: advancingRound ? null : state.heroInitiative,
        monsterInitiative: advancingRound ? null : state.monsterInitiative,
        heroHasAttacked: advancingRound ? false : state.heroHasAttacked,
        monsterHasAttacked: advancingRound ? false : true,
      };
    }

    case 'SET_WINNER':
      return {
        ...state,
        winner: action.payload,
        heroWins: action.payload === 'Hero' ? state.heroWins + 1 : state.heroWins
      };

      case 'APPLY_EXP_GAIN': {
        if (!state.hero || !action.payload) return state;

        const newExp = state.hero.exp + action.payload;
        const newLevel = calculateLevel(newExp);

        return {
          ...state,
          hero: {
            ...state.hero,
            exp: newExp,
            baseStats: {
              ...state.hero.baseStats,
              level: newLevel
            }
          }
        };
      }
    
    case 'RESET_FOR_NEW_MONSTER':
      return {
        ...state,
        winner: null,
        currentTurn: null,
        heroHasAttacked: false,
        monsterHasAttacked: false,
        heroInitiative: null,
        monsterInitiative: null,
        round: 1
      };
    
    default:
      return state;
  }
}

function Simulator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleGenerateHero = () => {
    const newHero = generateCharacter("Hero");
    dispatch({ type: 'GENERATE_HERO', payload: newHero });
  };

  //generates a random monster from the monster list in monsters.json.  
  //also takes into account of the hero level.
  const handleGenerateMonster = () => {
    if (!state.hero) return;

    const heroLevel = state.hero.baseStats?.level || 1;
    const levelMatchedMonsters = monsters.filter(m => m.baseStats?.level === heroLevel);

    if (levelMatchedMonsters.length === 0) return;

    const selected = levelMatchedMonsters[Math.floor(Math.random() * levelMatchedMonsters.length)];
    dispatch({ type: 'GENERATE_MONSTER', payload: selected });
    dispatch({ type: 'RESET_FOR_NEW_MONSTER' }); // handles resetting everything once hero wins
  };

  const handleRollInitiative = () => {
    dispatch({ type: 'ROLL_INITIATIVE' });
  };

  return (
    <BodyContainer hasBackground = { false } >
      <div className="flex-column character-layout-wrapper">
        <div className="flex-row-space-between gap-20">
          <div className="button-slot">
          {/*   Button to generate hero stats  */}
            { !state.hero && 
              <button 
                className="center-div center-margin button" 
                onClick={ handleGenerateHero } 
              >
                Generate Hero
              </button> 
            }
          </div>
          <div className="button-slot">
            {/* 
              This button triggers after hero is generated,when there is no monster 
              generated and the hero has won the battle to continue fighting
            */}
            { state.hero && (!state.monster || state.winner === "Hero") && (
              <button 
                className="center-div center-margin button" 
                onClick={ handleGenerateMonster }
              >
                Generate Monster
              </button>
            )}
          </div>
        </div>
        <div className="flex-row-space-between gap-20">
          <CharacterSheet 
            character={ state.hero || hero }
            dispatch={ dispatch }
            isRealHero={ !!state.hero }
          />
          
            <BorderBox className="section-height box-background-standard standard-margin initiative">
            <div className="button-slot">
              { 
                !state.winner && !state.currentTurn && state.hero && state.monster && (
                  <button 
                    className="center-div center-margin button" 
                    onClick={handleRollInitiative}
                  >
                    Roll Initiative
                  </button>
                )
              }
            </div>
            <h4>Initiative Results</h4>
            <p>Round: { state.round }</p>
            <p>Hero Initiative: { state.heroInitiative ?? 0 }</p>
            <p>Monster Initiative: { state.monsterInitiative ?? 0 }</p>
            <p>Current Turn: { state.currentTurn ? (state.currentTurn === 'hero' ? 'Hero' : 'Monster') : '' }</p>
            <p>Hero Win streak: { state.heroWins }</p>
          </BorderBox>
          <CharacterSheet character={state.monster || 
            { 
              name: 'Monster', baseStats: { strength: 0, constitution: 0, dexterity: 0, THACO: 0 }, 
              combat: { armorClass: 0, hitpoints: 0 },
              weapon: "Unarmed"
            }}
            dispatch={ dispatch } 
            isRealHero={ false }
          />
        </div>
      </div>
      <BorderBox >
        { state.winner && (
          <div >
            <h2 className={ state.winner === 'Hero' ? 'result-hit' : 'result-miss' }>
              { state.winner } wins the battle!
            </h2>
          </div>
        )}
      </BorderBox>
{/*           COMBAT SECTION              */}
      <div>
        <CombatSummary 
          hero={ state.hero || { combat: { hitpoints: 0, armorClass: 0 } } }
          monster={ state.monster || { combat: { hitpoints: 0, armorClass: 0 } } }
          currentTurn={ state.currentTurn }
          heroHasAttacked={ state.heroHasAttacked }
          monsterHasAttacked={ state.monsterHasAttacked }
          dispatch={ dispatch }
          winner={ state.winner }
        />
      </div>  
{/*           DEBUG SECTION              */}
      <div>
        <h1><p>debug section</p></h1>
        {state.hero && (
          <div>
            <h4>Debug: Hero Data</h4>
            <pre>
              {JSON.stringify({
                ...state.hero,
                weaponStats: weapons.find(w => w.name === state.hero?.weapon)
              }, null, 2)}
            </pre>
          </div>
        )}
        {state.monster && (
          <div>
            <h4>Debug: Monster Data</h4>
            <pre>{ JSON.stringify(state.monster, null, 2) }</pre>
          </div>
        )}
      </div>
  </BodyContainer>
  );
}

export default Simulator;



/*

      <div>
        <h1><p>debug section</p></h1>

        {state.hero && (
          <div>
            <h4>Debug: Hero Data</h4>
            <pre>
              {JSON.stringify({
                ...state.hero,
                weaponStats: weapons.find(w => w.name === state.hero?.weapon)
              }, null, 2)}
            </pre>
          </div>
        )}
        {state.monster && (
          <div>
            <h4>Debug: Monster Data</h4>
            <pre>{ JSON.stringify(state.monster, null, 2) }</pre>
          </div>
        )}
      </div>
*/