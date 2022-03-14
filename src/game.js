import makePublisher from "./helpers/publisher";
import Player from "./factories/player";
import ele from "./dom/ele";
import fleet from "./helpers/fleet";

const game = {
  mode: "",

  setMode(mode) {
    this.mode = mode;
  },

  init() {
    this.hu = new Player();
    this.ai = new Player("ai");
    this.hu.assignEnemyGameBoard(this.ai.gameBoard);
    this.ai.assignEnemyGameBoard(this.hu.gameBoard);
    const appendToPreview = ele.previewContainer;
    const huBoardData = this.hu.gameBoard.board;
    this.emit("render board", {
      appendTo: appendToPreview,
      boardData: huBoardData,
      type: "preview",
    });
    this.emit("initialize");
  },

  start() {
    this.turn = "hu";
    const p1AppendTo = ele.p1Container;
    const huBoardData = this.hu.gameBoard.board;
    const p2AppendTo = ele.p2Container;
    const aiBoardData = this.ai.gameBoard.board;
    this.hu.assignEnemyGameBoard(this.ai.gameBoard);
    this.ai.assignEnemyGameBoard(this.hu.gameBoard);
    this.emit("render board", {
      appendTo: p1AppendTo,
      boardData: huBoardData,
      type: "hu",
    });
    this.emit("render board", {
      appendTo: p2AppendTo,
      boardData: aiBoardData,
      type: "ai",
    });
  },

  restart() {
    this.init();
  },

  reset() {
    this.init();
  },

  randomize() {
    this.hu = new Player();
    this.ai = new Player("ai");
    this.hu.gameBoard.placeShipsRandomly(fleet);
    this.ai.gameBoard.placeShipsRandomly(fleet);
    const appendToPreview = ele.previewContainer;
    const huBoardData = this.hu.gameBoard.board;
    this.emit("render board", {
      appendTo: appendToPreview,
      boardData: huBoardData,
      type: "preview",
    });
    const appendTo = ele.shipsStat;
    const shipsData = this.ai.gameBoard.ships;
    this.emit("render ships status", { appendTo, shipsData });
  },

  attack(cord) {
    this.hu.attack(cord);
    const p2AppendTo = ele.p2Container;
    const aiBoardData = this.ai.gameBoard.board;
    this.emit("render board", {
      appendTo: p2AppendTo,
      boardData: aiBoardData,
      type: "ai",
    });
    const appendTo = ele.shipsStat;
    const shipsData = this.ai.gameBoard.ships;
    this.emit("render ships status", { appendTo, shipsData });
    this.aiAttack();
  },

  aiAttack() {
    this.ai.aiAttack();
    const p1AppendTo = ele.p1Container;
    const huBoardData = this.hu.gameBoard.board;
    setTimeout(() => {
      this.emit("render board", {
        appendTo: p1AppendTo,
        boardData: huBoardData,
        type: "hu",
      });
    }, 700);
  },

  placeShip() {},

  checkWinner() {},
};

makePublisher(game);

export default game;
