import React from 'react';
import Ability from './Ability';

export default function Abilities(props) {
  return (
    <div className="abilities">
      <Ability name="Strength" skills={['athletics']} />
      <Ability
        name="Dexterity"
        skills={['acrobatics', 'sleight of hand', 'stealth']}
      />
      <Ability name="Constitution" skills={[]} />
      <Ability
        name="intelligence"
        skills={['arcana', 'history', 'investigation', 'nature', 'religion']}
      />
      <Ability
        name="Wisdom"
        skills={[
          'animal handling',
          'insight',
          'medicine',
          'perception',
          'survival',
        ]}
      />
      <Ability
        name="charisma"
        skills={['deception', 'intimidation', 'performance', 'persuasion']}
      />
    </div>
  );
}
