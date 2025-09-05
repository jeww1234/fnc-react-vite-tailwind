import { useState } from "react";
import "./App.css";
import Greet from "./component/Greet";
import MeetAt from "./component/MeetAt";
import Coin from "./component/coin";
import Sort from "./component/Sort";

function App() {
  return (
    <div className="body flex items-center justify-center">
      <Greet />
      <div>
        <Coin />
        <Sort />
      </div>
      <MeetAt />
    </div>
  );
}

export default App;
