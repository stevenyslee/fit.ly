import React from 'react';
import Exercise from './Exercise.jsx';

const Workout = ({ exercises }) => (
  <div id='Workout'>
    <h2>Workout</h2>
    {exercises.map(item => <Exercise key={item.exercise} exercise={item} />)}
  </div>
)

export default Workout;
