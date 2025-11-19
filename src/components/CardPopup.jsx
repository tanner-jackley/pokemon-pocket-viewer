import "../css/CardPopup.css";

function CardPopup({ isOpen, card, onClose, children }) {
  if (!isOpen) return null; // Don't render anything if popup is closed

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="popup"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="close-button">
          <button onClick={onClose} className="close-button">
            &#10006;
          </button>
        </div>
        <div className="popup-content">
          <img
            src={`${card.image}/high.png`}
            className="card-image"
            alt={card.name}
          ></img>
          <div className="card-details">
            <h2>
              {card.name} [{card.id}]
            </h2>
            <p>{card.category}</p>
            <p>{card.description}</p>
            <p>{card.rarity}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default CardPopup;
