const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/turn');
const Round = require('../src/round');

describe('Round', function() {
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should instantiate a round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(10, 'Why do humans sleep?', ['I don\'t know', 'Ask a scientist', 'Please go away'], 'Ask a scientist');
    const card5 = new Card(12, 'Where is london?', ['Paris', 'NullPointerException', 'Over there'], 'Over there');

    const deck = new Deck([card1, card2, card3, card4, card5]);

    const round = new Round(deck);

    expect(round.deck).to.deep.equal(deck);
  });

  it('can return the current card in play', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(10, 'Why do humans sleep?', ['I don\'t know', 'Ask a scientist', 'Please go away'], 'Ask a scientist');
    const card5 = new Card(12, 'Where is london?', ['Paris', 'NullPointerException', 'Over there'], 'Over there');

    const deck = new Deck([card1, card2, card3, card4, card5]);

    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('can take a new turn', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(10, 'Why do humans sleep?', ['I don\'t know', 'Ask a scientist', 'Please go away'], 'Ask a scientist');
    const card5 = new Card(12, 'Where is london?', ['Paris', 'NullPointerException', 'Over there'], 'Over there');

    const deck = new Deck([card1, card2, card3, card4, card5]);

    const round = new Round(deck);

    expect(round.turns).to.equal(0);

    expect(round.incorrectGuesses).to.deep.equal([]);

    expect(round.returnCurrentCard()).to.deep.equal(card1);

    round.takeTurn('pug');

    expect(round.turns).to.equal(1);

    expect(round.incorrectGuesses).to.deep.equal([1]);

    expect(round.returnCurrentCard()).to.deep.equal(card2);
  });

  it('can take many turns', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(10, 'Why do humans sleep?', ['I don\'t know', 'Ask a scientist', 'Please go away'], 'Ask a scientist');
    const card5 = new Card(12, 'Where is london?', ['Paris', 'NullPointerException', 'Over there'], 'Over there');

    const deck = new Deck([card1, card2, card3, card4, card5]);

    const round = new Round(deck);

    expect(round.turns).to.equal(0);

    expect(round.incorrectGuesses).to.deep.equal([]);

    expect(round.returnCurrentCard()).to.deep.equal(card1);

    round.takeTurn('pug');

    expect(round.turns).to.equal(1);

    expect(round.incorrectGuesses).to.deep.equal([1]);

    expect(round.returnCurrentCard()).to.deep.equal(card2);

    round.takeTurn('gallbladder');

    expect(round.turns).to.equal(2);

    expect(round.incorrectGuesses).to.deep.equal([1]);

    expect(round.returnCurrentCard()).to.deep.equal(card3);

    expect(round.calculatePercentCorrect()).to.equal(50);
  });
});