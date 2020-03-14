import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { Cube } from "./components/Cubes/Cube";
import { Lights } from "./components/Lights/Lights";
import { Enviorenment } from "./components/Enviorenment/Enviorenment";

import "./index.scss";

function App() {
  return (
    <>
      <Canvas>
        <Cube />
        <Lights />
        <Enviorenment />
      </Canvas>
    </>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
