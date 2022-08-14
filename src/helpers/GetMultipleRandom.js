/**
 * Returns num random values from given array
 * @param {number} num the number of elements needed
 * @param {array} arr given
 * @returns array of num random values
 */
const getMultipleRandom = (num, arr) =>
  [...arr].sort(() => 0.5 - Math.random()).slice(0, num) // shuffles given array randomly than slices arr to num length

// NOT the best implementation
// SHOULD: be overseen

export default getMultipleRandom
