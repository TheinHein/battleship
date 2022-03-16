import makePublisher from "./helpers/publisher";
import Player from "./factories/player";
import ele from "./dom/ele";
import fleet from "./helpers/fleet";

const game = {
  dir: "X",
  p1Fleet: Array.from(fleet),
  p2Fleet: Array.from(fleet),

  setMode(mode) {
    this.mode = mode;
    if (this.mode === "pvc") this.emit("add event pvc only");
  },

  setRotate(dir) {
    this.dir = dir;
    const p1Ship = this.p1Fleet[0];
    const p2Ship = this.p2Fleet[0];
    if (this.turn === "p1") {
      this.emit("render board", {
        appendTo: ele.previewContainer,
        boardData: this.p1.gameBoard.board,
        type: "preview",
        shipSize: p1Ship.len,
      });
    } else if (this.turn === "p2") {
      this.emit("render board", {
        appendTo: ele.previewContainer,
        boardData: this.p2.gameBoard.board,
        type: "preview",
        shipSize: p2Ship.len,
      });
    }
  },

  setNew() {
    this.p1 = new Player();
    if (this.mode === "pvc") this.p2 = new Player("ai");
    else if (this.mode === "pvp") this.p2 = new Player();
    this.p1.assignEnemyGameBoard(this.p2.gameBoard);
    this.p2.assignEnemyGameBoard(this.p1.gameBoard);
    this.turn = "p1";
    this.emit("render board", {
      appendTo: ele.previewContainer,
      boardData: this.p1.gameBoard.board,
      type: "preview",
      shipSize: this.p1Fleet[0].len,
    });
  },

  start() {
    this.p1.assignEnemyGameBoard(this.p2.gameBoard);
    this.p2.assignEnemyGameBoard(this.p1.gameBoard);
    this.emit("render board", {
      appendTo: ele.mainDisplay,
      boardData: this.p2.gameBoard.board,
      type: "clickable",
    });
    this.emit("render board", {
      appendTo: ele.sideDisplay,
      boardData: this.p1.gameBoard.board,
    });
    this.emit("render ships status", {
      appendTo: ele.shipsStat,
      shipsData: this.p2.gameBoard.ships,
    });
    this.turn = "p1";
  },

  restart() {
    this.p1 = null;
    this.p2 = null;
    this.p1Fleet = Array.from(fleet);
    this.p2Fleet = Array.from(fleet);
  },

  reset() {
    this.p1Fleet = Array.from(fleet);
    this.p2Fleet = Array.from(fleet);
    if (this.turn === "p1") {
      this.setNew();
    } else if (this.turn === "p2") {
      this.p2 = new Player();
      this.p1.assignEnemyGameBoard(this.p2.gameBoard);
      this.p2.assignEnemyGameBoard(this.p1.gameBoard);
      this.emit("render board", {
        appendTo: ele.previewContainer,
        boardData: this.p2.gameBoard.board,
        type: "preview",
        shipSize: this.p2Fleet[0].len,
      });
    }
  },

  randomize() {
    if (this.turn === "p1") {
      this.p1 = new Player();
      this.p1.gameBoard.placeShipsRandomly(fleet);
      this.emit("render board", {
        appendTo: ele.previewContainer,
        boardData: this.p1.gameBoard.board,
        type: "preview",
      });
      if (this.mode === "pvc") {
        this.p2 = new Player("ai");
        this.p2.gameBoard.placeShipsRandomly(fleet);
      }
    } else if (this.turn === "p2") {
      this.p2 = new Player();
      this.p2.gameBoard.placeShipsRandomly(fleet);
      this.emit("render board", {
        appendTo: ele.previewContainer,
        boardData: this.p2.gameBoard.board,
        type: "preview",
      });
    }
  },

  attack(cord) {
    if (this.turn === "p1") {
      this.p1Attack(cord);
      if (this.mode === "pvp") {
        setTimeout(() => {
          ele.passScreenContainer.classList.add("show");
          this.emit("render pass screen", {
            reference: ele.continueBtn,
            turn: this.turn,
          });
          this.emit("render board", {
            appendTo: ele.mainDisplay,
            boardData: this.p1.gameBoard.board,
            type: "clickable",
          });
          this.emit("render board", {
            appendTo: ele.sideDisplay,
            boardData: this.p2.gameBoard.board,
          });
          this.emit("render ships status", {
            appendTo: ele.shipsStat,
            shipsData: this.p1.gameBoard.ships,
          });
        }, 800);
      } else if (this.mode === "pvc") this.aiAttack();
    } else if (this.turn === "p2" && this.mode === "pvp") this.p2Attack(cord);
  },

  p1Attack(cord) {
    this.p1.attack(cord);
    this.turn = "p2";
    this.emit("render board", {
      appendTo: ele.mainDisplay,
      boardData: this.p2.gameBoard.board,
      type: "clickable",
    });
    this.emit("render ships status", {
      appendTo: ele.shipsStat,
      shipsData: this.p2.gameBoard.ships,
    });
    this.checkWinner();
  },

  p2Attack(cord) {
    this.p2.attack(cord);
    this.turn = "p1";
    this.emit("render board", {
      appendTo: ele.mainDisplay,
      boardData: this.p1.gameBoard.board,
      type: "clickable",
    });
    this.emit("render board", {
      appendTo: ele.sideDisplay,
      boardData: this.p2.gameBoard.board,
    });
    this.emit("render ships status", {
      appendTo: ele.shipsStat,
      shipsData: this.p1.gameBoard.ships,
    });
    if (!this.checkWinner()) {
      setTimeout(() => {
        ele.passScreenContainer.classList.add("show");
        this.emit("render pass screen", {
          reference: ele.continueBtn,
          turn: this.turn,
        });
        this.emit("render board", {
          appendTo: ele.mainDisplay,
          boardData: this.p2.gameBoard.board,
          type: "clickable",
        });
        this.emit("render board", {
          appendTo: ele.sideDisplay,
          boardData: this.p1.gameBoard.board,
        });
        this.emit("render ships status", {
          appendTo: ele.shipsStat,
          shipsData: this.p2.gameBoard.ships,
        });
      }, 800);
    }
    this.checkWinner();
    this.turn = "p1";
  },

  aiAttack() {
    this.p2.aiAttack();
    this.turn = "p1";
    setTimeout(() => {
      this.emit("render board", {
        appendTo: ele.sideDisplay,
        boardData: this.p1.gameBoard.board,
      });
    }, 700);
    this.checkWinner();
  },

  placeShip(cord) {
    if (this.turn === "p1") {
      const p1Ship = this.p1Fleet.shift();
      try {
        this.p1.gameBoard.placeShip(cord, p1Ship.len, this.dir, p1Ship.type);
        this.emit("render board", {
          appendTo: ele.previewContainer,
          boardData: this.p1.gameBoard.board,
          type: "preview",
          shipSize: p1Ship.len - 1,
        });
      } catch (e) {
        this.p1Fleet.unshift(p1Ship);
      }

      if (this.mode === "pvc") {
        this.p2 = new Player("ai");
        this.p2.gameBoard.placeShipsRandomly(fleet);
      }
    } else if (this.turn === "p2") {
      const p2Ship = this.p2Fleet.shift();
      try {
        this.p2.gameBoard.placeShip(cord, p2Ship.len, this.dir, p2Ship.type);
        this.emit("render board", {
          appendTo: ele.previewContainer,
          boardData: this.p2.gameBoard.board,
          type: "preview",
          shipSize: p2Ship.len - 1,
        });
      } catch (e) {
        this.p2Fleet.unshift(p2Ship);
      }
    }
  },

  checkWinner() {
    let context = "";
    if (this.p2.gameBoard.checkAllSunk()) {
      if (this.mode === "pvc") context = "victory is yours.";
      else if (this.mode === "pvp") context = "player 2 wins.";
      setTimeout(() => {
        ele.notificationContainer.classList.add("show");
        this.emit("render notification", {
          reference: ele.newGameBtn,
          context,
        });
      }, 800);
      return true;
    }
    if (this.p1.gameBoard.checkAllSunk()) {
      if (this.mode === "pvc") context = "you are defeated.";
      else if (this.mode === "pvp") context = "player 1 wins.";
      setTimeout(() => {
        ele.notificationContainer.classList.add("show");
        this.emit("render notification", {
          reference: ele.newGameBtn,
          context,
        });
      });
      return true;
    }
    return false;
  },

  gotoP2() {
    this.emit("render board", {
      appendTo: ele.previewContainer,
      boardData: this.p2.gameBoard.board,
      type: "preview",
      shipSize: this.p2Fleet[0].len,
    });
    this.turn = "p2";
  },

  addEvt() {
    this.emit("add event");
  },
};

makePublisher(game);

export default game;
