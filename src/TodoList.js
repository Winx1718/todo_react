import React from "react";
import CheckBox from "./CheckBox";

export default function TodoList(props) {
  function clearAll() {
    
  }

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
        <p>{props.length} items left</p>
        <form>
          <input type="button" value="All" />
          <input type="button" value="Active" />
          <input type="button" value="Completed" />
        </form>
        <button onClick={clearAll}>Clear Completed</button>
      </div>
    </section>
  );
}
