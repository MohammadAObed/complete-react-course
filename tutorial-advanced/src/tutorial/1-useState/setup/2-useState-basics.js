import React, { useState } from 'react';

//Note: React Fragments allow you to wrap or group multiple elements without adding an extra node to the DOM

//use Rules:
// component name -containing the useState-  must be uppercase
// must be in the function,component body
// cannot call conditionally, explained later, we know the example below is fine & it works

//basically useState: a function
//its a named import (reserved)
//useState(), returns array of 2 values:
// 1- state value, [1]
// 2- a function controls the value [2]

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0] //1: default value
  // const handler = useState(1)[1] //1: same, will be the function
  // console.log(value, handler);

  //text: state value [1], setText: the function [2] 
  const [text, setText] = useState('random title') //destructuring the array returned from invoking useState, random title: default value 

  const handleClick = () => {
    if(text === 'random title') {
      setText('hello world') //changes the text value, tells react to rerender
    } else {
      setText('random title')
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;


// 