import React from "react";
import NavLinks from "./NavLinks";
import "./SideNav.css";

export default function SideNav() {
  return (
    <>
      <input type="checkbox" className="menu-checkbox" />
      <div className="main-menu-burger-button" />
      <nav className="side-nav">
        <NavLinks />
      </nav>
    </>
  );
}
