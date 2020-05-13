export const formatNumber = (number) => {
  var formatedNumber, int, dec, numberSplit;

  number = Math.abs(number);
  number = number.toFixed(2);

  numberSplit = number.split(".");

  int = numberSplit[0];
  dec = numberSplit[1];

  if (int.length > 3) {
    int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3);
  }
  formatedNumber = int + "." + dec;
  return formatedNumber;
};
