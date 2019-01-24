import React from "react";
import "./jumbotron.css";

function Jumbotron(props) {
  return <div className="jumbotron col-lg-7">{props.children}</div>;
}

export default Jumbotron;
