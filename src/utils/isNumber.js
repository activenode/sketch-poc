export function isNumber(n, implicitConversion = true) {
  const _n = implicitConversion ? n * 1 : n;
  return !isNaN(_n) && typeof _n === "number";
}

export function isPositiveNumber(n, implicitConversion = true) {
  return isNumber(n, implicitConversion) && n >= 0;
}
