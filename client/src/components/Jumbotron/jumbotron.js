import React from "react";
import "./jumbotron.css";

function Jumbotron(props) {
  return <div className="jumbotron">{props.children}</div>;
}

export default Jumbotron;
