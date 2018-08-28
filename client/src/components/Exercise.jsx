import React from 'react';
import FadeIn from 'react-fade-in';

const Exercise = (props) => {
  if (props.exercise.type === 'P') {
    var type = 'Primary';
  } else if (props.exercise.type === 'S') {
    var type = 'Secondary';
  } else if (props.exercise.type === 'A') {
    var type = 'Accessory';
  } 

  return (<FadeIn>
    <div className="Exercise">
      <span>
        <h2>{type}</h2>
      </span>
      <span>
        <h2>{props.exercise.exercise}</h2>
        <img src={props.exercise.picture} alt={props.exercise.exercise} />
      </span>
      <iframe width="560" height="315" src={props.exercise.video} frameBorder="0" allow="autoplay; encrypted-media" scrolling="no" allowFu llScreen></iframe>
    </div>
</FadeIn>);
}

export default Exercise;
