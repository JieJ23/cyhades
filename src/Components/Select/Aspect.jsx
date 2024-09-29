import { useEffect, useState } from "react";
import { removeDup } from "../../Logic/Method";

export default function AspectSelection({
  allAspect,
  onAspectChange,
  watch,
  fulldata,
}) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (watch === fulldata.length - 1) {
      return;
    } else {
      setValue(`Select Aspect`);
    }
  }, [watch]);

  const allAspects = [...new Set(allAspect.map((obj) => obj.Aspect))];

  const displayData = allAspects.sort();

  const handleChange = (e) => {
    setValue(e.target.value);
    onAspectChange(e.target.value);
  };

  return (
    <select className="select font-serif" value={value} onChange={handleChange}>
      <option disabled selected>
        Select Aspect
      </option>
      {displayData.map((obj) => (
        <option value={obj} className="flex gap-1">
          {obj}
        </option>
      ))}
    </select>
  );
}
