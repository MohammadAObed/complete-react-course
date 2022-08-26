import React from 'react' 
import ReactDOM from 'react-dom' 

// JSX Rules:
// 2- always!!!!! return single element
// 3- div / section /article or Fragment
// 4- use camelCase for html element attribute
// 5- className instead of class
// 6- close every element (/)
// 7- formatting

//2-: you cant have any other element (Adjacent) (sibling) beside the div below (just wrap everything in the div, nigga)        
//3-: dont always return a div, try others like: section, article... 
//React fragment: <React.Fragment></React.Fragment> or <></> use this or div, article....
//6- even the ones doesn't have the closing tag
//7- paranthesis: will make your life easier, sometimes no parenthesis will conflict with the hidden semicolon of return if on seperate line & blah blah....

//this function applies all the rules above
function Greeting() {
  return (
    <div className=''>
      <h3>hello people</h3>
      <ul>
        <li>
          <a href="#" onClick='...'>hello world</a>
          <img src="" alt="" />
        </li>
      </ul>
    </div> 
  )
}


ReactDOM.render(<Greeting />,document.getElementById('root')) 