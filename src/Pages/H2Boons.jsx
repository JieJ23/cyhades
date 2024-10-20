import Header from "../Components/Header";
import FooterInfo from "../Components/Footer";
import { useState } from "react";

import {
  aph,
  apo,
  dem,
  hep,
  her,
  herm,
  hest,
  pos,
  zeu,
  art,
  chaos,
} from "../Data/H2Boon/GodBoons";

const gods = [
  `Aphrodite`,
  `Apollo`,
  `Demeter`,
  `Hephaestus`,
  `Hera`,
  `Hermes`,
  `Hestia`,
  `Poseidon`,
  `Zeus`,
  `Artemis`,
  `Chaos`,
];

export default function H2Boons() {
  const [category, setCategory] = useState(0);

  function handleChangeCategory(num) {
    setCategory(num);
  }

  const fullData = [aph, apo, dem, hep, her, herm, hest, pos, zeu, art, chaos];

  const displayData = fullData[category];

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
        <section className="flex justify-center gap-2 flex-wrap mt-10 mx-auto max-w-[1000px]">
          {gods.map((item, index) => (
            <button
              class="btn text-white bg-[#1b2f3e] font-serif text-[12px] shadow-[1px_1px_0_cyan]"
              onClick={() => handleChangeCategory(index)}
            >
              <div className="flex items-center gap-0.5">
                <div>{item}</div>
                <div className="avatar w-6">
                  <img src={`/Element/${item}.png`} />
                </div>
              </div>
            </button>
          ))}
        </section>
        <div className="overflow-x-auto rounded-md my-6">
          <table className="table table-xs table-zebra select-none w-full max-w-[1400px] mx-auto text-white">
            <thead>
              <tr className="font-serif text-gray-400">
                <th></th>
                <th className="text-end">Boon Name</th>
                <th></th>
                <th className="text-end">Element</th>
                <th></th>
                <th>Type</th>
                <th>Changed Stat</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((obj, index) => (
                <tr className="font-serif">
                  <th className="font-serif">{index + 1}.</th>
                  <td className="text-end">{obj["Boon Name"]}</td>
                  <td>
                    <div className="avatar w-8">
                      <img src={`/Boon/${obj["Boon Name"]}.png`} alt="Boons" />
                    </div>
                  </td>
                  <td className="text-end">{obj.Element}</td>
                  <td>
                    {obj.Element === `All` ? (
                      `-`
                    ) : (
                      <div className="avatar w-8">
                        <img src={`/Element/${obj.Element}.png`} />
                      </div>
                    )}
                  </td>
                  <td
                    className={
                      obj.Type === `Passive`
                        ? `text-[#2af07c]`
                        : obj.Type === `Duo`
                        ? `text-[#ebde1c]`
                        : ``
                    }
                  >
                    {obj.Type}
                  </td>
                  <td>{obj["Changed stat"]}</td>
                  <td>
                    <div className="max-w-[250px]">{obj.Description}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/*  */}
      <FooterInfo />
    </div>
  );
}
