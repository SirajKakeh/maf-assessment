import React, { useEffect, useRef } from "react";
import { ReactComponent as Gradient } from "../assets/icons/main-page-gradient.svg";
import "./Background.css";

export default function Background() {
  const imageRef = useRef(null);

  const listenForLoad = (image) => {
    image.setAttribute("src", `${process.env.PUBLIC_URL}/images/bg.png`);
  };

  useEffect(() => {
    const image = imageRef?.current;
    if (image) {
      image.addEventListener("load", () => listenForLoad(image));
      return () => image.removeEventListener("load", listenForLoad);
    }
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full z-n1">
      <img
        id="background-image"
        src={`${process.env.PUBLIC_URL}/images/bg-min.png`}
        alt="background"
        className="w-full"
        ref={imageRef}
      />
      <Gradient className="bg-gradient" />
    </div>
  );
}
