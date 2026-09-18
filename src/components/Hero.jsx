import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center bg-gray-900 px-6 text-center text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')] bg-cover bg-center opacity-30"></div>

      <div className="relative z-10 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
          Discover • Explore • Enjoy
        </p>

        <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Discover Your Next Favorite Movie
        </h1>

        <p className="mb-8 text-lg text-gray-300">
          Explore amazing movies and shows, discover new stories,
          and find something exciting to watch.
        </p>

        <Link
              to="/movies"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-yellow-500 px-4 py-2 text-center font-semibold text-black"
            >
              Explorer Movies
            </Link>
      </div>
    </section>
  );
};

export default Hero;