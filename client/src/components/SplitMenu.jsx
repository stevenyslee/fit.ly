import React from 'react';
import SplitEntry from './SplitEntry.jsx';

const SplitMenu = (props) => (
	<div>
		<h2>SplitMenu</h2>
		{[0, 1, 2, 3, 4].map(item => <SplitEntry key={item} />)}
  </div>
)

export default SplitMenu;