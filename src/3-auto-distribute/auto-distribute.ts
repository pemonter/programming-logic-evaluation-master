export const autoDistribute = (
  total: number,
  parts: number,
  decimalPrecision: number
): Array<number> => {
  var part = parseFloat((total / parts).toFixed(decimalPrecision));
  var arr = new Array();
  var total = 0;
  
  for (var i = 0; i < parts; i++) {
    arr.push(part)
    total += arr[i];
  }

  if (total < 100) {
    var missingValue = (100 - total).toFixed(decimalPrecision);
    var count = missingValue.slice(-1);
    var missingValuePart = parseFloat(missingValue.replace(count, "1"));

    for(var i = 0; total < 100; i++) {
      arr[i] += missingValuePart;
      total += missingValuePart;
    }
  }

  if (total > 100) {
    var missingValue = (total - 100).toFixed(decimalPrecision);
    var count = missingValue.slice(-1);
    var missingValuePart = parseFloat(missingValue.replace(count, "1"));

    for(var i = (arr.length - 1); total > 100; i--) {
      arr[i] -= missingValuePart;
      total -= missingValuePart;
    }
  }

  return arr;
};
