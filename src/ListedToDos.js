import React from "react";
import CheckBox from "./CheckBox";
import check from "./img/icon-check.svg";
import cross from "./img/icon-cross.svg";
import TodoFilters from "./TodoFilters";

export default function ListedToDos(props) {
  console.log(props);
  return (
    <section className="todoList shadow">
      <div>
        {props.todos.map(function (todos, index) {
            return (
              <div className="listItems" key={index}>
                <CheckBox check={todos.checked} /> 
                <p className="item">{todos.item}</p>
                <button className="cross">
                  <img src={cross}></img>
                </button>
              </div>
          );
        })}
      </div>
      <TodoFilters lenght={props.todos.length} />
    </section>
  );
}
