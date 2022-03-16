import ele from "./ele";
import game from "../game";
import alphabets from "../helpers/alphabets";

const events = (() => {
  function addP2BoardClickEvt() {
    ele.mainDisplay.addEventListener("click", () => {
      const mediaQuery = window.matchMedia("(min-width: 1024px)");
      if (!mediaQuery.matches) {
        ele.sideDisplay.classList.add("zoom-in");
        ele.sideDisplay.classList.remove("zoom-out");
        ele.mainDisplay.classList.add("zoom-out");

        setTimeout(() => {
          ele.sideDisplay.classList.remove("zoom-in");
          ele.sideDisplay.classList.add("zoom-out");
          ele.mainDisplay.classList.remove("zoom-out");
          ele.mainDisplay.classList.add("zoom-in");
        }, 1200);
      }
      setTimeout(() => {
        ele.sideDisplay.classList.remove("zoom-out");
        ele.sideDisplay.classList.remove("zoom-in");
        ele.mainDisplay.classList.remove("zoom-out");
        ele.mainDisplay.classList.remove("zoom-in");
      }, 1500);
    });
  }

  function start() {
    game.start();
    ele.pregameContainer.classList.remove("show");
  }

  function addStartEvt() {
    ele.startBtn.addEventListener("click", start);
  }

  function addRandomizeEvt() {
    ele.randomizeBtn.addEventListener("click", (e) =>
      game.randomize(e.target.turn)
    );
  }

  function addResetEvt() {
    ele.resetBtn.addEventListener("click", () => game.reset());
  }

  function addRestartEvt() {
    ele.restartBtn.addEventListener("click", () => {
      game.restart();
      ele.newGameContainer.classList.add("show");
    });
  }

  function addAttackEvt(data) {
    const { board, boardData } = data;
    const boardBody = board.fragment.firstChild.lastChild.childNodes;
    boardBody.forEach((row) => {
      row.childNodes.forEach((tile) => {
        const { cord } = tile.dataset;
        if (cord) {
          const x = alphabets.indexOf(cord.slice(0, 1));
          const y = parseInt(cord.slice(1), 10) - 1;
          if (!boardData[x][y].isHit && !boardData[x][y].isMissed)
            tile.addEventListener("click", () => game.attack(cord));
        }
      });
    });
  }

  function addPlaceShipsEvt(data) {
    const { board, shipSize } = data;
    let hor = true;
    if (game.dir === "X") hor = true;
    else if (game.dir === "Y") hor = false;
    const boardBody = board.fragment.firstChild.lastChild.childNodes;
    boardBody.forEach((row) => {
      row.childNodes.forEach((tile) => {
        if (hor) {
          tile.addEventListener("mouseover", (e) => {
            e.stopPropagation();
            const children = Array.from(e.target.parentNode.childNodes);
            for (let i = 0; i < shipSize; i += 1) {
              const index = children.indexOf(e.target);
              if (typeof children[index + i] === "undefined") return;
              children[index + i].classList.add("hover");
            }
          });
          tile.addEventListener("mouseout", (e) => {
            const children = Array.from(e.target.parentNode.childNodes);
            for (let i = 0; i < shipSize; i += 1) {
              const index = children.indexOf(e.target);
              if (typeof children[index + i] === "undefined") return;
              children[index + i].classList.remove("hover");
            }
          });
        } else {
          tile.addEventListener("mouseover", (e) => {
            e.stopPropagation();
            if (typeof e.target.dataset.cord === "undefined") return;
            const x = alphabets.indexOf(e.target.dataset.cord.slice(0, 1));
            const y = parseInt(e.target.dataset.cord.slice(1), 10);
            const cords = alphabets
              .slice(x, x + shipSize)
              .map((a) => `${a}${y}`);
            for (let i = 0; i < cords.length; i += 1) {
              boardBody.forEach((r) => {
                r.childNodes.forEach((t) => {
                  if (t.dataset.cord && t.dataset.cord === cords[i]) {
                    const at = t;
                    at.classList.add("hover");
                  }
                });
              });
            }
          });
          tile.addEventListener("mouseout", (e) => {
            if (typeof e.target.dataset.cord === "undefined") return;
            const x = alphabets.indexOf(e.target.dataset.cord.slice(0, 1));
            const y = parseInt(e.target.dataset.cord.slice(1), 10);
            const cords = alphabets
              .slice(x, x + shipSize)
              .map((a) => `${a}${y}`);
            for (let i = 0; i < cords.length; i += 1) {
              boardBody.forEach((r) => {
                r.childNodes.forEach((t) => {
                  if (t.dataset.cord && t.dataset.cord === cords[i]) {
                    const at = t;
                    at.classList.remove("hover");
                  }
                });
              });
            }
          });
        }
        tile.addEventListener("click", (e) => {
          game.placeShip(e.target.dataset.cord, "Y");
        });
      });
    });
  }

  function addPvpEvt() {
    console.log("add pvp");
    ele.pvpBtn.addEventListener("click", () => {
      game.setMode("pvp");
      ele.p2Btn.classList.remove("hide");
      ele.startBtn.classList.add("hide");
    });
  }

  function addPvcEvt() {
    console.log("add pvc");
    ele.pvcBtn.addEventListener("click", () => {
      game.setMode("pvc");
      ele.startBtn.classList.remove("hide");
      ele.p2Btn.classList.add("hide");
    });
  }

  function addNewEvt() {
    console.log("add new");
    ele.newBtn.addEventListener("click", () => {
      game.setNew();
      ele.newGameContainer.classList.remove("show");
      ele.pregameContainer.classList.add("show");
    });
  }

  function addP2Evt() {
    console.log("add p2");
    ele.p2Btn.addEventListener("click", () => {
      game.gotoP2();
      ele.p2Btn.classList.add("hide");
      ele.startBtn.classList.remove("hide");
    });
  }

  function addContinueEvt() {
    ele.continueBtn.addEventListener("click", () => {
      ele.passScreenContainer.classList.remove("show");
    });
  }

  function addNewGameEvt() {
    ele.newGameBtn.addEventListener("click", () => {
      game.setNew();
      ele.notificationContainer.classList.remove("show");
      ele.newGameContainer.classList.add("show");
    });
  }

  function addRotateEvt() {
    ele.rotateBtn.addEventListener("click", () => {
      console.log("click");
      if (
        ele.toggle.className === "toggle" ||
        ele.toggle.className === "toggle horizontal"
      ) {
        ele.toggle.className = "toggle vertical";
        game.setRotate("Y");
        console.log(game.dir);
      } else if (ele.toggle.className === "toggle vertical") {
        ele.toggle.className = "toggle horizontal";
        game.setRotate("X");
        console.log(game.dir);
      }
    });
  }
  return {
    addP2BoardClickEvt,
    addStartEvt,
    addRandomizeEvt,
    addResetEvt,
    addRestartEvt,
    addAttackEvt,
    addPvcEvt,
    addPvpEvt,
    addNewEvt,
    addP2Evt,
    addContinueEvt,
    addNewGameEvt,
    addPlaceShipsEvt,
    addRotateEvt,
  };
})();

game.on("add event", "addPvpEvt", events);
game.on("add event", "addPvcEvt", events);
game.on("add event", "addNewEvt", events);
game.on("add event", "addRandomizeEvt", events);
game.on("add event", "addStartEvt", events);
game.on("add event pvc only", "addP2BoardClickEvt", events);
game.on("add event", "addRestartEvt", events);
game.on("add event", "addResetEvt", events);
game.on("add event", "addP2Evt", events);
game.on("add event", "addContinueEvt", events);
game.on("add event", "addNewGameEvt", events);
game.on("add event", "addRotateEvt", events);

game.on("add attack events", "addAttackEvt", events);
game.on("add place ships events", "addPlaceShipsEvt", events);

export default events;
