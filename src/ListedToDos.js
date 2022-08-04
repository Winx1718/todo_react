import React from "react";

export default function ListedToDos(props) {
  console.log(props);
  return (
    <section>
      <div className="row">
        {props.todos.map(function (todos, index) {
          return (
            <div key={index}>
              <button></button>
              <p>{todos.item}</p>
            </div>
          );
        })}
      </div>
      <span className="row">
        <p>{props.todos.length} items left</p>
        <form>
          <input type="radio" value="All" />
          <input type="radio" value="Active" />
          <input type="radio" value="Completed" />
        </form>
        <button>Clear Completed</button>
      </span>
    </section>
  );
}
