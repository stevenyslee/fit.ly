import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Topshelf from './components/Topshelf.jsx';
import Workout from './components/Workout.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		// this.state  {
			
		// }
	}

	componentDidMount() {
		console.log('Component Mounted');
	}

	render() {
		return (
		<div>
			<Topshelf />
			<Workout />
		</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
