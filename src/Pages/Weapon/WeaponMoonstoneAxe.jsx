import Header from "../../Components/Header";
import FooterInfo from "../../Components/Footer";
import {
  weapon1details,
  weapon2details,
  weapon3details,
  moonstone1,
  moonstone2,
  moonstone3,
} from "./Moonstone";

function MoonstoneAxeDivider() {
  return (
    <div className="divider w-full mx-auto divider-neutral my-6">
      <img
        src="/Divider/MoonstoneDivider.png"
        className="h-[25px]"
        draggable={false}
      />
    </div>
  );
}

export default function WeaponMoonstoneAxe() {
  return (
    <div
      className="h-lvh overflow-x-hidden select-none bg-transparent"
      data-theme="dark"
    >
      {/* <div
        className="fixed h-full w-full bg-cover -z-10 bg-center"
        style={{ backgroundImage: "url('/mainBG.png')" }}
      /> */}
      {/* <div className="fixed bg-[#0e0d0d] h-lvh w-full object-cover -z-20" /> */}
      <div className="fixed bg-[#000] h-lvh w-full object-cover -z-20" />

      <Header />
      {/*  */}

      {/* <div className="flex w-[80%] max-w-[1000px] flex-col gap-4 mx-auto my-10">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-[50%]"></div>
        <div className="skeleton h-4 w-[75%]"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-[50%]"></div>
        <div className="skeleton h-4 w-[75%]"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-[50%]"></div>
        <div className="skeleton h-4 w-[75%]"></div>
        <div className="skeleton h-4 w-full"></div>
      </div> */}
      <main className="mt-16 mb-10 px-4 max-w-[1200px] mx-auto font-customCin select-none">
        <div className="text-[30px] text-center text-white">
          The Moonstone Axe, Zoraphet
        </div>
        <MoonstoneAxeDivider />

        <section>
          <div className="text-[24px] text-white text-center">
            Aspect of Melinoë
          </div>
          <div className="flex justify-center my-4">
            <img
              src="/Divider/Melinoe Moonstone.png"
              className="w-[220px]"
              draggable={false}
            />
          </div>

          <section className="flex flex-wrap gap-4 sm:gap-2 justify-center my-5">
            {weapon1details.map((obj, index) => (
              <div
                className={`flex flex-col ${
                  index === 5
                    ? `bg-gradient-to-tl from-[#71422a] to-[#760202]`
                    : `bg-gradient-to-tr from-[#6d3aa3] to-[#062e7d]`
                } items-center p-3 rounded-xl max-w-[150px] text-center`}
              >
                <div className="text-white text-[14px]">Rank #{obj.Rank}</div>
                <div className="text-[12px] font-serif text-gray-300">
                  {obj.Info}
                </div>
              </div>
            ))}
          </section>

          <section className="my-10">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-gray-300 text-center">
                    {/* <th></th> */}

                    <th>Player</th>
                    <th>Hammer</th>
                    <th> ATK / CAST / EFFECTS / DEF</th>
                    <th>Keepsake ( E-O-F-T )</th>
                  </tr>
                </thead>
                <tbody>
                  {moonstone1.map((obj) => (
                    <tr className="text-white text-center relative">
                      {/* <div
                        className={`absolute top-0 left-0 h-[100%] w-full bg-cover bg-center -z-10 opacity-50 bg-[url('/B/back.png')]`}
                      /> */}
                      <td>{obj.player}</td>
                      <td>
                        <div className="flex flex-col gap-1">
                          <section className="rounded-lg p-1">
                            <div className="text-[11px]">Best Hammers</div>
                            <div className="flex flex-row justify-center">
                              {obj.Hammer.map((item) => (
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/Boon/${item}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="flex flex-col justify-center">
                              {obj.Hammer.map((item, index) => (
                                <div className="text-start text-[11px]">
                                  {`${index + 1}. ${item}`}
                                </div>
                              ))}
                            </div>
                          </section>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col min-w-[200px] gap-1">
                          <section className="rounded-lg p-2">
                            <div className="flex flex-row justify-center">
                              {obj.Core.map((item) => (
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/Element/${item}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="text-[11px]">Ideal Core</div>
                          </section>
                          <section className="rounded-lg p-2">
                            <div className="flex flex-row justify-center">
                              {obj.Core2.map((item) => (
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/Element/${item}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="text-[11px] text-white">
                              Secondary Core
                            </div>
                          </section>
                          <section className="rounded-lg p-2">
                            <div className="flex flex-row justify-center">
                              {obj.Core3.map((item) => (
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/Element/${item}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="text-[11px] text-white">
                              RNG screwed, but manageable
                            </div>
                          </section>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col min-w-[350px] gap-1">
                          <section className="rounded-lg p-2">
                            <div className="text-[11px] text-[gold]">
                              Erebus
                            </div>
                            <div className="flex flex-row justify-center">
                              <div className="avatar">
                                <div className="mask mask-squircle w-10">
                                  <img
                                    src={`/KS/${obj.Erebus.KS}.png`}
                                    draggable={false}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="text-[11px] text-white">
                              {obj.Erebus.Info}
                            </div>
                          </section>
                          <section className="flex justify-center gap-2 rounded-lg relative">
                            <div className="text-[11px] text-[gold] absolute top-0 right-1/2 translate-x-[50%]">
                              Oceanus
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Oceanus.KS}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Oceanus.Info}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Oceanus.KS2}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Oceanus.Info2}
                              </div>
                            </div>
                          </section>
                          <section className="flex justify-center gap-2 rounded-lg relative">
                            <div className="text-[11px] text-[gold] absolute top-0 right-1/2 translate-x-[50%]">
                              Field
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Field.KS}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Field.Info}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Field.KS2}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Field.Info2}
                              </div>
                            </div>
                          </section>
                          <section className="flex justify-center gap-2 rounded-lg relative">
                            <div className="text-[11px] text-[gold] absolute top-0 right-1/2 translate-x-[50%]">
                              Tartarus
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Tartarus.KS}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Tartarus.Info}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Tartarus.KS2}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Tartarus.Info2}
                              </div>
                            </div>
                          </section>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="text-gray-300 tracking-wider text-[11px] sm:text-[14px]">
            "The Melinoë Axe is the power variant of the melee Moonstone Axes,
            capable of making short work of almost any enemy type, though
            struggling early with Vow of Rebuke. This weakness can be alleviated
            by beelining for Hitch, specifically Sworn Strike from Hera. By
            going with Engagement Ring instead of Sworn Strike, though, you open
            yourself up to either Aphrodite's Flutter Strike or Apollo's Nova
            Strike, which have stronger damage ratios than Sworn Strike, further
            boosting your already monstrous damage. Do take note that Engagement
            Ring's ability to Hitch targets is a lot less effective as a cast
            compared to swinging your axe with its wide arcs and range.
            <br />
            <br />
            The aspect is affectionally called the ""Aspect of Dashing Heave""
            by a good amount of people, as the weapon fully activates upon
            obtaining this hammer. By grabbing Dashing Heave, you essentially
            negate the weapon's slow weakness, turning your powerful Dash Attack
            (75 base damage) into a Double Dash Strike (150 base damage). This
            can be spammed, and it has great AoE at the tradeoff of no longer
            having proper range, but you can easily go back to swinging instead
            at a moment's notice to adapt to enemies. Make sure to have Passion
            Rush when you aim for this, as well.
            <br />
            <br />
            Seething Marauder is a great hammer to take, as it produces 60 power
            shockwaves underfoot, but it does not work well with Apollo, as this
            shockwave has a specific melee range that the Apollo attack's
            massive range does not let you properly utilize unless you'd get
            close, in which case just run Aphrodite for the raw damage. Seething
            Marauder's 60 power shockwaves are produced with each hit. This
            involves each tick of the Omega Attack, allowing you to do 600 more
            damage at full charge by taking this hammer. It is also important to
            note that this 60 power shockwave is not produced by Dash Attacks,
            and has no synergy with Dashing Heave whatsoever.
            <br />
            <br />
            Rapid Slash is a great hammer as well, giving you the bonuses of the
            Thanatos Axe, shoring up your slow attack speed weakness. Though
            Rapid Slash is great, it's not the most synergistic with Dashing
            Heave, which is considered the best on this Aspect, so keep that in
            mind when choosing it. If you already have Dashing Heave, you do not
            need to take this, as they work against each other, and you'd rather
            do Dash Attacks than swing attacks quickly.
            <br />
            <br />
            Machi in particular likes to use Specials in his combos, and so
            prioritizes Melting Shredder more than the others. While it does not
            do anything against bosses, it helps in quickly ending miniboss
            fights and armoured enemies. This playstyle can be effective if you
            can manage your range well.
            <br />
            <br />
            In particular, I don't really find Whirlwind hammers the most
            important on Melinoë Axe. Psychic Whirlwind is decent, and you can
            pivot into a semi-whirling build should you need it, but it's not
            something to go after.
            <br />
            <br />
            Executioner's Chop is fairly decent if you have the Magick Regen to
            help you run it. Hell Splitter however is a bit of a meme, though."
          </div>
        </section>

        <MoonstoneAxeDivider />

        <section>
          <div className="text-[24px] text-white text-center">
            Aspect of Charon
          </div>
          <div className="flex justify-center my-4">
            <img
              src="/Divider/Charon.png"
              className="w-[220px]"
              draggable={false}
            />
          </div>

          <section className="flex flex-wrap gap-4 sm:gap-2 justify-center my-5">
            {weapon2details.map((obj, index) => (
              <div
                className={`flex flex-col ${
                  index === 5
                    ? `bg-gradient-to-tl from-[#71422a] to-[#760202]`
                    : `bg-gradient-to-tr from-[#6d3aa3] to-[#062e7d]`
                } items-center p-3 rounded-xl max-w-[150px] text-center`}
              >
                <div className="text-white text-[14px]">Rank #{obj.Rank}</div>
                <div className="text-[12px] font-serif text-gray-300">
                  {obj.Info}
                </div>
              </div>
            ))}
          </section>

          <section className="my-10">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-gray-300 text-center">
                    {/* <th></th> */}
                    <th>Player</th>
                    <th>Hammer</th>
                    <th> ATK / CAST / EFFECTS / DEF</th>
                    <th>Keepsake ( E-O-F-T )</th>
                  </tr>
                </thead>
                <tbody>
                  {moonstone2.map((obj) => (
                    <tr className="text-white text-center relative">
                      {/* <div
                        className={`absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat -z-10 opacity-50 bg-[url('/B/back.png')]`}
                      /> */}
                      <td>{obj.player}</td>
                      <td>
                        <div className="flex flex-col gap-1">
                          <section className="rounded-lg p-1">
                            <div className="text-[11px]">Best Hammers</div>
                            <div className="flex flex-row justify-center">
                              {obj.Hammer.map((item) => (
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/Boon/${item}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="flex flex-col justify-center">
                              {obj.Hammer.map((item, index) => (
                                <div className="text-start text-[11px]">
                                  {`${index + 1}. ${item}`}
                                </div>
                              ))}
                            </div>
                          </section>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col min-w-[200px] gap-1">
                          <section className="rounded-lg p-2">
                            <div className="flex flex-row justify-center">
                              {obj.Core.map((item) => (
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/Element/${item}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="text-[11px]">Ideal Core</div>
                          </section>
                          <section className=" rounded-lg p-2">
                            <div className="flex flex-row justify-center">
                              {obj.Core2.map((item) => (
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/Element/${item}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="text-[11px] text-white">
                              Secondary Core
                            </div>
                          </section>
                          <section className="rounded-lg p-2">
                            <div className="flex flex-row justify-center">
                              {obj.Core3.map((item) => (
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/Element/${item}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="text-[11px] text-white">
                              RNG screwed, but manageable
                            </div>
                          </section>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col min-w-[350px] gap-1">
                          <section className="rounded-lg p-2 ">
                            <div className="text-[11px] text-[gold]">
                              Erebus
                            </div>
                            <div className="flex flex-row justify-center">
                              <div className="avatar">
                                <div className="mask mask-squircle w-10">
                                  <img
                                    src={`/KS/${obj.Erebus.KS}.png`}
                                    draggable={false}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="text-[11px] text-white">
                              {obj.Erebus.Info}
                            </div>
                          </section>
                          <section className="flex justify-center gap-2 rounded-lg relative">
                            <div className="text-[11px] text-[gold] absolute top-0 right-1/2 translate-x-[50%]">
                              Oceanus
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Oceanus.KS}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Oceanus.Info}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Oceanus.KS2}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Oceanus.Info2}
                              </div>
                            </div>
                          </section>
                          <section className="flex justify-center gap-2 rounded-lg  relative">
                            <div className="text-[11px] text-[gold] absolute top-0 right-1/2 translate-x-[50%]">
                              Field
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Field.KS}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Field.Info}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Field.KS2}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Field.Info2}
                              </div>
                            </div>
                          </section>
                          <section className="flex justify-center gap-2 rounded-lg relative">
                            <div className="text-[11px] text-[gold] absolute top-0 right-1/2 translate-x-[50%]">
                              Tartarus
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Tartarus.KS}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Tartarus.Info}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Tartarus.KS2}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Tartarus.Info2}
                              </div>
                            </div>
                          </section>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <div className="text-gray-300 tracking-wider text-[11px] sm:text-[14px]">
            "The Charon Axe does not play like a normal Moonstone Axe. While it
            is an Axe that is capable of both close combat and artillery-range
            playstyles, it does not do this with the attack button. It has a
            focus on ensuring you rapidly deploy your extremely high base damage
            Special-Cast rotations while ensuring you do not run out of Magick
            while doing so. Apollo's Lucid Gain has ensured that this aspect
            will have a hard time running out of Magick at all. It should be
            noted that while Charon has powerful base damage, it has low hit
            counts, making it a requirement to have Arctic Ring, Rapture Ring,
            Solar Ring or Gale Force on your Cast in order to delete Rebuke
            Hearts.
            <br />
            <br />
            The hammer choices I've listed are rather straightforward, with all
            of them increasing your Omega Special capabilities in one way or
            another, save Melting Shredder. I tend to ignore the attack button
            once I have Lucid Gain on this Aspect, thus I find the attack-based
            hammers fairly useless. Remember that casts are horizontally wider,
            so when blowing up your Cast for the purpose of regenerating Magick
            with Lucid Gain, it's better to stay diagonally or horizontally
            outside of the circle rather than vertically.
            <br />
            <br />
            The usual goal when playing Charon is to run the Origination Arcana,
            aiming to get Origination bonuses as soon as possible to give a 50%
            damage boost to your already monstrous base damage Cast and Omega
            Special. Usually achievable by Demeter's Gale Force and either
            Apollo or Aphrodite's Cast. However, it is also possible to aim for
            Origination by giving yourself a separate status curse on your
            Special boon slot.
            <br />
            <br />
            Another powerful tool when using Charon is the prospect of
            Aphrodite's Heart Breaker boon. Hearthrobs will easily spawn off a
            single Omega Special, allowing you to amass these orbs and then
            detonate them by dashing through your target. Feel free to keep
            distance and play around your Cast for Lucid Gain with this
            playstyle all the same.
            <br />
            <br />
            Should you find Giga Cleaver, you should remember to spam the Cast
            button once you've aimed your Omega Special towards your Cast. As
            the Cast you have down blows up, you're able to set down a fresh one
            underfoot while Giga Cleaver's second wave of Omega Specials comes
            out, instantly detonating that very same Cast for a second
            Cast-Cleave off of one Omega Special charge. In melee range, this
            will devastate Guardians.
            <br />
            <div className="mt-2 bg-[#f3ad4438] rounded-md p-2 text-[12px] sm:text-[14px] flex gap-1 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 shrink-0 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              MECHANICS TIP: When charging your Omega Special, remember that you
              can dash in the middle of it, allowing you to both reposition and
              redirect to wherever you wish to aim. With Lucid Gain, set a cast
              down, charge right then and there, then dash to the side.
            </div>
            <br />
            Should you prefer to be frugal with your Magick, or the Lucid Gain
            playstyle involving rapidly deploying Casts is not entirely for you,
            then feel free to run Prominence Flare builds. Though it does not
            deal as much damage as rapidly deploying your combo, Prominence
            Flare is still able to deal significant damage. This does fall off
            as you go through higher fear levels, so keep that in mind."
          </div>
        </section>

        <MoonstoneAxeDivider />

        <section>
          <div className="text-[24px] text-white text-center">
            Aspect of Thanatos
          </div>
          <div className="flex justify-center my-4">
            <img
              src="/Divider/Thanatos.png"
              className="w-[220px]"
              draggable={false}
            />
          </div>

          <section className="flex flex-wrap gap-4 sm:gap-2 justify-center my-5">
            {weapon3details.map((obj, index) => (
              <div
                className={`flex flex-col ${
                  index === 5
                    ? `bg-gradient-to-tl from-[#71422a] to-[#760202]`
                    : `bg-gradient-to-tr from-[#6d3aa3] to-[#062e7d]`
                } items-center p-3 rounded-xl max-w-[150px] text-center`}
              >
                <div className="text-white text-[14px]">Rank #{obj.Rank}</div>
                <div className="text-[12px] font-serif text-gray-300">
                  {obj.Info}
                </div>
              </div>
            ))}
          </section>

          <section className="my-10">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-gray-300 text-center">
                    {/* <th></th> */}
                    <th>Player</th>
                    <th>Hammer</th>
                    <th> ATK / CAST / EFFECTS / DEF</th>
                    <th>Keepsake ( E-O-F-T )</th>
                  </tr>
                </thead>
                <tbody>
                  {moonstone3.map((obj) => (
                    <tr className="text-white text-center relative">
                      {/* <div
                        className={`absolute top-0 left-0 h-full w-full bg-cover bg-center -z-10 opacity-50 bg-[url('/B/back.png')]`}
                      /> */}
                      <td>{obj.player}</td>
                      <td>
                        <div className="flex flex-col gap-1">
                          <section className="rounded-lg p-1">
                            <div className="text-[11px]">Best Hammers</div>
                            <div className="flex flex-row justify-center">
                              {obj.Hammer.map((item) => (
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/Boon/${item}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="flex flex-col justify-center">
                              {obj.Hammer.map((item, index) => (
                                <div className="text-start text-[11px]">
                                  {`${index + 1}. ${item}`}
                                </div>
                              ))}
                            </div>
                          </section>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col min-w-[200px] gap-1">
                          <section className=" rounded-lg p-2">
                            <div className="flex flex-row justify-center">
                              {obj.Core.map((item) => (
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/Element/${item}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="text-[11px]">Ideal Core</div>
                          </section>
                          <section className=" rounded-lg p-2">
                            <div className="flex flex-row justify-center">
                              {obj.Core2.map((item) => (
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/Element/${item}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="text-[11px] text-white">
                              Secondary Core
                            </div>
                          </section>
                          <section className="rounded-lg p-2">
                            <div className="flex flex-row justify-center">
                              {obj.Core3.map((item) => (
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/Element/${item}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="text-[11px] text-white">
                              RNG screwed, but manageable
                            </div>
                          </section>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col min-w-[350px] gap-1">
                          <section className="rounded-lg p-2 ">
                            <div className="text-[11px] text-[gold]">
                              Erebus
                            </div>
                            <div className="flex flex-row justify-center">
                              <div className="avatar">
                                <div className="mask mask-squircle w-10">
                                  <img
                                    src={`/KS/${obj.Erebus.KS}.png`}
                                    draggable={false}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="text-[11px] text-white">
                              {obj.Erebus.Info}
                            </div>
                          </section>
                          <section className="flex justify-center gap-2 rounded-lg relative">
                            <div className="text-[11px] text-[gold] absolute top-0 right-1/2 translate-x-[50%]">
                              Oceanus
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Oceanus.KS}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Oceanus.Info}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Oceanus.KS2}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Oceanus.Info2}
                              </div>
                            </div>
                          </section>
                          <section className="flex justify-center gap-2 rounded-lg relative">
                            <div className="text-[11px] text-[gold] absolute top-0 right-1/2 translate-x-[50%]">
                              Field
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Field.KS}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Field.Info}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Field.KS2}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Field.Info2}
                              </div>
                            </div>
                          </section>
                          <section className="flex justify-center gap-2 rounded-lg  relative">
                            <div className="text-[11px] text-[gold] absolute top-0 right-1/2 translate-x-[50%]">
                              Tartarus
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Tartarus.KS}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Tartarus.Info}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col items-center justify-center">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-10">
                                    <img
                                      src={`/KS/${obj.Tartarus.KS2}.png`}
                                      draggable={false}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-[11px] text-white">
                                {obj.Tartarus.Info2}
                              </div>
                            </div>
                          </section>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="text-gray-300 tracking-wider text-[11px] sm:text-[14px]">
            "The Thanatos Axe is the speed variant of the melee Moonstone Axes,
            boasting flexibility between builds based on the situation and RNG
            presented to you. It enjoys powerful start-of-night offensive
            capabilities with the weapon's already great range together with
            this Aspect's attack speed bonus. This aspect does not struggle as
            much against Rebuke hearts, but does not scale as easily into the
            endgame as the other two. I generally prefer to start with Sworn
            Strike and hunt for Arctic Ring, but Rapture Ring or Passion Rush
            are good finds to start off with, as you get Origination rather
            early with these.
            <br />
            <br />
            Seething Marauder is the best Daedalus Hammer to have on this
            aspect, as its rapid slashing speed essentially gains +60 damage.
            What makes this so much better is the fact that Seething Marauder
            shockwaves work on Omega Attack Whirlwinds, and they can crit as
            well from your Mortality bonus. With Origination on, this +60 damage
            becomes +90, with a chance to critically hit from the Mortality
            bonus and other further crit bonuses you have.
            <br />
            <br />
            In High Fear, it's easier to just use it as an attacking aspect. It
            requires no Magick regeneration, and the base damage is fine. It
            makes high fear players often take Rapid Slash for extremely quick
            strikes, or something as simple as Unyielding Slash to give you a
            nice little damage boost, as that 10 Power also gets boosted by
            Attack boons. Uninvested, it usually falls off in the later part of
            the run, but Origination and poms can alleviate that issue, else you
            will find yourself at a race against the clock to scale into
            Tartarus and the Chronos fight.
            <br />
            <br />
            The main difference I find between this aspect and the Melinoë Axe
            is that I don't find myself cancelling the Big Chop/Third Hit as
            often, as its attack speed bonus mitigates the startup lag on the
            Big Chop, and the end lag is rather non-existent as well. As such, I
            find that Executioner's Chop is quite an effective hammer on it, but
            it does require you to take a Magick regeneration boon to keep it
            effective. Aphrodite's isn't bad at all, as Weak is a welcome debuff
            to enemies with its 30% damage reduction, and the regeneration
            Glamour Gain provides is serviceable.
            <br />
            <br />
            Dashing Heave may be a great hammer on the Melinoë aspect that it
            shares traits with, but it is not a fantastic hammer on Thanatos at
            all. Though it's not as game-changing on this aspect as it would be
            on Melinoë Axe's, as it will only have 80 base power rather than the
            150 that the Mel Axe boasts. Still, not the worst pick up if nothing
            else being offered is good.
            <br />
            <br />
            While Omega Attacks were buffed in patch 6, the attacking build is
            still preferred due to its relative safety and maneuverability.
            Should you find Psychic Whirlwind, you can shift towards a hybrid
            build that lets you swing your Axe while having an active Whirlwind
            around you. If you get Psychic Whirlwind early, you can easily shift
            to Advancing Whirlwind or Furious Whirlwind as auxiliary Daedalus
            Hammers should you find them. I find that this Hybrid build takes
            RNG and effort to actually get off the ground, but when it's active
            it will be able to get you easier wins than a rapid attacking build
            would. This takes advantage of the Mortality mechanic, which both
            Rapid attacks and Executioner's Chop fail to make use of, as none of
            them use Omegas. Advancing and Furious Whirlwind are decent, but not
            as good without Psychic Whirlwind, so keep that in mind. Since we're
            already using Demeter, you might want to spec into Tranquil Gain, as
            standing still while a whirlwind is active still lets you regenerate
            your Magick."
          </div>
        </section>
        <MoonstoneAxeDivider />
      </main>

      {/*  */}
      <FooterInfo />
    </div>
  );
}
