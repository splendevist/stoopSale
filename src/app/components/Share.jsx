import Socials from "./Socials";

export default function Share() {
  return (
    <div
      id="share"
      className="flex flex-col justify-evenly items-center h-screen bg-red-200"
    >
      {/* Title */}
      <h2 className="text-3xl text-maroon w-3/4 text-center pt-10">
        Share with your friends!
      </h2>

      {/* Buttons */}
      <Socials />
    </div>
  );
}
