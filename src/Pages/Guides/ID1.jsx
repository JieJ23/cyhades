import Header from "../../Components/Header";
import FooterInfo from "../../Components/Footer";
import { Link } from "react-router-dom";

const arcane1 = [
  1, 0, 3, 0, 0, 6, 7, 0, 0, 0, 11, 12, 13, 0, 0, 16, 17, 18, 0, 0, 21, 22, 0,
  24, 0,
];

const arcane2 = [
  1, 2, 0, 0, 5, 6, 7, 8, 0, 10, 11, 12, 13, 0, 0, 16, 17, 18, 0, 0, 21, 22, 0,
  24, 0,
];

function VideoLink({ src, info }) {
  return (
    <Link to={src} target="_blank">
      <button className="flex items-center p-2 bg-[#a58b3b6c] rounded-xl mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 26"
          className="h-6 w-6 shrink-0 stroke-current]"
        >
          <polygon
            class="play-btn__svg"
            points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"
          />
        </svg>
        <span className="text-white font-customCin text-[12px]">{info}</span>
      </button>
    </Link>
  );
}

export default function ID1() {
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
      <main className="max-w-[1000px] px-4 mx-auto my-16 font-customCin flex flex-col gap-10 select-none">
        <section>
          <div className="text-[24px] md:text-[34px] text-white text-center">
            A Guide On Xinth, The Black Coat.
          </div>
          <div className="text-gray-300 text-center">@ Myntkaramell</div>
        </section>
        <section>
          <div className="flex gap-2">
            <div className="text-[20px] text-white">Attacks</div>
          </div>
          <div className="text-gray-300 tracking-wider text-[13px] sm:text-[15px]">
            Xinth's Attacks do 30 and 45 damage on strike 1 and 2 respectively,
            allowing you to run Hera, Apollo or Aphrodite for proper damage and
            heavy scaling with your Omega attack. In the same vein, its Dash
            Attack does 3 hits of 15 damage. This allows it to also run Scorch,
            Poseidon Waves, and Static Shock to potent effect if you do decide
            to go for the dash attack route. There is a Daedalus Hammer that
            increases this hit count to 6, making Scorch, Waves and Static Shock
            into HP-melting machines. If you think your attacks don't seem to be
            doing a lot of damage as is, the game lets you spam missiles while
            punching, seems like it's intended to in order to meet the dps of
            other weapons in that regard.
            <br />
            <br />
            <div>
              (On the topic of Static Shock, Zeus' Heaven Strike is also a
              popular choice among speedrunners at the moment, utilizing it and
              his duo boon with Aphrodite, Romantic Spark, to recreate what is
              essentially Merciful End from Hades 1. Sounds pretty fun to me,
              give it a go.)
            </div>
            <br />
            The Omega Attack is a mix of Hades 1 Shield's Bull Rush's holding
            block mechanic and this game's Omega and Magick system. Xinth Omega
            Attack rewards intuitive blocks rather than mindlessly charging it
            out. If you want to block immediately, do Attack 1 and hold that
            button down. It should be noted that if you have insufficient
            Magick, you will be unable to project an Energy Shield, leaving you
            a sitting duck mid-animation. To ensure you don't use your Magick,
            do a Dash Attack while charging to cancel. Remember that, like the
            old Axe Special, shockwave or ground pulse type enemy attacks are
            unblockable (eg. Polyphemus's Shockwave or Surface Fire), and should
            be dashed through or given space.
          </div>
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
            You can essentially double your shielding time by cancelling close
            to the end of your Omega Attack with a Cast. The best timing window
            for this is between the 25-28 mana cost windows, wherein it'll cycle
            back to 0 after a successful animation cancel, keeping you safe for
            a while longer while standing your ground.
          </div>
        </section>

        <section>
          <div className="text-[20px] text-white">Specials</div>
          <div className="text-gray-300 tracking-wider text-[13px] sm:text-[15px]">
            The specials are heat seeking missiles. Sounds pretty cool. You can
            toss these out while punching, you can toss them out while running.
            They scale quite well with percentage damage bonuses such as Apollo
            and Hera (since Hitch is very strong), but they can also succeed
            with Poseidon Waves and Static Shock. Should you be using a heavy
            Attack build, Blitz on Special is a lovely addition, and you can
            push that Special button as you batter your foes for optimal Blitz
            pop uptime. Scorch is usable to a lesser degree as it is good for
            Origination, but overall suboptimal. It should be noted that moving
            while shooting missiles out is much more fluid when using mouse
            aiming, as you can walk one way and barrage out the other.
            <br />
            <br />
            <div>
              The Omega Special is quick, and it's able to ensure you send out a
              missile barrage to maximize damage. Against single targets, you
              can feel the difference between an Omega Special and spamming your
              Special. Yet again, this is more fluid on mouse aiming, as you
              still need to turn slowly on the control stick should you have
              started the Omega Special target calibration toward the wrong
              direction.
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <div>
            <div className="flex gap-2">
              <div className="text-[20px] text-white">
                The Aspect of Melinoë
              </div>
              <div className="avatar">
                <div className="w-8 rounded">
                  <img src="/Aspects/Melinoe Coat.png" draggable={false} />
                </div>
              </div>
            </div>
            <div className="text-gray-300 tracking-wider text-[13px] sm:text-[15px]">
              The Aspect of Melinoë is, for all intents and purposes, just the
              general weapon with a permanent Metallic Droplet built in. You can
              play a Special Build and kite better with the 20% Sprint Speed
              bonus, you can play an Attack Build and use those gauntlets to
              dent enemy HP with hard % based boon scaling and the multitude of
              hammers that strengthen attacks. Not much else to say, flexible,
              and you don't need to focus on the attack speed just because it's
              there. Start with a Hera keepsake to be safe, as both Attack and
              Special appreciate the Hitch and scaling. Zeus is a good choice on
              it in general, Blitz Special and Static Shock provide good damage,
              and Storm Ring is a good choice against chunkier enemies you'd
              rather not get close to for smacking.
              <br />
              <br />
              <div>
                The Aspect itself is rather low maintenance, and is fully
                capable of functioning without any MP whatsoever. For gameplay
                videos, I have a 55 Fear clear up using Missile Spam, but 55
                isn't really something you can base the ability of an aspect on,
                so here are some 50 Fear runs with varying playstyles.
              </div>
            </div>
            <VideoLink
              src={`https://www.youtube.com/watch?v=n8_xeHfpMT8`}
              info={`Mynt - Mostly Dash Attack and Attack`}
            />
            <VideoLink
              src={`https://www.youtube.com/watch?v=iAyuRELmBcQ`}
              info={`Foolish - Split between Specials, Attack and Dash Attack`}
            />
          </div>
          <div>
            <div className="flex gap-2">
              <div className="text-[20px] text-white">The Aspect of Nyx</div>
              <div className="avatar">
                <div className="w-8 rounded">
                  <img src="/Aspects/Nyx.png" draggable={false} />
                </div>
              </div>
            </div>
            <div className="text-gray-300 tracking-wider text-[13px] sm:text-[15px]">
              This aspect is odd. It has an Omega Sprint, which was what
              Hephaestus' old dash boon used to be before the Olympic Patch.
              This Omega Sprint will, when colliding upon a target, give you a
              temporary 5 second buff called Nightspawn. This buff lets your
              attack hit twice (2nd hit at 50% effectiveness, 1st hit is still
              normal, for a 1.5x boost to attacks and specials under this
              effect) and lets your missiles split apart once it hits its main
              target. These split missiles do not benefit from Waves or Scorch,
              so it isn't as strong as I had hoped, however.
              <br />
              <br />
              <div>
                The general playstyle of this aspect to maximize damage is to
                run at a target to obtain Nightspawn, then continuously pelt
                that target with empowered attacks and specials. I mostly see
                people doing it with Specials, but I do suppose it's a much
                safer option. The aspect in general seems to enjoy Static Shock,
                and doesn't really enjoy synergies with sprint boons such as
                Poseidon sprint, instead using the Omega Boost as a means to
                gain a buff rather than a main source of damage. Don't let this
                stop you, though, I know people can make fun builds around it.
              </div>
            </div>
            <VideoLink
              src={`https://www.youtube.com/watch?v=XvZvXGHJ4l0`}
              info={`Foolish - Using Hera Special (percentage damage boost)`}
            />
            <VideoLink
              src={`https://www.youtube.com/watch?v=M6nxEcpbkBA`}
              info={`Coldshade - Using Poseidon Special (flat damage add-on)`}
            />
          </div>

          <div>
            <div className="text-[20px] text-white">
              Arcana for the Black Coat Aspects of Melinoë and Nyx
            </div>
            <div className="text-gray-300 tracking-wider text-[13px] sm:text-[15px]">
              For arcana pages, there are what we recommend using for these two
              aspects. However, do note that this is geared for high fear (32
              and up), so feel free to change things around. (eg. Drop boatman
              for Origination, find a way to get Wayward Son active, etc)
            </div>
            <div className="flex justify-center flex-wrap max-w-[380px] sm:max-w-[500px] gap-1 mx-auto mt-2 mb-5 px-0">
              {arcane1.map((num) => (
                <div className="avatar w-[70] h-[95px] sm:w-[90px] sm:h-[120px]">
                  <img src={`/Card/card${num}.png`} draggable={false} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex gap-2">
              <div className="text-[20px] text-white">The Aspect of Selene</div>
              <div className="avatar">
                <div className="w-8 rounded">
                  <img src="/Aspects/Selene.png" draggable={false} />
                </div>
              </div>
            </div>
            <div className="text-gray-300 tracking-wider text-[13px] sm:text-[15px]">
              Let's say that whenever someone complained about how Hexes felt
              weak, Selene spent time crafting a masterpiece of a Hex that would
              make everyone shut their mouths. This is that masterpiece. The
              Aspect of Selene is, at first, rather unintuitive, it comes with a
              seemingly mediocre Hex called Skyfall. Skyfall hits nearby targets
              and applies a curse/debuff called Shine onto them. This debuff
              causes enemies to take more damage from your Omega moves. Though
              starting off mediocre, it scales monstrously as you unlock more
              Path of Stars nodes. You are almost basing your gameplay and build
              around this thing.
              <br />
              <br />
              <div>
                Its ability to strengthen your Omega Attacks using Skyfall while
                crushing the ranks of enemies is quite entertaining. Starting
                with a Moon Beam was never optimal until this Aspect came
                around, and that +8 Path of Stars start in Erebus is certainly
                off putting until you realize how easy it is to activate.
                Prioritize the Prism path of stars upgrade should it exist. You
                will typically want % Scaling boosts for your Attack and
                Special, as Scorch/Waves/Static will not gain the 50% Bonus from
                Shine. Demeter is preferable to have despite her having the
                weakest % damage bonus, as you will gain access to Arctic Ring
                and Weed Killer a lot easier. Perhaps prioritize those two off
                of Demeter while hunting for an Apollo, Aphrodite or Hera
                Strike. Utilize the in-depth section written below for more
                information.
              </div>
              <br />
              The Aspect of Selene deserves its own little writeup due to how
              different it feels to play compared to anything else in the game,
              so I'll do just that.
            </div>
            <div className="text-gray-300 tracking-wider text-[13px] sm:text-[15px] mt-5">
              Aspect Selene is one of the most unique aspects in the game. Its
              effect grants you the unique Hex, Sky Fall, which is only
              obtainable with Aspect of Selene. You cannot gain any other hex
              while using the aspect, and the first Selene appearance in a run
              will be a path of stars rather than a hex choice. Sky Fall applies
              a curse called "Shine" which buffs the damage of all your omega
              moves by 50%.
              <br />
              The Gameplay of Selene is very Omega focused due to the Shine
              Curse's effect. I recommend using the Death Arcana (15% Crit
              Chance on Omega moves when using a different omega to the last
              one) and adopting a playstyle where you cycle between Omega Attack
              and Omega Special. Some of the better hammers to look out for are:
              <br />
              <br />
              World Collider: +100 Power on fully charged Omega AttackThis
              hammer can lead to your Omega Attack hitting for absurdly high
              damage. Combined with Shine, Death Arcana and other buffs you can
              be getting numbers in the several thousands.
              <br />
              <br />
              Ripper Rockets: Your Specials gain +5 Power up to 5 consecutive
              hits on the same enemy. This hammer can make your Omega Special
              very strong, and is recommended when your special boon is a %
              increase, such as Hera or Apollo.
              <br />
              <br />
              Counter Barrage: When blocking an attack with your Omega Attack,
              your Omega Special is automatically launched, with a cooldown of 3
              seconds. Quite strong, the block on Omega Attack is very useful
              and a free Omega Special every now and then can lead to a lot of
              damage. This is the recommended Arcana Page for Selene. Once
              again, this is geared towards high fear, so don't be afraid to try
              some other pages as well. (edit: Boatman and Origination are
              interchangeable, and we find that Origination damage is quite fun
              to have, so feel free to swap to that. Foolish just loves peddling
              Boatman in high fear.)
            </div>
            <div className="text-gray-300 tracking-wider text-[13px] sm:text-[15px] mt-5">
              For arcana pages, there are what we recommend using for these two
              aspects. However, do note that this is geared for high fear (32
              and up), so feel free to change things around. (eg. Drop boatman
              for Origination, find a way to get Wayward Son active, etc)
            </div>
            <div className="flex justify-center flex-wrap max-w-[380px] sm:max-w-[500px] gap-1 mx-auto mt-2 mb-5 px-0">
              {arcane2.map((num) => (
                <div className="avatar w-[70] h-[95px] sm:w-[90px] sm:h-[120px]">
                  <img src={`/Card/card${num}.png`} draggable={false} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="text-[20px] text-white">General Strategy</div>
          <div className="text-gray-300 tracking-wider text-[13px] sm:text-[15px]">
            The Moon Beam keepsake from Selene should almost always be taken at
            some point during a run. It makes your next path of stars more
            likely to appear, and gives it +5 upgrades. This allows you to grab
            the stronger upgrades of your Hex immediately such as Prism or
            Scorn. Moon Beam can work very well as the *first* keepsake of a run
            since Aspect of Selene is very flexible with which gods work for it,
            and as such a specific god's keepsake is not required.
            <br />
            <br />
            In terms of god boons that work well with the aspect,boons that
            raise the cost of Omega moves are very welcome. These make the Hex
            easier and quicker to charge resulting in more frequent uses of it.
            Boons that increase magick cost of Omegas include; Weedkiller,
            Bloodline, Controlled burn, Glorious Disaster and Exceptional
            Talent.
            <br />
            <br />
            Attack boons that are a % increase in damage and not flat damage are
            ideal, due to the Omega Attack having a high base damage of 200.
            These boons include Hera Attack, Apollo Attack, Aphrodite Attack and
            Demeter Attack.
            <br />
            <br />
            For Special, almost any special boons *can* work since the Coat
            special is both multihit *and* hits decently hard with certain
            setups. The only Special boon I would recommend staying away from is
            Hephaestus Special. Priority special boons would be Zeus and Hera.
            <br />
            <br />
            For Gain, I recommend starting with Hecuba (dog) as your Familiar,
            which lets you make a gain boon a low priority, and lets some of the
            weaker gain boons be viable picks even for late in the run. Some of
            the better gains are Born Gain and Ionic Gain.
          </div>
          <VideoLink
            src={`https://www.youtube.com/watch?v=r-_c_YWpU38`}
            info={`Mynt - 50 Fear Selene, little to no "proper" Omegas, mainly meant to consume MP, to use Skyfall a lot.`}
          />
          <VideoLink
            src={`https://www.youtube.com/watch?v=f1FGm2AkeR4`}
            info={`Foolish - 50 Fear Selene, Omegas on rotation with minimal Skyfall downtime.`}
          />
          <VideoLink
            src={`https://www.youtube.com/watch?v=zmFTBgSvnKs`}
            info={`Poshboy - 50 Fear Selene judgment run, 7 min timer/area`}
          />
        </section>
      </main>
      {/*  */}
      <FooterInfo />
    </div>
  );
}
