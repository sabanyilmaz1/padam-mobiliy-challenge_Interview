import React from "react";
import TripCard from "../components/TripCard";
export default function Trips({ trips }) {
  return (
    <div className="mt-3 d-flex flex-wrap justify-content-center">
      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          departureStop={trip.departureStop}
          arrivalStop={trip.arrivalStop}
          departureTime={trip.departureTime}
          arrivalTime={trip.arrivalTime}
        />
      ))}
    </div>
  );
}
