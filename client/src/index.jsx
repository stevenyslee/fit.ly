import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FadeIn from 'react-fade-in';
import Topshelf from './components/Topshelf.jsx';
import Workout from './components/Workout.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splitDropdownOpen: false,
      length: undefined,
      split: undefined,
      exercises: []
    };

    this.toggleSplit = this.toggleSplit.bind(this);
    this.onDropDownClick = this.onDropDownClick.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onGenerateWorkoutClick = this.onGenerateWorkoutClick.bind(this);
  }

  toggleSplit() {
    this.setState(prevState => ({
      splitDropdownOpen: !prevState.splitDropdownOpen
    }));
  }

  onDropDownClick(split) {
    this.setState({ split });
  }

  onRadioBtnClick(length) {
    this.setState({ length });
  }

  onGenerateWorkoutClick() {
    if (this.state.length !== undefined && this.state.split !== undefined) {
      $.get( `http://localhost:3000/${this.state.split}/${this.state.length}`, (exercises) => {
      this.setState({ exercises });
      })
      .fail(function() {
        console.log( "error" );
      });
    } else {
      console.log('Please select Split and Length!');
      console.log(this.state.length);
      console.log(this.state.split);
    }
  }

  render() {
    return (
    <FadeIn>
      <h1>Fitness Generator</h1>
      <Topshelf
        onDropDownClick={this.onDropDownClick}
        toggleSplit={this.toggleSplit}
        onRadioBtnClick={this.onRadioBtnClick}
        onGenerateWorkoutClick={this.onGenerateWorkoutClick}
        state={this.state} 
      />
      <Workout state={this.state} />
    </FadeIn>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
