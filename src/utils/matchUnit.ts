const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))(vh|vw|px|em|rem|%)$/;

export default function matchUnit(
  value: string | number,
): (string | number | undefined)[] {
  if (typeof value !== 'string') {
    return [value, undefined];
  }

  const matchedValue = value.match(cssRegex);

  if (matchedValue) {
    return [parseFloat(value), matchedValue[2]];
  }
  return [value, undefined];
}
