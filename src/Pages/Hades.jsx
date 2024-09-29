import { Link } from "react-router-dom";
import { testing } from "../Logic/Test";
import { removeDup, removeDupCate } from "../Logic/Method";

import Header from "../Components/Header";
import TopPlayers from "../Components/TopPlayers";

import AspectSelection from "../Components/Select/Aspect";
import PlayerSelection from "../Components/Select/Player";

import Footer from "../Components/Footer";

import { useState, useEffect } from "react";

import { useData } from "../Hook/DataFetch";
import Loading from "../Hook/Loading";

export default function Hades() {
  const [data, setData] = useState(1);
  const [selectedAspect, setSelectedAspect] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [visibleRows, setVisibleRows] = useState(100);

  const { posts, loader } = useData();

  const gameData = posts.filter((obj) => obj.Game == `Hades`);

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
  //

  // const gameDate = testing.filter((obj) => obj.Game === `Hades`);

  const rawData = gameData.slice().sort((a, b) => b.Level - a.Level);
  const testingdata = removeDupCate(
    gameData.slice().sort((a, b) => b.Level - a.Level)
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
          <TopPlayers objData={testingdata} level={`Heat`} />
          <section>
            <div className="flex justify-center my-2 gap-0.5">
              <button
                className="btn shadow-[inset_0_0_15px_black]"
                onClick={() => handleDataChange(0)}
              >
                All
              </button>
              <button
                className="btn shadow-[inset_0_0_15px_black]"
                onClick={() => handleDataChange(1)}
              >
                Rank
              </button>
            </div>
            <div className="my-2 mx-auto flex flex-wrap justify-center gap-1">
              {allWeaponType.map((obj, index) => (
                <button
                  className="btn shadow-[inset_0_0_15px_black]"
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
            <table className="table table-xs select-none min-w-[700px] max-w-[1400px] mx-auto">
              <thead>
                <tr className="font-serif">
                  <th></th>
                  <th>Name</th>
                  <th>Weapon</th>
                  <th>Aspect</th>
                  <th>Heat</th>
                  <th>Category</th>
                  <th>Link</th>
                  <th>Patch</th>
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
                        <div className="mask mask-heart w-7">
                          <img
                            src={`/Aspects/${obj.Weapon}-${obj.Aspect}.png`}
                          />
                        </div>
                      </div>
                    </td>
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
                        to={obj["Run Video"]}
                        target="_blank"
                        className="text-[#4651d1]"
                      >
                        Video
                      </Link>
                    </td>
                    <td>{obj.Patch}</td>
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
