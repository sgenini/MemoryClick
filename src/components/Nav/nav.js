import React from "react";

function Nav(props){
  return (
    <div className="container rounded py-1" style={{backgroundColor: "rgba(0,0,0,.1)"}}>
      <div className="text-center my-4">
        <h1 className="title" style={{fontSize: 50}}>MemoryClick</h1>
        <h5><small>A React.js Memory Game</small></h5>
        <p>Click each image <strong>only once</strong>! Good luck!</p>
        <h5 className="score-counter text-uppercase">
          Current Score: {props.score} | High Score: {props.highScore}
        </h5>
      </div>
    </div>
  );
}


export default Nav;
