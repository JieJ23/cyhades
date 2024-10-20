import { Link } from "react-router-dom";
import { removeDup, removeDupCate } from "../Logic/Method";
import { customOrder } from "../Logic/Method";

import Header from "../Components/Header";
import TopPlayers from "../Components/TopPlayers";

import AspectSelection from "../Components/Select/Aspect";
import PlayerSelection from "../Components/Select/Player";

import AOTW_Heat from "../Components/Select/Aotw_H";
import AOTW_Speed from "../Components/Select/Aotw_S";

import Footer from "../Components/Footer";

import { calculateTime } from "../Logic/Method";

import { useState, useEffect } from "react";
import { genNum920 } from "../Logic/Gen";

// import { useData } from "../Hook/DataFetch";
// import Loading from "../Hook/Loading";

import { Hades1FullData } from "../Data/Hades1Data";
import { customRemove } from "../Logic/Method";

export default function Hades() {
  const [data, setData] = useState(0);
  const [selectedAspect, setSelectedAspect] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [selectedAOTWHeat, setSelectedAOTWHeat] = useState("");
  const [selectedAOTWSpeed, setSelectedAOTWSpeed] = useState("");

  const [visibleRows, setVisibleRows] = useState(100);

  // const { posts, loader } = useData();

  // const gameData = posts.filter((obj) => obj.Game == `Hades`);

  useEffect(() => {
    setVisibleRows(100);
  }, [data]);

  //
  const handleDataChange = (num) => {
    setData(num);
  };
  const loadMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 100);
  };
  const handleAspectChange = (newValue) => {
    setSelectedAspect(newValue);
    setData(allAvailableData.length - 1);
  };
  const handlePlayerChange = (newValue) => {
    setSelectedPlayer(newValue);
    setData(allAvailableData.length - 2);
  };
  const handleAOTWHeatChange = (newValue) => {
    setSelectedAOTWHeat(newValue);
    setData(allAvailableData.length - 4);
  };
  const handleAOTWSpeedChange = (newValue) => {
    setSelectedAOTWSpeed(newValue);
    setData(allAvailableData.length - 3);
  };
  //

  const rawData = Hades1FullData.slice().sort((a, b) => b.Heat - a.Heat);
  const testingdata = removeDupCate(
    Hades1FullData.slice()
      .sort(
        (a, b) =>
          customOrder.indexOf(a.Category) - customOrder.indexOf(b.Category)
      )
      .sort((a, b) => b.Heat - a.Heat)
  );

  const customDisplay = customRemove(rawData);

  const allAvailableData = [customDisplay, testingdata];

  const allWeaponType = [...new Set(testingdata.map((obj) => obj.Weapon))];

  for (let i = 0; i < allWeaponType.length; i++) {
    let tempArr = testingdata.filter((obj) => obj.Weapon === allWeaponType[i]);
    let finalized = tempArr;
    allAvailableData.push(finalized);
  }

  allAvailableData.push(
    testingdata.filter(
      (obj) =>
        obj.AOTWHeat != null && obj.AOTWHeat.includes(`${selectedAOTWHeat}`)
    )
  );

  allAvailableData.push(
    testingdata
      .filter(
        (obj) =>
          obj.AOTWSpeed != "" && obj.AOTWSpeed.includes(`${selectedAOTWSpeed}`)
      )
      .sort((a, b) => calculateTime(a["Time"]) - calculateTime(b["Time"]))
  );

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
      <TopPlayers />
      <div className="w-full">
        <section className="hidden">
          <div className="flex justify-center my-2 gap-0.5">
            <button
              className="btn shadow-[inset_0_0_15px_black] text-gray-300"
              onClick={() => handleDataChange(0)}
            >
              All
            </button>
            <button
              className="btn shadow-[inset_0_0_15px_black] text-gray-300"
              onClick={() => handleDataChange(1)}
            >
              Rank
            </button>
          </div>
          <div className="my-2 mx-auto flex flex-wrap justify-center gap-1">
            {allWeaponType.map((obj, index) => (
              <button
                className="btn shadow-[inset_0_0_15px_black] text-gray-300"
                onClick={() => handleDataChange(index + 2)}
              >
                {obj}
              </button>
            ))}
          </div>
        </section>
        {/*  */}
        <div className="hidden">
          <section className="flex flex-col sm:flex-row gap-1 justify-center w-3/4 mx-auto sm:w-full mb-2">
            <AOTW_Heat
              watch={data}
              fulldata={allAvailableData}
              onaotwHChange={handleAOTWHeatChange}
              alldata={testingdata}
            />
            <AOTW_Speed
              watch={data}
              fulldata={allAvailableData}
              onaotwSChange={handleAOTWSpeedChange}
              alldata={testingdata}
            />
          </section>
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
        </div>
        <div className="hidden">
          <Link to={`/HadesH1TopAspect`} className="flex justify-center my-2">
            <button className="btn btn-neutral text-error font-serif font-semibold shadow-[inset_0_0_15px_black]">
              Top Aspects
            </button>
          </Link>
        </div>
        {/*  */}
        <div className="overflow-x-auto rounded-md my-4">
          <table className="table table-xs select-none min-w-[700px] max-w-[1400px] mx-auto text-white">
            <thead>
              <tr className="font-serif text-gray-400">
                <th></th>
                <th>Index</th>
                <th className="text-center">Name</th>
                <th>Weapon</th>
                <th>Aspect</th>
                <th></th>
                <th>Heat</th>
                <th>Category</th>
                <th>GT</th>
                {/* <th>Time</th> */}
                <th>Link</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {displayData.slice(0, visibleRows).map((obj, index) => (
                <tr className="font-serif">
                  <td></td>
                  <td>{index + 1}</td>
                  <td className="text-center">{obj.Name}</td>
                  <td>{obj.Weapon}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-heart w-8">
                        <img src={`/Aspects/${obj.Weapon}-${obj.Aspect}.png`} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="w-[100px]">
                      <img
                        src={`/H1weapon/${obj.Aspect}-${obj.Weapon}.png`}
                        className="rounded-xl shadow-[0_0_3px_teal]"
                      />
                    </div>
                  </td>
                  <td
                    className={`${
                      obj.Heat == 64
                        ? `text-error`
                        : obj.Heat >= 60
                        ? `text-warning`
                        : obj.Heat >= 50
                        ? `text-success`
                        : ``
                    }`}
                  >
                    {obj.Heat}
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
                    <progress
                      className="progress progress-error w-36"
                      value={genNum920()}
                      max="25"
                    />
                  </td>
                  {/* <td>{obj.Time != null ? obj.Time : `-`}</td> */}
                  <td>
                    <Link
                      // to={obj["Src"]}
                      target="_blank"
                      className="text-[#4651d1] pointer-events-none"
                    >
                      Video
                    </Link>
                  </td>
                  <td>{obj.Date ? obj.Date.slice(0, 10) : ``}</td>
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
