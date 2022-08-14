/**
 * Capitalizes any string that starts from a-z or а-я
 * @param {string} str any string
 * @returns Capitalized string
 */
const capitalize = (str) => {
  if (!str) return ""
  return str.replace(/^[a-zа-я]/, (c) => c.toUpperCase())
}

export default capitalize
