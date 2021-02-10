import React from "react";
import { ReactComponent as TwitterIcon } from "./assets/icons/twitter.svg";
import { ReactComponent as FacebookIcon } from "./assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "./assets/icons/instagram.svg";

export default function SocialMedia() {
  return (
    <div className="lg:absolute flex h-6 lg:h-auto justify-center lg:justify-start lg:flex-col lg:w-5 lg:mt-16 lg:right-1/10 cursor-pointer mt-8 lg:mt-0">
      <TwitterIcon className="lg:w-full lg:min-w-full lg:mb-6 mr-4" />
      <InstagramIcon className="lg:w-full lg:min-w-full lg:mb-6 mr-4" />
      <FacebookIcon className="lg:w-full lg:min-w-full lg:mb-6" />
    </div>
  );
}
