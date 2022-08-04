import React, { useState } from "react";

export default function AddToDo() {
  let [newToDo, setNewToDO] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    console.log(newToDo);
  }
  function updateToDo(event) {
    setNewToDO(event.target.value);
  }
  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <input type="radio"/>
              <input type="text" onChange={updateToDo} className="todoTextBox" />
      </form>
    </div>
  );
}
