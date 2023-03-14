import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { CardImgStyled, CardStyled, GenreStyled, MainStyled } from "./movieDetailsStyled";

const KEY = `faab19b092cac6c59a97dec233a38f4d`;

export function MovieDetails() {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    async function fetchFullInfoMovie () {
        try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`)
            setMovie(response.data)
        } catch (error) {
    console.log(error);
    }
    }
    
    useEffect(() => {
        fetchFullInfoMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[movieId])

    return (<MainStyled>
        {movie !== null && <div>
            <CardStyled>
                <CardImgStyled src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title}></CardImgStyled>
            <div>
                <h2>{movie.original_title}</h2>
                <p>User score: {movie.vote_average.toFixed(0)*10}%</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <GenreStyled>
                    {movie.genres.map(genre => (
                        <span key={genre.name}>
                            {genre.name}
                        </span>
                    )
                    )}
                </GenreStyled> 
            </div>
            </CardStyled>
            <div>
                <p>Additional information</p>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
                <Outlet />
            </div>
        </div>}
    </MainStyled>
        )
}