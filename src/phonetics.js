import React from "react";
import "./worddefinition.css";
export default function Phonetics(props) {
  return (
    <div className="audio mb-3">
      {props.phonetic.text}
      <br />
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    </div>
  );
}
