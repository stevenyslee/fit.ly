import React from 'react';
import SplitMenu from './SplitMenu.jsx';
import LengthMenu from './LengthMenu.jsx';
import GeneratePlan from './GeneratePlan.jsx';

const Topshelf = (props) => (
  <div id='Topshelf'>
    <SplitMenu />
    <LengthMenu />
    <GeneratePlan />
  </div>
)

export default Topshelf;
