import "./style.css";
import game from "./game";
// eslint-disable-next-line no-unused-vars
import ui from "./dom/ui";
// eslint-disable-next-line no-unused-vars
import events from "./dom/events";

import "./images/carrier.png";
import "./images/battleship.png";
import "./images/cruiser.png";
import "./images/destroyer.png";
import "./images/patrol-boat.png";

game.init();

// ele.p2Container.addEventListener("click", () => {
//   const mediaQuery = window.matchMedia("(min-width: 1024px)");

//   if (!mediaQuery.matches) {
//     ele.p1Container.classList.add("zoom-in");
//     ele.p1Container.classList.remove("zoom-out");
//     ele.p2Container.classList.add("zoom-out");

//     setTimeout(() => {
//       ele.p1Container.classList.remove("zoom-in");
//       ele.p1Container.classList.add("zoom-out");
//       ele.p2Container.classList.remove("zoom-out");
//       ele.p2Container.classList.add("zoom-in");
//     }, 1000);
//   }
//   setTimeout(() => {
//     ele.p1Container.classList.remove("zoom-out");
//     ele.p1Container.classList.remove("zoom-in");
//     ele.p2Container.classList.remove("zoom-out");
//     ele.p2Container.classList.remove("zoom-in");
//   }, 1400);
// });
