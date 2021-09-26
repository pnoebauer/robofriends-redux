import React from 'react';

const Scroll = (props) => {
  return (
    //JS: <div style={}>
    //JSX: <div style={{}}>
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid black',
        height: '500px',
      }}
    >
      {/*<h1>hi</h1>*/}
      {
        //react props contain the props-objects passed down
        //PLUS the children object included
        // console.log(props)
        //Need props.children to display all elements in-between scroll
      }
      {props.children}
    </div>
  );
};

export default Scroll;
