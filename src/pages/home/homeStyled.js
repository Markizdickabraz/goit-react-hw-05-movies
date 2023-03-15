import styled from "styled-components";
import {Link } from "react-router-dom";


export const ListStyled = styled.ul`
padding: 25px;
display: flex;
flex-wrap: wrap;
gap:20px;
list-style: none;
`

export const GalleryItemsStyled = styled.li`
width: 240px;
display:flex;
flex-direction: column;
`

export const ImgStyled = styled.img`
width:100%;
`

export const LinkStyled = styled(Link)`
text-decoration: none;
display:block;
color:black;
    :hover {
        color:lightblue;
    }
`