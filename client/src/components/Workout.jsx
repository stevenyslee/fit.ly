import React from 'react';
import Exercises from './Exercises.jsx';

const Workout = (props) => (
  <div id='Workout'>
    <h2>Workout</h2>
    {[0, 1, 2, 3, 4].map(item => <Exercises key={item} />)}
  </div>
)

export default Workout;