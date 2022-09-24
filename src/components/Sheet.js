import React from 'react';
import Defense from './Defense';
import AttackSave from './Offense/AttackSave';
import SpellSlots from './Offense/SpellSlots';
import Weapons from './Offense/Weapons';

export default function Sheet(props) {
  return (
    <div className="sheet">
      <AttackSave spell_modifier={4} proficiency={3} level={6} />
      <SpellSlots />
      <Defense />
      <Weapons />
    </div>
  );
}
