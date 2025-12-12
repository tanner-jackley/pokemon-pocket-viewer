import "../css/Home.css";
import CardCard from "../components/IndividualCard.jsx";
import { getSets, getNormalCardsFromSet } from "../services/api.js";
import IndividualCard from "../components/IndividualCard.jsx";
import CardGrid from "../components/CardGrid.jsx";
import SetSection from "../components/SetSection.jsx";
import { useState, useEffect } from "react";
import DeckBuilder from "../components/DeckBuilder.jsx";

function Decks() {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState([]);

  function checkCardQuanitity(deck, card) {
    const count = deck.filter((c) => c.id === card.id).length;
    return count;
  }

  function onCardRemove(card) {
    setDeck((prevDeck) => {
      const index = prevDeck.findIndex((c) => c.id === card.id);
      if (index === -1) return prevDeck;
      return [...prevDeck.slice(0, index), ...prevDeck.slice(index + 1)];
    });
  }

  useEffect(() => {
    async function load() {
      const sets = await getSets();
      sets.map(async (set) => {
        const data = await getNormalCardsFromSet(set.id);

        setCards((prev) => {
          const merged = [...prev, ...data];
          const unique = Array.from(
            new Map(merged.map((c) => [c.id, c])).values()
          );
          return unique;
        });
      });
    }
    load();
  }, []);

  return (
    <>
      <h1>Decks</h1>
      <DeckBuilder cards={deck} onCardRemove={onCardRemove} />
      <div className="sets-container">
        <CardGrid
          cards={cards}
          onCardClick={(clickedCard) => {
            // Deck requirement checks
            if (checkCardQuanitity(deck, clickedCard) >= 2) {
              alert("Can only have 2 copies of the same card in a deck");
              return;
            }
            if (deck.length < 20) {
              setDeck((prevDeck) => [...prevDeck, clickedCard]);
            } else {
              alert("Deck is full (max 20 cards)");
            }
          }}
        />
      </div>
    </>
  );
}

export default Decks;
