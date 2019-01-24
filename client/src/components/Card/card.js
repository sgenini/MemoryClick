import React from "react";
import "./card.css";

function Card(props){
  return (
    <div className="">
      <img className="click-item" alt={props.name} src={props.image} id={props.id} onClick={() => props.setClicked(props.id)} />
    </div>
  )
}

export default Card;