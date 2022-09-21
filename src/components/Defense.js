import React from 'react';

export default function Defense(props) {
  return (
    <div className="defense">
      <div className="ac">{`AC 14 (leather armor + shield)`}</div>
      <table>
        <tbody>
          <tr>
            <td>HP</td>
            <td className="max_health">39</td>
            <td className="current_health"></td>
          </tr>
          <tr>
            <td>Hit Dice</td>
            <td className="max_hitdie">6d8</td>
            <td className="current_hitdie">6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
