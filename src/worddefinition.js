import React from "react";
import Meaning from "./wordMeaning";
import Phonetics from "./phonetics";
import "./worddefinition.css";
import "./App.css";
export default function WordDefinition(props) {
  if (props.data) {
    return (
      <div className="definition ">
        <section className="phonetics">
          <h1 className="text-uppercase text-center mt-3">{props.data.word}</h1>{" "}
          {props.data.phonetics.map(function (phonetics, index) {
            return (
              <div className="Phonetics" key={index}>
                <Phonetics phonetic={phonetics} />
              </div>
            );
          })}
        </section>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <section className="meaning ">
              <p key={index}>
                <Meaning data={meaning} />
              </p>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
