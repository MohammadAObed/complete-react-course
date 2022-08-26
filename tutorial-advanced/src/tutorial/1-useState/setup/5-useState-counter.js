import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  //setFun is async, so when clicking like 3 times within setTimeout or any async function, it thinks that the value still 0, so it will increase by one, it will look only for that old value (0)
  const complexIncrease = () => {
    setTimeout(()=>{
      // setValue(value+1) //won't work
      //so we use the functional approach
      setValue((prevState)=>{
        //if you dont return anything, your whole functionality will collapse
        return prevState + 1
        //prevState is a naming convention, as a param it gets the correct current value
      }) 
    },2000)
    //the syntax above works for anything, so you can replace the usual setFun
  }
  return <>
  <section style={{margin:'4rem 0'}}>
    <h2>regular counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setValue(value-1)}>decrease</button>
    <button className='btn' onClick={()=>setValue(0)}>reset</button>
    <button className='btn' onClick={()=>setValue(value+1)}>increase</button>
  </section>
  <section style={{margin:'4rem 0'}}>
    <h2>more complex counter</h2>
    <h1>{value}</h1>
    {/* delayed counter */}
    <button className='btn' onClick={complexIncrease}>
      increase later
      </button>
  </section>
  </>;
};

export default UseStateCounter;
