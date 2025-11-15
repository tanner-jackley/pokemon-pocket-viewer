import "../css/Home.css";
import CardCard from "../components/CardCard.jsx";
import { getCard, getCardsFromSet } from "../services/api.js";

const cards = await getCardsFromSet("A1");

function Home() {
  return (
    <>
      <h1>Pokémon Pocket Viewer</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <CardCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}

export default Home;
