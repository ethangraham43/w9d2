const View = require("./ttt-view.js") 
const Game = require("../ttt_node/game.js")

document.addEventListener("DOMContentLoaded", () => {
  const newGame = new Game()
  const ttt = document.querySelector(".ttt")
  const newView = new View(newGame, ttt)

  // Your code here
});
