import { Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import { HeaderStyled, Link, NavStyled } from "./headerStyled";
import {MovieDetails} from "../pages/movieDetails/MovieDetails";
import GlobalStyle from './globalStyled'
import axios from "axios";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import Cast from "./cast/cast";
import Reviews from "./reviews/reviews";

export const App = () => {

const KEY = `faab19b092cac6c59a97dec233a38f4d`;
const BASEURL = `https://api.themoviedb.org/3/trending/movie/day?`;

const [data, setData] = useState(null)

async function fetchMovieRating() {
  try {
    const response = await axios.get(`${BASEURL}api_key=${KEY}`)
    setData(response.data.results)
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  fetchMovieRating();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


  return (
    <div>
      <GlobalStyle />
      <HeaderStyled>
        <NavStyled>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </NavStyled>
      </HeaderStyled>
       <Routes>
        {data !== null && <Route path="/" element={<Home data={data} />} />} 
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </ Route>
        </Routes>
       </div>
  );
};
