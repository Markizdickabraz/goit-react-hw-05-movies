import { GalleryItemsStyled, ImgStyled } from "./homeStyled"

export default function GalleryItems({ data }) {
    return (

        data.map(item => (
            <GalleryItemsStyled key={item.id}>
                <ImgStyled src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}/>
                <h4>{item.title}</h4>
                </GalleryItemsStyled>
            ))
   ) 
}