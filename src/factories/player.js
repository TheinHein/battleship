import shuffle from "../helpers/shuffle";
import GameBoard from "./game-board";

export default class Player {
  constructor(player) {
    this.gameBoard = new GameBoard(10);
    this.enemyGameBoard = null;
    if (player === "ai") this.aiAttacks = shuffle();
  }

  assignEnemyGameBoard(enemyGameBoard) {
    this.enemyGameBoard = enemyGameBoard;
  }

  attack(cord) {
    this.enemyGameBoard.receiveAttack(cord);
  }

  aiAttack() {
    const randomCord = this.aiAttacks.pop();
    this.enemyGameBoard.receiveAttack(randomCord);
  }
}
