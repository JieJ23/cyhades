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
            <h1 className="mb-5 text-5xl font-bold font-serif">CapriceYuri</h1>
            <p className="mb-5">
              A community hub dedicated to tracking high-level gameplay within
              the Hades community.
            </p>
            <div className="flex justify-center items-center gap-1.5">
              <Link to={`/Hades`} className="group">
                <button className="btn btn-success hover:scale-105 duration-100 ease-in transition-all">
                  Begin Exploring
                </button>
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-wrap w-full justify-center gap-1">
            <kbd className="kbd">q</kbd>
            <kbd className="kbd">w</kbd>
            <kbd className="kbd bg-success text-white">e</kbd>
            <kbd className="kbd bg-success text-white">r</kbd>
            <kbd className="kbd">t</kbd>
            <kbd className="kbd">y</kbd>
            <kbd className="kbd bg-success text-white">u</kbd>
            <kbd className="kbd">i</kbd>
            <kbd className="kbd">o</kbd>
          </div>
          <div className="flex w-full justify-center gap-1">
            <kbd className="kbd">p</kbd>
            <kbd className="kbd bg-success text-white">a</kbd>
            <kbd className="kbd bg-success text-white">s</kbd>
            <kbd className="kbd">d</kbd>
            <kbd className="kbd">f</kbd>
            <kbd className="kbd bg-success text-white">g</kbd>
            <kbd className="kbd">h</kbd>
            <kbd className="kbd">j</kbd>
            <kbd className="kbd">k</kbd>
          </div>
          <div className="flex w-full justify-center gap-1">
            <kbd className="kbd">l</kbd>
            <kbd className="kbd bg-success text-white">z</kbd>
            <kbd className="kbd">x</kbd>
            <kbd className="kbd">c</kbd>
            <kbd className="kbd">v</kbd>
            <kbd className="kbd">b</kbd>
            <kbd className="kbd">n</kbd>
            <kbd className="kbd">m</kbd>
            <kbd className="kbd">/</kbd>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}
