import React from 'react';

// const Card = () => {
// const Card = (props) => {
// 	//destructuring:
// 	const {id, name, email} = props;

const Card = ({ id, name, email }) => {
  return (
    //!!!Only 1 html element can be returned
    //If more are required use an array
    //here: the outer div tag is that 1 element

    // robohash: API for images
    // div className uses tachyon css styling code
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow">
      <img alt="robots" src={`https://robohash.org/${id}?100x100`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{`https://robohash.org/${id}?100x100`}</p>
      </div>
    </div>

    //without destructuring
    // const Card = (props) => {
    // <h2>{props.name}</h2>
    // <p>{props.email}</p>

    //!!!have to put props in {} to work as this
    //is js used in a pseudo html element
    // <h2>Jane Doe</h2>
    // <p>jane.doe@gmail.com</p>
    // src='https://robohash.org/test?100x100'
    // to add a js string the whole string needs {} around and '' changes to ``
    // -->  src={'https://robohash.org/${props.id}?100x100'}
  );
};

export default Card;
