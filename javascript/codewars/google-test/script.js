const array = [7, 4, 9, 6, 5, 2, 5];
const target = 9;

const initial = [];
const result = array.reduce((prev, current) => {
  const peyda = array.find((item) => item + current === target);
  if (peyda) {
    prev.push({ x: peyda, y: current });
  }
  return prev;
}, initial);
console.log({ result });
