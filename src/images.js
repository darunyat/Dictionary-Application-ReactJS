import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <section className="meaning p-3 ">
        <div className="  row">
          {props.images.map(function (images, index) {
            return (
              <div className=" col-3 mt-3" key={index}>
                <a href={images.src.original} target="_blank" rel="noreferrer">
                  <img src={images.src.portrait} className="img-fluid" alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
