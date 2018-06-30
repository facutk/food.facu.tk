import React from "react";
import Helmet from 'react-helmet'
import Header from '../components/header';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log(data.site.siteMetadata.title);
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} recipe={frontmatter.title} />
      <div className="blog-post-container">
        <Helmet
          title={frontmatter.title}
          meta={[
            { name: 'description', content: frontmatter.title }
          ]}
        />
        <div className="blog-post">
          <h5>Cooking Time: {frontmatter.cookingTime}</h5>
          <h5>What</h5>
          <ul>
            {frontmatter.ingredients.map(ingredient => (
              <li key={ingredient.ingredient}>
                {ingredient.ingredient} - {ingredient.quantity} {ingredient.uom}
              </li>
            ))}
          </ul>
          <h5>How</h5>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        ingredients {
          ingredient
          quantity
          uom
        }
        cookingTime
      }
    }
  }
`;
