function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

const array = [7, 4, 9, 6, 5, 2];
const target = 6;

// [7,2,4,5]

const result = array.reduce((prev, current,) => {
  if (prev.includes(current)) {
    {
      return prev;
    }
  }
}, []);

console.log({ result });

//
// function Google(arr, target) {
//   return arr.reduce((a, b) => a + b, []) === target;
// }
// Google([1, 2, 3], 3);
