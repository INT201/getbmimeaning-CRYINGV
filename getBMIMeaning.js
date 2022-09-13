const { template } = require('@babel/core')

function calculateBMI(weight, height) {
    let calBMI = weight /(height^2)
    return calBMI;
}
function getBMIMeaning(weight, height) {
  let eiei = calculateBMI(weight, height)
  if (eiei < 18.5) {
    return "Underweight"
  } else if (18.5 <= eiei && eiei <= 24.9) {
    return "Normal weight"
  } else {
    return "Overweight"
  }

}
module.exports = getBMIMeaning

