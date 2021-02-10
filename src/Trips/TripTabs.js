import React from "react";

export default function TripTabs({ trips, currentTrip, setCurrentTrip }) {
  return (
    <nav className="flex trip-tabs cursor-pointer mb-12 lg:mb-32 border-b-2 border-secondary border-opacity-70">
      {trips.map((trip) => (
        <div
          key={trip.id}
          onClick={() => setCurrentTrip(trip.id)}
          className={`flex items-center justify-center font-bold text-secondary capitalize h-16 w-1/4 ${
            trip.id === currentTrip
              ? "border-b-4 border-secondary border-opacity-70"
              : ""
          }`}
        >
          {trip.name}
        </div>
      ))}
    </nav>
  );
}
