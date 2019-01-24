import React from "react";
import "./nav.css";

function Nav(props){
  return (
    <div className="text-center my-3">
      <h1 className="title text-uppercase">
        MemoryClick
      </h1>
      <h5 className="score-counter text-uppercase">
        Current Score: {props.score} | High Score: {props.highScore}
      </h5>
    </div>
  );
}


export default Nav;
