import alphabets from "./alphabets";

const createBoard = (size = 10) => {
  const board = [];
  for (let i = 0; i < size; i += 1) {
    const row = [];
    board.push(row);
    for (let j = 0; j < size; j += 1) {
      const tile = {
        cord: `${alphabets[i]}${j + 1}`,
        ship: null,
        isHit: false,
        isMissed: false,
      };
      row.push(tile);
    }
  }
  return board;
};

export default createBoard;
