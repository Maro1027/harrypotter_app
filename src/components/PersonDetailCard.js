import "./PersonDetailCard.css";
import React from "react";

const PersonDetailCard = ({ person }) => {
  return (
    <div className="detail">
      <div className="detail_image">
        <img
          src={person.image}
          alt={person.name}
        />
      </div>
      <div className="detail_info">
        <h2 className="detail_name">{person.fullName}</h2>
        <p className="detail_text">
          <span>Nickname:</span> {person.nickname}
        </p>
        <p className="detail_text">
          <span>Birthday:</span> {person.birthdate}
        </p>
        <p className="detail_text">
          <span>HogwartsHouse:</span> {person.hogwartsHouse}
        </p>
        <p className="detail_text">
          <span>Interpreted By:</span> {person.interpretedBy}
        </p>
      </div>
    </div>
  );
};

export default PersonDetailCard;
