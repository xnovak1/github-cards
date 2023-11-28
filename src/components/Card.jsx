import React from "react";
import "./card.css";
import image from "../assets/react.svg";

const Card = () => {
  return (
    <div className="github-profile">
      <img src={image} />
      <div className="github-profile__info">
        <h2>Name here.....</h2>
        <p>Company here...</p>
      </div>
    </div>
  );
};

export default Card;
