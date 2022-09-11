import React from "react";

export default function WordDefinition(props) {
  if (props.data) {
    return (
      <div className="definition mt- 5">
        <h1 className="text-uppercase">{props.data.word}</h1>
      </div>
    );
  } else {
    return <div>{null}</div>;
  }
}
