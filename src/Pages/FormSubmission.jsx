import Header from "../Components/Header";
import FooterInfo from "../Components/Footer";

export default function FormSubmission() {
  async function Submit(e) {
    e.preventDefault(); // Prevent default form submission

    const formEle = e.target; // Reference the form that triggered the event
    const formDatab = new FormData(formEle); // Create a FormData object

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbw1AlGLB366AvpG659vREeoe0lSBMokJpw-LhPZU1yb_tXNKs2WyM4quH26YltnDFV_/exec",
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
        <h1>Contact Me form</h1>
        <h2>
          This demonstrates how to send data from a website form to Google
          Sheets in React or Vanilla JS
        </h2>
        <div>
          <form className="form" onSubmit={Submit}>
            {/* Directly using Submit here */}
            <input placeholder="Your Name" name="Name" type="text" />
            <input placeholder="Your Aspect" name="Aspect" type="text" />
            <button name="submit" type="submit" className="btn">
              Button
            </button>
          </form>
        </div>
      </div>
      <FooterInfo />
    </div>
  );
}
