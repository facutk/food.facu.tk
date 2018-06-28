import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid #bbb;
  }
`;

const PostLink = ({ post }) => (
  <div>
    <StyledLink to={post.frontmatter.path}>
      {post.frontmatter.title}
    </StyledLink>
  </div>
)

export default PostLink
