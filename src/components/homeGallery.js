// import MovieDetails from "components/movieDetails/MovieDetails"
import { GalleryItemsStyled, ImgStyled, LinkStyled } from "../pages/home/homeStyled"


export default function GalleryItems({ data }) {
    return (

        data.map(item => (
            <GalleryItemsStyled key={item.id}>
                <LinkStyled to={`/movies/${item.id}`}>
                <ImgStyled src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}/>
                <h4>{item.title}</h4>
                </LinkStyled>
                </GalleryItemsStyled>
            ))
   ) 
}