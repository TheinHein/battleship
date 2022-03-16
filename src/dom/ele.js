const ele = (() => {
  const sideDisplay = document.querySelector(".side-display-container");
  const mainDisplay = document.querySelector(".main-display-container");
  const shipStatContainer = document.querySelector(".ship-stat-container");
  const restartBtn = document.querySelector(".restart");
  const pregameContainer = document.querySelector(".pre-game-container");
  const previewContainer = document.querySelector(".preview-container");
  const shipsContainer = document.querySelector(".shipsContainer");
  const resetBtn = document.querySelector(".reset");
  const randomizeBtn = document.querySelector(".randomize");
  const startBtn = document.querySelector(".start");
  const notificationContainer = document.querySelector(
    ".notification-container"
  );
  const shipsStat = Array.from(document.querySelectorAll(".ship-stat"));
  const newGameContainer = document.querySelector(".new-game-container");
  const pvpBtn = document.querySelector(".pvp");
  const pvcBtn = document.querySelector(".pvc");
  const newBtn = document.querySelector(".new");
  const p2Btn = document.querySelector(".p2");
  const continueBtn = document.querySelector(".continue");
  const passScreenContainer = document.querySelector(".pass-screen-container");
  const carrier = document.querySelector("#carrier");
  const destroyer = document.querySelector("#destroyer");
  const battleship = document.querySelector("#battleship");
  const patrolBoat = document.querySelector("#patrol-boat");
  const cruiser = document.querySelector("#cruiser");
  const newGameBtn = document.querySelector(".new-game-btn");
  const rotateBtn = document.querySelector(".rotate");
  const toggle = document.querySelector(".toggle");

  return {
    sideDisplay,
    mainDisplay,
    shipStatContainer,
    restartBtn,
    pregameContainer,
    previewContainer,
    shipsContainer,
    resetBtn,
    randomizeBtn,
    startBtn,
    notificationContainer,
    shipsStat,
    newGameContainer,
    pvcBtn,
    pvpBtn,
    newBtn,
    p2Btn,
    continueBtn,
    passScreenContainer,
    carrier,
    battleship,
    destroyer,
    patrolBoat,
    cruiser,
    newGameBtn,
    rotateBtn,
    toggle,
  };
})();

export default ele;
