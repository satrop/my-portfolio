import { useCollapse } from 'react-collapsed';
import StandardCard from './StandardCard';

import './Collapse.scss';
import './StandardCard.scss';

const Collapse = () => {
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
	return (
		<div className="collapsible">
			<button className="toggle-button" {...getToggleProps()}>
				{isExpanded ? 'Show Less' : 'View More'}
			</button>
			<div {...getCollapseProps()}>
				<div className="content standard-card-wrapper">
					<StandardCard />
				</div>
			</div>
		</div>
	);
};

export default Collapse;
