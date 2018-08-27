import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
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
    console.log(this.state.split);
  }

  onRadioBtnClick(length) {
    this.setState({ length });
    // asynchronous console logging
    console.log(this.state.length);
  }

  onGenerateWorkoutClick() {
    if (this.state.length !== undefined && this.state.split !== undefined) {
      $.get( `http://localhost:3000/${this.state.split}/${this.state.length}`, (data) => {
        console.log(data);
      })
      .fail(function() {
        console.log( "error" );
      });
    } else {
      console.log('Error!');
      console.log(this.state.length);
      console.log(this.state.split);
    }
  }

  componentDidMount() {
    console.log('Component Mounted');
  }

  render() {
    return (
    <div>
      <Topshelf
        onDropDownClick={this.onDropDownClick}
        toggleSplit={this.toggleSplit}
        onRadioBtnClick={this.onRadioBtnClick}
        onGenerateWorkoutClick={this.onGenerateWorkoutClick}
        state={this.state} 
      />
      <Workout
        state={this.state}
      />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
