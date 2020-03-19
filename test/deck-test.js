const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');

describe('Deck', function() {
  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should instantiate a new Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should hold cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3];

    const deck = new Deck(cards);

    expect(deck.cards).to.deep.equal(cards);
  });

  it('can count cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3];

    const deck = new Deck(cards);

    expect(deck.countCards()).to.equal(3);
  });

  it('can count a different number of cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(10, 'Why do humans sleep?', ['I don\'t know', 'Ask a scientist', 'Please go away'], 'Ask a scientist');
    const card5 = new Card(12, 'Where is london?', ['Paris', 'NullPointerException', 'Over there'], 'Over there');

    const cards = [card1, card2, card3, card4, card5];

    const deck = new Deck(cards);

    expect(deck.countCards()).to.equal(5);
  });

  it('can shuffle cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(10, 'Why do humans sleep?', ['I don\'t know', 'Ask a scientist', 'Please go away'], 'Ask a scientist');
    const card5 = new Card(12, 'Where is london?', ['Paris', 'NullPointerException', 'Over there'], 'Over there');

    const cards = [card1, card2, card3, card4, card5];

    const deck = new Deck(cards);

    deck.shuffle();

    expect(deck.cards).to.not.deep.equal(cards);
  });
});