import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          🎬 MovieExplorer
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className="transition hover:text-yellow-400"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-black transition hover:bg-yellow-400"
          >
            Movies
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-800 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Home
            </Link>

            <Link
              to="/movies"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-yellow-500 px-4 py-2 text-center font-semibold text-black"
            >
              Movies
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;