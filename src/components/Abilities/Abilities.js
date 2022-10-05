import React from 'react';
import Ability from './Ability';

export default function Abilities(props) {
  return (
    <div className="abilities">
      <Ability name="Constitution" score={10} />
    </div>
  );
}
