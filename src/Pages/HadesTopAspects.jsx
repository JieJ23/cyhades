import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { Link } from "react-router-dom";

import { useData } from "../Hook/DataFetch";
import Loading from "../Hook/Loading";

import { hades_WeaponOrder } from "../Logic/Method";

import { removeDup } from "../Logic/Method";

function findAspectAndRecords(targetAspect, rawData, destination) {
  let tempArr = [];
  const targetData = rawData.filter((obj) => obj.Aspect === targetAspect);

  const unseed_data = targetData.filter((obj) => obj.Category === `Unseeded`);
  const seed_data = targetData.filter((obj) => obj.Category === `Seeded`);
  const mod_data = targetData.filter((obj) => obj.Category === `Modded`);

  const readyArr = [unseed_data, seed_data, mod_data];

  for (let i = 0; i < readyArr.length; i++) {
    const sortFindHighest = readyArr[i].sort((a, b) => b.Level - a.Level);
    const allLevelNum = [...new Set(sortFindHighest.map((obj) => obj.Level))];
    const highestNum = Math.max(...allLevelNum);

    const finalArr = readyArr[i].filter((obj) => obj.Level == highestNum);
    const finalized = removeDup(finalArr);
    tempArr = [...tempArr, ...finalized];
  }

  destination.push(tempArr);
}

export default function HadesTopAspect() {
  const { posts, loader } = useData();

  const targetData = posts.filter((obj) => obj.Game === `Hades`);
  const allAspects = [...new Set(targetData.map((obj) => obj.Aspect))].sort(
    (a, b) => hades_WeaponOrder.indexOf(a) - hades_WeaponOrder.indexOf(b)
  );

  const finalizedData = [];

  if (!loader) {
    for (let i = 0; i < allAspects.length; i++) {
      findAspectAndRecords(allAspects[i], targetData, finalizedData);
    }
  }

  console.log(finalizedData);

  return (
    <div className="h-lvh overflow-x-hidden select-none">
      <div
        className="fixed h-full w-full bg-cover -z-10 bg-center"
        style={{ backgroundImage: "url('/mainBG.png')" }}
      />
      <div className="fixed bg-[#0e0d0d] h-lvh w-full object-cover -z-20" />

      <Header />

      {/*  */}
      {loader ? (
        <Loading />
      ) : (
        <div className="w-full">
          <div className="flex justify-center font-customDress text-[26px] my-6 text-white uppercase">
            Current Top Players
          </div>
          <div className="h-[800px] overflow-x-auto rounded-md mb-5">
            <table className="table table-xs  table-pin-rows select-none min-w-[700px] max-w-[1400px] mx-auto">
              {finalizedData.map((arr) => (
                <>
                  <thead>
                    <tr className="font-serif bg-[#181a19] text-white">
                      <th className="text-center">Name</th>
                      <th></th>
                      <th>Weapon</th>
                      <th>Aspect</th>
                      <th>Heat</th>
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
                            <div className="mask mask-heart w-7">
                              <img
                                src={`/Aspects/${obj.Weapon}-${obj.Aspect}.png`}
                              />
                            </div>
                          </div>
                        </td>
                        <td>{obj.Weapon}</td>
                        <td>{obj.Aspect}</td>
                        <td
                          className={`${
                            obj.Level == 64
                              ? `text-error`
                              : obj.Level >= 60
                              ? `text-warning`
                              : obj.Level >= 50
                              ? `text-success`
                              : ``
                          }`}
                        >
                          {obj.Level}
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
      )}

      {/*  */}

      {!loader && <Footer />}
    </div>
  );
}
