import TCGdex from "@tcgdex/sdk";

const tcgdex = new TCGdex("en");

// returns Pocket sets in reverse order (newest first)
export const getSets = async () => {
  const series = await tcgdex.fetch("series", "tcgp");
  const sets = series.sets;
  const reversedSets = Array.from(sets).reverse();
  return reversedSets;
};

export const getCard = async (cardId) => {
  const card = await tcgdex.card.get(cardId);
  return card;
};

export const getSet = async (setId) => {
  const set = await tcgdex.set.get(setId);
  return set;
};

export const getCardsFromSet = async (setId) => {
  const cards = [];
  const set = await getSet(setId);
  set.cards.forEach(async (card) => {
    cards.push(await getCard(card.id));
  });
  return cards;
};
