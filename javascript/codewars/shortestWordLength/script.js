function shortestWordLength(str) {
  var words = str.split(" ");

  var shortestLength = 0;

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var length = word.length;

    if (!shortestLength) shortestLength = length;

    if (length < shortestLength) {
      shortestLength = length;
    }
  }

  return shortestLength;
}

const result = shortestWordLength("Iterate through each word and update the shortest length if necessary");

console.log(result);
