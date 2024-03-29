import { Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import { HeaderStyled, Link, NavStyled } from "./headerStyled";
import GlobalStyle from './globalStyled'
import axios from "axios";
import { lazy,Suspense} from "react";

const Home = lazy(() => import("../pages/home/Home"));
const Movies = lazy(() => import("../pages/movies/Movies"));
const Cast = lazy(() => import("./cast/cast"));
const Reviews = lazy(() => import("./reviews/reviews"))
const MovieDetails = lazy(() => import("../pages/movieDetails/MovieDetails"))
const NotFound = lazy(() => import("../pages/notFound/notFound"))

export const App = () => {

const KEY = `faab19b092cac6c59a97dec233a38f4d`;
const BASEURL = `https://api.themoviedb.org/3/trending/movie/day?`;

const [data, setData] = useState([])

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
          <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} /> 
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </ Route>
        </Routes>
        </Suspense>
       </div>
  );
};
