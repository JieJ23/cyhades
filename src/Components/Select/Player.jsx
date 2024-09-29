import { useEffect, useState } from "react";

export default function PlayerSelection({
  allPlayers,
  onPlayerChange,
  watch,
  fulldata,
}) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (watch === fulldata.length - 2) {
      return;
    } else {
      setValue(`Select Player`);
    }
  }, [watch]);

  const allPlayerUsers = [...new Set(allPlayers.map((obj) => obj.Name))];

  const removeDupUserPlayers = [...new Set(allPlayerUsers)];

  const displayData = removeDupUserPlayers.sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );

  const handleChange = (e) => {
    setValue(e.target.value);
    onPlayerChange(e.target.value);
  };

  return (
    <select className="select font-serif" value={value} onChange={handleChange}>
      <option disabled selected>
        Select Player
      </option>
      {displayData.map((obj) => (
        <option value={obj} className="flex gap-1">
          {obj}
        </option>
      ))}
    </select>
  );
}
