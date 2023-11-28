import React from "react";
import Card from "./Card";
import "./list.css";

const List = ({ profiles }) => {
  return (
    <div className="list">
      {profiles.map((profile, index) => (
        <Card key={index} {...profile} />
      ))}
    </div>
  );
};

export default List;
