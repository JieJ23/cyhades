import { useEffect, useState } from "react";
import { removeDup } from "../../Logic/Method";

export default function AOTW_Heat({ alldata, onaotwHChange, watch, fulldata }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (watch === fulldata.length - 4) {
      return;
    } else {
      setValue(`AOTW Heat #`);
    }
  }, [watch]);

  const allcategory = [...new Set(alldata.map((obj) => obj.AOTWHeat))];
  const displayData = allcategory.sort();

  const handleChange = (e) => {
    setValue(e.target.value);
    onaotwHChange(e.target.value);
  };

  return (
    <select className="select font-serif" value={value} onChange={handleChange}>
      <option disabled selected>
        AOTW Heat #
      </option>
      {displayData.slice(1).map((obj, index) => (
        <option value={obj} className="flex gap-1">
          # {obj}
        </option>
      ))}
    </select>
  );
}
