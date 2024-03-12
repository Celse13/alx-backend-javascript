export default function updateUniqueItems(obj) {
  if (!(obj instanceof Map)) throw Error('Cannot process');
  for (const [key, val] of obj) {
    if (val === 1) { obj.set(key, 100); }
  }
}
