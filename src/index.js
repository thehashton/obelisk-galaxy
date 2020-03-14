import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";

import Credits from './components/Credits/Credits';
import Cubes from './components/Cubes/Cube';
import Lights from './components/Lights/Lights';
import Environment from './components/Enviorenment/Enviorenment';

function App() {
  return (
    <>
      <Credits/>
      <Canvas>
        <Cubes />
        <Lights />
        <Environment />
      </Canvas>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
