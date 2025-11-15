import { useState, useEffect } from "react";
import "../css/SetSection.css";
import CardGrid from "./CardGrid";
import { getCardsFromSet } from "../services/api.js";

export default function SetSection({ set }) {
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
    <div className="set-section">
      <div className="set-header" onClick={() => setOpen(!open)}>
        {set.name}
      </div>

      {open && <CardGrid cards={cards} />}
    </div>
  );
}
