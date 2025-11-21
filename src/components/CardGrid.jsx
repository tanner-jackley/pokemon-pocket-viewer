import IndividualCard from "./IndividualCard";
import { useState } from "react";
import CardPopup from "../components/CardPopup.jsx";

function CardGrid({ cards, onCardClick }) {
  return (
    <>
      <div className="set-content">
        {cards.map((card) => (
          <IndividualCard
            key={card.id}
            card={card}
            onClick={() => onCardClick && onCardClick(card)}
          />
        ))}
      </div>
    </>
  );
}

export default CardGrid;
