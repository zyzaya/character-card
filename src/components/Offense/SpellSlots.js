import React from 'react';
import '../../styles/SpellSlots.css';

export default function SpellSlots(props) {
  let slots = [4, 4, 3, 0, 0];
  return (
    <table className="spell_slots">
      <thead>
        <tr className="slot_row">
          <th className="slot_level">lvl</th>
          <th className="slot_max">slots</th>
          <th className="slot_remaining">remaining</th>
        </tr>
      </thead>
      <tbody>
        {slots.map((s, i) => {
          return (
            <tr key={i} className="slot_row">
              <td className="slot_level">{i + 1}</td>
              <td className="slot_max">{s}</td>
              <td className="slot_remaining"></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
