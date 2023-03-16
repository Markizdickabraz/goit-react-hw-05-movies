import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styled from "styled-components";



const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: lightblue;
  }
`;

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="16" />
      {children}
    </StyledLink>
  );
};

export default BackLink;

BackLink.propTypes = {
  to: PropTypes.string,
  children:PropTypes.string
}