module.exports = {
	siteMetadata: {
		title: `gatsby-lite-boilerplate`, // Replace with your own data
		siteUrl: `https://gatsby-lite.surge.sh`,
		description: `💅 A simple and minimalistic theme to get started with gatsbyjs (v2.0) based blog.`
	},
	plugins: [
		`gatsby-plugin-react-helmet`, // See react-helmet for more
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-source-filesystem`, // For.md files path
			options: {
				path: `${__dirname}/src/pages/posts/`,
				name: 'markdown-pages'
			}
		},
		{
			resolve: `gatsby-transformer-remark`, // For .md files
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`, // Image support in .md files
						options: {
							maxWidth: 590
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`, // Iframe support in .md files
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`
						}
					},
					`gatsby-remark-prismjs`, // Code highlighter
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`
				]
			}
		},
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-manifest`, // Manifest.json
			options: {
				name: 'gatsby-lite-boilerplate',
				short_name: 'gatsby blog',
				start_url: '/',
				background_color: '#212121',
				theme_color: '#212121',
				display: 'minimal-ui',
				icon: 'static/icons/android-chrome-512x512.png' // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-sass`, // Sass support
		{
			resolve: `gatsby-plugin-google-fonts`, // Google font name
			options: {
				fonts: [`Google Sans\:300,400,500`]
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `` // GA tracking id
			}
		},
		`gatsby-plugin-feed`, // rss feed
		`gatsby-plugin-no-sourcemaps` // No sourcemap to reduce the size of page load
	]
};
