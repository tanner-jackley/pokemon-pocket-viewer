import "../css/Home.css";
import CardCard from "../components/IndividualCard.jsx";
import { getSets, getNormalCardsFromSet } from "../services/api.js";
import IndividualCard from "../components/IndividualCard.jsx";
import CardGrid from "../components/CardGrid.jsx";
import SetSection from "../components/SetSection.jsx";
import { useState, useEffect } from "react";

function Decks() {
  const [cards, setCards] = useState([]);

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
      <div className="sets-container">
        <CardGrid cards={cards} />
      </div>
    </>
  );
}

export default Decks;
