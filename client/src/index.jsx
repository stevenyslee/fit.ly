import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Topshelf from './components/Topshelf.jsx';
import Workout from './components/Workout.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splitDropdownOpen: false,
      rSelected: undefined,
      tSelected: undefined,
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

  onDropDownClick(tSelected) {
    this.setState({ tSelected });
    console.log(this.state.tSelected);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
    // asynchronous console logging
    console.log(this.state.rSelected);
  }

  onGenerateWorkoutClick() {
    if (this.state.rSelected !== undefined && this.state.tSelected !== undefined) {
      console.log(this.state.rSelected);
      console.log(this.state.tSelected);
    } else {
      console.log('Error!');
      console.log(this.state.rSelected);
      console.log(this.state.tSelected);
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
