import React from "react";
import { ReactComponent as LeftArrowIcon } from "../assets/icons/left-arrow.svg";

export default function TripImages({ trip, navigateToTrip, classNames }) {
  return (
    <div className={`relative ${classNames}`}>
      <img
        src={`${process.env.PUBLIC_URL}/images/${trip.imageUrl}`}
        alt="Trip"
        className="w-full rounded-lg"
      />
      <div className="absolute flex bottom-0 right-0">
        <button
          className="relative cursor-pointer w-16 h-16 flex justify-center items-center bg-background rounded-tl-lg border-r border-white border-opacity-30"
          onClick={() => navigateToTrip(trip.id - 1)}
          disabled={trip.id === 0}
        >
          <LeftArrowIcon className="w-6/12 h-full" />
        </button>
        <button
          className="relative cursor-pointer w-16 h-16 flex justify-center items-center bg-background"
          onClick={() => navigateToTrip(trip.id + 1)}
        >
          <LeftArrowIcon className="w-6/12 h-full transform rotate-180" />
        </button>
      </div>
    </div>
  );
}
