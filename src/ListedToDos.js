import React from "react";
import check from "./img/icon-check.svg";
import cross from "./img/icon-cross.svg";

export default function ListedToDos(props) {
  console.log(props);
  return (
    <section className="todoList shadow">
      <div>
        {props.todos.map(function (todos, index) {
          return (
            <div className="listItems" key={index}>
              <button className="check">
                <img src={check}></img>
              </button>
              <p className="item">{todos.item}</p>
              <button className="cross">
                <img src={cross}></img>
              </button>
            </div>
          );
        })}
      </div>
      <span className="filters">
        <p>{props.todos.length} items left</p>
        <form>
          <input type="button" value="All" />
          <input type="button" value="Active" />
          <input type="button" value="Completed" />
        </form>
        <button>Clear Completed</button>
      </span>
    </section>
  );
}
