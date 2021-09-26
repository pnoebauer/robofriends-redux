import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CardList from './CardList'; //instead of copying and pasting each element in render below
import 'tachyons'; //for css styling
import { robots } from './robots'; //either import it into CardList directly or pass it from here as a prop

ReactDOM.render(<CardList robots={robots} />, document.getElementById('root'));

// EXAMPLES:
// <Card id={example[0].id} name={example[0].name} email={example[0].email}/>
// <Card />
