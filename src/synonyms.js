import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <span className="text-capitalize">
   

        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </span>
    );
  } else {
    return null;
  }
}
