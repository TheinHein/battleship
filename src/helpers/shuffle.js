import alphabets from "./alphabets";

const shuffle = () => {
  let shuffledArray = [];
  for (let x = 0; x < alphabets.length; x += 1) {
    const row = [];
    shuffledArray.push(row);
    for (let y = 0; y < alphabets.length; y += 1) {
      const coord = `${alphabets[x]}${y + 1}`;
      row.push(coord);
    }
  }
  shuffledArray = shuffledArray.flat();

  let i = shuffledArray.length;
  let j = 0;
  let temp;

  // eslint-disable-next-line no-plusplus
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }

  return shuffledArray;
};

export default shuffle;
