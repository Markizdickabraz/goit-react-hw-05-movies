import GalleryItems from "./galleryItems";
import { HomeStyled } from "./homeStyled";

export default function Home({ data, genreId }) {
    return (
        <HomeStyled>
            <GalleryItems data= {data} />
        </HomeStyled>
    )
}