import { Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import { HeaderStyled, Link, NavStyled } from "./headerStyled";
import GlobalStyle from './globalStyled'
import axios from "axios";
import Home from "./home/Home";
import Movies from "./movies/movies";

export const App = () => {


const KEY = `faab19b092cac6c59a97dec233a38f4d`;
const BASEURL = `https://api.themoviedb.org/3/trending/movie/day?`;
// const STORAGE_KEY = 'genresId';
// const IMGURL = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;


const [data, setData] = useState(null)
  const [genres, setGenres] = useState(null)

console.log(data)  

async function fetchMovieRating() {
  try {
    const response = await axios.get(`${BASEURL}api_key=${KEY}`)
    setData(response.data.results)
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

useEffect(() => {
  fetchMovieRating();
  fetchGenresId();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


  return (
    <div>
      <GlobalStyle />
      <HeaderStyled>
        <NavStyled>
          <Link to="/" end>Home</Link>
          <Link to="/Movies">Movies</Link>
        </NavStyled>
      </HeaderStyled>
       <Routes>
        {data !== null && <Route path="/" element={<Home data={data} />} />} 
       <Route path="/Movies" element={<Movies/>} />
        </Routes>
       </div>
  );
};
