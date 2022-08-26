import React from 'react';
import { data } from '../../../data'; //going levels up
//data is an array of objects
//whenever there is any array, there is key att that needs an id

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeItem = (id) => {
    let newPeople = people.filter(person => person.id !== id)
    setPeople(newPeople) //remember this will change and update the people array
  }
  return (
    //<> is the same as <React.Fragment>
    <> 
    {
      people.map(person => {
        const {id,name} = person
        return <div key={id} className='item'>
          <h4>{name}</h4>
          <button onClick={() => removeItem(id)}>remove</button>
        </div>
      })
    }
    <button className='btn' onClick={() => setPeople([])}>
      clear items
    </button>
    </>
  );
};

export default UseStateArray;
