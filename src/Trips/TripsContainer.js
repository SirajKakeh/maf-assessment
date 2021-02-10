import React from "react";
import TRIPS from "../helpers/trips-data.json";
import { ReactComponent as CloseIcon } from "./../assets/icons/close.svg";
import Trip from "./Trip";
import "./TripsContainer.css";
import TripTabs from "./TripTabs";

export default function TripsContainer() {
  const [trips] = React.useState(TRIPS);
  const [currentTrip, setCurrentTrip] = React.useState(0);

  const navigateToTrip = (index) => {
    setCurrentTrip(index % 4);
  };

  return (
    <>
      <section className="trips-container container mx-auto pb-16 px-8 lg:px-44 text-white font-larsseit">
        <header className="flex flex-wrap items-center mb-6 lg:mb-24">
          <h2 className="font-noe-display text-5xl lg:text-7xl text-center lg:text-left w-full lg:w-auto">
            Pick your trip{" "}
          </h2>
          <CloseIcon className="mx-4 lg:mx-9" />
          <span className="mt-4 lg:mt-0 w-10/12 lg:w-2/5">
            Our team put together some trips to you to discover, feel free to
            discover each of them.
          </span>
        </header>
        <TripTabs
          trips={trips}
          currentTrip={currentTrip}
          setCurrentTrip={setCurrentTrip}
        />
        <Trip trip={trips[currentTrip]} navigateToTrip={navigateToTrip} />
      </section>
    </>
  );
}
