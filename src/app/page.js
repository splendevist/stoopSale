import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import Socials from "./components/Socials";

export default function Home() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/app/components/MyMap.jsx"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <main>
      <div className="h-screen flex flex-col justify-evenly items-center bg-pink-300">
        <h1 className="text-4xl text-indigo-500 text-center">
          YOU&apos;VE BEEN
          <br />
          INVITED!
        </h1>
        <Image
          src="/pigeon.png"
          alt="Pigeon carrying envelope"
          height={400}
          width={300}
        />
        <Link
          href="#stoop_sale"
          className="border-black bg-white border-2 rounded-lg p-2"
        >
          Open
        </Link>
      </div>

      <div id="stoop_sale" className="h-screen bg-yellow-50">
        <div className="flex flex-col justify-evenly h-full py-10 text-indigo-500">
          <h2 className="text-3xl text-center">brooklyn stoop sale</h2>
          <h3 className="text-2xl text-center py-4">
            Where one person&apos;s trash is another person&apos;s treasure
          </h3>
          <div className="grid grid-cols-2 justify-items-center items-center">
            <Image src="/shoes.png" alt="blue boots" height={100} width={100} />
            <Image
              src="/sheep.png"
              alt="porcelein sheep"
              height={100}
              width={100}
            />
            <Image
              src="/clothes.png"
              alt="short sleeved tshirt"
              height={100}
              width={100}
            />
            <Image
              src="/knick-knack.png"
              alt="red clay figure"
              height={100}
              width={100}
            />
          </div>
          <div className="flex justify-center">
            <Link
              href="#location"
              className="text-center border-black bg-white border-2 rounded-lg p-2"
            >
              Where is it?
            </Link>
          </div>
        </div>
      </div>

      <div
        id="location"
        className="flex flex-col justify-evenly items-center h-screen bg-yellow-200"
      >
        <div>
          <p className="text-2xl">WHEN?</p>
          <p>
            Sat August 10th
            <br />
            11-4
          </p>
        </div>
        <div>
          <p className="text-2xl">WHERE?</p>
          <p>
            Corner of court street and 2nd pl., <br />
            Brooklyn, <br />
            NY.
          </p>
        </div>
        <Map position={[40.67951, -73.997283]} zoom={16} />
        <p>///certified.sweat.wiser</p>
        <Link
          href="#share"
          className="border-black bg-white border-2 rounded-lg p-2"
        >
          Share
        </Link>
      </div>

      <div
        id="share"
        className="flex flex-col justify-evenly items-center h-screen bg-yellow-50"
      >
        <h3 className="text-3xl text-indigo-500 w-3/4 text-center">
          Share with your friends!
        </h3>
        <Socials />
      </div>
    </main>
  );
}
