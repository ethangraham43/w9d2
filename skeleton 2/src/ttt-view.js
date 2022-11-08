class View {
  constructor(game, el) {
    this.el = el
    this.game = game
    this.setupBoard()
    this.handleClick = this.handleClick.bind(this)
    this.bindEvents()
  }

  setupBoard() {
    const grid = document.createElement("ul"); 
    for (let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        const box = document.createElement("li");
        box.dataset.pos = JSON.stringify([i, j]);
        grid.append(box);
      }
    }
    this.el.append(grid)
  }

  handleClick(e) {
    const target = e.target
    if ("LI" === target.nodeName) {
      this.makeMove(target)
    }
  }
  
  bindEvents() {
    this.el.addEventListener("click", this.handleClick)
  }

  makeMove(square) {
    const position = JSON.parse(square.dataset.pos);
    const player = this.game.currentPlayer;
    try{this.game.playMove(position)}
    catch(error){
      alert(error.msg)
    }
    square.classList.add(player)
    if (this.game.isOver()) {
      this.handleGameOver()
    }

  }

  handleGameOver() {
    this.el.removeEventListener("click", this.handleClick)
    this.el.classList.add("game-over")
    const winner = this.game.winner()
    this.el.classList.add(`winner-${winner}`)
    const message = document.createElement("figcaption")
    if (winner) {
      message.append(`you win, ${winner}!`)
    } else {
      message.append("It's a draw!")
    }
    this.el.append(message)
  }

}

module.exports = View;
