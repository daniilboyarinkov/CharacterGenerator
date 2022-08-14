// not used anywhere, but might be useful for feature
export default function objectMap(obj, fn) {
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]))
}
