// @param {number[]} ages

export function getVotersCount(ages) {
  console.log(ages);
  return ages.filter((age) => age > 17).length;
}
