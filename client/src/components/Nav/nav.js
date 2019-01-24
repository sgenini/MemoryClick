import React from "react";
import "./nav.css";

class Nav extends React.Component {
  state = {
    currentScore: 0,
    highScore: 0
  }
  
  render(){
    return (
      <div className="text-center nav-bar">
        <h1 className="title text-uppercase">
          MemoryClick
        </h1>
        <h5 className="score-counter text-uppercase">
          Current Score: {this.state.currentScore} | High Score: {this.state.highScore}
        </h5>
      </div>
    );
  }
}

export default Nav;
