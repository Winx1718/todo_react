import React from "react";
import moon from "./img/icon-moon.svg";
import sun from "./img/icon-sun.svg";
import "./title.css";

export default function Title() {
  return (
    <div className="title">
      <h1>TODO</h1>
      <button>
        <img src={moon} alt="moon icon to apply dark mode" />
        <img src={sun} alt="sun icon to apply light mode" />
      </button>
    </div>
  );
}
