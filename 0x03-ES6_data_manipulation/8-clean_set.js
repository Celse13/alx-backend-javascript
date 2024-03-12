export default function cleanSet(set, startString) {
  let result = '';
  if (!startString || typeof startString !== 'string' || !set || !(set instanceof Set)) {
    return '';
  }
  set.forEach((elem) => {
    if (typeof elem === 'string' && elem.startsWith(startString)) {
      result += `${elem.substring(startString.length)}-`;
    }
  });
  return result.slice(0, -1);
}
