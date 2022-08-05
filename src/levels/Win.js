import "../style.css";
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Confetti from 'react-confetti';

function L1() {
  return (
    <div className="container">
      <Confetti/>
      <h1 className="win">Поздравляю, вы победили!</h1>
      <button type="button" style={{position: "absolute", top: "10px", left: "10px"}}><Link to="/game"style={{color: "black"}}>Назад</Link></button>
      <Outlet />
    </div>
  );
}

export default L1;
