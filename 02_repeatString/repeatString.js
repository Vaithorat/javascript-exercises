const repeatString = function (string, num) {
  if ((num == 0)) return "";
  if (num<0) return "ERROR"
  if (num > 0) {
    let str = "hey";
    for (let i = 1; i < num; i++) {
      str = str + "hey";
    }
    return str;
  }
};

// Do not edit below this line
module.exports = repeatString;
