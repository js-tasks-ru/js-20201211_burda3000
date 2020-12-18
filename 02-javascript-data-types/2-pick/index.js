/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  return Object.fromEntries(
    // преобразовать в массив, затем map, затем fromEntries обратно в объект
    Object.entries(obj).filter(item => fields.includes(item[0]))
  );
};


