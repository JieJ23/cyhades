import Header from "../Components/Header";
import FooterInfo from "../Components/Footer";

export default function FormSubmission() {
  async function Submit(e) {
    e.preventDefault(); // Prevent default form submission

    const formEle = e.target; // Reference the form that triggered the event
    const formDatab = new FormData(formEle); // Create a FormData object

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzzQU1BWg9qM7_jidAomTxZbjYrdvrDeJrRx0Y5tmOKO8mnISw0QYDGLM_FtPOkOMCD/exec",
        {
          method: "POST",
          body: formDatab,
        }
      );

      // const data = await res.json();
      // Handle the response data here (e.g., display success message)

      // Reset the form fields
      formEle.reset();
    } catch (error) {
      console.log(error);
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
        <div>
          <form
            className="form flex flex-col gap-2 font-serif max-w-[800px] px-4"
            onSubmit={Submit}
          >
            {/* Directly using Submit here */}
            <input
              placeholder="Today Date"
              name="Date"
              type="date"
              className="input"
            />
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Olympus</span>
                <input
                  type="radio"
                  name="Direction"
                  className="radio checked:bg-yellow-500"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Underworld</span>
                <input
                  type="radio"
                  name="Direction"
                  className="radio checked:bg-green-500"
                />
              </label>
            </div>
            <select className="select w-full" name="Category">
              <option disabled selected>
                Run Category
              </option>
              <option>Unseeded</option>
              <option>Seeded</option>
              <option>Modded</option>
            </select>
            <input
              placeholder="Player Name"
              name="Name"
              type="text"
              className="input"
            />
            <input
              placeholder="Fear Level"
              name="Fear"
              type="text"
              className="input"
            />
            <select className="select w-full" name="Weapon">
              <option disabled selected>
                Weapon Type
              </option>
              <option>Witch's Staff</option>
              <option>Sister Blades</option>
              <option>Moonstone Axe</option>
              <option>Umbral Flames</option>
              <option>Argent Skull</option>
            </select>
            <select className="select w-full" name="Weapon">
              <option disabled selected>
                Weapon Type
              </option>
              <option>Melinoe Staff</option>
              <option>Circe</option>
              <option>Momus</option>
            </select>
            <input
              placeholder="Gameplay Src"
              name="Src"
              type="text"
              className="input"
            />
            <input
              placeholder="Patch"
              name="Patch"
              type="text"
              className="input"
            />
            <input
              placeholder="Clear Time"
              name="Clear Time"
              type="text"
              className="input"
            />
            <label className="label flex justify-center">Boons Used Test</label>
            <section className="flex justify-evenly">
              <div className="form-control">
                <label className="label cursor-pointer gap-2">
                  <span className="label-text">Blinding_Sprint</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="Boons_Picked"
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Wave_Flourish</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="Boons_Picked"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer gap-2">
                  <span className="label-text">Double_Moonshot</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="Boons_Picked"
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Sunken_Treasure</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="Boons_Picked"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer gap-2">
                  <span className="label-text">Swift_Flourish</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="Boons_Picked"
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Super_Nova</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="Boons_Picked"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer gap-2">
                  <span className="label-text">Static_Shock</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="Boons_Picked"
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Dark_Side</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="Boons_Picked"
                  />
                </label>
              </div>
            </section>
            <button
              name="submit"
              type="submit"
              className="btn btn-success text-[16px] max-w-[400px] mx-auto w-full my-5"
            >
              Button
            </button>
            <div className="text-center font-customDress text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              eius fugiat adipisci optio! Animi pariatur fuga, reiciendis
              commodi tempore harum sed beatae alias repudiandae fugit
              distinctio, impedit fugiat voluptates neque.
            </div>
          </form>
        </div>
      </div>
      <FooterInfo />
    </div>
  );
}
