import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FadeIn from 'react-fade-in';
import { throttle, debounce } from 'throttle-debounce';
import Topshelf from './components/Topshelf.jsx';
import Workout from './components/Workout.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splitDropdownOpen: false,
      duration: undefined,
      split: undefined,
      exercises: []
    };

    this.toggleSplit = this.toggleSplit.bind(this);
    this.onDropDownClick = this.onDropDownClick.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onGenerateWorkoutClick = this.onGenerateWorkoutClick.bind(this)
    this._onGenerateWorkoutClick = throttle(300, this.onGenerateWorkoutClick);
  }

  toggleSplit() {
    this.setState(prevState => ({
      splitDropdownOpen: !prevState.splitDropdownOpen
    }));
  }

  onDropDownClick(split) {
    this.setState({ split });
  }

  onRadioBtnClick(duration) {
    this.setState({ duration });
  }

  onGenerateWorkoutClick() {
    if (this.state.duration !== undefined && this.state.split !== undefined) {
      console.log('Request');
      axios.get( `/${this.state.split}/${this.state.duration}`)
      .then((res) => {
        let exercises = res.data;
        this.setState({ exercises });
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      alert('Please select Split and Duration!');
    }
  }

  render() {
    return (
    <FadeIn>
      <h1>Fit.ly</h1>
      <Topshelf
        onDropDownClick={this.onDropDownClick}
        toggleSplit={this.toggleSplit}
        onRadioBtnClick={this.onRadioBtnClick}
        onGenerateWorkoutClick={this._onGenerateWorkoutClick}
        splitDropdownOpen={this.state.splitDropdownOpen}
        split={this.state.split}
        duration={this.state.duration}
      />
      <Workout exercises={this.state.exercises} />
    </FadeIn>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
