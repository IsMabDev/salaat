import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
//import Bouton from "./boutonToggle";
//import ControlledInput from "./controlInput";
//import MyForm from "./controlledForm";
//import MyApp from "./04-passStateDataToChild";
//import MyApp from "./05-passCallBackAsProps";
//import MyComponent from "./06-keydownHandleEvent";
//import MagicEightBall from "./07-javascriptInRenderMethod";
//import CheckUserAge from "./08-ternarryConditionButons";
//import GameOfChance from "./09-renderConditionallyFromProps";
//import MyToDoList from "/home/minzo/Documents/Mes codes/freecodecamp.org/Front End developement libraries/certification projects/10-array.mapToDynamicalyRender.js";
//import MainApp from "./react markdown/mainApp";
import MainDrum from "./drum-machine/mainAppDrum";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainDrum />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
