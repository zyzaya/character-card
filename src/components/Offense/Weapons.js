import React from 'react';

export default function Weapons(props) {
  return (
    <table className="weapons">
      <tbody>
        <tr className="weapon_row">
          <td className="weapon_name">Dagger</td>
          <td className="weapon_hit">{`+_`}</td>
          <td className="weapon_damage">{`1d4 + _ piercing (20/60ft)`}</td>
        </tr>
      </tbody>
    </table>
  );
}
