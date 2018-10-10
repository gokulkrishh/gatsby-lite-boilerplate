import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Bio from '../components/Bio';
import Footer from '../components/Footer';

const NotFoundPage = () => (
	<Layout className="not-found">
		<Helmet>
			<title>404 :(</title>
		</Helmet>
		<Header />
		<div className="grid">
			<h1>NOT FOUND :(</h1>
			<a href="/">Go back to homepage</a>
		</div>
		<Footer />
	</Layout>
);

export default NotFoundPage;
