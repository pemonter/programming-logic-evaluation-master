export const getPrecision = (n: number): number => {
  var str = n.toString(); 
  var floatPoint = str.indexOf(".") + 1;
  
  if (floatPoint === 0 && str.indexOf("e-") < 0) {
    return 0;
  }
  
  if (floatPoint === 0 && str.indexOf("e-") > 0) {
    return parseInt(str.slice(str.indexOf("e-") + 2));
  }

  return str.slice(floatPoint).length;
};
