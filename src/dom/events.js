import ele from "./ele";
import game from "../game";
import alphabets from "../helpers/alphabets";

const events = (() => {
  function addP2BoardClickEvt() {
    ele.p2Container.addEventListener("click", () => {
      const mediaQuery = window.matchMedia("(min-width: 1024px)");
      if (!mediaQuery.matches) {
        ele.p1Container.classList.add("zoom-in");
        ele.p1Container.classList.remove("zoom-out");
        ele.p2Container.classList.add("zoom-out");

        setTimeout(() => {
          ele.p1Container.classList.remove("zoom-in");
          ele.p1Container.classList.add("zoom-out");
          ele.p2Container.classList.remove("zoom-out");
          ele.p2Container.classList.add("zoom-in");
        }, 1200);
      }
      setTimeout(() => {
        ele.p1Container.classList.remove("zoom-out");
        ele.p1Container.classList.remove("zoom-in");
        ele.p2Container.classList.remove("zoom-out");
        ele.p2Container.classList.remove("zoom-in");
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
    ele.randomizeBtn.addEventListener("click", () => {
      game.randomize();
    });
  }

  function addResetEvt() {
    ele.resetBtn.addEventListener("click", () => {
      game.reset();
    });
  }

  function addRestartEvt() {
    ele.restartBtn.addEventListener("click", () => {
      game.restart();
      ele.pregameContainer.classList.add("show");
    });
  }

  function addAttackEvt(data) {
    const { board, boardData } = data;
    board.fragment.firstChild.lastChild.childNodes.forEach((row) => {
      row.childNodes.forEach((tile) => {
        const { cord } = tile.dataset;
        if (cord) {
          const x = alphabets.indexOf(cord.slice(0, 1));
          const y = parseInt(cord.slice(1), 10) - 1;
          if (!boardData[x][y].isHit && !boardData[x][y].isMissed)
            tile.addEventListener("click", () => {
              game.attack(cord);
            });
        }
      });
    });
  }

  return {
    addP2BoardClickEvt,
    addStartEvt,
    addRandomizeEvt,
    addResetEvt,
    addRestartEvt,
    addAttackEvt,
  };
})();

game.on("initialize", "addStartEvt", events);
game.on("initialize", "addRandomizeEvt", events);
game.on("initialize", "addResetEvt", events);
game.on("initialize", "addRestartEvt", events);
game.on("initialize", "addP2BoardClickEvt", events);
game.on("add attack events", "addAttackEvt", events);

export default events;
