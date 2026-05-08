import { Heart } from "lucide-react";
import { useMovieContext } from "../context/MovieContext";
import type { Movies } from "../interfaces/Movie";

const IMAGEN_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }: { movie: Movies }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e: React.MouseEvent) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  const year = movie.release_date ?? "N/A";

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
      {/* Imagen + elementos encima */}
      <div className="relative">
        <img
          src={`${IMAGEN_URL}${movie.poster_path}`}
          alt={movie.title}
        />

        {/* 💛 Botón corazón */}
        <button
          onClick={onFavoriteClick}
          className="absolute top-2 right-2 p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              favorite ? "fill-red-500 text-red-500" : "text-white"
            }`}
          />
        </button>

        </div>

      {/* Fecha — debajo de la imagen */}
      <div className="px-3 py-2 text-sm text-gray-500">
        {year}
      </div>
    </div>
  );
}

export default MovieCard;
