import React from "react";
import Card from "./Card";
import "./list.css";

const List = ({ cards }) => {
  return (
    <div className="list">
      {cards.map((card, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default List;
