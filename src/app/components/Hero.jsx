import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-evenly items-center bg-pink-300">
      <h1 className="w-1/2 text-4xl text-indigo-500 text-center">
        YOU&apos;VE BEEN INVITED!
      </h1>
      <Image
        id="zoom-out"
        src="/pigeon.png"
        alt="Pigeon carrying envelope"
        height={400}
        width={300}
      />
      <Button title={"Open"} anchor={"#stoop_sale"} />
    </div>
  );
}
