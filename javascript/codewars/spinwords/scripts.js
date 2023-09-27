function spinWords(string) {
  let result = "";
  const words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length >= 5) {
      const drow = word.split("").reverse().join("");

      result = result + drow + " ";
    } else {
      result = result + word + " ";
    }
  }

  return result.trim();
}
const mesal = spinWords("kharchang haye ashi mashii");

console.log(mesal);
