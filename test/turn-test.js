const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/turn');

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    const card = new Card(1, 'why?', ['because', 'why not', 'how'], 'why not');
    const turn = new Turn('how', card);
    expect(turn.guess).to.equal('how');
  });

  it('should store a card', function() {
    const card = new Card(1, 'why?', ['because', 'why not', 'how'], 'why not');
    const turn = new Turn('how', card);
    expect(turn.card).to.deep.equal(card);
  });

  it('can return the guess', function() {
    const card = new Card(1, 'why?', ['because', 'why not', 'how'], 'why not');
    const turn = new Turn('how', card);
    const guess = turn.returnGuess();
    expect(guess).to.equal('how');
  });

  it('can return the card', function() {
    const card = new Card(1, 'why?', ['because', 'why not', 'how'], 'why not');
    const turn = new Turn('how', card);
    const turnCard = turn.returnCard();
    expect(turnCard).to.deep.equal(card);
  });

  it('can evaluate a wrong guess', function() {
    const card = new Card(1, 'why?', ['because', 'why not', 'how'], 'why not');
    const turn = new Turn('how', card);
    const result = turn.evaluateGuess();
    expect(result).to.equal(false);
  });

  it('can evaluate a right guess', function() {
    const card = new Card(1, 'why?', ['because', 'why not', 'how'], 'why not');
    const turn = new Turn('why not', card);
    const result = turn.evaluateGuess();
    expect(result).to.equal(true);
  });

  it('can give feedback for an incorrect guess', function() {
    const card = new Card(1, 'why?', ['because', 'why not', 'how'], 'why not');
    const turn = new Turn('how', card);
    const result = turn.giveFeedback();
    expect(result).to.equal('incorrect!');
  });

  it('can give feedback for a correct guess', function() {
    const card = new Card(1, 'why?', ['because', 'why not', 'how'], 'why not');
    const turn = new Turn('why not', card);
    const result = turn.giveFeedback();
    expect(result).to.equal('correct!');
  });
});