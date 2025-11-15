import "../css/Home.css";
import CardCard from "../components/IndividualCard.jsx";
import { getSets } from "../services/api.js";
import IndividualCard from "../components/IndividualCard.jsx";
import CardGrid from "../components/CardGrid.jsx";
import SetSection from "../components/SetSection.jsx";

const sets = await getSets();

function Home() {
  return (
    <>
      <h1>Pokémon Pocket Viewer</h1>
      <div>
        {sets.map((set) => (
          <SetSection key={set.id} set={set} />
        ))}
      </div>
    </>
  );
}

export default Home;
