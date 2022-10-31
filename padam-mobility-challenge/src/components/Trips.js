import React from "react";
import TripCard from "../components/TripCard";
export default function Trips() {
  return (
    <div className="mt-3 d-flex flex-nowrap justify-content-center">
      <TripCard />
      <TripCard />
      <TripCard />
    </div>
  );
}
