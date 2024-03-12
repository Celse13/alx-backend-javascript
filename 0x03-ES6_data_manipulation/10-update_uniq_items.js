export default function updateUniqueItems(object) {
    if (!(object instanceof Map)) throw Error('Cannot process');
    for (const [key, val] of object) {
      if (val === 1) { obj.set(key, 100); }
    }
  }
