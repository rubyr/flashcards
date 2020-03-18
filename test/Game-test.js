const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/turn');
const Deck = require('../src/deck');
const Round = require('../src/round');
const Game = require('../src/Game');

describe('Game', function() {
  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should instantiate a new Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current round', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('should create a deck on start', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
  });

  it('should have cards in the deck on start', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound.deck.countCards()).to.not.equal(0);
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
  });
});