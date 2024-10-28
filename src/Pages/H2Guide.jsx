import Header from "../Components/Header";
import FooterInfo from "../Components/Footer";

import { Link } from "react-router-dom";

export default function Guide() {
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

      <div className="flex flex-wrap gap-2 justify-center my-16">
        <Link to={`/WeaponMoonstoneAxe`}>
          <button className="btn text-white border-white/30 font-customCin">
            Moonstone Axe
          </button>
        </Link>
        <Link to={`/`}>
          <button className="btn text-white border-white/30 font-customCin">
            Sister Blades
          </button>
        </Link>
        <Link to={`/`}>
          <button className="btn text-white border-white/30 font-customCin">
            Witch's Staff
          </button>
        </Link>
        <Link to={`/`}>
          <button className="btn text-white border-white/30 font-customCin">
            Umbral Flames
          </button>
        </Link>
        <Link to={`/`}>
          <button className="btn text-white border-white/30 font-customCin">
            Argent Skull
          </button>
        </Link>
        <Link to={`/`}>
          <button className="btn text-white border-white/30 font-customCin">
            Black Coat
          </button>
        </Link>
      </div>

      <div className="my-16 flex flex-wrap gap-4 justify-center">
        <Link to={`/ID1`}>
          <div className="card bg-black/30 w-96 shadow-xl relative border-[1px] border-white/40 group">
            <div
              className="bg-cover bg-center h-full w-full absolute opacity-30 group-hover:opacity-50 duration-150 ease-in transition-opacity"
              style={{ backgroundImage: "url('/Black Coat.png')" }}
            />
            <div className="card-body z-20 pb-4 px-6">
              <div className="card-title text-white font-serif mx-auto underline">
                Xinth, the Black Coat
              </div>
              <div className="text-[12px] text-gray-400">
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
      </div>

      <FooterInfo />
    </div>
  );
}
