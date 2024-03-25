import { useState } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Views from "./components/Seachbar";

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Views />
      <Body />
    </div>
  );
}

export default App;
