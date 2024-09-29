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

export function calculateTime(num) {
  let [min, rest] = num.split(":");
  let [sec, ms] = rest.split(".");

  let minToMS = +min * 60 * 100;
  let secToMS = +sec * 100;
  let total = +minToMS + +secToMS + ms;
  return total;
}

export const hades_WeaponOrder = [
  `Zagreus Sword`,
  `Nemesis`,
  `Poseidon`,
  `Arthur`,
  `Zagreus Spear`,
  `Achilles`,
  `Hades`,
  `Guan Yu`,
  `Zagreus Shield`,
  `Chaos`,
  `Zeus`,
  `Beowulf`,
  `Zagreus Bow`,
  `Chiron`,
  `Hera`,
  `Rama`,
  `Zagreus Fists`,
  `Talos`,
  `Demeter`,
  `Gilgamesh`,
  `Zagreus Rail`,
  `Eris`,
  `Hestia`,
  `Lucifer`,
];
