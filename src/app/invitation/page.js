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
    <main className="h-screen bg-red-50">
      <h1>Invitation</h1>
      <h2>One person&apos;s trash is another person&apos;s treasure!</h2>
      <img src="#" alt="stoop sale" />
      <p>Date: 08/10/24</p>
      <p>Time: 4pm-8pm</p>
      <p>Location: Corner of court street and 2nd pl. Brooklyn, NY.</p>
      <p>Map API</p>
      <div style={{ height: "400px", width: "100%" }}>
        <Map position={[40.67951, -73.997283]} zoom={16} />
      </div>
      <p>what3words: ///certified.sweat.wiser</p>
    </main>
  );
}
