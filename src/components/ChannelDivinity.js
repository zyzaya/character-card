import React from 'react';
import Reusable from './Reusable';
import '../styles/ChannelDivinity.css';

export default function ChannelDivinity(props) {
  return (
    <div className="channel_divinity">
      <div className="channel_divinity_title">Channel Divinity</div>
      <div className="channel_divinity_body">
        <Reusable
          title={'Turn Undead'}
          body={`As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage. 
          A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.`}
        />
        <Reusable
          title={'Radiance of the Dawn'}
          body={`As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected.`}
        />
      </div>
    </div>
  );
}
