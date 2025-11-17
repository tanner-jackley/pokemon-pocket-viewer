import "../css/IndividualCard.css";

function IndividualCard({ card }) {
  return (
    <div className="individual-card">
      {/* <div> */}
      <img
        src={`${card.image}/low.png`}
        className="card-image"
        alt={card.name}
      ></img>
      {/* </div>
      <div>
        <h3>{card.name}</h3>
        <p>{card.id}</p>
        <p>{card.description}</p>
        <p>{card.rarity}</p>
      </div> */}
    </div>
  );
}

export default IndividualCard;
