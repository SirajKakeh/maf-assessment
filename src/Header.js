import React from "react";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";
import "./Header.css";
import Button from "./shared/Button";
import SideNav from "./SideNav";
import MainNav from "./MainNav";

export default function Header() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  return (
    <header className="px-12 lg:px-40">
      <nav className="flex items-center mt-16 noe-display">
        <a href="#!" className="md:text-4xl font-noe-display font-bold">
          <span className="text-white">NT</span>
          <span className="text-secondary">.</span>
        </a>
        <SearchIcon className="w-4 ml-auto mr-9 cursor-pointer" />
        <div className="w-40 hidden lg:block">
          <Button
            text="menu"
            color="primary"
            onClick={() => setMenuVisible(!menuVisible)}
          />
          <MainNav visible={menuVisible} />
        </div>
        <div className="relative w-8 h-8 lg:hidden">
          <SideNav />
        </div>
      </nav>
    </header>
  );
}
