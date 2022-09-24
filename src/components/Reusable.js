import React from 'react';
import '../styles/Reusable.css';

export default function Reusable(props) {
  return (
    <div className="reusable">
      <div className="reusable_title">{props.title}</div>
      <div className="reusable_content">{props.body}</div>
    </div>
  );
}
