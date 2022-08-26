import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name:'peter',age:24, msg:'random message'})


  const changeMsg = () => {
    // let newPerson = {...person, msg:'hello'}
    //spread operator:preserves the object & copies its properties, it will allow us to modify whatever property we want
    setPerson({...person, msg: 'hello world'}) //msg will override the msg that was spreaded from the person object
  }
  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.msg}</h3>
    <button className='btn' onClick={changeMsg}>
      change message
    </button>
    </>
  )
};

export default UseStateObject;
