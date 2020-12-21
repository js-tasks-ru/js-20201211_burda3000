/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (typeof obj !== "object") return undefined;

  const newObject = {};

  for (const [key, value] of Object.entries(obj)) {
    newObject[value] = key;
  }
  return newObject;
}
