/**
/**
 * Returns the number of positive numbers from specified array
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */
 function getPositivesCount(arr) {
  return arr.reduce((res, item) => (Number.isInteger(item) ? res + Number(item > 0) : res), 0);
}


console.log(getPositivesCount([ null, 1, 'elephant' ]));
