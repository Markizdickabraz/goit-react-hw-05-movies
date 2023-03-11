import Home from "./home/Home";
import axios from "axios";
import { useState } from "react";


export const App = () => {


const KEY = `faab19b092cac6c59a97dec233a38f4d`;
const BASEURL = `https://api.themoviedb.org/3/trending/movie/day?`;
// const STORAGE_KEY = 'genresId';
// const IMGURL = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

    
    const [data, setData] = useState(() => {fetchMovieRating()})
    const [genres, setGenres] = useState(()=> {fetchGenresId()})

    
    async function fetchMovieRating() {
    try {
        const response = await axios.get(`${BASEURL}api_key=${KEY}`)
        const result = await response.data.results;
        setData(result)
    } catch (error) {
      console.log(error);
    }
  }
   
     async function fetchGenresId() {
   const BASEURLGENRES = `https://api.themoviedb.org/3/genre/movie/list?`;
    try {
        const resultGenresId = await axios.get(`${BASEURLGENRES}api_key=${KEY}&language=en-US`);
        setGenres(resultGenresId.data.genres)
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div>
              <header>
            <nav>    
              {data !== null &&  <Home data={data} genres = {genres}> <a href="/">Home</a></Home>}
                <a href="/Movies">Movies</a>
            </nav>
        </header>
    </div>
  );
};
