import React from 'react';
import ChannelDivinity from './ChannelDivinity';
import Defense from './Defense';
import AttackSave from './Offense/AttackSave';
import SpellSlots from './Offense/SpellSlots';
import Weapons from './Offense/Weapons';
import Reusable from './Reusable';

export default function Sheet(props) {
  return (
    <div className="sheet">
      <AttackSave spell_modifier={4} proficiency={3} level={6} />
      <SpellSlots />
      <Defense />
      <Weapons />
      <Reusable
        title={'Warding Flare'}
        body={`When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or
        misses. An attacker that can't be blinded is immune to this feature.
        Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you.`}
      />
      <ChannelDivinity />
    </div>
  );
}
