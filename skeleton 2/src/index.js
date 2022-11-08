const View = require("./ttt-view.js") 
const Game = require("/ttt_node/game.js") 

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
});

const newGame = new Game()
const newView = new View()

newView.setupBoard()