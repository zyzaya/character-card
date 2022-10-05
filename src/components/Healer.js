import React from 'react';
import '../styles/Healer.css';
// import '../styles/Reusable.css';

export default function Healer(props) {
  return (
    <div className="healer">
      <div className="healer_title reusable_title">Healer's Kit</div>
      <div className="healer_body">
        <div className="healer_info">
          <div className="healer_stabilize reusable_content">
            {
              "When you use a healer's kit to stabilize a dying creature, that creature also regains 1 hit point."
            }
          </div>
          <div className="healer_heal reusable_content">
            {
              "As an action, you can spend one use of a healer's kit to tend to a creature and restore 1d6 + 4 hit points to it, plus additional hit points equal to the creature's maximum number of Hit Dice. The creature can't regain hit points from this feat again until it finishes a short or long rest."
            }
          </div>
        </div>
        <div className="healer_uses">
          <div className="healer_effie">Effie</div>
          <div className="healer_engot">Engot</div>
          <div className="healer_ignatius">Ignatius</div>
          <div className="healer_thelai">Thelai</div>
          <div className="healer_serephina">Serephina</div>
        </div>
      </div>
    </div>
  );
}
