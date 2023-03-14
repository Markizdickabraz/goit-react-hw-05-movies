import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export function Reviews() {

    const KEY = `faab19b092cac6c59a97dec233a38f4d`;

    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

     async function fetchFilmReview() {
        try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}`)
            setReviews(response.data.results)
        } catch (error) {
    console.log(error);
        }
    }
         
    useEffect(() => {
            fetchFilmReview();
         // eslint-disable-next-line react-hooks/exhaustive-deps
         },[movieId])

    return (
               reviews.map(item => (
            <div key={item.author}>
                <h3>{item.author}</h3>
                <p>{item.content}</p>
            </div>
    )))
}