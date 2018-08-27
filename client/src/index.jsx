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
      splitDropdownOpen: false
    };

    this.toggleSplit = this.toggleSplit.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  toggleSplit() {
    this.setState(prevState => ({
      splitDropdownOpen: !prevState.splitDropdownOpen
    }));
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
    // asynchronous console logging
    console.log(this.state.rSelected);

  }

  componentDidMount() {
    console.log('Component Mounted');
  }

  render() {
    return (
    <div>
      <Topshelf
        toggleSplit={this.toggleSplit}
        onRadioBtnClick={this.onRadioBtnClick}
        state={this.state} 
      />
      <Workout />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
