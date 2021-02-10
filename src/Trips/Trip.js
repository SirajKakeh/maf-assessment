import React from "react";
import Button from "../shared/Button";
import TripImages from "./TripImages";

export default function Trip({ trip, navigateToTrip }) {
  return (
    <section className="flex flex-col lg:flex-row items-center flex-wrap">
      <TripImages
        trip={trip}
        navigateToTrip={navigateToTrip}
        classNames="w-5/12 hidden lg:block"
      />
      <div className="w-full lg:w-7/12 text-center lg:text-left lg:pl-24">
        <h2 className="text-6xl font-noe-display mb-6 capitalize">
          {trip.name}
        </h2>
        <TripImages
          trip={trip}
          navigateToTrip={navigateToTrip}
          classNames="w-full mx-auto mb-6 block lg:hidden"
        />
        <span className="block mb-4 text-xs lg:text-base">
          {trip.description}
        </span>
        <span className="block mb-11 text-xs lg:text-base">
          {trip.subDescription}
        </span>

        <div className="mx-auto lg:mx-0 lg:w-max max-w-max">
          <Button text="see our latest offer" />
        </div>
      </div>
    </section>
  );
}
