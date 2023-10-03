function comp(a = [1, 2, 3], b = [1, 4, 9]) {
  // If either array is null or their lengths are different, return false
  if (!a || !b || a.length !== b.length) {
    return false;
  }

  // Create a copy of array b
  const bCopy = [...b];

  // Iterate over each element in array a
  for (let i = 0; i < a.length; i++) {
    // Find the square of the current element in a within the copied array b
    const squareIndex = bCopy.indexOf(a[i] * a[i]);

    // If the square is not found or is found at a different index, return false
    if (squareIndex === -1) {
      return false;
    }

    // Remove the found square from the copied array b
  }

  // If all elements in a have squared counterparts in b, return true
  return true;
}
console.log(comp([1, 2, 3], [1, 4, 78]));
