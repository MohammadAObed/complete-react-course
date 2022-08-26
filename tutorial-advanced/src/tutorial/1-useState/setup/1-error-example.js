import React from 'react';

//the idea is to change the state of an ui (html) element,
//but the problem of just changing is we are not rerendering the component, thats the reason why it cannot changes the element, and we have no way to preserve the title value between the renders

//? SO WE WANT TWO THINGS!!!!!!!!
//1-keep the value between the renders
//2-we want to trigger the rerender

const ErrorExample = () => {
  let title = 'random title'
  const handleClick = () => {
    title = 'hello people'
    console.log(title);
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>change title</button>
    </React.Fragment>
  )
};

export default ErrorExample;
