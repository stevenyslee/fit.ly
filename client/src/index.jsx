import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state  {
			
		}
	}

	componentDidMount() {
		console.log('Component Mounted');
	}

	render() {
		return (<div>
			<h1>App Rendered</h1>
		</div>)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
