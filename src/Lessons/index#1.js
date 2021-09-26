import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card'; //all this will be rendered below
import 'tachyons'; //for css styling
//robots.js does not use export default but only export
//those files can export multiple objects unlike default
//consequently the import has to be destructured
import { robots } from './robots';
// import { robots, example } from './robots';

ReactDOM.render(
  //put div around so I can render more than 1 Card
  <div>
    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
  </div>,
  document.getElementById('root')
);

// EXAMPLES:
// <Card id={example[0].id} name={example[0].name} email={example[0].email}/>
// <Card />
