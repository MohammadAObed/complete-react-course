import React from 'react'
import ReactDOM  from 'react-dom'

import './index.css'

//setup vars 
const books =
[ 
  {
    id:1,
    img : 'https://m.media-amazon.com/images/I/617uZq23IPL._AC_UL320_.jpg',
    title: `Reminders of Him: A Novel`,
    author: `Darleen Blumer`,
  },
  {
    id:2,
    img : 'https://m.media-amazon.com/images/I/61tqfa+xbWL._AC_UL320_.jpg',
    title: `Verity`,
    author: `Colleen Hoover`,
  },
  {
    id:3,
    img : 'https://m.media-amazon.com/images/I/61tqfa+xbWL._AC_UL320_.jpg',
    title: `Verity`,
    author: `Colleen Hoover`,
  },
]


//user events basics, so we need to cover the state (but we didn't? idk man...)
//https://reactjs.org/docs/events.html

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book,index) => {
        return (<Book key={book.id} {...book} />)
      })}
    </section>
    
  )
}

const Book = ({img,title,author}) => {
  //what we need to set event in react:
  //attribute, eventHanlder
  //onClick, onMouseOver (hover)

  const clickHandler = (e) => {
    alert('Hello world')
    console.log(e.target);
  }
  const complexExample = (author) => {
    console.log(author);
  }
  return (
    <article className='book' onMouseOver={()=>{
      console.log(title);
    }}>
      <img src={img} alt="" />
      {/* 1- inline function */}
      <h1 onClick={()=>console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      {/* 2- reference function */}
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      {/* 3- reference function with arguments */}
      <button type='button' onClick={() => complexExample(author)}>
        complex example
      </button>
      {/* scenario above is just if we wanna pass arguments! if we dont pass arrow fun below then that complexExample will invoke the moment we render our app without clicking, but we want just to pass the function & not invoke it so we write arrow functions*/}
    </article>
  )
}

ReactDOM.render(<BookList/>, document.getElementById('root'))
