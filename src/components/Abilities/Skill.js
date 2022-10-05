import React from 'react';
import '../../styles/Skill.css';

export default function Skill(props) {
  return (
    <div className="skill">
      <div
        className={`${props.save ? 'save_proficient' : 'skill_proficient'}`}
      ></div>
      <div className="skill_value"></div>
      <div className="skill_name">{props.name.toUpperCase()}</div>
    </div>
  );
}
