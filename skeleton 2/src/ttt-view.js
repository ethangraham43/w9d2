class View {
  constructor(game, el) {
    this.el = el
    this.game = game
    this.setupBoard()
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
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
