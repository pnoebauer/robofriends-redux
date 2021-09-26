//combines all
import React from 'react';
import CardList from './CardList'; //instead of copying and pasting each element in render below
//(#5) remove robots.js, will update object from website instead
// import { robots } from './robots'; //either import it into CardList directly or pass it from here as a prop
import Searchbox from './Searchbox';
import './App.css';

//App can change the robots array unlike CardList
//in App robots is a state
//App passes the robots state down as props to it's child CardList
class App extends React.Component {
  //states can change, props cannot
  constructor() {
    super();
    this.state = {
      // robotsState: robots,
      // robots: robots,
      //(#5): will be loaded from now
      robots: [],
      searchfield: '',
    };
    // console.log('Constructor');
  }

  componentDidMount() {
    //fetch makes http request and receives response
    // fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    // 	return response.json();
    // 	})
    // .then(users => {
    // 	this.setState({robots: users});
    // });
    //minimise above code:
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));

    // this.setState({robots: robots});
    // console.log('DidMount');
  }

  onSearchChange = (event) => {
    //update searchfield state
    this.setState({ searchfield: event.target.value }); //in react always use setState when state is changed
  };
  render() {
    // console.log('Render');
    // console.log(this.state.robots[0]); //works
    // console.log(this.state.robots[0].email); //works for the robots.js object but not here

    // filter robots based on this new searchfield state
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase()); // return all robots names that are included in searchfield
    });

    //add code to show a message while the request is retrieved from another website
    if (this.state.robots.length === 0) {
      return <h1 className="tc f1">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">ROBOFRIENDS</h1>
          <Searchbox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
