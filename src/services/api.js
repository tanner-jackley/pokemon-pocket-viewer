import TCGdex from "@tcgdex/sdk";

const tcgdex = new TCGdex("en");

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
  console.log(cards);
  return cards;
};
