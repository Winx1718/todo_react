import React from "react";
import CheckBox from "./CheckBox";
import TodoFilters from "./TodoFilters";

export default function TodoList(props) {
  return (
    <section className="todoList shadow">
      <ul>
        {props.todos.map(function (todos, index) {
          return (
            <li key={index}>
              <CheckBox check={todos.checked} item={todos.item} />
            </li>
          );
        })}
      </ul>
      <TodoFilters lenght={props.todos.length} />
    </section>
  );
}
