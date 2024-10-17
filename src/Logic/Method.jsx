import { boonOrder } from "./Boons";

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

export function customRemove(obj) {
  const seen = new Set();
  const result = obj.filter((item) => {
    const key = `${item.Name}`;
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

export function ReturnBoonList(str) {
  let boonArr = str.split(",");
  let finalized = boonArr.map((item) => item.trim());
  let orderFinalized = finalized.sort(
    (a, b) => boonOrder.indexOf(a) - boonOrder.indexOf(b)
  );
  return orderFinalized;
}

export function testReturnBoonFilter(str) {
  let boonArr = str.split(",");
  let finalized = boonArr.map((item) => item.trim());
  let filter = finalized.filter((item) => boonEntry.includes(item));
  let orderFinalized = filter.sort(
    (a, b) => boonEntry.indexOf(a) - boonEntry.indexOf(b)
  );
  return orderFinalized;
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

export const boonEntry = [
  // ALL STRIKES
  `Flutter_Strike`,
  `Nova_Strike`,
  `Ice_Strike`,
  `Volcanic_Strike`,
  `Sworn_Strike`,
  `Flame_Strike`,
  `Nimble_Limbs`,
  `Nimble_Mind`,
  `Wave_Strike`,
  `Heaven_Strike`,

  // ALL FLOURISHES
  `Flutter_Flourish`,
  `Nova_Flourish`,
  `Ice_Flourish`,
  `Volcanic_Flourish`,
  `Sworn_Flourish`,
  `Flame_Flourish`,
  `Swift_Strike`,
  `Swift_Flourish`,
  `Wave_Flourish`,
  `Heaven_Flourish`,

  // ALL RINGS
  `Rapture_Ring`,
  `Solar_Ring`,
  `Prominence_Flare`,
  `Arctic_Ring`,
  `Anvil_Ring`,
  `Engagement_Ring`,
  `Smolder_Ring`,
  `Storm_Ring`,
  `Saved_Breath`,
  `Geyser_Spout`,
  `Tidal_Ring`,
  `Geyser_Ring`,

  // ALL SPRINTS
  `Passion_Rush`,
  `Passion_Dash`,
  `Blinding_Sprint`,
  `Frigid_Sprint`,
  `Smithy_Sprint`,
  `Nexus_Sprint`,
  `Soot_Sprint`,
  `Breaker_Sprint`,
  `Thunder_Sprint`,
  `Nitro_Boost`,

  // ALL GAINS
  `Glamour_Gain`,
  `Lucid_Gain`,
  `Tranquil_Gain`,
  `Fixed_Gain`,
  `Born_Gain`,
  `Hearth_Gain`,
  `Fluid_Gain`,
  `Ionic_Gain`,
  `Witty_Retort`,
];
