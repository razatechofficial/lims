import Loading from "@/components/Loading/Loading";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the LeafletMap component
const LeafletMap = dynamic(() => import("@/components/Map/LeafletMap"), {
  ssr: false, // Disable server-side rendering for LeafletMap
  loading: () => <Loading />,
});

const MapPage: React.FC = () => {
  return (
    <div className="relative -z-0">
      <h1 className="text-2xl font-semibold">UGV's Map View</h1>
      <br />
      {/* Render the LeafletMap component */}
      <LeafletMap />
    </div>
  );
};

export default MapPage;
