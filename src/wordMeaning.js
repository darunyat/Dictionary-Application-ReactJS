import React from "react";
import Synonyms from "./synonyms";
export default function Meaning(props) {
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
              <strong>Definition:</strong>
              {definition.definition}
              <br />
              <strong>Example:</strong>
              {definition.example}
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
