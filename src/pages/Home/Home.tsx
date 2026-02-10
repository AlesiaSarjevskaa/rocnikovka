import React from "react";
import "../Home/Home.css";
import plankton from "../../Images/plankton_1.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div id="body">
        <div id="start_text">
          <p id="first-line">Nejsi jen hráč.</p>
          <p id="second-line">Jsi stavitel.</p>
          <p id="third-line">
            Z nul a jedniček moc nestačí – potřebuješ správný hardware.
          </p>
          <p id="fourth-line">
            Slož počítač, který přežije i ten nejtěžší kód.
          </p>
        </div>
        <Link to="/game">
          <div id="button">
            <button>START</button>
          </div>
        </Link>
        <div id="plankton_1">
          <img src={plankton} alt="plankton" />
        </div>
      </div>
    </>
  );
}
