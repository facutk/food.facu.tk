import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  color: #333;
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #eee;
  padding: 0.5rem 0;
`;

const StyledTitle = styled.div`
  max-width: 960;

  & h1 {
    margin: 0;
    font-family: "Work Sans";
  }
`;

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <StyledTitle>
      <h1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </h1>
    </StyledTitle>
    <div>
      recipe!
    </div>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
