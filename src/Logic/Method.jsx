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

export function removeDupCate(obj) {
  const seen = new Set();
  const result = obj.filter((item) => {
    const key = `${item.Name}-${item.Aspect}-${item.Category}`;
    if (seen.has(key)) {
      return false;
    } else {
      seen.add(key);
      return true;
    }
  });
  return result;
}

export const customOrder = ["Unseeded", "Seeded", "Modded"];
