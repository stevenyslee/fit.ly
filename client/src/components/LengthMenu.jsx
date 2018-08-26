import React from 'react';
import LengthEntry from './LengthEntry.jsx';

const LengthMenu = (props) => (
  <div id='LengthMenu'>
	{[0, 1, 2, 3, 4].map(item => <LengthEntry key={item} />)}
  </div>
)

export default LengthMenu;
