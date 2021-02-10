import Button from "./shared/Button";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";

export default function Header() {
  return (
    <header className="px-12 lg:px-40">
      <nav className="flex items-center mt-16 noe-display">
        <a href="#!" className="md:text-4xl font-noe-display font-bold">
          <span className="text-white">NT</span>
          <span className="text-secondary">.</span>
        </a>
        <SearchIcon className="w-4 ml-auto mr-9 cursor-pointer" />
        <div className="w-40">
          <Button text="menu" color="primary" />
        </div>
      </nav>
    </header>
  );
}
