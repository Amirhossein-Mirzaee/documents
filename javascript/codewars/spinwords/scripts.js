function spinWords(string) {
  let result = "";
  const words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > 5) {
      const drow = word.split("").reverse().join("");

      result = result + drow + " ";
    } else if (word.length === 5) {
      result = result + word.toUpperCase() + " ";
    } else {
      result = result + word + " ";
    }
  }

  return result.trim();
}

console.log(spinWords("Hey fellow warriors amirhosse is besty "));
