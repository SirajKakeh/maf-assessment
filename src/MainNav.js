import React from "react";
import NavLinks from "./NavLinks";
import "./MainNav.css";

export default function MainNav({ visible }) {
  return (
    <>
      <svg className={`main-menu-clip-path ${visible ? "visible" : ""}`}>
        <defs>
          <clipPath id="clip-path">
            <circle
              className="mm-circle"
              cx="300"
              cy="300"
              r="300"
              transform="scale(0)"
            />
          </clipPath>
        </defs>
      </svg>
      <nav className="main-nav">
        <NavLinks />
      </nav>
    </>
  );
}
