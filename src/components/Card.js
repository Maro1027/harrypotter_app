import { Link } from "react-router-dom";
import "./Card.css";
import React from "react";

const Card = ({ person }) => {
  const name = person.fullName.replace(/\s+/g, "");

  return (
    <Link
      to={`/${name}`}
      className="card"
    >
      <div className="card_image">
        <img
          src={person.image}
          alt={person.name}
        />
      </div>
      <div className="card_info">
        <h2 className="card_name">{person.fullName}</h2>
        <p className="card_birth">
          <span>Birthday:</span> {person.birthdate}
        </p>
        <p className="card_house">
          <span>HogwartsHouse:</span> {person.hogwartsHouse}
        </p>
      </div>
    </Link>
  );
};

export default Card;
