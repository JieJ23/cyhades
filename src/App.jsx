import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="h-lvh overflow-x-hidden select-none">
      <div className="fixed bg-[#0e0d0d] h-lvh w-full object-cover -z-20" />

      {/*  */}
      <div
        className="hero h-lvh"
        style={{
          backgroundImage: "url('/mainBG.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-20" />

        <div className="hero-content text-neutral-content text-center flex flex-col h-full">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold font-serif text-gray-300">
              CapriceYuri
            </h1>
            <p className="mb-5 text-gray-400">
              A community hub dedicated to tracking high-level gameplay within
              the Hades community.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Link to={`/Hades`} className="group w-full overflow-hidden">
                <div className="w-full min-h-[220px] relative bg-transparent shadow-[0_0_15px_black] border-[1px] border-[black] rounded-xl">
                  <div
                    className="absolute bg-[#f0444499] h-full w-full top-0 opacity-20 left-0 bg-cover bg-center bg-no-repeat rounded-xl group-hover:opacity-40 transition-all ease-in duration-200"
                    style={{ backgroundImage: `url("/hadesBG.png")` }}
                  />
                  <div
                    className="absolute h-full w-full top-0 left-0 rounded-xl bg-center bg-contain bg-no-repeat group-hover:scale-105 ease-in duration-200 transition-all z-10"
                    style={{ backgroundImage: `url("/zagreus.png")` }}
                  />
                  <div className="absolute top-5 left-5 font-customDress uppercase z-20 text-[#ee1818] text-[20px] group-hover:text-[24px] ease-in duration-200 transition-all">
                    Hades I
                  </div>
                  <div className="absolute bottom-5 right-5 font-customDress uppercase z-20 text-white text-[16px] group-hover:text-[18px] ease-in duration-200 transition-all">
                    Zagreus
                  </div>
                </div>
              </Link>
              <Link
                to={`/Hades2`}
                className="group w-full relative group overflow-hidden"
              >
                <div className="w-full min-h-[220px] relative bg-transparent shadow-[0_0_15px_black] border-[1px] border-[black] rounded-xl">
                  <div
                    className="absolute bg-[#29975399] h-full w-full top-0 left-0 opacity-20 bg-cover bg-center bg-no-repeat rounded-xl group-hover:opacity-40 transition-all ease-in duration-200"
                    style={{ backgroundImage: `url("/hades2BG.png")` }}
                  />
                  <div
                    className="absolute h-full w-full top-0 left-0 z-10 rounded-xl bg-center bg-contain bg-no-repeat group-hover:scale-105 ease-in duration-200 transition-all"
                    style={{ backgroundImage: `url("/melinoe.png")` }}
                  />
                  <div className="absolute top-5 left-5 font-customDress uppercase z-20 text-[#16c247] text-[20px] group-hover:text-[24px] ease-in duration-200 transition-all">
                    Hades II
                  </div>
                  <div className="absolute bottom-5 right-5 font-customDress uppercase z-20 text-white text-[16px] group-hover:text-[18px] ease-in duration-200 transition-all">
                    Melinoë
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-wrap w-full justify-center gap-1">
            <kbd className="kbd">q</kbd>
            <kbd className="kbd">w</kbd>
            <kbd className="kbd bg-error text-black">e</kbd>
            <kbd className="kbd bg-error text-black">r</kbd>
            <kbd className="kbd">t</kbd>
            <kbd className="kbd">y</kbd>
            <kbd className="kbd bg-error text-black">u</kbd>
            <kbd className="kbd">i</kbd>
            <kbd className="kbd">o</kbd>
          </div>
          <div className="flex w-full justify-center gap-1">
            <kbd className="kbd">p</kbd>
            <kbd className="kbd bg-error text-black">a</kbd>
            <kbd className="kbd bg-error text-black">s</kbd>
            <kbd className="kbd">d</kbd>
            <kbd className="kbd">f</kbd>
            <kbd className="kbd bg-error text-black">g</kbd>
            <kbd className="kbd">h</kbd>
            <kbd className="kbd">j</kbd>
            <kbd className="kbd">k</kbd>
          </div>
          <div className="flex w-full justify-center gap-1">
            <kbd className="kbd">l</kbd>
            <kbd className="kbd bg-error text-black">z</kbd>
            <kbd className="kbd">x</kbd>
            <kbd className="kbd">c</kbd>
            <kbd className="kbd">v</kbd>
            <kbd className="kbd">b</kbd>
            <kbd className="kbd">n</kbd>
            <kbd className="kbd">m</kbd>
          </div>
          {/*  */}
          <div className="flex flex-wrap w-full justify-center gap-1">
            <kbd className="kbd">q</kbd>
            <kbd className="kbd">w</kbd>
            <kbd className="kbd bg-success text-white">e</kbd>
            <kbd className="kbd">r</kbd>
            <kbd className="kbd">t</kbd>
            <kbd className="kbd">y</kbd>
            <kbd className="kbd">u</kbd>
            <kbd className="kbd bg-success text-white">i</kbd>
            <kbd className="kbd bg-success text-white">o</kbd>
          </div>
          <div className="flex w-full justify-center gap-1">
            <kbd className="kbd">p</kbd>
            <kbd className="kbd bg-success text-white">ë</kbd>
            <kbd className="kbd">s</kbd>
            <kbd className="kbd">d</kbd>
            <kbd className="kbd">f</kbd>
            <kbd className="kbd">g</kbd>
            <kbd className="kbd">h</kbd>
            <kbd className="kbd">j</kbd>
            <kbd className="kbd">k</kbd>
          </div>
          <div className="flex w-full justify-center gap-1">
            <kbd className="kbd bg-success text-white">l</kbd>
            <kbd className="kbd">z</kbd>
            <kbd className="kbd">x</kbd>
            <kbd className="kbd">c</kbd>
            <kbd className="kbd">v</kbd>
            <kbd className="kbd">b</kbd>
            <kbd className="kbd bg-success text-white">n</kbd>
            <kbd className="kbd bg-success text-white">m</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
