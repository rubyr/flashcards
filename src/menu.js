const inquirer = require('inquirer');
const Game = require('./Game');

class Menu {
  constructor() {
    this.game = undefined;
  }

  async listOptions() {
    const response = await inquirer.prompt({
      type: 'rawlist',
      message: 'Welcome to Flashcards!',
      name: 'answer',
      choices: ['Play', 'Quit']
    }).then(prompt => {
      if (prompt.answer === "Quit"){
        console.log("Bye!");
        process.exit(0);
      } else {
        this.startGame();
      }
    });
  }

  async startGame() {
    const game = new Game();
    game.start(this);
  }

  async endGame() {
    const response = await inquirer.prompt({
      type: 'rawlist',
      message: 'Want to play again?',
      name: 'answer',
      choices: ['Yes', 'No']
    }).then(prompt => {
      if (prompt.answer === "No"){
        console.log("Thanks for playing!");
        process.exit(0);
      } else {
        this.startGame();
      }
    });
  }
}

module.exports = Menu;