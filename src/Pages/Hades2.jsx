import { Link } from "react-router-dom";
import { removeDup, removeDupAspect, removeDupNameOnly } from "../Logic/Method";
import { customOrder, calculateTime } from "../Logic/Method";

import Header from "../Components/Header";
import TopPlayers2 from "../Components/TopPlayers2";

// import { Hades2NewFullData } from "../Data/Hades2NewData";
import { hades2CN } from "../Data/Hades2NewData";

import AspectSelection from "../Components/Select/Aspect";
import PlayerSelection from "../Components/Select/Player";

import Footer from "../Components/Footer";

// import { useData } from "../Hook/DataFetch";
// import Loading from "../Hook/Loading";

import { useState, useEffect } from "react";

import { ReturnBoonList } from "../Logic/Method";
import { testReturnBoonFilter } from "../Logic/Method";
import { genBoonString } from "../Logic/Gen";
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

  const rawData = hades2CN
    .slice()
    .sort((a, b) => b.Fear - a.Fear)
    .sort((a, b) => b.Patch - a.Patch);
  const testingdata = removeDupAspect(
    hades2CN
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
    hades2CN
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
                <th>Boon</th>
                <th></th>
                <th>Rating</th>
                {/* <th>Category</th> */}
                {/* <th>Ver.</th> */}
                <th>Link</th>
                {/* <th>Patch</th> */}
              </tr>
            </thead>
            <tbody>
              {displayData.slice(0, visibleRows).map((obj, index) => (
                <tr className="font-serif">
                  <td className="font-serif">{index + 1}.</td>
                  <td>{obj.Name}</td>
                  <td className="whitespace-nowrap">
                    <div>{obj.Aspect}</div>
                    <div className="text-gray-500 text-[11px]">
                      {obj.Weapon}
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
                  <td>{obj.Fear}</td>
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
                    {ReturnBoonList(genBoonString()).map((item) => (
                      <div className="avatar">
                        <div className="mask mask-squircle w-7">
                          <img src={`/Boon/${item}.png`} draggable={false} />
                        </div>
                      </div>
                    ))}
                  </td>
                  <td
                    className={`relative
                      ${
                        obj.Rating === 5
                          ? "font-serif font-bold text-[12px] text-[#eddd28]"
                          : obj.Rating === 4
                          ? "font-serif font-bold text-[12px] text-[#f36e27]"
                          : "font-serif font-bold text-[12px] text-[white]"
                      }`}
                  >
                    <div
                      className="p-2 flex justify-center items-center"
                      style={{
                        borderImage: `url(/Vows/holder.png) 32 fill`,
                        borderImageWidth: "30px",
                      }}
                    >
                      {obj.Rating === 5 ? "S+" : obj.Rating === 4 ? "S" : "A"}
                    </div>
                  </td>
                  <td>
                    <section className="flex">
                      {Array.from({ length: obj.Rating }, (_, ite) => (
                        <div className="rating rating-sm">
                          <input
                            type="radio"
                            name="rating-4"
                            className="mask mask-star-2 bg-[#b930ef]"
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
