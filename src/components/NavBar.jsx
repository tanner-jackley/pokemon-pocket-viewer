import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">TCGP Central</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Pokédex</Link>
      </div>
      <div className="navbar-links">
        <Link to="/decks">Decks</Link>
      </div>
    </nav>
  );
}

export default NavBar;
