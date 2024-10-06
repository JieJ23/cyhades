import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="h-lvh overflow-x-hidden select-none">
      <div
        className="fixed h-full w-full bg-cover -z-10 bg-center"
        style={{ backgroundImage: "url('/mainBG.png')" }}
      />
      <div className="fixed bg-[#0e0d0d] h-lvh w-full object-cover -z-20" />

      {/*  */}
      <div
        className="text-neutral-content text-center flex flex-col h-full bg-transparent"
        data-theme="dark"
      >
        <div className="w-full max-w-[1000px] mx-auto pt-10 pb-5 px-4">
          <h1 className="mb-5 text-5xl font-bold font-serif text-gray-300">
            CapriceYuri
          </h1>
          <p className="mb-5 text-gray-400">
            A community hub dedicated to tracking high-level gameplay within the
            Hades community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Link
              to={`/Hades`}
              className="group w-full overflow-hidden opacity-40"
            >
              <div className="w-full min-h-[220px] relative bg-transparent shadow-[0_0_15px_black] border-[2px] border-[#253159] rounded-xl">
                <div
                  className="absolute bg-[transparent] h-full w-full top-0 opacity-20 left-0 bg-cover bg-center bg-no-repeat rounded-xl group-hover:opacity-40 transition-all ease-in duration-200"
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
              <div className="w-full min-h-[220px] relative bg-transparent shadow-[0_0_15px_black] border-[2px] border-[#253159] rounded-xl">
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
        <Link to={`/FormSubmission`}>
          <button className="btn btn-success">Submission Btn</button>
        </Link>
        {/*  */}
        <section className="px-4 flex justify-center">
          <div className="mockup-code bg-neutral w-full max-w-[800px] mx-auto my-5 p-5 text-black text-start">
            <pre data-prefix="$" className="text-primary">
              <code>Documentation</code>
            </pre>
            <pre data-prefix="$" className="text-primary">
              <code>Excel Sheet Monitor</code>
            </pre>
            <pre data-prefix="-" className="text-warning">
              <code>Path /Hades & /Hades2</code>
            </pre>
            <pre data-prefix="-" className="text-warning">
              <code>API GET - H1 / H2</code>
            </pre>
            <pre data-prefix="-" className="text-warning">
              <code>API Post - Dynamic DB/Form</code>
            </pre>
            <pre data-prefix="-" className="text-error">
              <code>H1 - Weap/Aspect/Player</code>
            </pre>
            <pre data-prefix="-" className="text-error">
              <code>H1 Secondary - AOTW: H/T</code>
            </pre>
            <pre data-prefix="-" className="text-success">
              <code>H2 - Weap/Aspect/Player</code>
            </pre>
            <pre data-prefix="-" className="text-success">
              <code>H2 Secondary - Boon/Time</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
