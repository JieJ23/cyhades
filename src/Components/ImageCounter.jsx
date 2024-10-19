import React, { useState } from "react";

const ImageCounter = ({ imageSrc, values, onValueChange, line }) => {
  const [index, setIndex] = useState(0);

  const currentValue = values[index];
  const isFinalIndex = index === values.length - 1;
  const isFirstIndex = index === values[0];

  const handleClick = () => {
    const newIndex = (index + 1) % values.length; // Loop back to the start if the end is reached
    const newValue = values[newIndex];
    setIndex(newIndex);
    onValueChange(newValue - currentValue); // Adjust based on the new value
  };

  return (
    <div
      className={`transition-all ease-in duration-300  rounded-2xl relative select-none group ${
        isFirstIndex
          ? "opacity-50 bg-gradient-to-tr from-[#3b569eae] to-[#0a462db5]"
          : "bg-gradient-to-tr from-[#6a2678ae] to-[#0d1ca3b5]"
      }`}
    >
      <MakeVowCards num={imageSrc} onClick={handleClick} circle={line} />
      {currentValue > 0 && (
        <div
          className={`text-[16px] font-serif flex justify-center items-center absolute top-1 right-3 ${
            isFinalIndex ? "text-[#25e9e6]" : "text-[white]"
          }`}
        >
          <div className="flex items-center gap-0.5">
            <div className="group-hover:scale-125 ease-in duration-100 transition-all">
              {currentValue}
            </div>
            <div className="avatar w-5 group-hover:scale-125 ease-in duration-100 transition-all">
              <img src="fear.png" />
            </div>
          </div>
        </div>
      )}
      {currentValue > 0 && (
        <div className="h-5 w-5 text-[white] absolute top-0 left-0 z-20 cursor-pointer hover:h-6 hover:w-6 transition-all ease-in duration-200" />
      )}
    </div>
  );
};

export default ImageCounter;

//
function MakeVowCards({ num, onClick, onClick2, circle }) {
  const [selectedIndex, setSelectedIndex] = useState(0); // Start with no selection

  const handleRadioClick = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % circle);
  };

  const handleCombinedClick = (e) => {
    onClick(e); // Call the onClick prop
    handleRadioClick(); // Update radio selection
  };

  return (
    <div
      className=" relative flex justify-center gap-2 items-center group w-[150px] h-[100px] cursor-pointer rounded-2xl"
      onClick={handleCombinedClick}
      onContextMenu={onClick2}
    >
      <div className="rating rating-xs absolute bottom-2 left-2 pointer-events-none">
        {Array.from({ length: circle - 1 }).map((num) => (
          <div className="bottom-2 left-2 h-1.5 w-1.5 bg-[gray] me-0.5 rounded-full" />
        ))}
      </div>
      <div
        className="avatar w-10 select-none group-hover:scale-125 ease-in duration-100 transition-all"
        draggable={false}
      >
        <img src={`Vows/${num}.png`} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-serif text-[12px] text-white">{num.slice(3)}</div>
        <div className="flex gap-0.5">
          {selectedIndex < 1
            ? Array.from({ length: circle - 1 }).map((num, index) => (
                <input
                  type="radio"
                  className="radio radio-xs radio-success pointer-events-none"
                  checked={false}
                />
              ))
            : Array.from({ length: selectedIndex }).map((num, index) => (
                <input
                  type="radio"
                  className="radio radio-xs radio-success pointer-events-none"
                  checked={true}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
