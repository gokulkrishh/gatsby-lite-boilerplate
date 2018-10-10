import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Bio from '../components/Bio';
import Footer from '../components/Footer';

export default () => (
	<Layout>
		<Helmet>
			<title>About</title>
		</Helmet>
		<Header />
		<div className="grid">
			<Bio />
			<div className="about-me">
				<h1>About</h1>
				<ul>
					<li>I do open source</li>
					<li>Write blogs etc,</li>
				</ul>
			</div>
		</div>
		<Footer />
	</Layout>
);
