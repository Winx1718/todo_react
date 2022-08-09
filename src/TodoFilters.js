import React from "react";

export default function TodoFilters(props) {
  function clearAll(event) {
    let items = document.getElementsByClassName(".completed");
    console.log(items);
  }
  return (
    <div className="filters">
      <p>{props.length} items left</p>
      <form>
        <input type="button" value="All" />
        <input type="button" value="Active" />
        <input type="button" value="Completed" />
      </form>
      <button onClick={clearAll}>Clear Completed</button>
    </div>
  );
}
