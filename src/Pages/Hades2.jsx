import { Link } from "react-router-dom";
import { removeDup, removeDupCate } from "../Logic/Method";
import { customOrder, calculateTime } from "../Logic/Method";

import Header from "../Components/Header";
import TopPlayers from "../Components/TopPlayers";

import AspectSelection from "../Components/Select/Aspect";
import PlayerSelection from "../Components/Select/Player";

import Footer from "../Components/Footer";

import { useData } from "../Hook/DataFetch";
import Loading from "../Hook/Loading";

import { useState, useEffect } from "react";

import { ReturnBoonList } from "../Logic/Method";

export default function Hades2() {
  const [data, setData] = useState(1);
  const [selectedAspect, setSelectedAspect] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [visibleRows, setVisibleRows] = useState(50);

  // console.log(calculateTime(`17:46.02`) < calculateTime(`20:04.65`));

  const { posts, loader } = useData();

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

  const rawData = posts.slice().sort((a, b) => b.Fear - a.Fear);
  const testingdata = removeDupCate(
    posts
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
  );

  const allAvailableData = [rawData, testingdata];

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
    <div className="h-lvh overflow-x-hidden select-none">
      <div
        className="fixed h-full w-full bg-cover -z-10 bg-center"
        style={{ backgroundImage: "url('/mainBG.png')" }}
      />
      <div className="fixed bg-[#0e0d0d] h-lvh w-full object-cover -z-20" />
      {/*  */}
      <Header />

      {loader ? (
        <Loading />
      ) : (
        <div className="w-full">
          {/* <TopPlayers objData={testingdata} level={`Fear`} /> */}
          <section>
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
          {/*  */}
          <div className="overflow-x-auto rounded-md my-4">
            <table className="table table-xs select-none min-w-[700px] max-w-[1400px] mx-auto text-white">
              <thead>
                <tr className="font-serif text-gray-400">
                  <th></th>
                  <th>Name</th>
                  <th>Weapon</th>
                  <th>Aspect</th>
                  <th>Direction</th>
                  <th>Boons</th>
                  <th>Fear</th>
                  <th>Time</th>
                  <th>Category</th>
                  <th>Link</th>
                  {/* <th>Patch</th> */}
                </tr>
              </thead>
              <tbody>
                {displayData.slice(0, visibleRows).map((obj, index) => (
                  <tr className="font-serif">
                    <th className="font-serif">{index + 1}.</th>
                    <td>{obj.Name}</td>
                    <td>{obj.Weapon}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-hexagon-2 w-7">
                          <img src={`/Aspects/${obj.Aspect}.png`} />
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
                    <td>
                      {ReturnBoonList(obj.Boons_Picked)
                        .slice(0, 8)
                        .map((item) => (
                          <div className="avatar">
                            <div className="mask mask-hexagon-2 w-7">
                              <img src={`/Boon/${item}.png`} />
                            </div>
                          </div>
                        ))}
                    </td>
                    <td
                      className={`${
                        obj.Fear == 55
                          ? `text-error`
                          : obj.Fear >= 50
                          ? `text-warning`
                          : obj.Fear >= 40
                          ? `text-success`
                          : ``
                      }`}
                    >
                      {obj.Fear}
                    </td>
                    <td>{obj["Clear Time"]}</td>

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
                    {/* <td>{obj.Patch}</td> */}
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
      )}

      {!loader && <Footer />}
      {/*  */}
    </div>
  );
}
