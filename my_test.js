/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position.
 *
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */
 function swapHeadAndTail(arr) {
  if (arr.length === 1) return arr;
  const halfLength = Math.floor(arr.length / 2);
  const res = [];
  res.push(arr.slice(-halfLength));
  if (arr.length % 2) res.push(halfLength);
  res.push(arr.slice(0, halfLength));
  return res.flat();
}

console.log(swapHeadAndTail([1, 2, 3]));
