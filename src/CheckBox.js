import React from "react";
import check from "./img/icon-check.svg";

export default function CheckBox(props) {
  function markBox(event) {
    event.currentTarget.classList.toggle("checked");
  }
  if (props.check === true) {
    return (
      <button className="checkBox checked" onClick={markBox}>
        <img src={check}></img>
      </button>
    );
  } else {
    return (
      <button className="checkBox" onClick={markBox}>
        <img src={check}></img>
      </button>
    );
  }
}
