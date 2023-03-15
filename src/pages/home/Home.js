import GalleryItems from "../../components/Gallery";
import { ListStyled } from "./homeStyled";

export default function Home({ data}) {
    return (
        <ListStyled>
            <GalleryItems data={data} />
        </ListStyled>
    )
}