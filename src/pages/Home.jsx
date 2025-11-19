import "../css/Home.css";
import CardCard from "../components/IndividualCard.jsx";
import { getSets } from "../services/api.js";
import IndividualCard from "../components/IndividualCard.jsx";
import CardGrid from "../components/CardGrid.jsx";
import SetSection from "../components/SetSection.jsx";
import { useState } from "react";
import CardPopup from "../components/CardPopup.jsx";

const sets = await getSets();

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1>Pokémon Pocket Viewer</h1>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      <CardPopup
        isOpen={isOpen}
        name="Sample Card"
        onClose={() => setIsOpen(false)}
      />
      <div className="sets-container">
        {sets.map((set) => (
          <SetSection key={set.id} set={set} />
        ))}
      </div>
    </>
  );
}

export default Home;
