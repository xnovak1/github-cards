import React from "react";
import "./card.css";

const Card = ({ name, company, avatar_url }) => {
  return (
    <div className="github-profile">
      <img src={avatar_url} />
      <div className="github-profile__info">
        <h2>{name}</h2>
        <p>{company}</p>
      </div>
    </div>
  );
};

export default Card;
