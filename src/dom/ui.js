import game from "../game";
import GameBoardComponent from "./components/game-board-components";

const ui = (() => {
  const renderBoard = (data) => {
    const { appendTo, boardData, type, shipSize } = data;
    const board = new GameBoardComponent(boardData, type);
    if (type === "clickable")
      game.emit("add attack events", { board, boardData });
    else if (type === "preview")
      game.emit("add place ships events", { board, shipSize });
    const newNode = board.fragment;
    const oldNode = appendTo.firstChild || null;
    if (oldNode) oldNode.replaceWith(newNode);
    else appendTo.appendChild(newNode);
  };

  const renderShipsStat = (data) => {
    const { appendTo, shipsData } = data;
    const ships = Object.keys(shipsData);
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < appendTo.length; i += 1) {
      while (appendTo[i].childNodes.length > 0) {
        appendTo[i].removeChild(appendTo[i].firstChild);
      }
      const component = document.createElement("div");
      for (let j = 0; j < shipsData[ships[i]].loc.length; j += 1) {
        const div = document.createElement("div");
        div.dataset.cord = shipsData[ships[i]].loc[j];
        if (shipsData[ships[i]].loc[j].includes("hit"))
          div.classList.add("hit");
        component.appendChild(div);
      }
      fragment.appendChild(component);
      appendTo[i].appendChild(fragment);
    }
  };

  const renderPassScreen = (data) => {
    const { reference, turn } = data;
    while (reference.parentNode.childNodes.length > 2) {
      reference.parentNode.removeChild(reference.parentNode.firstChild);
    }
    const fragment = document.createDocumentFragment();
    const p = document.createElement("p");
    p.textContent = `please pass the device to player ${turn}`;
    fragment.appendChild(p);
    reference.parentNode.insertBefore(fragment, reference);
  };

  const renderNotification = (data) => {
    const { reference, context } = data;
    while (reference.parentNode.childNodes.length > 2) {
      reference.parentNode.removeChild(reference.parentNode.firstChild);
    }
    const fragment = document.createDocumentFragment();
    const p = document.createElement("p");
    p.textContent = `${context}`;
    fragment.appendChild(p);
    reference.parentNode.insertBefore(fragment, reference);
  };

  return {
    renderBoard,
    renderShipsStat,
    renderPassScreen,
    renderNotification,
  };
})();

game.on("render board", "renderBoard", ui);
game.on("render ships status", "renderShipsStat", ui);
game.on("render pass screen", "renderPassScreen", ui);
game.on("render notification", "renderNotification", ui);

export default ui;
