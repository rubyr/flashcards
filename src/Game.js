const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('./round');
const Deck = require('./deck');
const Card = require('./Card');

class Game {
  constructor() {
    this.currentRound = undefined;
  }

  printMessage(deck) {
    console.log(`You are playing with ${deck.countCards()} cards.
${'-'.repeat(70)}`);
  }

  printQuestion(round, menu) {
    util.main(round, menu);
  }

  start(menu) {
    const cards = [];
    prototypeQuestions.forEach(thing => {
      const card = new Card();
      Object.assign(card, thing);
      cards.push(card);
    });
    const deck = new Deck(cards);
    deck.shuffle();
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound, menu);
  }
}

module.exports = Game;