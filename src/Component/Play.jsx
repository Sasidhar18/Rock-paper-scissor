import React from "react";
import { Link } from "react-router-dom";
import Triangle from "../assets/bg-triangle.svg";
import './Style/Play.css';


const Play = ({ setMyChoice, setPlayed }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
    setPlayed(true)
  };

  return (
    <div className="play">
      <img src={Triangle} alt="" className="triangle" />
      <div className="items">
          <div
            data-id="paper"
            onClick={setChoice}
            className="icon icon--paper"
          ></div>
          <div
            data-id="scissors"
            onClick={setChoice}
            className="icon icon--scissors"
          ></div>
          <div
            data-id="rock"
            onClick={setChoice}
            className="icon icon--rock"
          ></div>
      </div>
    </div>
  );
};

export default Play;
