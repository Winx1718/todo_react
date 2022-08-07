import React from "react";

export default function TodoFilters(props) {
    return (
      <div className="filters">
        <p>{props.length} items left</p>
        <form>
          <input type="button" value="All" />
          <input type="button" value="Active" />
          <input type="button" value="Completed" />
        </form>
        <button>Clear Completed</button>
      </div>
    );
}