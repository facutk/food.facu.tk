import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components';

// import Header from '../components/header'

const StyledLayout = styled.div`
  font-family: 'Work Sans', sans-serif;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 10px;
  padding-bottom: 3rem;
  font-weight: 300;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  color: #333;
`;

const Layout = ({ children, data }) => (
  <StyledLayout>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Easy and delicious recipes' },
        { name: 'keywords', content: 'recipes, food, quick, easy' },
      ]}
    >
      <link rel='icon' href='favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Helmet>
    <div>
      {children()}
    </div>
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
