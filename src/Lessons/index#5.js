import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons'; //for css styling

//app component gets mounted into the document with ID 'root' upon refreshing
//--> index.html: our website is a div with ID of root
//--> mounting: div with id of root gets displaced with our app.js
//READ: react lifecycle methods (always automatically triggered in certain sequence):
//				mounting:
// 1) constructor
// 2) componenWillMount
// 3) render
// 4) componentDidMount
ReactDOM.render(<App />, document.getElementById('root'));
