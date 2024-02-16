const convertToCelsius = function(temp_in_degF) {
  return roundToOneDigit((temp_in_degF - 32) * (5 / 9));
};

const convertToFahrenheit = function(temp_in_degC) {
  return roundToOneDigit((temp_in_degC * (9 / 5)) + 32);
};

function roundToOneDigit(n) {
  return Number(n.toFixed(1));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
