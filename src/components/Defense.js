import React from 'react';
import '../styles/Defense.css';

export default function Defense(props) {
  return (
    <div className="defense">
      <div className="ac">AC</div>
      <table className="health">
        <tbody>
          <tr className="hitpoints">
            <td className="defense_title">HP</td>
            <td className="max_health"></td>
            <td className="current_health"></td>
          </tr>
          <tr>
            <td></td>
            <td className="spacing"></td>
          </tr>
          <tr className="hitdie">
            <td className="defense_title">HD</td>
            <td className="max_hitdie">_d8</td>
            <td className="current_hitdie"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
