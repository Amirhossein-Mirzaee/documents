function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

const array = [7, 4, 9, 6, 5, 2, 5];
const target = 9;

const initial = [];
const result = array.reduce((prev, current) => {
  const peyda = array.find((item) => item + current === target);
  console.log(peyda);
  if (peyda) {
    prev.push( peyda,  current );
  } if(prev.includes()) 
  return prev;
}, initial);
console.log(result);
