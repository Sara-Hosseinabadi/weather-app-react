import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App ">
      <div className="container">
        <h1> weather app</h1>
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Sara Hosseinabadi and is{" "}
          <a
            href="https://github.com/Sara-Hosseinabadi/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
