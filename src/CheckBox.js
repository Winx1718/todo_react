import React from "react";
import check from "./img/icon-check.svg";
import cross from "./img/icon-cross.svg";

export default function CheckBox(props) {
  function markBox(event) {
    event.preventDefault();
    const listItem = event.target.parentElement;
    const item = event.target.nextElementSibling;

    item.classList.toggle("completed");
    listItem.classList.toggle("completed");
    event.currentTarget.classList.toggle("checked");
  }
  function removeItem(event) {
    const item = event.currentTarget.parentElement;
    item.remove();
  }
  if (props.check === true) {
    return (
      <div className="listItems completed">
        <button className="checkBox checked" onClick={markBox}>
          <img src={check} alt="Checkbox for completed items"></img>
        </button>
        <p className="item completed" id="item">
          {props.item}
        </p>
        <button className="cross" onClick={removeItem}>
          <img src={cross} alt="Cross to delete items"></img>
        </button>
      </div>
    );
  } else {
    return (
      <div className="listItems">
        <button className="checkBox" onClick={markBox}>
          <img src={check} alt="Checkbox for completed items"></img>
        </button>
        <p className="item" id="item">
          {props.item}
        </p>
        <button className="cross" onClick={removeItem}>
          <img src={cross} alt="Cross to delete items"></img>
        </button>
      </div>
    );
  }
}
