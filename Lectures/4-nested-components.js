import React from 'react' 
import ReactDOM from 'react-dom'

//ctrl shift i
//Nested Components, React Tools
//whole idea of react is to split the app into nice speerate chunks, so nested components is expected

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div> 
  )
}

const Person = () => <h2>john doe</h2>
const Message = () => {return (<p>this is my message</p>)}

//react is like lego, we're building blocks into one big whole block

ReactDOM.render(<Greeting />,document.getElementById('root')) 