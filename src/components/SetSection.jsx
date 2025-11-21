import { useState, useEffect } from "react";
import "../css/SetSection.css";
import CardGrid from "./CardGrid";
import { getCardsFromSet } from "../services/api.js";
import CardPopup from "./CardPopup.jsx";

function SetSection({ set }) {
  const [card, setCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await getCardsFromSet(set.id);
      setCards(data);
    }
    load();
  }, [set.id]);

  return (
    <>
      <div className="set-section">
        <div className="set-header" onClick={() => setOpen(!open)}>
          [{set.id}] {set.name}
          <img
            src={`${set.logo}.png`}
            alt={set.name}
            className="set-logo"
          ></img>
        </div>

        {open && (
          <CardGrid
            cards={cards}
            onCardClick={(clickedCard) => {
              setIsOpen(true);
              setCard(clickedCard);
            }}
          />
        )}
      </div>
      <CardPopup isOpen={isOpen} card={card} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default SetSection;
