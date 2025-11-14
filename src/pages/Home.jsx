import { useState } from "react";
import "../css/Home.css";
import CardCard from "../components/CardCard.jsx";

const card = {
  id: "A1-001",
  name: "Bulbasaur",
  rarity: "One Diamond",
  description:
    "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
};

function Home() {
  return (
    <>
      <h1>Pokémon Pocket Viewer</h1>
      <CardCard card={card} />
    </>
  );
}

export default Home;
