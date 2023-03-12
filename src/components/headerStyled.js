import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
padding-left: 25px;
`
export const NavStyled = styled.nav`
display: flex;
gap: 15px;
padding-top:15px;
`

export const Link = styled(NavLink)`
text-decoration: none;
color: black;
 :hover{
    color:lightblue;
 }
 :active{
    color: blue;
 }
 &.active {
    color: brown;
  }
`