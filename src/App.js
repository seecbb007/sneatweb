import Routerview from "./routerview";
import Header from "./components/header/header";
import Siderbar from "./components/sidebar/siderbar";
import "./App.css";
import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const loginData = useSelector((state) => {
    return state.loginReducer.ifLogedin;
  });

  return (
    <div className="appContainer" style={{ backgroundColor: "#f5f5f9" }}>
      {loginData && <Siderbar></Siderbar>}

      {/* <Header></Header> */}

      <Routerview></Routerview>
    </div>
  );
}

export default App;

// NPM Installation
//Install the following MUI
// npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material
//npm install chart.js
//npm install --save react-chartjs-2 chart.js
//npm i @nivo/bar
//npm i @nivo/pie
//npm i @nivo/heat
//npm i @nivo/line --legacy-peer-deps
//npm install @material-ui/styles
//npm install @mui/lab

//npm i @nivo/radial-bar --legacy-peer-deps
//npm i  @nivo/radar --legacy-peer-deps
//npm install @mui/joy --legacy-peer-deps
