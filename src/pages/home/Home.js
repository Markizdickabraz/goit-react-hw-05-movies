import GalleryItems from "../../components/Gallery";
import { ListStyled } from "./homeStyled";
import PropTypes from 'prop-types';

export default function Home({ data}) {
    return (
        <ListStyled>
            <GalleryItems data={data} />
        </ListStyled>
    )
}

Home.propTypes = {
    data: PropTypes.array
}