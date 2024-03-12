export default function getIdsSum(list) {
  return list.reduce((sum, { id }) => sum + id, 0);
}
