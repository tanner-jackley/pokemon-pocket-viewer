import TCGdex from '@tcgdex/sdk'

const tcgdex = new TCGdex('en');

export const getCard = async (cardId) => {
  // Retrieve Furret from the Darkness Ablaze Set
  const card = await tcgdex.card.get(cardId);
  console.log(card);
  return card;
};
