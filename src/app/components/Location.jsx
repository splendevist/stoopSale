import Button from "./Button";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";

export default function Location() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/app/components/MyMap.jsx"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div
      id="location"
      className="flex flex-col justify-evenly h-screen bg-yellow-200"
    >
      <div className="flex justify-center">
        <h2 className="text-3xl text-indigo-500 w-3/4 text-center py-2">
          Location
        </h2>
      </div>
      <div className="flex flex-col items-center justify-evenly md:flex-row">
        <div className="md:flex md:flex-col">
          <div>
            <p className="text-2xl">WHERE?</p>
            <p>
              Corner of court street and 2nd pl., <br />
              Brooklyn, <br />
              NY.
            </p>
          </div>
          <div className="my-4">
            <p className="text-2xl">WHEN?</p>
            <p>
              Sat August 10th
              <br />
              11-4
            </p>
          </div>
        </div>
        <div className="w-3/4 flex flex-col items-center md:w-1/3">
          <Map position={[40.67951, -73.997283]} zoom={16} />
          <p className="pt-4">w3w certified.sweat.wiser</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button title={"Share"} anchor={"#share"} />
      </div>
    </div>
  );
}