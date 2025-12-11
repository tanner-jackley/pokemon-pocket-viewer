import CardGrid from "./CardGrid";
import "../css/DeckBuilder.css";

function DeckBuilder({ cards }) {
  return (
    <>
      <div className="deck-builder-container">
        <CardGrid
          cards={cards}
          onCardClick={(card) => alert(`Clicked ${card} in deck builder`)}
        />
      </div>
    </>
  );
}

export default DeckBuilder;
