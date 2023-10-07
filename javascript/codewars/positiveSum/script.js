function positiveSum(arr) {
  const result = arr.reduce((prev, curr) => (curr > 0 ? prev + curr : prev), 0);
  return result;
}
console.log(positiveSum([1, 3, 4, 0]));
