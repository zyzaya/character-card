import React from 'react';
import '../../styles/AttackSave.css';

export default function AttackSave(props) {
  let to_hit = props.proficiency + props.spell_modifier;
  let save = 8 + to_hit;
  let prepared = props.spell_modifier + props.level;

  return (
    <div className="attack_save">
      {`+ ${to_hit} to hit, save DC ${save}, WIS + LVL prepared (${prepared})`}
    </div>
  );
}
