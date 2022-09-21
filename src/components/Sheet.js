import React from 'react';
import Weapons from './Offense/Weapons';
import Spells from './Spells';

export default function Sheet(props) {
  return (
    <div className="sheet">
      <Spells />
      <Weapons />
    </div>
  );
}
