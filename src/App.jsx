import { Link } from "react-router-dom";
import TopPlayers from "./Components/TopPlayers";
import TopPlayers2 from "./Components/TopPlayers2";
import Marquee from "react-fast-marquee";
import FooterInfo from "./Components/Footer";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="h-lvh overflow-x-hidden select-none w-full">
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
        <div className="mx-auto pt-8 pb-5 w-full">
          <div className="mb-5 text-4xl font-bold font-serif text-gray-300">
            Supergiant Games
          </div>
          <div>
            <div className="my-5">
              <Link
                to={`/Hades2`}
                className="group w-full relative group rounded-xl"
              >
                <div className="w-full min-h-[220px] max-w-[800px] mx-auto relative bg-transparent shadow-[inset_0_0_5px_black] border-[1px] border-black/30 rounded-xl overflow-hidden">
                  <div
                    className="absolute bg-[#29975399] h-full w-full top-0 left-0 opacity-40 bg-cover bg-center bg-no-repeat rounded-xl group-hover:opacity-60 transition-all ease-in duration-200"
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
              <div className="flex justify-center gap-2">
                <Link to={`/Hades2`}>
                  <button className="btn btn-success my-3 btn-outline font-serif">
                    Hades 2
                  </button>
                </Link>
                <Link
                  to={`https://www.supergiantgames.com/games/hades-ii/`}
                  target="_blank"
                >
                  <button className="btn btn-success my-3 btn-outline font-serif">
                    Official SG Hade 2
                  </button>
                </Link>
              </div>
              <div className="font-customDress text-[14px] max-w-[800px] mx-auto text-center text-[#51b084] px-4">
                Hades II is the upcoming sequel to Hades, developed by
                Supergiant Games. In this game, you play as Melinoë, the sister
                of Zagreus and another child of Hades. She embarks on her own
                journey to confront Chronos, the Titan of Time, who has escaped
                the Underworld. Like the first game, Hades II features
                fast-paced, roguelike combat with new weapons, powers, and boons
                from gods of Greek mythology. The game promises a blend of
                challenging gameplay, character-driven storytelling, and rich
                lore, building on the success of its predecessor.
              </div>
              <div className=" mt-2 flex flex-wrap justify-center gap-2">
                <Link to={`https://hades2builder.vercel.app/`} target="_blank">
                  <button className="btn btn-outline btn-success text-white font-serif border-white/20">
                    <div className="avatar">
                      <div className="w-8 rounded">
                        <img src="/build.png" />
                      </div>
                    </div>
                    <div>Boon Builder (Derpity)</div>
                  </button>
                </Link>
                <Link to={`/FearCalculator`}>
                  <button className="btn btn-outline btn-success text-white font-serif border-white/20">
                    <div className="avatar">
                      <div className="w-8 rounded">
                        <img src="/heat.png" />
                      </div>
                    </div>
                    <div>Fear Calculator</div>
                  </button>
                </Link>
              </div>
              <div className="rounded-xl">
                <Marquee className="rounded-xl">
                  <div className="w-[500px] md:w-[800px] lg:w-[1000px]">
                    <TopPlayers2 />
                  </div>
                </Marquee>
              </div>
              <div className="mt-5 flex justify-center gap-2">
                <Link
                  to={`https://store.steampowered.com/app/1145350/Hades_II/`}
                  target="_blank"
                >
                  <button className="btn btn-outline text-white font-serif border-white/20">
                    <div className="avatar">
                      <div className="w-8 rounded">
                        <img src="/steam.png" />
                      </div>
                    </div>
                    <div>Steam</div>
                  </button>
                </Link>
                <Link
                  to={`https://store.epicgames.com/en-US/p/hades-ii`}
                  target="_blank"
                >
                  <button className="btn btn-outline text-white font-serif border-white/20">
                    <div className="avatar">
                      <div className="w-8 rounded">
                        <img src="/epic.png" />
                      </div>
                    </div>
                    <div>Epic Games</div>
                  </button>
                </Link>
              </div>
            </div>

            <div className="divider my-10 px-4 divider-neutral">
              <div className="w-[200px]">
                <img src={`/logo.png`} />
              </div>
            </div>

            <div className="my-5">
              <Link to={`/Hades`} className="group w-full rounded-xl">
                <div className="w-full min-h-[220px] relative max-w-[800px] mx-auto bg-transparent shadow-[inset_0_0_5px_black] border-[1px] border-black/30 rounded-xl overflow-hidden">
                  <div
                    className="absolute bg-[transparent] h-full w-full top-0 opacity-40 left-0 bg-cover bg-center bg-no-repeat rounded-xl group-hover:opacity-60 transition-all ease-in duration-200"
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
              <div className="flex justify-center gap-2">
                <Link to={`/Hades`}>
                  <button className="btn btn-error my-3 btn-outline font-serif">
                    Hades
                  </button>
                </Link>
                <Link
                  to={`https://www.supergiantgames.com/games/hades/`}
                  target="_blank"
                >
                  <button className="btn btn-error my-3 btn-outline font-serif">
                    Official SG Hades
                  </button>
                </Link>
              </div>
              <div className="font-customDress text-[14px] max-w-[800px] mx-auto text-center text-[#c04747] px-4">
                Hades is a roguelike action game where you play as Zagreus, the
                son of Hades, trying to escape the Underworld. Each run is
                procedurally generated, featuring fast-paced combat with a
                choice of weapons and powerful boons granted by Olympian gods
                like Zeus, Athena, and Poseidon. The game blends challenging
                gameplay with a deep, evolving narrative, offering engaging
                character interactions and a unique art style. Dying is part of
                the loop, and each attempt to escape brings new dialogue,
                upgrades, and story progression.
              </div>
              <div className=" mt-2 flex flex-wrap justify-center gap-2">
                <Link
                  to={`https://cpecific.github.io/hades-wiki/`}
                  target="_blank"
                >
                  <button className="btn btn-outline btn-error text-white font-serif border-white/20">
                    <div className="avatar">
                      <div className="w-8 rounded">
                        <img src="/doc.png" />
                      </div>
                    </div>
                    <div>Cpecific Wiki</div>
                  </button>
                </Link>
                <Link to={`https://hadesheat.onrender.com/`} target="_blank">
                  <button className="btn btn-outline btn-error text-white font-serif border-white/20">
                    <div className="avatar">
                      <div className="w-8 rounded">
                        <img src="/heat.png" />
                      </div>
                    </div>
                    <div>
                      <div>Heat Calculator (G.K.)</div>
                    </div>
                  </button>
                </Link>
                <Link to={`https://www.boonbuilder.com/`} target="_blank">
                  <button className="btn btn-outline btn-error text-white font-serif border-white/20">
                    <div className="avatar">
                      <div className="w-8 rounded">
                        <img src="/build.png" />
                      </div>
                    </div>
                    <div>Boon Builder (P.G.)</div>
                  </button>
                </Link>
              </div>
              <Marquee>
                <div className="w-[500px] md:w-[800px] lg:w-[1000px]">
                  <TopPlayers />
                </div>
              </Marquee>
            </div>
            <div className="mt-5 flex justify-center gap-2">
              <Link
                to={`https://store.steampowered.com/app/1145360/Hades/`}
                target="_blank"
              >
                <button className="btn btn-outline text-white font-serif border-white/20">
                  <div className="avatar">
                    <div className="w-8 rounded">
                      <img src="/steam.png" />
                    </div>
                  </div>
                  <div>Steam</div>
                </button>
              </Link>
              <Link
                to={`https://store.epicgames.com/en-US/p/hades`}
                target="_blank"
              >
                <button className="btn btn-outline text-white font-serif border-white/20">
                  <div className="avatar">
                    <div className="w-8 rounded">
                      <img src="/epic.png" />
                    </div>
                  </div>
                  <div>Epic Games</div>
                </button>
              </Link>
            </div>
            <div className="divider my-10 px-4 divider-neutral">
              <div className="w-[200px]">
                <img src={`/logo2.png`} />
              </div>
            </div>
          </div>
        </div>
        <FooterInfo />
      </div>
    </div>
  );
}
