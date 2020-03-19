const Turn = require('./turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now();
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.turns++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return (1 - (this.incorrectGuesses.length / this.turns)) * 100;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);

    const toHHMMSS = (millis) => {
      const seconds = (millis / 1000).toFixed(2);
      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor(seconds / 60);
      const secs = (seconds % 60).toFixed(2);

      let out = "";

      if (hrs) {
        out += `${hrs} hour${hrs > 1 ? "s" : ""}, `;
      }
      if (mins) {
        out += `${mins} minute${mins > 1 ? "s" : ""}, `;
      }
      if (secs) {
        out += `${secs} second${secs !== 1 ? "s" : ""}`;
      }
      if (out.split(', ').length > 1) {
        const i = out.lastIndexOf(', ');
        const begin = out.substr(0, i);
        const end = out.substr(i + 2);
        out = begin + " and " + end;
      }
      return out;
    }

    const totalTime = (Date.now() - this.startTime);
    console.log(`It took you ${toHHMMSS(totalTime)} to get through the deck. That's an average of ${toHHMMSS(totalTime / this.deck.countCards())} per card!`);
  }
}

module.exports = Round;