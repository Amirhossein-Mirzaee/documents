function createCounter(n) {
  const arrCall = ["call", "call", "call"];
  if (-1000 <= n <= 1000 && 1000 >= arrCall.length >= 0) {
    const result = arrCall.reduce((prev, _, index) => {
      if (index === 0) prev.push(n);
      else prev.push(prev[index - 1] + 1);
      return prev;
    }, []);
    return result;
  }
}

console.log(1 + 2); //3
console.log("1" + "2"); //un X => 12   concat
console.log("1" - "2"); //un X => -1
console.log("1" * "2"); //"2" X => 2
console.log("1" ** "2"); //un X => 1
console.log("1" / "2"); // un X => 0.5
console.log("1" % "2"); // un X => 1

console.log(createCounter(10));
