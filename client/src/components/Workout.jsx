import React from 'react';
import Exercise from './Exercise.jsx';

const Workout = (props) => (
  <div id='Workout'>
    <h2>Workout</h2>
    {props.state.exercises.map(item => <Exercise key={item} />)}
  </div>
)

export default Workout;
