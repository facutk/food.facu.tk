import React from 'react'
// import Link from 'gatsby-link'
import PostLink from "../components/PostLink"
import Header from '../components/header';

// const IndexPage = () => (
//   <div>
//     <h1>Hi peoplesssss</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <Link to="/page-2/">Go to page 2</Link>
//   </div>
// )

// export default IndexPage

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
    site
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <div>
      <Header siteTitle={site.siteMetadata.title} />
      <div>
        {Posts}
      </div>
    </div>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
