//combines all
import React from 'react';
import CardList from './CardList'; //instead of copying and pasting each element in render below
import { robots } from './robots'; //either import it into CardList directly or pass it from here as a prop
import Searchbox from './Searchbox';

//App can change the robots array unlike CardList
//in App robots is a state
//App passes the robots state down as props to it's child CardList
class App extends React.Component {
  //states can change, props cannot
  constructor() {
    super();
    this.state = {
      // robotsState: robots,
      robots: robots,
      searchfield: '',
    };
  }

  //create a function to communicate with Searchbox
  //ERROR with thos.state,robots:
  // event happened in <input/> so this refers to input
  // BUT input does not have state.robots
  // onSearchChange(event) {

  //SOLUTION: for all user created methods (i.e. all but constructor and render)
  //use below so this. refers to this class:
  // onSearchChange = (event) => {
  // 	//update searchfield state
  // 	this.setState( { searchfield: event.target.value} ) //in react always use setState when state is changed
  // 	// filter robots based on this new searchfield state
  // 	const filteredRobots = this.state.robots.filter(robots => {
  // 		// return all robots names that are included in searchfield
  // 		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  // 	})
  // 	console.log(filteredRobots);
  // 	// console.log(event.target.value);
  // }

  onSearchChange = (event) => {
    //update searchfield state
    this.setState({ searchfield: event.target.value }); //in react always use setState when state is changed
  };
  render() {
    // filter robots based on this new searchfield state
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase()); // return all robots names that are included in searchfield
    });

    return (
      <div className="tc">
        <h1>Robo Friends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        {
          //COMMENT:
          // access from the state instead
          // <CardList robots = {robots}/>
          //access from the robotsState object variable
          // <CardList robots = {this.state.robotsState} />
        }
        {
          //COMMEMT: Cardlist receives all robots
          // <CardList robots = {this.state.robots} />
          //BELOW NEW: CardList only receives the filteredRobots array
        }
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
