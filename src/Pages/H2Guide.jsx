import Header from "../Components/Header";
import FooterInfo from "../Components/Footer";

import { Link } from "react-router-dom";
import { genBoonString } from "../Logic/Gen";
import { genTime } from "../Logic/Gen";

const randomAspect = [
  `Melinoe Staff`,
  `Circe`,
  `Momus`,
  `Melinoe Blade`,
  `Artemis`,
  `Pan`,
  `Melinoe Flames`,
  `Moros`,
  `Eos`,
  `Melinoe Axe`,
  `Charon`,
  `Thanatos`,
  `Melinoe Skull`,
  `Medea`,
  `Persephone`,
  `Melinoe Coat`,
  `Selene`,
  `Nyx`,
];

const randomFamiliar = [
  `Frinos`,
  `Frinos`,
  `Toula`,
  `Hecuba`,
  `Raki`,
  `Frinos`,
];

export default function Guide() {
  return (
    <div className="h-lvh overflow-x-hidden bg-transparent" data-theme="dark">
      <div
        className="fixed h-full w-full bg-cover -z-10 bg-center"
        style={{ backgroundImage: "url('/mainBG.png')" }}
      />
      <div className="fixed bg-[#0e0d0d] h-lvh w-full object-cover -z-20" />

      <Header />

      {/* <div className="flex flex-wrap gap-2 justify-center my-16">
        <button
          className="btn text-white border-white/30 font-customCin"
          disabled
        >
          Moonstone Axe
        </button>
        <button
          className="btn text-white border-white/30 font-customCin"
          disabled
        >
          Sister Blades
        </button>
        <button
          className="btn text-white border-white/30 font-customCin"
          disabled
        >
          Witch's Staff
        </button>
        <button
          className="btn text-white border-white/30 font-customCin"
          disabled
        >
          Umbral Flames
        </button>
        <button
          className="btn text-white border-white/30 font-customCin"
          disabled
        >
          Argent Skull
        </button>
        <button
          className="btn text-white border-white/30 font-customCin"
          disabled
        >
          Black Coat
        </button>
      </div> */}

      {/* <div className="my-16 flex flex-wrap gap-4 justify-center xl:justify-start max-w-[1200px] mx-auto">
        <Link to={`/ID1`}>
          <div className="bg-black/30 h-full w-96 shadow-xl relative border-[1px] border-white/40 rounded-md group overflow-hidden">
            <div className="p-3 flex flex-col gap-1 group-hover:bg-[#279468] transition-all duration-150 ease-in">
              <div className="text-white font-serif mx-auto underline">
                Xinth, the Black Coat
              </div>
              <div className="text-[12px] text-gray-300">
                "The Black Coat is a versatile weapon that sports multiple
                playstyles, but let's start with the base kit first."
              </div>
              <section className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div class="avatar">
                    <div class="w-8 rounded-full">
                      <img src="/User/Myntkaramell.png" />
                    </div>
                  </div>
                  <div className="font-serif text-white text-[14px]">Mynt</div>
                </div>
                <div className="text-[14px] font-serif text-white">Patch 5</div>
              </section>
            </div>
          </div>
        </Link>
      </div> */}

      <section className="pl-10">
        {Array.from({ length: 20 }, (_, index) => (
          <div>{genBoonString()}</div>
        ))}
      </section>
      <FooterInfo />
    </div>
  );
}
