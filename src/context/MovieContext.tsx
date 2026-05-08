import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Movies } from "../interfaces/Movie";

interface MovieProviderProps {
    favorites: Movies[];
    addToFavorites: (movie: Movies) => void;
    removeFromFavorites: (movieId: number) => void;
    isFavorite: (movieId: number) => boolean;
}

const MovieContext = createContext<MovieProviderProps | null>(null);

export const useMovieContext = () => {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error("useMovieContext debe usarse dentro de MovieProvider");
    }
    return context;
};

export const MovieProvider = ({ children }: { children: ReactNode }) => {

    const [favorites, setFavorites] = useState<Movies[]>(() => {
        const storedFavs = localStorage.getItem("favorites");
        return storedFavs ? JSON.parse(storedFavs) : [];
    });

    useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }, [favorites])

    const addToFavorites = (movie: Movies) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId: number) => {
        setFavorites(prev => prev.filter(movie => movie.id != movieId));
    }

    const isFavorite = (movieId: number) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}