import Header from "../Components/Header";
import FooterInfo from "../Components/Footer";
import { useState } from "react";
import ImageCounter from "../Components/ImageCounter";

export default function FearCalculator() {
  const imageDetails = [
    { src: "VowPain", values: [0, 1, 3, 5] },
    { src: "VowGrit", values: [0, 1, 2, 3] },
    { src: "VowWards", values: [0, 1, 2] },
    { src: "VowFrenzy", values: [0, 3, 6] },
    { src: "VowHordes", values: [0, 1, 2, 3] },
    { src: "VowMenace", values: [0, 1, 3] },
    { src: "VowReturn", values: [0, 1, 2] },
    { src: "VowFangs", values: [0, 2, 5] },
    { src: "VowScars", values: [0, 1, 2, 4] },
    { src: "VowDebt", values: [0, 1, 2] },
    { src: "VowShadow", values: [0, 2] },
    { src: "VowForfeit", values: [0, 3] },
    { src: "VowTime", values: [0, 1, 3, 6] },
    { src: "VowVoid", values: [0, 1, 2, 3, 5] },
    { src: "VowHubris", values: [0, 1, 2] },
    { src: "VowDenial", values: [0, 2] },
  ];

  const [totalSum, setTotalSum] = useState(0);

  const handleValueChange = (delta) => {
    setTotalSum((prevSum) => prevSum + delta);
  };

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
      <Header />
      {/*  */}
      <section className="my-10 max-w-[1000px] mx-auto select-none">
        <div className="flex justify-center items-center gap-1 mb-5">
          <div className="avatar w-10">
            <img src="fear.png" />
          </div>
          <div className="text-white font-serif text-[28px] flex justify-center items-center">
            {totalSum}
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap px-1 gap-3 max-w-[800px] mx-auto">
          {imageDetails.map((image, index) => (
            <ImageCounter
              key={index}
              imageSrc={image.src}
              values={image.values}
              onValueChange={handleValueChange}
              line={+image.values.length}
            />
          ))}
        </div>
      </section>
      {/*  */}
      <FooterInfo />
    </div>
  );
}
