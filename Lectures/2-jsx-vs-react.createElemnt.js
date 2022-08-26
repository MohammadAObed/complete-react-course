import React from 'react' 
import ReactDOM from 'react-dom' 

//stateless functional component, (dumb components)
//stateless components always always!!!!!!!!! return JSX

//JSX: puts html in javascript code, allows us to write html directly in javascript which also react

function Greeting() {
  return (
    <div>
      <h1>hello world</h1>
    </div> 
  )
}

// const Greeting = () =>{
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1',{},'hello world'),
//     )
// }

//both are similar but jsx is way more readable

ReactDOM.render(<Greeting />,document.getElementById('root')) 