import type { Data } from "../interfaces/Movie";

const API_KEY = "cb78b9598a021d90cf52f280a87980fb";
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