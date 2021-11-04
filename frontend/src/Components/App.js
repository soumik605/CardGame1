import React from "react";
import { render } from "react-dom";
import Home from "./Home";

export const App = () => {
  const list = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ].sort(() => Math.random() - 0.5);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Home list={list} />
    </div>
  );
};

const appDiv = document.getElementById("app");
render(<App />, appDiv);
