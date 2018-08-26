import React from 'react';
import SplitMenu from './SplitMenu.jsx';
import LengthMenu from './LengthMenu.jsx';
import GeneratePlan from './GeneratePlan.jsx';

const Topshelf = (props) => (
  <div>
    <h1>Topshelf</h1>
    <SplitMenu />
    <LengthMenu />
    <GeneratePlan />
  </div>
)

export default Topshelf;
