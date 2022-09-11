import React from "react";
import Meaning from "./wordMeaning";

export default function WordDefinition(props) {
  if (props.data) {
    return (
      <div className="definition ">
        <h1 className="text-uppercase text-center mt-3">{props.data.word}</h1>{" "}
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning data={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
