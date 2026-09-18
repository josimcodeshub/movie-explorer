const MovieCard = ({ movie, onDetails }) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="overflow-hidden">
        <img
          src={
            movie.image?.medium ||
            "https://via.placeholder.com/300x400?text=No+Image"
          }
          alt={movie.name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">

        <h2 className="mb-3 line-clamp-1 text-xl font-bold">
          {movie.name}
        </h2>

        <div className="mb-4 flex items-center justify-between text-sm text-gray-600">
          <span>
            ⭐ {movie.rating?.average || "N/A"}
          </span>

          <span>
            📅 {movie.premiered?.slice(0, 4) || "Unknown"}
          </span>
        </div>

        <button
          onClick={() => onDetails(movie)}
          className="w-full rounded-lg bg-gray-900 px-4 py-3 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
        >
          See Details
        </button>

      </div>
    </div>
  );
};

export default MovieCard;