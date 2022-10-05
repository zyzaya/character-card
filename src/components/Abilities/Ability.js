import React from 'react';
import '../../styles/Ability.css';
import Skill from './Skill';

export default function Ability(props) {
  return (
    <div className="ability">
      <div className="ability_values">
        <div className="ability_score"></div>
        <div className="ability_modifier"></div>
        <div className="ability_name">{props.name.toUpperCase()}</div>
      </div>
      <div className="skills">
        <Skill name="saving throws" save />
        <Skill name="Animal handling" />
      </div>
    </div>
  );
}
