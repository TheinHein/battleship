const ele = (() => {
  const p1Container = document.querySelector(".p1-container");
  const p2Container = document.querySelector(".p2-container");
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

  return {
    p1Container,
    p2Container,
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
  };
})();

export default ele;
