import React from "react";

export default function Meaning(props) {
  console.log(props.data);
  return (
    <div className="Meaning">
      <h2 className=" ms-5 list-unstyled text-capitalize">
        {props.data.partOfSpeech}
      </h2>
      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {" "}
              <strong>{definition.definition}</strong>
              <br />
              {definition.example}
            </p>
          </div>
        );
      })}
    </div>
  );
}
