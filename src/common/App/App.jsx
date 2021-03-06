import { hot } from "react-hot-loader/root";
import React, { useState } from "react";

import HelloMessage from "../components/Workout";

import cls from "./App.css";

export function App() {
  const [text, setText] = useState("Hello, World!");

  return (
    <div>
      <HelloMessage />
      <h1 className={cls.title} data-testid="title">
        {text}
      </h1>
      <button onClick={() => setText(`${text}!`)} id="bang" type="button">
        Bang!
      </button>
    </div>
  );
}

export default hot(App);
