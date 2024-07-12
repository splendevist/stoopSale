import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import Socials from "./components/Socials";

// meta data

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
      {/* Hero */}
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
      {/* About Stoop Sale */}
      <div id="stoop_sale" className="h-screen bg-yellow-50">
        <div className="flex flex-col items-center py-10 text-indigo-500">
          <h2>brooklyn stoop sale</h2>
          <h3>
            Where one person&apos;s trash is another person&apos;s treasure
          </h3>
        </div>
        <div className="flex justify-evenly text-yellow-500">
          <div className="flex flex-col items-center w-2/5">
            {/* <img src="#" alt="stoop sale" /> */}
            <Link
              href="#location"
              className="border-black bg-white border-2 rounded-lg p-2"
            >
              Where is it?
            </Link>
          </div>
        </div>
      </div>
      {/* Where it is */}
      <div
        id="location"
        className="flex flex-col justify-center h-screen bg-yellow-200"
      >
        <div className="flex justify-evenly">
          <div className="flex flex-col">
            <p className="text-2xl">WHEN?</p>
            <p>
              Saturday 10th August 2024
              <br />
              4pm-8pm
            </p>
            <p className="text-2xl">WHERE?</p>
            <p>
              Corner of court street and 2nd pl., <br />
              Brooklyn, <br />
              NY.
            </p>
          </div>
          <div className="flex flex-col">
            <Map position={[40.67951, -73.997283]} zoom={16} />
            <p>///certified.sweat.wiser</p>
          </div>
        </div>
        <Link
          href="#share"
          className="border-black bg-white border-2 rounded-lg p-2"
        >
          Share with your friends
        </Link>
      </div>
      {/* Share on social media */}
      <div
        id="share"
        className="flex justify-center items-center h-screen bg-yellow-50"
      >
        <Socials />
      </div>
    </main>
  );
}
