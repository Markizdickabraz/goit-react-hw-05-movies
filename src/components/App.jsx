import Home from "./home/Home";
import axios from "axios";
import { useState, useEffect } from "react";
import GlobalStyle from './globalStyled'
import { HeaderStyled, LinkStyled, NavStyled } from "./headerStyled";



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
          <LinkStyled href="/">Home</LinkStyled>
          <LinkStyled href="/Movies">Movies</LinkStyled>
        </NavStyled>
      </HeaderStyled>
    {data !== null && <Home data={data} genres={genres}></Home>}
       </div>
  );
};
