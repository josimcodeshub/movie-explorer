import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b bg-gray-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <Link to="/" className="text-2xl font-bold">
          🎬 MovieExplorer
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>

          <Link
            to="/movies"
            className="rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-black hover:bg-yellow-400"
          >
            Movies
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;