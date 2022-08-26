// import from react dependency (es6 modules)
import React from 'react' //to create a component
import ReactDOM from 'react-dom' //to access the index.html div.root or any element to render stuff on it


// a react function (component) (must be capitalized for react to know its component)
function Greeting() {
  return <h4>this is john & this is my first component</h4> // return html (JSX)
}

//(what we're going to render, where we want to render it)
ReactDOM.render(<Greeting />,document.getElementById('root')) //must have the closing tag (/>)
