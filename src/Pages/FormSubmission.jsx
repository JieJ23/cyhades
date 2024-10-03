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
    <div className="h-lvh overflow-x-hidden select-none">
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
            className="form flex flex-col gap-2 font-serif"
            onSubmit={Submit}
          >
            {/* Directly using Submit here */}
            <input
              placeholder="Today Date"
              name="Date"
              type="date"
              className="input"
            />
            <input
              placeholder="Direction"
              name="Direction"
              type="text"
              className="input"
            />
            <input
              placeholder="Category"
              name="Category"
              type="text"
              className="input"
            />
            <input
              placeholder="Your Name"
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
            <input
              placeholder="Your Weapon"
              name="Weapon"
              type="text"
              className="input"
            />
            <input
              placeholder="Your Aspect"
              name="Aspect"
              type="text"
              className="input"
            />
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
            <input
              placeholder="Boons"
              name="Boons_Picked"
              type="text"
              className="input"
            />
            <button
              name="submit"
              type="submit"
              className="btn btn-success text-[16px]"
            >
              Button
            </button>
          </form>
        </div>
      </div>
      <FooterInfo />
    </div>
  );
}
