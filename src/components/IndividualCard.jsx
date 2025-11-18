import "../css/IndividualCard.css";

function IndividualCard({ card, onClick }) {
  return (
    <div className="individual-card">
      {/* <div> */}
      <img
        src={`${card.image}/low.png`}
        className="card-image"
        alt={card.name}
        onClick={onClick}
      ></img>
    </div>
  );
}

export default IndividualCard;
