import alphabets from "./alphabets";

function generateRandom() {
  const randAlphabet = alphabets[Math.floor(Math.random() * 10)];
  const randDigit = Math.ceil(Math.random() * 10);
  const randDir = ["X", "Y"][Math.floor(Math.random() * 2)];
  const randCord = `${randAlphabet}${randDigit}`;
  return { randCord, randDir };
}

export default generateRandom;
