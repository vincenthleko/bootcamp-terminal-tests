export function countAllPaarl (regNumbers) {
    var splitRegNumbers = regNumbers.split(',');
    var count = 0;
    for (let i=0; i<splitRegNumbers.length; i++) {
      var regNumber = splitRegNumbers[i].trim();
      if (regNumber.startsWith('CJ')) {
        count++;
      }
    }
    return count;
  }