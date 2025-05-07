const resetButton = document.querySelector(".reset-button");
const player1_Score = document.querySelector(".player1-score");
const player2_Score = document.querySelector(".player2-score");
const allBoxes = document.querySelectorAll(".box")
let player1 = "";
let player2 = "";

class TicTacToeGame {
  constructor(allBoxes, player1_Score, player2_Score) {
    this.player1_Score = player1_Score;
    this.player2_Score = player2_Score;
  }
  resetGame() {
    this.player1_Score.textContent = "0";
    this.player2_Score.textContent = "0";
  }
  printValue(){
    
  }
}

const tictactoeGame = new TicTacToeGame(allBoxes,player1_Score, player2_Score);

resetButton.addEventListener("click", () => {
  tictactoeGame.resetGame();
});
tictactoeGame.printValue()
