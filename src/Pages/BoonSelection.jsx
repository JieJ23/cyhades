import { Hades2FullData } from "../Data/Hades2Data";

import Header from "../Components/Header";
import FooterInfo from "../Components/Footer";

import {
  genBoonString,
  genstrike,
  genflour,
  gensprint,
  genring,
  gengain,
} from "../Logic/Gen";

import { useState } from "react";

export default function BoonSelection() {
  const [weapon, setWeapon] = useState(0);

  function handleChangeWeapon(num) {
    setWeapon(num);
  }

  const weaponTypes = [...new Set(Hades2FullData.map((obj) => obj.Weapon))];
  //
  const displayData = weaponTypes[weapon];

  const targetData = Hades2FullData.filter((obj) => obj.Weapon === displayData);
  //

  let patch5Data = targetData.filter(
    (obj) => obj.Patch === `5` || obj.Patch === `4`
  );

  for (let i = 0; i < patch5Data.length; i++) {
    let temp = genBoonString();
    patch5Data[i].Boons_Picked = temp;
  }

  const getAllBoonsStrings = [];

  for (let i = 0; i < patch5Data.length; i++) {
    let tempString = patch5Data[i].Boons_Picked;
    getAllBoonsStrings.push(tempString);
  }
  //

  const allDataStrike = [];
  const allDataFlour = [];
  const allDataSprint = [];
  const allDataRing = [];
  const allDataGain = [];

  function findpercent(arr, data, holder) {
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let y = 0; y < data.length; y++) {
        if (data[y].Boons_Picked.includes(arr[i])) {
          count += 1;
        }
      }
      holder.push({ boon: arr[i], usage: count, total: data.length });
    }
  }

  findpercent(genstrike, patch5Data, allDataStrike);
  findpercent(genflour, patch5Data, allDataFlour);
  findpercent(gensprint, patch5Data, allDataSprint);
  findpercent(genring, patch5Data, allDataRing);
  findpercent(gengain, patch5Data, allDataGain);

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
      {/*  */}
      <Header />

      <section className="flex justify-center gap-2 flex-wrap max-w-[1200px] mx-auto mt-8">
        {weaponTypes.map((ite, index) => (
          <button
            className={`btn font-serif text-[12px] shadow-[1px_1px_0_teal] ${
              index === weapon ? `btn-primary text-black` : `text-white`
            }`}
            onClick={() => handleChangeWeapon(index)}
          >
            {ite}
          </button>
        ))}
      </section>
      <section className="font-customCin text-center my-6 underline text-[14px]">
        *Automatically calculated based on the entries on the board, Patch 5 &
        6.
      </section>

      <div className="overflow-x-auto max-w-[1000px] mx-auto mb-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-gray-400 font-serif text-center">
              <th>Name</th>
              <th>Icon</th>
              <th>Pick Ratio</th>
              <th>Percent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={4}
                className="font-customCin text-[16px] text-white text-center rounded-full"
              >
                Strike Boon
              </td>
            </tr>
            {allDataStrike.map((obj) => (
              <tr className="text-center">
                <td className="font-serif text-[12px] p-0 text-white">
                  {obj.boon}
                </td>
                <td className="p-0">
                  <div className="avatar">
                    <div className="avatar w-8 rounded">
                      <img src={`/Boon/${obj.boon}.png`} />
                    </div>
                  </div>
                </td>
                <td className="font-serif text-[12px]">
                  {`${obj.usage} : ${obj.total}`}
                </td>
                <td className="font-serif text-[12px] text-[#27c3a9]">{`${(
                  (obj.usage / obj.total) *
                  100
                ).toFixed(2)}%`}</td>
              </tr>
            ))}
            <tr>
              <td
                colSpan={4}
                className="font-customCin text-[16px] text-white text-center rounded-full"
              >
                Flourish Boon
              </td>
            </tr>
            {allDataFlour.map((obj) => (
              <tr className="text-center">
                <td className="font-serif text-[12px] p-0 text-white">
                  {obj.boon}
                </td>
                <td className="p-0">
                  <div className="avatar">
                    <div className="avatar w-8 rounded">
                      <img src={`/Boon/${obj.boon}.png`} />
                    </div>
                  </div>
                </td>
                <td className="font-serif text-[12px]">
                  {`${obj.usage} : ${obj.total}`}
                </td>
                <td className="font-serif text-[12px] text-[#d664f2]">{`${(
                  (obj.usage / obj.total) *
                  100
                ).toFixed(2)}%`}</td>
              </tr>
            ))}
            <tr>
              <td
                colSpan={4}
                className="font-customCin text-[16px] text-white text-center rounded-full"
              >
                Sprint Boon
              </td>
            </tr>
            {allDataSprint.map((obj) => (
              <tr className="text-center">
                <td className="font-serif text-[12px] p-0 text-white">
                  {obj.boon}
                </td>
                <td className="p-0">
                  <div className="avatar">
                    <div className="avatar w-8 rounded">
                      <img src={`/Boon/${obj.boon}.png`} />
                    </div>
                  </div>
                </td>
                <td className="font-serif text-[12px]">
                  {`${obj.usage} : ${obj.total}`}
                </td>
                <td className="font-serif text-[12px] text-[#91db22]">{`${(
                  (obj.usage / obj.total) *
                  100
                ).toFixed(2)}%`}</td>
              </tr>
            ))}
            <tr>
              <td
                colSpan={4}
                className="font-customCin text-[16px] text-white text-center rounded-full"
              >
                Ring Boon
              </td>
            </tr>
            {allDataRing.map((obj) => (
              <tr className="text-center">
                <td className="font-serif text-[12px] p-0 text-white">
                  {obj.boon}
                </td>
                <td className="p-0">
                  <div className="avatar">
                    <div className="avatar w-8 rounded">
                      <img src={`/Boon/${obj.boon}.png`} />
                    </div>
                  </div>
                </td>
                <td className="font-serif text-[12px]">
                  {`${obj.usage} : ${obj.total}`}
                </td>
                <td className="font-serif text-[12px] text-[#ea5a66]">{`${(
                  (obj.usage / obj.total) *
                  100
                ).toFixed(2)}%`}</td>
              </tr>
            ))}
            <tr>
              <td
                colSpan={4}
                className="font-customCin text-[16px] text-white text-center rounded-full"
              >
                Gain Boon
              </td>
            </tr>
            {allDataGain.map((obj) => (
              <tr className="text-center">
                <td className="font-serif text-[12px] p-0 text-white">
                  {obj.boon}
                </td>
                <td className="p-0">
                  <div className="avatar">
                    <div className="avatar w-8 rounded">
                      <img src={`/Boon/${obj.boon}.png`} />
                    </div>
                  </div>
                </td>
                <td className="font-serif text-[12px]">
                  {`${obj.usage} : ${obj.total}`}
                </td>
                <td className="font-serif text-[12px] text-[#ec9c2c]">{`${(
                  (obj.usage / obj.total) *
                  100
                ).toFixed(2)}%`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <FooterInfo />
      {/*  */}
    </div>
  );
}
