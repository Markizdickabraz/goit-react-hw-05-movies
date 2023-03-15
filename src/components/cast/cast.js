import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Cast() {
    
    const KEY = `faab19b092cac6c59a97dec233a38f4d`;

    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

     async function fetchFilmCast() {
        try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}`)
            setCast(response.data.cast)
            console.log(response.data.cast)
        } catch (error) {
    console.log(error);
        }
    }
         
    useEffect(() => {
            fetchFilmCast();
         // eslint-disable-next-line react-hooks/exhaustive-deps
         },[movieId])
    
    return (
        cast.map(item => (
            <div key={item.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt={item.character}></img>
                <p>{item.original_name}</p>
                <p>Character: { item.character}</p>
            </div>
       ))
    )
}