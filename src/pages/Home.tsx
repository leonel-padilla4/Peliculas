import { useEffect, useState } from "react";
import { getMovies, searchMovies } from "../services/api";
import type { Movies } from "../interfaces/Movie";
import MovieCard from "../Components/MovieCard";
import Navbar from "../Components/Navbar";

function Home() {
    const [movies, setMovies] = useState<Movies[]>([]);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const peliculas = await getMovies();
                setMovies(peliculas.results);
            } catch (error) {
                console.log(error);
            }
        }
        loadMovies();
    }, [])

    const handleSearch = async (query: string) => {
        console.log("handleSearch llamada con:", query);
        if (!query.trim()) {
            const peliculas = await getMovies();
            setMovies(peliculas.results);
            return;
        }
        try {
            const results = await searchMovies(query);
            setMovies(results);
        } catch (error) {
            console.log(error);
            setMovies([]);
        }
    }

    return (
    <div className="min-h-screen bg-gray-900">
        <Navbar onSearch={handleSearch} />
        <div className="min-h-screen bg-gray-900">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {movies.map((movie: Movies) => {
                    return <MovieCard key={movie.id} movie={movie} />
                })}
            </div>
        </div>
    </div>
)
}

export default Home;
