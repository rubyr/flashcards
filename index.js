const http = require('http');
const Menu = require('./src/menu');
let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
var menu = new Menu();
menu.listOptions();
// var game = new Game();
// game.start();