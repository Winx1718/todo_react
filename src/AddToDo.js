import React, { useState } from "react";
import ListedToDos from "./ListedToDos";
import check from "./img/icon-check.svg";

export default function AddToDo() {
  const [newToDo, setNewToDO] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [toDos, setToDos] = useState([
    { checked: false, item: "Jog around the park 3x" },
    { checked: false, item: "10 mins of mediation" },
    { checked: false, item: "Read for 1 hour" },
    { checked: false, item: "Pick up groceries" },
    { checked: false, item: "Complete Todo App on Frontend Mentor" },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    setToDos((toDos) => [...toDos, { checked: completed, item: newToDo }]);
  }
  function updateToDo(event) {
    setNewToDO(event.target.value);
  }
  function markTrue(event) {
    let text = document.querySelector(".todoTextBox");
    if (completed === false) {
      setCompleted(true);
      event.currentTarget.classList.add("checked");
      text.classList.add("completed");
    } else {
      setCompleted(false);
      event.currentTarget.classList.remove("checked");
      text.classList.remove("completed");
    }
  }
  return (
    <div>
      <div className="todo shadow">
        <button className="checkbox" onClick={markTrue}>
          <img src={check}></img>
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={updateToDo}
            className="todoTextBox"
            placeholder="Create a new todo"
          />
        </form>
      </div>
      <ListedToDos todos={toDos} />
    </div>
  );
}
