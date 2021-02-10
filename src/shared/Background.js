import React from "react";
import { ReactComponent as Gradient } from "../assets/icons/main-page-gradient.svg";
import "./Background.css";

export default function Background() {
  return (
    <div className="absolute top-0 left-0 w-full z-n1">
      <img
        src={`${process.env.PUBLIC_URL}/images/bg-min.png`}
        alt="background"
      />
      <Gradient className="bg-gradient" />
    </div>
  );
}
