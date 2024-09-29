import { removeDup } from "../Logic/Method";

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
    case "Shield":
      return "#131111";
  }
};

export default function TopPlayers({ objData, level }) {
  const LevelNumbers = [...new Set(objData.map((obj) => +obj.Level))];
  const highestLevel = Math.max(...LevelNumbers);

  const highestEntries = removeDup(
    objData.filter((obj) => obj.Level == +highestLevel)
  );

  console.log(highestLevel);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 justify-evenly gap-0.5 select-none w-[95%] max-w-[1200px] mx-auto px-2">
      {highestEntries.map((obj) => (
        <div
          className="w-full min-h-[125px] relative bg-transparent shadow-[0_0_15px_black] border-[1px] border-[black] rounded-xl"
          style={{ backgroundColor: `${weaponColor(obj.Weapon)}66` }}
        >
          <div className="absolute bg-[#17171799] h-full w-full top-0 left-0 object-cover rounded-xl" />
          <div
            className="absolute h-full w-full top-0 left-0 -z-10 rounded-xl opacity-60 bg-top bg-cover"
            style={{ backgroundImage: `url("/${obj.Weapon}.png")` }}
          />
          <div className="h-full flex flex-col items-center justify-center font-serif">
            <div className="text-[10px] uppercase z-20">{obj.Weapon}</div>
            <div className="text-error z-20">{obj.Name}</div>
            <div className="text-white text-[12px] z-20">
              {level} {obj.Level}
            </div>
            <div className="text-[10px] uppercase z-20">{obj.Aspect}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
