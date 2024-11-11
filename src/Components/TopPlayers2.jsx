import { removeDup } from "../Logic/Method";
import { hades2CN } from "../Data/Hades2NewData";
import { customOrder } from "../Logic/Method";
import { ReturnBoonList } from "../Logic/Method";
import { genBoonString } from "../Logic/Gen";
import { calculateTime } from "../Logic/Method";

export const weaponColor = (type) => {
  switch (type) {
    case "Sword":
    case "Argent Skull":
      return `#990000`;
    case "Spear":
    case "Witch's Staff":
      return `#5C4033`;
    case "Fists":
    case "Umbral Flames":
      return `#301934`;
    case "Bow":
    case "Moonstone Axe":
      return `#013220`;
    case "Rail":
    case "Sister Blades":
      return "#003366";
    case "Black Coat":
    case "Shield":
      return "#131111";
  }
};

export const weaponGIF = (type) => {
  switch (type) {
    case "Sword":
    case "Argent Skull":
      return `red`;
    case "Spear":
    case "Witch's Staff":
      return `orange`;
    case "Fists":
    case "Umbral Flames":
      return `purple`;
    case "Bow":
    case "Moonstone Axe":
      return `green`;
    case "Rail":
    case "Sister Blades":
      return "blue";
    case "Black Coat":
    case "Shield":
      return "yellow";
  }
};

import { hades_WeaponOrder } from "../Logic/Method";

export default function TopPlayers2() {
  const LevelNumbers = [...new Set(hades2CN.map((obj) => obj.Fear))];
  const highestLevel = Math.max(...LevelNumbers);
  //

  const rawData = hades2CN
    .slice()
    .sort(
      (a, b) =>
        customOrder.indexOf(a.Category) - customOrder.indexOf(b.Category)
    )
    .sort(
      (a, b) => calculateTime(a["Clear Time"]) - calculateTime(b["Clear Time"])
    )
    .sort((a, b) => b.Fear - a.Fear);

  const allWeapons = [...new Set(rawData.map((obj) => obj.Weapon))];

  const holder = [];

  for (let i = 0; i < allWeapons.length; i++) {
    let temp = rawData.filter((obj) => obj.Weapon === allWeapons[i]);
    let pickFirst = temp[0];
    holder.push(pickFirst);
  }

  //
  const highestEntries = removeDup(
    hades2CN.filter((obj) => obj.Fear == +highestLevel)
  ).sort(
    (a, b) =>
      hades_WeaponOrder.indexOf(a.Aspect) - hades_WeaponOrder.indexOf(b.Aspect)
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-evenly gap-1 select-none w-full max-w-[1400px] mx-auto px-2 mt-5">
      {holder.map((obj) => (
        <div className="w-full min-h-[150px] relative bg-transparent shadow-[inset_0_0_10px_black] p-4">
          <div
            className="absolute h-full w-full  top-0 left-0"
            style={{
              borderImage: `url(/Border/one.png) 32 fill`, // URL to the image and slicing settings
              borderImageWidth: "10px", // Set the width of the border image
            }}
          />
          <div
            className="absolute h-full w-full top-0 left-0"
            style={{
              borderImage: `url(/Border/border.png) 128 fill`,
              borderImageWidth: "30px",
            }}
          />
          {/* <div className="absolute bg-[#17171799] h-full w-full top-0 left-0 object-cover rounded-xl" /> */}
          {/* <div
            className="absolute h-full w-full top-0 left-0 -z-10 rounded-xl bg-top bg-cover bg-no-repeat"
            style={{ backgroundImage: `url("/${obj.Weapon}.png")` }}
          /> */}
          <div className="h-full flex flex-col items-center justify-center gap-1 font-customCin">
            <div className="text-white z-20 absolute bottom-3 left-3 text-[10px]">
              Fear {obj.Fear}
            </div>
            <div className="text-white z-20 absolute bottom-3 right-3 text-[10px]">
              {obj["Clear Time"]}
            </div>
            <div className="text-[10px] uppercase text-gray-300 z-20">
              {obj.Weapon}
            </div>
            <div className="text-white text-[15px] z-20">{obj.Name}</div>
            <div className="avatar">
              <div className="mask mask-squircle w-8 relative">
                <img
                  src={`/${weaponGIF(obj.Weapon)}.gif`}
                  className="absolute scale-125"
                />
                <img src={`/Aspects/${obj.Aspect}.png`} />
              </div>
            </div>
            <div className="mb-2">
              {ReturnBoonList(genBoonString())
                .slice(0, 5)
                .map((item) => (
                  <div className="avatar">
                    <div className="mask mask-squircle w-7">
                      <img src={`/Boon/${item}.png`} draggable={false} />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
