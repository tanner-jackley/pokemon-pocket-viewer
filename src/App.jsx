import NavBar from "./components/NavBar";
import "./css/App.css";
import Home from "./pages/Home";
import Decks from "./pages/Decks";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decks" element={<Decks />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
