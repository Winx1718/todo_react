import React, { useState } from "react";
import ListedToDos from "./ListedToDos";

export default function AddToDo() {
  const [newToDo, setNewToDO] = useState(null);
  const [toDos, setToDos] = useState([
    { checked: false, item: "Jog around the park 3x" },
    { checked: false, item: "10 mins of mediation" },
    { checked: false, item: "Read for 1 hour" },
    { checked: false, item: "Pick up groceries" },
    { checked: false, item: "Complete Todo App on Frontend Mentor" },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    setToDos((toDos) => [...toDos, { checked: false, item: newToDo }]);
  }
  function updateToDo(event) {
    setNewToDO(event.target.value);
  }
  return (
    <div className="todoList">
      <div className="todo">
        <form onSubmit={handleSubmit}>
          <input type="radio" />
          <input type="text" onChange={updateToDo} className="todoTextBox" />
        </form>
      </div>
      <ListedToDos todos={toDos} />
    </div>
  );
}
