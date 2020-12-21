/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const props = path.split(".");

  return (getter) => {
    return props.reduce((item, key) => {
      return item ? item[key] : item;
    }, getter);
  };
}
