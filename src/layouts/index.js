import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components';

import Header from '../components/header'

const StyledLayout = styled.div`
  font-family: 'Work Sans', sans-serif;
  width: 75%;
  margin: 0 auto;
  padding-bottom: 3rem;
  font-weight: 300;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const Layout = ({ children, data }) => { console.log(data) ;return (
  <StyledLayout>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Easy and delicious recipes' },
        { name: 'keywords', content: 'recipes, food, quick, easy' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
  </StyledLayout>
)}

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
