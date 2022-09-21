import React from 'react';
import AttackSave from './Offense/AttackSave';
import SpellSlots from './Offense/SpellSlots';

export default function Spells(props) {
  return (
    <div className="spells">
      <AttackSave spell_modifier={4} proficiency={3} level={6} />
      <SpellSlots />
    </div>
  );
}
