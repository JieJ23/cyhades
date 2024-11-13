import { Link } from "react-router-dom";
import { removeDupAspect, removeDupNameOnly } from "../Logic/Method";
import { customOrder, calculateTime } from "../Logic/Method";

import { defineWeapon } from "../Logic/Gen";
import { weaponColor } from "../Components/TopPlayers2";

import Header from "../Components/Header";
import TopPlayers2 from "../Components/TopPlayers2";

// import AspectSelection: from "../Components/Select/Aspect";
// import PlayerSelection: from "../Components/Select/Player";

import Footer from "../Components/Footer";
import { hades2d } from "../Data/Hades2NewData";
import { useState, useEffect } from "react";

import { ReturnBoonList } from "../Logic/Method";
//

export default function Hades2() {
  const [data, setData] = useState(1);
  const [selectedAspect, setSelectedAspect] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [visibleRows, setVisibleRows] = useState(25);

  useEffect(() => {
    setVisibleRows(25);
  }, [data]);

  //
  const handleDataChange = (num) => {
    setData(num);
  };
  const loadMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 25);
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

  const rawData = hades2d
    .map((item) => ({
      ...item, // Spread the existing properties
      Weapon: `${defineWeapon(item.Aspect)}`, // Add the new "weapon" property
    }))
    .slice()
    .sort((a, b) => b.Fear - a.Fear)
    .sort((a, b) => b.Patch - a.Patch);

  const testingdata = removeDupAspect(
    hades2d
      .map((item) => ({
        ...item, // Spread the existing properties
        Weapon: `${defineWeapon(item.Aspect)}`, // Add the new "weapon" property
      }))
      .slice()
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
    hades2d
      .slice()
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
  //

  const holder = [];

  for (let i = 0; i < allWeaponType.length; i++) {
    let count = 0;

    let temp = rawData.filter((obj) => obj.Weapon === allWeaponType[i]);

    for (let y = 0; y < temp.length; y++) {
      let tempRun = temp[y].Fear;
      count += +tempRun;
    }

    let aspects = [...new Set(temp.map((obj) => obj.Aspect))];

    let aspectCounts = {};

    for (let x = 0; x < aspects.length; x++) {
      let aspectCount = 0;
      const aspectOnly = temp.filter((obj) => obj.Aspect === aspects[x]);
      for (let j = 0; j < aspectOnly.length; j++) {
        const aspectTotal = aspectOnly[j].Fear;
        aspectCount += +aspectTotal;
      }
      aspectCounts[`aspect${x + 1}`] = {
        name: aspects[x],
        count: aspectCount,
        length: aspectOnly.length,
      };
    }

    let pairObj = {
      weapon: allWeaponType[i],
      count: temp.length,
      accu: count,
      ...aspectCounts,
    };
    holder.push(pairObj);
  }

  console.log(holder);
  //
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
          <div className="flex flex-wrap justify-center my-2 gap-1 font-customCin">
            <button
              className="btn text-white text-[11px]"
              style={{
                borderImage: `url(/Border/one.png) 32 fill`,
                borderImageWidth: "10px",
              }}
              onClick={() => handleDataChange(0)}
            >
              All
            </button>
            <button
              className="btn text-white text-[11px]"
              style={{
                borderImage: `url(/Border/one.png) 32 fill`,
                borderImageWidth: "10px",
              }}
              onClick={() => handleDataChange(1)}
            >
              Unique
            </button>
            <button
              className="btn text-white text-[11px]"
              style={{
                borderImage: `url(/Border/one.png) 32 fill`,
                borderImageWidth: "10px",
              }}
              onClick={() => handleDataChange(2)}
            >
              Rank
            </button>
            {allWeaponType.map((obj, index) => (
              <button
                className="btn text-white font-customCin text-[11px]"
                style={{
                  borderImage: `url(/Border/one.png) 32 fill`,
                  borderImageWidth: "10px",
                }}
                onClick={() => handleDataChange(index + 3)}
              >
                {obj}
              </button>
            ))}
          </div>
        </section>

        <section className="flex justify-center">
          <Link to={`/BoonSelection`}>
            <button
              className="btn text-white text-[11px] font-customCin"
              style={{
                borderImage: `url(/Border/one.png) 32 fill`,
                borderImageWidth: "10px",
              }}
              onClick={() => handleDataChange(2)}
            >
              Boon Selection: Stats
            </button>
          </Link>
        </section>
        <section className="flex flex-wrap justify-center place-items-center my-12 gap-10 max-w-[1200px] mx-auto">
          {holder.map((obj, index) => (
            <div className="flex flex-col md:flex-row items-center justify-center w-full lg:w-[45%] gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="radial-progress bg-[transparent] text-[14px] text-white font-customCin border-[1px] border-white/20"
                  style={{
                    "--value": Math.round(
                      (obj.count / testingdata.length) * 100
                    ),
                    "--size": "80px",
                    backgroundColor: `${weaponColor(obj.weapon)}99`,
                  }}
                  role="progressbar"
                  key={index}
                >
                  {((obj.count / testingdata.length) * 100).toFixed(2)}%
                </div>
                <div>
                  <div className="text-[13px] font-serif text-white">
                    {obj.weapon}
                  </div>
                  <div className="text-[12px] font-serif text-gray-300">
                    Selection: {obj.count}
                  </div>
                  <div className="text-[12px] font-serif text-gray-300">
                    Total Fear: {obj.accu}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-[13px] font-serif text-gray-300">
                    {obj.aspect1.name}
                  </div>
                  <div className="text-[12px] font-serif text-gray-300">
                    Selection:{" "}
                    {`${Math.round((obj.aspect1.length / obj.count) * 100)}%`}
                  </div>
                  <div className="text-[12px] font-serif text-gray-300">
                    Total Fear: {obj.aspect1.count}
                  </div>
                </div>

                <div>
                  <div className="text-[13px] font-serif text-gray-300">
                    {obj.aspect2.name}
                  </div>
                  <div className="text-[12px] font-serif text-gray-300">
                    Selection:{" "}
                    {`${Math.round((obj.aspect2.length / obj.count) * 100)}%`}
                  </div>
                  <div className="text-[12px] font-serif text-gray-300">
                    Total Fear: {obj.aspect2.count}
                  </div>
                </div>
                <div>
                  <div className="text-[13px] font-serif text-gray-300">
                    {obj.aspect3.name}
                  </div>
                  <div className="text-[12px] font-serif text-gray-300">
                    Selection:{" "}
                    {`${Math.round((obj.aspect3.length / obj.count) * 100)}%`}
                  </div>
                  <div className="text-[12px] font-serif text-gray-300">
                    Total Fear: {obj.aspect3.count}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        {/*  */}
        {/* <section className="flex flex-col sm:flex-row gap-1 justify-center w-3/4 mx-auto sm:w-full">
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
        </section> */}
        {/* <Link to={`/HadesTopAspect`} className="flex justify-center my-2">
          <button className="btn btn-neutral text-error font-serif font-semibold shadow-[inset_0_0_15px_black]">
            Top Aspects
          </button>
        </Link> */}
        {/*  */}
        <div className="overflow-x-auto rounded-md my-4">
          <table className="table table-xs table-zebra-zebra select-none w-full max-w-[1200px] mx-auto text-white">
            <thead>
              <tr className="font-serif text-gray-400">
                <th></th>
                <th>Name</th>
                <th>Weapon</th>
                <th>Direction</th>
                <th>Fear</th>
                <th>Time</th>
                <th>Item & Boon</th>
                <th></th>
                <th>Rating</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {displayData.slice(0, visibleRows).map((obj, index) => (
                <tr className="font-serif">
                  <td className="font-serif">{index + 1}.</td>
                  <td className="whitespace-nowrap">{obj.Name}</td>
                  <td className="whitespace-nowrap">
                    <div>{obj.Aspect}</div>
                    <div className="text-gray-400 text-[11px]">
                      {defineWeapon(obj.Aspect)}
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
                    className={
                      obj.Fear > 50
                        ? `text-[#eddd28]`
                        : obj.Fear > 45
                        ? `text-[#fff]`
                        : `text-[#fff]`
                    }
                  >
                    {obj.Fear}
                  </td>
                  <td>{obj["Clear Time"]}</td>
                  <td className="flex">
                    <div className="avatar">
                      <div className="mask mask-squircle w-7">
                        <img
                          src={`/Aspects/${obj.Aspect}.png`}
                          draggable={false}
                        />
                      </div>
                    </div>
                    <div className="avatar pe-4">
                      <div className="w-7 mask mask-squircle">
                        <img src={`/Familiar/${obj.Familiar}.png`} />
                      </div>
                    </div>
                    {ReturnBoonList(obj.Boons_Picked).map((item) => (
                      <div className="avatar">
                        <div className="mask mask-squircle w-7">
                          <img src={`/Boon/${item}.png`} draggable={false} />
                        </div>
                      </div>
                    ))}
                  </td>
                  <td
                    className={`relative w-[53px] font-serif text-[14px]
                      ${
                        obj["Clear Time"].slice(0, -6) < 10
                          ? "text-[#eddd28]"
                          : obj["Clear Time"].slice(0, -6) < 15
                          ? "text-[#f57a2e]"
                          : "text-[#fff]"
                      }`}
                  >
                    <div
                      className="p-2 flex justify-center items-center"
                      style={{
                        borderImage: `url(/Vows/holder.png) 32 fill`,
                        borderImageWidth: "30px",
                      }}
                    >
                      {obj["Clear Time"].slice(0, -6) < 10
                        ? "S+"
                        : obj["Clear Time"].slice(0, -6) < 15
                        ? "S"
                        : "A"}
                    </div>
                  </td>
                  <td>
                    <section className="flex">
                      {obj["Clear Time"].slice(0, -6) < 10
                        ? Array.from({ length: 5 }, (_, ite) => (
                            <div className="rating rating-sm">
                              <input
                                type="radio"
                                name="rating-4"
                                className="mask mask-star-2 bg-[#c7ef15]"
                              />
                            </div>
                          ))
                        : obj["Clear Time"].slice(0, -6) < 15
                        ? Array.from({ length: 4 }, (_, ite) => (
                            <div className="rating rating-sm">
                              <input
                                type="radio"
                                name="rating-4"
                                className="mask mask-star-2 bg-[#f57a2e]"
                              />
                            </div>
                          ))
                        : Array.from({ length: 3 }, (_, ite) => (
                            <div className="rating rating-sm">
                              <input
                                type="radio"
                                name="rating-4"
                                className="mask mask-star-2 bg-[#fff]"
                              />
                            </div>
                          ))}
                    </section>
                  </td>
                  <td>
                    <Link
                      // to={obj["Src"]}
                      target="_blank"
                      className="text-[#979ff5] pointer-events-none"
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
          <div className=" flex justify-center">
            <button
              onClick={loadMore}
              className="btn btn-lg text-white font-customCin text-[13px]"
              style={{
                borderImage: `url(/Border/one.png) 32 fill`,
                borderImageWidth: "10px",
              }}
            >
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
