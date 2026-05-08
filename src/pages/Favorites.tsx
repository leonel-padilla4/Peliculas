import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../Components/MovieCard";
import Navbar from "../Components/Navbar";

function Favorites() {
    const { favorites } = useMovieContext();

    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar /> 
            <div className="p-5">
                {favorites.length === 0 ? (
                    <p className="text-center text-gray-500">No tienes películas favoritas aún.</p>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {favorites.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Favorites;