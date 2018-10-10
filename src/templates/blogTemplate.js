import React from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Footer from "../components/Footer";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Header />
      <div className="grid">
        <div className="blog-post-container">
          <div className="blog-post">
            <h1 className="title">{frontmatter.title}</h1>
            <time>{frontmatter.date}</time>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
        <Bio />
      </div>
      <Footer />
    </Layout>
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
