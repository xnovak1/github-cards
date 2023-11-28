import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  const users = [<Card />, <Card />, <Card />];

  return (
    <div>
      <h1>The Github Cards App</h1>
      <List cards={users} />
    </div>
  );
}

export default App;
