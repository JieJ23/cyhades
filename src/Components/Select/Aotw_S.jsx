import { useEffect, useState } from "react";
import { removeDup } from "../../Logic/Method";

export default function AOTW_Speed({
  alldata,
  onaotwSChange,
  watch,
  fulldata,
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (watch === fulldata.length - 3) {
      return;
    } else {
      setValue(`AOTW Speed #`);
    }
  }, [watch]);

  const category = [...new Set(alldata.map((obj) => obj.AOTWSpeed))];

  const displayData = category.sort();

  const handleChange = (e) => {
    setValue(e.target.value);
    onaotwSChange(e.target.value);
  };

  return (
    <select className="select font-serif" value={value} onChange={handleChange}>
      <option disabled selected>
        AOTW Speed #
      </option>
      {displayData.slice(1).map((obj) => (
        <option value={obj} className="flex gap-1">
          # {obj}
        </option>
      ))}
    </select>
  );
}
