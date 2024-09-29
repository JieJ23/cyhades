import { removeDup } from "../Logic/Method";

export const weaponColor = (type) => {
  switch (type) {
    case "Sword":
      return `#990000`;
    case "Spear":
      return `#5C4033`;
    case "Fists":
      return `#301934`;
    case "Bow":
      return `#013220`;
    case "Rail":
      return "#003366";
    case "Shield":
      return "#131111";
  }
};

export default function TopPlayers({ objData }) {
  const heatNumbers = [...new Set(objData.map((obj) => +obj.Heat))];
  const highestHeat = Math.max(...heatNumbers);

  const highestEntries = removeDup(
    objData.filter((obj) => obj.Heat == +highestHeat)
  );

  console.log(highestHeat);

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
            <div className="text-white z-20">{obj.Name}</div>
            <div className="text-[white] text-[12px] z-20">Heat {obj.Heat}</div>
            <div className="text-[10px] z-20">{obj.Aspect}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
