/**
 * Returns random element of array
 * @param {string[]} string array
 * @returns string random element
 */
export default function GetOneRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
