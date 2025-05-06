class TicTacToeGame {
  static prevValue = "";
  static nextValue = "";

  constructor(xValue, oValue) {
    this.xValue = xValue;
    this.oValue = oValue;
  }
  printValue(element, index, fullArray) {

    if (element.textContent == "") {
      element.textContent = this.xValue;
      TicTacToeGame.prevValue = this.xValue;
    } else if (
      element.textContent == "" &&
      TicTacToeGame.prevValue === this.xValue
    ) {
      element.textContent = this.oValue;
      TicTacToeGame.prevValue = this.oValue;
    }

    // if(element.textContent == this.xValue && fullArray.indexOf(element) === index){
    //   fullArray[index].textContent = this.xValue;
    //   TicTacToeGame.prevValue = this.xValue
    // }
  }
}

const oValue = "O";
const xValue = "X";
const box = document.querySelectorAll(".box");
const tictactoe = new TicTacToeGame(xValue, oValue);

box.forEach((element, index, fullArray) => {
  element.addEventListener("click", () => {
    tictactoe.printValue(element, index, fullArray);
    // element.nextElementSibling
  });
});
