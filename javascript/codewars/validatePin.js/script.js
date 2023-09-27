function validatePIN(pin) {
  const length = pin.length;
  return (length === 4 || length === 6) && !isNaN(pin) && +pin >= 0 && Number.isInteger(+pin) && !pin.toString().includes(".") && !pin.toString().includes(" ") && !pin.toString().includes("\n")
   && !pin.toString().includes(["+"]);
}
const result = validatePIN("1234");

console.log(result);

