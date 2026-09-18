const MovieModal = ({ movie, onClose }) => {
  if (!movie) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="rounded-full bg-gray-100 px-4 py-2 text-xl hover:bg-gray-200"
          >
            ✕
          </button>
        </div>

        {/* Poster */}
        <img
          src={movie.image?.original || movie.image?.medium}
          alt={movie.name}
          className="max-h-[450px] w-full object-cover"
        />

        {/* Movie Information */}
        <div className="p-6">
          <h2 className="mb-4 text-3xl font-bold">
            {movie.name}
          </h2>

          <div className="mb-5 flex flex-wrap gap-4 text-gray-600">
            <span>
              ⭐ Rating: {movie.rating?.average || "N/A"}
            </span>

            <span>
              📅 Release: {movie.premiered || "Unknown"}
            </span>

            <span>
              🎬 Status: {movie.status || "Unknown"}
            </span>
          </div>

          {/* Genres */}
          {movie.genres?.length > 0 && (
            <div className="mb-5">
              <h3 className="mb-2 text-lg font-semibold">
                Genres
              </h3>

              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Summary */}
          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Overview
            </h3>

            <div
              className="leading-7 text-gray-600"
              dangerouslySetInnerHTML={{
                __html: movie.summary || "No summary available.",
              }}
            />
          </div>

          <button
            onClick={onClose}
            className="mt-6 rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;