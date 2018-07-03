import React from 'react';
import Img from 'gatsby-image';

import styles from './project.module.css';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <section>
      <div className={styles.hero}>
        <Img alt={post.frontmatter.imageDescription} sizes={data.hero.sizes} />
      </div>
      <div className="spacer-large"></div>
      <div className="container">
        <div className="col-8@sm col-start-3@sm">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </section>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        imageDescription
      }
    }
    hero: imageSharp(id: { regex: $slug }) {
      sizes(maxWidth: 2560) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`;
