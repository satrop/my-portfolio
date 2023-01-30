import React from 'react';
import './topbar.scss';

const TopBar = (props) => {
	return (
		<div className="top-bar">
			<div className="left">{props.left}</div>
			<div className="right">{props.right}</div>
		</div>
	);
};

export default TopBar;
