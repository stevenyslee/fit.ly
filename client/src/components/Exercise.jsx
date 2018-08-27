import React from 'react';

const Exercise = (props) => (
  <div>
    <h4>{props.exercise.exercise}</h4>
    <img src={props.exercise.picture} alt={props.exercise.exercise} height="42" width="42" />
    <iframe width="560" height="315" src={props.exercise.video} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
  </div>
)

export default Exercise;