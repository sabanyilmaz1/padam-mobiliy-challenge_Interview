import React from "react";
import TripCard from "../components/TripCard";
export default function Trips({ trips }) {
  console.log("Dans le component trips : ", trips);
  return (
    <div className="mt-3 ">
      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          departureStop={trip.departureStop}
          arrivalStop={trip.arrivalStop}
        />
      ))}
    </div>
  );
}
