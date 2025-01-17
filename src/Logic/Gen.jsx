export function genNum920() {
  return Math.floor(Math.random() * (20 - 9 + 1)) + 9;
}
function genNum060() {
  const num = Math.floor(Math.random() * 61); // Generates a number between 0 and 60
  return num < 10 ? `0${num}` : `${num}`;
}

function genNum099() {
  const num = Math.floor(Math.random() * 99); // Generates a number between 0 and 60
  return num < 10 ? `0${num}` : `${num}`;
}

export function genTime() {
  return `${genNum920()}:${genNum060()}.${genNum099()}`;
}
//

export const genstrike = [
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

export const genflour = [
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

export const gensprint = [
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

export const genring = [
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

export const gengain = [
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
  `Warmth_Gain`,
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

export const defineWeapon = (aspect) => {
  switch (aspect) {
    case `Melinoe Staff`:
    case `Circe`:
    case `Momus`:
      return `Witch's Staff`;

    case `Melinoe Blade`:
    case `Artemis`:
    case `Pan`:
      return `Sister Blades`;

    case `Melinoe Flames`:
    case `Moros`:
    case `Eos`:
      return `Umbral Flames`;

    case `Melinoe Axe`:
    case `Charon`:
    case `Thanatos`:
      return `Moonstone Axe`;

    case `Melinoe Skull`:
    case `Medea`:
    case `Persephone`:
      return `Argent Skull`;

    case `Melinoe Coat`:
    case `Selene`:
    case `Nyx`:
      return `Black Coat`;
  }
};
