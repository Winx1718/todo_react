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
    </section>
  );
}
