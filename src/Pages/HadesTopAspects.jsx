import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { Link } from "react-router-dom";
import { ReturnBoonList } from "../Logic/Method";

// import { useData } from "../Hook/DataFetch";
// import Loading from "../Hook/Loading";

import { hades_WeaponOrder } from "../Logic/Method";

import { removeDup } from "../Logic/Method";
import { Hades2FullData } from "../Data/Hades2Data";

function findAspectAndRecords(targetAspect, rawData, destination) {
  let tempArr = [];
  const targetData = rawData.filter((obj) => obj.Aspect === targetAspect);

  const unseed_data = targetData.filter((obj) => obj.Category === `Unseeded`);
  // const seed_data = targetData.filter((obj) => obj.Category === `Seeded`);
  // const mod_data = targetData.filter((obj) => obj.Category === `Modded`);

  const readyArr = [unseed_data];

  for (let i = 0; i < readyArr.length; i++) {
    const sortFindHighest = readyArr[i].sort((a, b) => b.Fear - a.Fear);
    const allFearNum = [...new Set(sortFindHighest.map((obj) => obj.Fear))];
    const highestNum = Math.max(...allFearNum);

    const finalArr = readyArr[i].filter((obj) => obj.Fear == highestNum);
    const finalized = removeDup(finalArr);
    tempArr = [...tempArr, ...finalized];
  }

  destination.push(tempArr);
}

export default function HadesTopAspect() {
  // const { posts, loader } = useData();

  const targetData = Hades2FullData.slice();
  const allAspects = [...new Set(targetData.map((obj) => obj.Aspect))].sort(
    (a, b) => hades_WeaponOrder.indexOf(a) - hades_WeaponOrder.indexOf(b)
  );

  const finalizedData = [];

  for (let i = 0; i < allAspects.length; i++) {
    findAspectAndRecords(allAspects[i], targetData, finalizedData);
  }

  return (
    <div
      className="h-lvh overflow-x-hidden select-none bg-transparent"
      data-theme="dark"
    >
      <div
        className="fixed h-full w-full bg-cover -z-10 bg-center"
        style={{ backgroundImage: "url('/mainBG.png')" }}
      />
      <div className="fixed bg-[#0e0d0d] h-lvh w-full object-cover -z-20" />

      <Header />

      {/*  */}

      <div className="w-full">
        <div className="flex justify-center font-customDress text-[26px] my-6 text-white uppercase">
          Current Top Players
        </div>
        <div className="h-[800px] overflow-x-auto rounded-md mb-5">
          <table className="table table-xs  table-pin-rows select-none min-w-[700px] max-w-[1400px] mx-auto text-white">
            {finalizedData.map((arr) => (
              <>
                <thead>
                  <tr className="font-serif bg-[#000000] text-gray-400">
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Aspect</th>
                    <th>Boons</th>
                    <th>Fear</th>
                    <th>Category</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {arr.map((obj) => (
                    <tr className="font-serif">
                      <td className="text-center">{obj.Name}</td>
                      <td>
                        <div className="avatar">
                          <div className="mask mask-decagon w-7">
                            <img
                              src={`/Aspects/${obj.Aspect}.png`}
                              draggable={false}
                            />
                          </div>
                        </div>
                      </td>
                      <td>{obj.Weapon}</td>
                      <td>{obj.Aspect}</td>

                      <td>
                        <div className="flex">
                          {ReturnBoonList(obj.Boons_Picked)
                            .slice(0, 8)
                            .map((item) => (
                              <div className="avatar">
                                <div className="mask mask-decagon w-7">
                                  <img
                                    src={`/Boon/${item}.png`}
                                    draggable={false}
                                  />
                                </div>
                              </div>
                            ))}
                        </div>
                      </td>
                      <td
                        className={`${
                          obj.Fear == 64
                            ? `text-error`
                            : obj.Fear >= 60
                            ? `text-warning`
                            : obj.Fear >= 50
                            ? `text-success`
                            : ``
                        }`}
                      >
                        {obj.Fear}
                      </td>
                      <td
                        className={
                          obj.Category === `Unseeded`
                            ? `text-[#e3ac6d]`
                            : obj.Category === `Modded`
                            ? `text-[#39bb5c]`
                            : `text-[#4f80d5]`
                        }
                      >
                        {obj.Category}
                      </td>
                      <td>
                        <Link
                          to={obj["Src"]}
                          target="_blank"
                          className="text-[#4651d1]"
                        >
                          Video
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </>
            ))}
            {/*  */}
          </table>
        </div>
      </div>

      {/*  */}

      <Footer />
    </div>
  );
}
