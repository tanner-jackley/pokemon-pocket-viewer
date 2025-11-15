import IndividualCard from "./IndividualCard";

function CardGrid({ cards }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <IndividualCard key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardGrid;
