import React from "react";

export default function Phonetics(props) {
  return (
    <div>
      {props.phonetic.text}
      <br />
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    </div>
  );
}
