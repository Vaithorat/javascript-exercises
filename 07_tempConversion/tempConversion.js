const ftoc = function (temp) {
  var fToCel = ((temp - 32) * 5) / 9;
  fToCel = Math.round(fToCel * 10) / 10;
  return fToCel;
};

const ctof = function (temp) {
  var cToFahr = (temp * 9) / 5 + 32;
  cToFahr = Math.round(cToFahr * 10) / 10;
  return cToFahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
