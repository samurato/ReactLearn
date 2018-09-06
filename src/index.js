import React from "react";
import ReactDOM from "react-dom";
import ButtonAppBar from "./Views/navbar";
import "./styles.css";
import GuttersGrid from "./Views/searchbar";
import ImgMediaCard from "./Views/cardSearch";
function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <GuttersGrid />
      <ImgMediaCard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
