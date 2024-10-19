export function genNum920() {
  return Math.floor(Math.random() * (20 - 9 + 1)) + 9;
}
function genNum060() {
  return Math.floor(Math.random() * (60 - 0 + 1));
}
function genNum099() {
  return Math.floor(Math.random() * (99 - 0 + 1));
}

export function genTime() {
  return `${genNum920()}:${genNum060()}.${genNum099()}`;
}
//

const genstrike = [
  `No_Strike`,
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
];

const genflour = [
  `No_Flourish`,
  `Flutter_Flourish`,
  `Nova_Flourish`,
  `Ice_Flourish`,
  `Volcanic_Flourish`,
  `Sworn_Flourish`,
  `Flame_Flourish`,
  `Swift_Flourish`,
  `Wave_Flourish`,
  `Heaven_Flourish`,
];

const gensprint = [
  `No_Sprint`,
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
];

const genring = [
  `No_Ring`,
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
];

const gengain = [
  `No_Gain`,
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

export const boonEntry = [
  // ALL STRIKES
  `No_Strike`,
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
  `No_Flourish`,
  `Flutter_Flourish`,
  `Nova_Flourish`,
  `Ice_Flourish`,
  `Volcanic_Flourish`,
  `Sworn_Flourish`,
  `Flame_Flourish`,
  `Swift_Flourish`,
  `Wave_Flourish`,
  `Heaven_Flourish`,

  // ALL RINGS
  `No_Ring`,
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
  `No_Sprint`,
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
  `No_Gain`,
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

export function genBoonString() {
  const randomIndex1 = Math.floor(Math.random() * genflour.length);
  const randomIndex2 = Math.floor(Math.random() * genring.length);
  const randomIndex3 = Math.floor(Math.random() * genstrike.length);
  const randomIndex4 = Math.floor(Math.random() * gengain.length);
  const randomIndex5 = Math.floor(Math.random() * gensprint.length);
  return `${genflour[randomIndex1]},${genring[randomIndex2]},${genstrike[randomIndex3]},${gengain[randomIndex4]},${gensprint[randomIndex5]}`;
}
