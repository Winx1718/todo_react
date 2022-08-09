import React from "react";
import check from "./img/icon-check.svg";
import cross from "./img/icon-cross.svg";

export default function CheckBox(props) {
  function markBox(event) {
    let item = event.target.nextElementSibling;
    event.currentTarget.classList.toggle("completed");
    item.classList.toggle("completed");
  }
  if (props.check === true) {
    return (
      <div className="listItems">
        <button className="checkBox completed" onClick={markBox}>
          <img src={check}></img>
        </button>
        <p className="item completed" id="item">
          {props.item}
        </p>
        <button className="cross">
          <img src={cross}></img>
        </button>
      </div>
    );
  } else {
    return (
      <div className="listItems">
        <button className="checkBox" onClick={markBox}>
          <img src={check}></img>
        </button>
        <p className="item" id="item">
          {props.item}
        </p>
        <button className="cross">
          <img src={cross}></img>
        </button>
      </div>
    );
  }
}
