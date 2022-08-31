import React from "react";
import CheckBox from "./CheckBox";

export default function TodoList(props) {

  return (
    <section className="todoList">
      <ul>
        {props.todos.map(function (todos, index) {
          return (
            <li key={index}>
              <CheckBox check={todos.checked} item={todos.item} />
            </li>
          );
        })}
      </ul>
      <div className="filters">
        <p>items left</p>
        <form>
          <input type="button" value="All" />
          <input type="button" value="Active" />
          <input type="button" value="Completed" />
        </form>
        <button>Clear Completed</button>
      </div>
    </section>
  );
}
