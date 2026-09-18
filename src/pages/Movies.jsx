import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchText.trim()) {
      return;
    }

    setLoading(true);

    fetch(
      `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
        searchText
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        const searchResults = data.map((item) => item.show);

        setMovies(searchResults);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-semibold">
          Loading movies...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-8 text-center text-4xl font-bold">
          Explore Movies
        </h1>

        <form
          onSubmit={handleSearch}
          className="mx-auto mb-10 flex max-w-2xl gap-3"
        >
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for a movie..."
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-yellow-500"
          />

          <button
            type="submit"
            className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"
          >
            Search
          </button>
        </form>

        {movies.length === 0 ? (
          <p className="text-center text-lg text-gray-600">
            No movies found.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onDetails={setSelectedMovie}
              />
            ))}
          </div>
        )}

        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />

      </div>
    </div>
  );
};

export default Movies;