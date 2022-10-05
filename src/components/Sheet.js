import React from 'react';
import Abilities from './Abilities/Abilities';
import ChannelDivinity from './ChannelDivinity';
import Defense from './Defense';
import Healer from './Healer';
import AttackSave from './Offense/AttackSave';
import SpellSlots from './Offense/SpellSlots';
import Weapons from './Offense/Weapons';
import Reusable from './Reusable';

export default function Sheet(props) {
  return (
    <div className="sheet">
      <div className="left">
        <Abilities />
      </div>
      <div className="middle">
        <AttackSave spell_modifier={4} proficiency={3} level={6} />
        <SpellSlots />
        <Weapons />
        <ChannelDivinity />
        <Reusable
          title={'Warding Flare'}
          body={`When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or
        misses. An attacker that can't be blinded is immune to this feature.
        Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you.`}
        />
        <Healer />
      </div>
      <div className="right">
        <Defense />

        <Reusable
          title="Ball Bearings"
          body={`As an action, you can spill these tiny metal balls from their pouch to cover a level area 10 feet square. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn't need to make the saving throw.`}
        />
        <Reusable
          title="Caltrops"
          body={`As an action, you can spread a single bag of caltrops to cover a 5-foot-square area. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving and take 1 piercing damage. Until the creature regains at least 1 hit point, its walking speed is reduced by 10 feet. A creature moving through the area at half speed doesn't need to make the saving throw.`}
        />
        <Reusable
          title="Portable Ram"
          body={`You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check.`}
        />
        <Reusable
          title="Crowbar"
          body={`Using a crowbar grants advantage to Strength checks where the crowbar's leverage can be applied.`}
        />
        <Reusable
          title="Manacles"
          body={`These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves' tools can pick the manacles' lock with a successful DC 15 Dexterity check. Manacles have 15 hit points.`}
        />
        <Reusable
          title="Hunting Trap"
          body={`When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long). A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature.`}
        />
      </div>
    </div>
  );
}
