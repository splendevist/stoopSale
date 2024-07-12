import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <div
      id="stoop_sale"
      className="flex flex-col justify-evenly h-screen bg-yellow-50"
    >
      {/* Titles */}
      <div>
        <h2 className="text-3xl text-center py-2 text-gold">
          Brooklyn Stoop Sale
        </h2>
        <h3 className="text-2xl text-center text-gold">
          Where one person&apos;s trash is another person&apos;s treasure
        </h3>
      </div>

      {/* Images */}
      <div className="grid grid-cols-2 justify-items-center items-center md:flex md:justify-evenly">
        <Image
          id="zoom"
          src="/shoes.png"
          alt="blue boots"
          height={100}
          width={100}
        />
        <Image
          id="zoom"
          src="/sheep.png"
          alt="porcelein sheep"
          height={100}
          width={100}
        />
        <Image
          id="zoom"
          src="/clothes.png"
          alt="short sleeved tshirt"
          height={100}
          width={100}
        />
        <Image
          id="zoom"
          src="/knick-knack.png"
          alt="red clay figure"
          height={100}
          width={100}
        />
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <Button title={"Find your treasure"} anchor={"#location"} />
      </div>
    </div>
  );
}
