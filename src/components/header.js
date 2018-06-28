import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #eee;
  padding: 25px 0;
  max-width: 960;
  font-size: 1.2em;
  letter-spacing: 1px;
`;

const StyledLink = styled(Link)`
  color: #333;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <StyledLink to="/">
      {siteTitle}
    </StyledLink>
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
