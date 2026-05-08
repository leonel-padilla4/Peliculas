import type { Data } from "../interfaces/Movie";

const API_KEY = "bdd619d8bde44a03cfe4bb6c9c9280b9";
const BASE_URL = "https://api.themoviedb.org/3";


export const getMovies = async (): Promise<Data> => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data: Data = await response.json();

    console.log(data.results);
    return data;

}

export const searchMovies = async(query:string) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`)
 
    const data = await response.json();
 
    return data.results;
}