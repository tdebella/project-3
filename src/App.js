import React from "react";
import "./App.css";
import LeftComp from "./components/LeftComp";
import RightComp from "./components/RightComp";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <LeftComp />
      <RightComp />
    </div>
  );
}

export default App;
