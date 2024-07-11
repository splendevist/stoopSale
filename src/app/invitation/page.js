import React, { useMemo } from "react";
import dynamic from "next/dynamic";

export default function Invitation() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/app/components/MyMap.jsx"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <main className="h-screen bg-yellow-100 py-6 px-12">
      <div className="h-full bg-yellow-50">
        <div className="flex flex-col items-center py-10 text-indigo-500">
          <h1 className="text-3xl">YOU&apos;R INVITED!</h1>
          <h2>brooklyn stoop sale</h2>
          <h3>
            Where one person&apos;s trash is another person&apos;s treasure
          </h3>
        </div>
        <div className="flex justify-evenly text-yellow-500">
          <div className="flex justify-center w-2/5">
            <img src="#" alt="stoop sale" />
          </div>

          <div className="flex flex-col justify-evenly w-2/5 h-full">
            <p className="text-2xl">WHEN</p>
            <p>
              Saturday 10th August 2024
              <br />
              4pm-8pm
            </p>
            <p className="text-2xl">WHERE</p>
            <p>
              Corner of court street and 2nd pl., <br />
              Brooklyn, <br />
              NY.
            </p>
            <p>///certified.sweat.wiser</p>
            <Map position={[40.67951, -73.997283]} zoom={16} />
          </div>
        </div>
      </div>
    </main>
  );
}
