import CardGrid from "./CardGrid";
import "../css/DeckBuilder.css";

function DeckBuilder({ cards, onCardRemove }) {
  const isBasicIncluded = cards && cards.find((card) => card.stage === "Basic");

  return (
    <>
      <div className="deck-builder-container">
        <CardGrid cards={cards} onCardClick={onCardRemove} />
      </div>
      <div className="deck-builder-info">
        <p>Deck Size: {cards ? cards.length : 0} / 20</p>
        {!isBasicIncluded && (
          <p className="deck-builder-warning">Deck must have one basic</p>
        )}
      </div>
    </>
  );
}

export default DeckBuilder;
