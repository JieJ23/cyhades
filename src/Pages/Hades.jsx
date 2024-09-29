import { Link } from "react-router-dom";
import { testing } from "../Logic/Test";
import { removeDup } from "../Logic/Method";

import Header from "../Components/Header";
import TopPlayers from "../Components/TopPlayers";

export default function Hades() {
  const testingdata = removeDup(
    testing.slice().sort((a, b) => b.Heat - a.Heat)
  );

  return (
    <div className="h-lvh overflow-x-hidden select-none">
      <div
        className="fixed h-full w-full bg-cover -z-10 bg-center"
        style={{ backgroundImage: "url('/mainBG.png')" }}
      />
      <div className="fixed bg-[#0e0d0d] h-lvh w-full object-cover -z-20" />
      {/*  */}
      <Header />

      <div className="w-full">
        <TopPlayers objData={testingdata} />
        <div className="overflow-x-auto rounded-md my-4">
          <table className="table table-xs select-none min-w-[700px] max-w-[1400px] mx-auto">
            <thead>
              <tr className="font-serif">
                <th></th>
                <th>Name</th>
                <th>Weapon</th>
                <th>Aspect</th>
                <th>Heat</th>
                <th>Modded</th>
                <th>Category</th>
                <th>Link</th>
                <th>Patch</th>
              </tr>
            </thead>
            <tbody>
              {testingdata.slice(0, 50).map((obj, index) => (
                <tr className="font-serif">
                  <th className="font-serif">{index + 1}.</th>
                  <td>{obj.Name}</td>
                  <td>{obj.Weapon}</td>
                  <td>{obj.Aspect}</td>
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
                      obj.Modded === "yes" ? `text-success` : `text-error`
                    }
                  >
                    {obj.Modded === "yes" ? `Enabled` : `Disabled`}
                  </td>
                  <td
                    className={
                      obj.Category === `Unseeded`
                        ? `text-warning`
                        : `text-primary`
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
      </div>

      {/*  */}
    </div>
  );
}
