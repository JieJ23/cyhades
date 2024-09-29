export function removeDup(obj) {
  const seen = new Set();
  const result = obj.filter((item) => {
    const key = `${item.Name}-${item.Aspect}`;
    if (seen.has(key)) {
      return false;
    } else {
      seen.add(key);
      return true;
    }
  });
  return result;
}
