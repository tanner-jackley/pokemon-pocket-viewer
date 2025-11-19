function CardPopup({ isOpen, name, onClose, children }) {
  if (!isOpen) return null; // Don't render anything if popup is closed

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div
        style={styles.popup}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2>{name}</h2>
        {children}
        <button onClick={onClose} style={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "90%",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },
  closeButton: {
    marginTop: "10px",
  },
};

export default CardPopup;
