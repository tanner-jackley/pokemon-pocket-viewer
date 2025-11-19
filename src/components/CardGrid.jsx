import IndividualCard from "./IndividualCard";
import { useState } from "react";
import CardPopup from "../components/CardPopup.jsx";

function CardGrid({ cards }) {
  const [isOpen, setIsOpen] = useState(false);
  const [card, setCard] = useState(null);
  return (
    <>
      <div className="set-content">
        {cards.map((card) => (
          <IndividualCard
            key={card.id}
            card={card}
            onClick={() => {
              setIsOpen(true);
              setCard(card);
            }}
          />
        ))}
      </div>
      <CardPopup isOpen={isOpen} card={card} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default CardGrid;
