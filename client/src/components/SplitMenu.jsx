import React from 'react';
import SplitEntry from './SplitEntry.jsx';

const SplitMenu = (props) => (
	<div id='SplitMenu'>
		{[0, 1, 2, 3, 4].map(item => <SplitEntry key={item} />)}
	</div>
)

export default SplitMenu;