import React from "react";
import "./Card.css";

export const Card = ({ pokemon }) => {
  return (
    <div className="Card">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.img} width="300" height="300" />
      <div>
        <div className={"typeContainer"}>
          <p>{pokemon.type}</p>
        </div>
      </div>
    </div>
  );
};
