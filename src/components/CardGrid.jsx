import IndividualCard from "./IndividualCard";

function CardGrid({ cards }) {
  return (
    <div className="set-content">
      {cards.map((card) => (
        <IndividualCard
          key={card.id}
          card={card}
          onClick={() => alert(card.name)}
        />
      ))}
    </div>
  );
}

export default CardGrid;
