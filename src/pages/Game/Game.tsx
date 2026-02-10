import React, { useState } from "react";
import "../Game/Game.css";
import { Link } from "react-router-dom";
import pccase from "../../Images/empty_case.png";
import plankton_error from "../../Images/plankton_error.jpg";
import plankton_motherboard from "../../Images/plankton_motherboard.jpg";
import plankton_cpu from "../../Images/plankton_cpu.jpg";

//TODO

export default function Game() {
  const [selectedId, setSelectedId] = useState(null);
  const [placed, setPlaced] = useState({
    3: false,
    4: false,
  });
  const steps = [
    { id: 3, text: "Vložte základní desku", img: plankton_motherboard },
    { id: 4, text: "Vložte CPU", img: plankton_cpu },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const current = steps[currentStep];
  const [error, setError] = useState(false);


  return (
    <div>
      <img src={pccase} alt="pccase" className="pccase" />
      <img src={current?.img} className="planktonGuide" alt="Plankton" />
      <img
        src={error ? plankton_error : current?.img}
        className="planktonGuide"
      />
      <div className="instruction">{current?.text}</div>
      <Link to={"/"}>
        <button className="button">back</button>
      </Link>

      <div
        className="zakladniDeska"
        onClick={() => setSelectedId(3)}
        style={
          placed[3]
            ? {
                width: "315px",
                height: "265px",
                top: "400px",
                left: "1050px",
              }
            : {}
        }
      ></div>

      <div
        className="mistoProZakladniDesku"
        onClick={() => {
          if (selectedId === 3 && current?.id === 3) {
            setPlaced((prev) => ({ ...prev, 3: true }));
            setSelectedId(null);
            setCurrentStep((prev) => prev + 1);
          } else {
            setError(true);
            setTimeout(() => setError(false), 1000);
          }
        }}
      ></div>

      <div
        className="procesor"
        onClick={() => setSelectedId(4)}
        style={
          placed[4]
            ? {
                width: "80px",
                height: "80px",
                top: "450px",
                left: "1180px",
              }
            : {}
        }
      ></div>

      <div
        className="mistoProProcesor"
        onClick={() => {
          if (selectedId === 4 && current.id === 4) {
            setPlaced((prev) => ({ ...prev, 4: true }));
            setSelectedId(null);
            setCurrentStep((prev) => prev + 1);
          } else {
            setError(true);
            setTimeout(() => setError(false), 1000);
          }
        }}
      ></div>
    </div>
  );
}
