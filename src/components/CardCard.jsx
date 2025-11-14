function CardCard({ card }) {
  return (
    <div>
      <div>
        <img
          src="https://assets.tcgdex.net/en/tcgp/A1/001/low.png"
          alt={card.name}
        ></img>
      </div>
      <div>
        <h3>{card.name}</h3>
        <p>{card.id}</p>
        <p>{card.description}</p>
        <p>{card.rarity}</p>
      </div>
    </div>
  );
}

export default CardCard;
