//combines all
import React from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: '',
		};
		// console.log('Constructor');
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
		// console.log('DidMount');
	}

	onSearchChange = event => {
		//update searchfield state
		this.setState({searchfield: event.target.value}); //in react always use setState when state is changed
	};

	render() {
		// destructure this.state (allows removing it for the vars between {}):
		const {robots, searchfield} = this.state;
		// filter robots based on this new searchfield state
		// instructions on arrow functions and filter below:
		// https://www.digitalocean.com/community/tutorials/getting-started-with-es6-arrow-functions-in-javascript
		const filteredRobots = robots.filter(robot =>
			robot.name.toLowerCase().includes(searchfield.toLowerCase())
		);
		//ref: const filteredArray = [1,2,3,4].filter( num => num % 2 == 0);

		// console.log('Render');

		//add code to show a message while the request is retrieved from another website
		//CODE: if(!robots.length) {return (...)} else {return (...)} -->
		// ternary: return (!robots.length)?(...):(...)
		// if (!robots.length)
		// {
		// 	return <h1 className='tc f1'>Loading...</h1>
		// }
		// else
		// {
		// 	return (
		// 		<div className='tc'>
		// 			<h1 className='f1'>ROBOFRIENDS</h1>
		// 			<Searchbox searchChange = {this.onSearchChange}/>
		// 				<Scroll>
		// 					<CardList robots = {filteredRobots} />
		// 				</Scroll>
		// 		</div>
		// 	);
		// }
		return !robots.length ? (
			<h1 className='tc f1'>Loading...</h1>
		) : (
			<div className='tc'>
				<h1 className='f1'>ROBOFRIENDS</h1>
				<Searchbox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;
