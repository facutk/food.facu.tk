import React from "react";
import Helmet from 'react-helmet'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <Helmet
        title={frontmatter.title}
        meta={[
          { name: 'description', content: frontmatter.title }
        ]}
      />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h5>{frontmatter.date}</h5>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
