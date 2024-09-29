export default function Loading() {
  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      <span className="loading loading-ring loading-lg" />
      <div className="font-customDress text-white text-[18px] uppercase">
        Locating Underworld Data
      </div>
    </div>
  );
}
