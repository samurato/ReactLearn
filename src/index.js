import React from "react";
import ReactDOM from "react-dom";
import ButtonAppBar from "./Views/navbar";
import "./styles.css";
import GuttersGrid from "./Views/searchbar";
import ImgMediaCard from "./Views/cardSearch";
import LoadingScreen from "./Views/LoadingScreen";
function App() {
  return (
    <div className="App">
      <ButtonAppBar />
        <LoadingScreen/>

      <GuttersGrid />
      <ImgMediaCard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
