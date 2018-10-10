import React from 'react';

import avatar from './avatar.jpg';
import Github from './github.svg';
import Twitter from './twitter.svg';

export default class Bio extends React.Component {
	render() {
		return (
			<div className="about">
				<img className="avatar" src={avatar} alt="Name of avatar" />
				<div>
					<h1>Foo & Bar</h1>
					<p>
						<b>Web Developer, based in India.</b>
					</p>
					<div className="social">
						<a className="twitter" href="https://twitter.com/" target="_blank">
							<img src={Twitter} alt="Twitter" />
						</a>
						<a className="github" href="https://github.com" target="_blank">
							<img src={Github} alt="Github" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}
