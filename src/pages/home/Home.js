import GalleryItems from "../../components/homeGallery";
import { HomeStyled } from "./homeStyled";

export default function Home({ data}) {
    return (
        <HomeStyled>
            <GalleryItems data= {data} />
        </HomeStyled>
    )
}