const MovieCard = ({ movie, onDetails }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <img
        src={movie.image?.medium}
        alt={movie.name}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold">
          {movie.name}
        </h2>

        <p className="mb-2 text-gray-600">
          ⭐ {movie.rating?.average || "N/A"}
        </p>

        <p className="mb-4 text-gray-600">
          📅 {movie.premiered || "Unknown"}
        </p>

        <button
          onClick={() => onDetails(movie)}
          className="w-full rounded-lg bg-gray-900 px-4 py-2 font-semibold text-white hover:bg-gray-700"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;