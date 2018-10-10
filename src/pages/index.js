import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Bio from '../components/Bio';
import Footer from '../components/Footer';

export default class index extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title');
		const posts = get(this, 'props.data.allMarkdownRemark.edges');

		return (
			<Layout>
				<Helmet>
					<title>{siteTitle}</title>
				</Helmet>
				<Header />
				<div className="grid">
					<Bio />
					<div className="posts">
						{posts.map(({ node }) => {
							const title = get(node, 'frontmatter.title') || node.fields.slug;
							return (
								<div className="post" key={node.fields.slug}>
									<h3>
										<Link to={`blog${node.fields.slug}`}>{title}</Link>
									</h3>
									<time>{node.frontmatter.date}</time>
									<p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
								</div>
							);
						})}
					</div>
				</div>
				<Footer />
			</Layout>
		);
	}
}

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt(pruneLength: 250)
					fields {
						slug
					}
					frontmatter {
						date(formatString: "DD MMMM, YYYY")
						title
					}
				}
			}
		}
	}
`;
