import Header from "../Components/Header";
import FooterInfo from "../Components/Footer";
import { useState } from "react";

export default function FormSubmission() {
  const [loading, setLoading] = useState(false); // Loading state

  const [selectedWeapon, setSelectedWeapon] = useState("");

  const handleWeaponChange = (e) => {
    setSelectedWeapon(e.target.value); // Update the selected weapon
  };

  async function Submit(e) {
    e.preventDefault();

    const formEle = e.target;
    const formDatab = new FormData(formEle);

    const boonStrike = formDatab.get("Boon_Strike");
    const boonFlourish = formDatab.get("Boon_Flourish");
    const boonRing = formDatab.get("Boon_Ring");
    const boonSprint = formDatab.get("Boon_Sprint");
    const boonGain = formDatab.get("Boon_Gain");

    formDatab.append(
      "Boons_Picked",
      `${boonStrike}, ${boonFlourish}, ${boonRing}, ${boonSprint}, ${boonGain}`
    );

    setLoading(true);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbznkGo5-XZ9_1QaF8U3HY2vEwtkf7lF89osZGZDpA28Oz4CA7NFqy-9JAxdM3fKZL4e/exec",
        {
          method: "POST",
          body: formDatab,
        }
      );

      formEle.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

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
      <div className="flex flex-col gap-2 items-center">
        <h2 className="font-customDress text-[24px] my-5">Entry Submission</h2>
        <div className="w-full max-w-[800px] m-auto">
          <form
            className="form flex flex-col gap-2 font-serif px-4"
            onSubmit={Submit}
          >
            {/* Directly using Submit here */}
            <input
              placeholder="Today Date"
              name="Date"
              type="date"
              className="input"
              required
            />
            <select className="select w-full" name="Direction" required>
              <option value="" selected hidden>
                Direction
              </option>
              <option>Olympus</option>
              <option>Underworld</option>
            </select>
            <input
              placeholder="Player Name"
              name="Name"
              type="text"
              className="input"
              required
            />
            <input
              placeholder="Fear Level"
              name="Fear"
              type="text"
              className="input"
              required
            />
            {/*  */}
            <select
              className="select w-full"
              name="Weapon"
              required
              onChange={handleWeaponChange}
            >
              <option value="" selected hidden>
                Weapon Type
              </option>
              <option>Witch's Staff</option>
              <option>Sister Blades</option>
              <option>Moonstone Axe</option>
              <option>Umbral Flames</option>
              <option>Argent Skull</option>
              <option>Black Coat</option>
            </select>
            {selectedWeapon === "Witch's Staff" && (
              <select className="select w-full" name="Aspect" required>
                <option value="" selected hidden>
                  Aspect
                </option>
                <option>Melinoe Staff</option>
                <option>Circe</option>
                <option>Momus</option>
              </select>
            )}
            {selectedWeapon === "Sister Blades" && (
              <select className="select w-full" name="Aspect" required>
                <option value="" selected hidden>
                  Aspect
                </option>
                <option>Melinoe Blade</option>
                <option>Artemis</option>
                <option>Pan</option>
              </select>
            )}
            {selectedWeapon === "Moonstone Axe" && (
              <select className="select w-full" name="Aspect" required>
                <option value="" selected hidden>
                  Aspect
                </option>
                <option>Melinoe Axe</option>
                <option>Charon</option>
                <option>Thanatos</option>
              </select>
            )}
            {selectedWeapon === "Umbral Flames" && (
              <select className="select w-full" name="Aspect" required>
                <option value="" selected hidden>
                  Aspect
                </option>
                <option>Melinoe Flames</option>
                <option>Moros</option>
                <option>Eos</option>
              </select>
            )}
            {selectedWeapon === "Argent Skull" && (
              <select className="select w-full" name="Aspect" required>
                <option value="" selected hidden>
                  Aspect
                </option>
                <option>Melinoe Skull</option>
                <option>Medea</option>
                <option>Persephone</option>
              </select>
            )}
            {selectedWeapon === "Black Coat" && (
              <select className="select w-full" name="Aspect" required>
                <option value="" selected hidden>
                  Aspect
                </option>
                <option>Melinoe Coat</option>
                <option>Selene</option>
                <option>Nyx</option>
              </select>
            )}
            {/*  */}
            <input
              placeholder="Gameplay Src"
              name="Src"
              type="text"
              className="input"
              required
            />
            <input
              placeholder="Patch"
              name="Patch"
              type="text"
              className="input"
              required
            />
            <input
              placeholder="Clear Time"
              name="Clear Time"
              type="text"
              className="input"
              required
            />
            {/*  */}
            <div className="text-center mt-5 font-serif">
              Familiar Selections
            </div>
            <select className="select w-full" name="Familiar" required>
              <option value="" selected hidden>
                Animal Familiar
              </option>
              <option> Frinos</option>
              <option> Toula</option>
              <option> Raki</option>
              <option> Hecuba</option>
            </select>
            <div className="text-center mt-5 font-serif">Boon Selections</div>
            <select className="select w-full" name="Boon_Strike" required>
              <option value="" selected hidden>
                Boon Strike
              </option>
              <option> No_Strike</option>
              <option> Flutter_Strike</option>
              <option> Nova_Strike</option>
              <option> Ice_Strike</option>
              <option> Volcanic_Strike</option>
              <option> Sworn_Strike</option>
              <option> Flame_Strike</option>
              <option> Nimble_Limbs</option>
              <option> Nimble_Mind</option>
              <option> Wave_Strike</option>
              <option> Heaven_Strike</option>
            </select>
            <select className="select w-full" name="Boon_Flourish" required>
              <option value="" selected hidden>
                Boon Flourish
              </option>
              <option> No_Flourish</option>
              <option>Flutter_Flourish</option>
              <option>Nova_Flourish</option>
              <option>Ice_Flourish</option>
              <option>Volcanic_Flourish</option>
              <option>Sworn_Flourish</option>
              <option>Flame_Flourish</option>
              <option>Swift_Flourish</option>
              <option>Wave_Flourish</option>
              <option>Heaven_Flourish</option>
            </select>
            <select className="select w-full" name="Boon_Ring" required>
              <option value="" selected hidden>
                Boon Ring
              </option>
              <option> No_Ring</option>
              <option>Rapture_Ring</option>
              <option>Solar_Ring</option>
              <option>Prominence_Flare</option>
              <option>Arctic_Ring</option>
              <option>Anvil_Ring</option>
              <option>Engagement_Ring</option>
              <option>Smolder_Ring</option>
              <option>Storm_Ring</option>
              <option>Saved_Breath</option>
              <option>Geyser_Spout</option>
              <option>Tidal_Ring</option>
              <option>Geyser_Ring</option>
            </select>
            <select className="select w-full" name="Boon_Sprint" required>
              <option value="" selected hidden>
                Boon Sprint
              </option>
              <option> No_Sprint</option>
              <option>Passion_Rush</option>
              <option>Passion_Dash</option>
              <option>Blinding_Sprint</option>
              <option>Frigid_Sprint</option>
              <option>Smithy_Sprint</option>
              <option>Nexus_Sprint</option>
              <option>Soot_Sprint</option>
              <option>Breaker_Sprint</option>
              <option>Thunder_Sprint</option>
              <option>Nitro_Boost</option>
            </select>
            <select className="select w-full" name="Boon_Gain" required>
              <option value="" selected hidden>
                Boon Gain
              </option>
              <option> No_Gain</option>
              <option>Glamour_Gain</option>
              <option>Lucid_Gain</option>
              <option>Tranquil_Gain</option>
              <option>Fixed_Gain</option>
              <option>Born_Gain</option>
              <option>Warmth_Gain</option>
              <option>Fluid_Gain</option>
              <option>Ionic_Gain</option>
              <option>Witty_Retort</option>
            </select>
            {/*  */}
            <button
              name="submit"
              type="submit"
              className="btn btn-success text-[16px] max-w-[400px] mx-auto w-full my-5"
            >
              {loading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
      <FooterInfo />
    </div>
  );
}
