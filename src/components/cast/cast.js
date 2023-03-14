import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Cast() {
    
    const KEY = `faab19b092cac6c59a97dec233a38f4d`;


    const [cast, setCast] = useState(null);
    const { movieId } = useParams();
    console.log(movieId)

     async function fetchFilmCast() {
        try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`)
            setCast(response.data)
            console.log(response)
        } catch (error) {
    console.log(error);
        }
    }
         
         useEffect(() => {
             fetchFilmCast()
         // eslint-disable-next-line react-hooks/exhaustive-deps
         })
    
    return (
        <div></div>
    )
}