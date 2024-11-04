import { Link } from "react-router-dom";
import { removeDup, removeDupAspect, removeDupNameOnly } from "../Logic/Method";
import { customOrder, calculateTime } from "../Logic/Method";

import Header from "../Components/Header";
import TopPlayers2 from "../Components/TopPlayers2";

// import { Hades2NewFullData } from "../Data/Hades2NewData";
import { Hades2FullData } from "../Data/Hades2Data";

import AspectSelection from "../Components/Select/Aspect";
import PlayerSelection from "../Components/Select/Player";

import Footer from "../Components/Footer";

// import { useData } from "../Hook/DataFetch";
// import Loading from "../Hook/Loading";

import { useState, useEffect } from "react";

import { ReturnBoonList } from "../Logic/Method";
import { testReturnBoonFilter } from "../Logic/Method";
//

export default function Hades2() {
  const [data, setData] = useState(1);
  const [selectedAspect, setSelectedAspect] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [visibleRows, setVisibleRows] = useState(50);

  // const { posts, loader } = useData();

  useEffect(() => {
    setVisibleRows(50);
  }, [data]);

  //
  const handleDataChange = (num) => {
    setData(num);
  };
  const loadMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 50);
  };
  const handleAspectChange = (newValue) => {
    setSelectedAspect(newValue);
    setData(allAvailableData.length - 1);
  };
  const handlePlayerChange = (newValue) => {
    setSelectedPlayer(newValue);
    setData(allAvailableData.length - 2);
  };
  //

  const rawData = Hades2FullData.slice()
    .sort((a, b) => b.Fear - a.Fear)
    .sort((a, b) => b.Patch - a.Patch);
  const testingdata = removeDupAspect(
    Hades2FullData.slice()
      .sort(
        (a, b) =>
          customOrder.indexOf(a.Category) - customOrder.indexOf(b.Category)
      )
      .sort(
        (a, b) =>
          calculateTime(a["Clear Time"]) - calculateTime(b["Clear Time"])
      )
      .sort((a, b) => b.Fear - a.Fear)
      .sort((a, b) => b.Patch - a.Patch)
  );
  const testingdata2 = removeDupNameOnly(
    Hades2FullData.slice()
      .sort(
        (a, b) =>
          customOrder.indexOf(a.Category) - customOrder.indexOf(b.Category)
      )
      .sort(
        (a, b) =>
          calculateTime(a["Clear Time"]) - calculateTime(b["Clear Time"])
      )
      .sort((a, b) => b.Fear - a.Fear)
      .sort((a, b) => b.Patch - a.Patch)
  );

  const allAvailableData = [rawData, testingdata, testingdata2];

  const allWeaponType = [...new Set(testingdata.map((obj) => obj.Weapon))];

  for (let i = 0; i < allWeaponType.length; i++) {
    let tempArr = testingdata.filter((obj) => obj.Weapon === allWeaponType[i]);
    let finalized = tempArr;
    allAvailableData.push(finalized);
  }

  allAvailableData.push(
    rawData.filter((obj) => obj.Name.includes(`${selectedPlayer}`))
  );

  allAvailableData.push(
    testingdata.filter((obj) => obj.Aspect.includes(`${selectedAspect}`))
  );

  const displayData = allAvailableData[data];

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
      <TopPlayers2 />

      <div className="w-full">
        {/* <TopPlayers objData={testingdata} level={`Fear`} /> */}
        <section>
          <div className="flex justify-center my-2 gap-1 font-customCin">
            <button
              className="btn shadow-[1px_1px_0_teal] text-gray-300 text-[13px]"
              onClick={() => handleDataChange(0)}
            >
              All
            </button>
            <button
              className="btn shadow-[1px_1px_0_teal] text-gray-300 text-[13px]"
              onClick={() => handleDataChange(1)}
            >
              Unique
            </button>
            <button
              className="btn shadow-[1px_1px_0_teal] text-gray-300 text-[13px]"
              onClick={() => handleDataChange(2)}
            >
              Player
            </button>
          </div>
          <div className="my-2 mx-auto flex flex-wrap justify-center gap-1">
            {allWeaponType.map((obj, index) => (
              <button
                className="btn shadow-[1px_1px_0_teal] text-gray-300 font-customCin text-[11px]"
                onClick={() => handleDataChange(index + 3)}
              >
                {obj}
              </button>
            ))}
          </div>
        </section>
        {/*  */}
        <section className="flex flex-col sm:flex-row gap-1 justify-center w-3/4 mx-auto sm:w-full">
          <PlayerSelection
            watch={data}
            fulldata={allAvailableData}
            onPlayerChange={handlePlayerChange}
            allPlayers={testingdata}
          />
          <AspectSelection
            watch={data}
            fulldata={allAvailableData}
            onAspectChange={handleAspectChange}
            allAspect={testingdata}
          />
        </section>
        {/* <Link to={`/HadesTopAspect`} className="flex justify-center my-2">
          <button className="btn btn-neutral text-error font-serif font-semibold shadow-[inset_0_0_15px_black]">
            Top Aspects
          </button>
        </Link> */}
        {/*  */}
        <div className="overflow-x-auto rounded-md my-4">
          <table className="table table-xs select-none w-full max-w-[1400px] mx-auto text-white">
            <thead>
              <tr className="font-serif text-gray-400">
                <th></th>
                <th>Name</th>
                <th>Weapon</th>
                <th>Aspect</th>
                <th>Direction</th>
                <th>Fear</th>
                <th>Time</th>
                <th>Boon</th>
                <th>Familiar</th>
                {/* <th>Category</th> */}
                <th>Ver.</th>
                <th>Link</th>
                {/* <th>Patch</th> */}
              </tr>
            </thead>
            <tbody>
              {displayData.slice(0, visibleRows).map((obj, index) => (
                <tr className="font-serif">
                  <th className="font-serif">{index + 1}.</th>
                  <td>{obj.Name}</td>
                  <td className="min-w-[100px]">{obj.Weapon}</td>
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
                  <td
                    className={
                      obj.Direction == `Underworld`
                        ? `text-teal-500`
                        : ` text-yellow-400`
                    }
                  >
                    {obj.Direction}
                  </td>
                  <td
                    className={`${
                      obj.Fear == 55
                        ? `text-[red]`
                        : obj.Fear >= 50
                        ? `text-[orange]`
                        : ``
                    }`}
                  >
                    {obj.Fear}
                  </td>
                  <td>{obj["Clear Time"]}</td>
                  <td className="min-w-[180px]">
                    <div className="flex">
                      {ReturnBoonList(obj.Boons_Picked)
                        .slice(0, 5)
                        .map((item) => (
                          <div className="avatar">
                            <div className="mask mask-squircle w-7">
                              <img
                                src={`/Boon/${item}.png`}
                                draggable={false}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </td>
                  <td className="min-w-[80px]">
                    {obj.Familiar ? (
                      <div className="flex gap-1 items-center">
                        <div className="avatar">
                          <div className="w-6 rounded">
                            <img src={`/Familiar/${obj.Familiar}.png`} />
                          </div>
                        </div>
                        <div className="w-6">
                          <img src={`/Familiar/${obj.Familiar}_icon.png`} />
                        </div>
                      </div>
                    ) : (
                      ``
                    )}
                  </td>
                  {/* <td
                    className={
                      obj.Category === `Unseeded`
                        ? `text-[#e3ac6d]`
                        : obj.Category === `Modded`
                        ? `text-[#39bb5c]`
                        : `text-[#4f80d5]`
                    }
                  >
                    {obj.Category}
                  </td> */}
                  <td
                    className={`min-w-[70px] ${
                      obj.Patch === `5`
                        ? `text-[#26f48a]`
                        : obj.Patch === `6`
                        ? `text-[#db5ff1]`
                        : `text-white`
                    }
                    `}
                  >
                    Patch {obj.Patch}
                  </td>
                  <td>
                    <Link
                      to={obj["Src"]}
                      target="_blank"
                      className="text-[#979ff5]"
                    >
                      Video
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {visibleRows < displayData.length && (
          <div className="flex justify-center my-2">
            <button onClick={loadMore} className="btn btn-primary">
              Load More
            </button>
          </div>
        )}
      </div>

      <Footer />
      {/*  */}
    </div>
  );
}
