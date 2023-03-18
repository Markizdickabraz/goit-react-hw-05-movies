import { ImgStyled, LinkStyled } from "../pages/home/homeStyled"
import { GalleryItemsStyled } from "../pages/home/homeStyled"
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";


export default function GalleryItems({ data }) {
      const location = useLocation();

    return (

        data.map(item => (
            <GalleryItemsStyled key={item.id}>
                <LinkStyled to={`/movies/${item.id}`} state={{from:location}}>
                <ImgStyled src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}/>
                <h4>{item.title}</h4>
                </LinkStyled>
                </GalleryItemsStyled>
            ))
   ) 
}

GalleryItems.propTypes = {
    data: PropTypes.array
}