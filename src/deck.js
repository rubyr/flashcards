class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  countCards() {
    return this.cards.length;
  }

  shuffle() {
    for (let i = 0; i < 5; i++) {
      let newArray = [];
      for (const card of this.cards) {
        if (Math.random() < 0.5) {
          newArray.push(card);
        } else {
          newArray.unshift(card);
        }
      }
      this.cards = newArray;
    }
  }
}

module.exports = Deck;