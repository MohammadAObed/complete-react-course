import React from 'react'
import ReactDOM  from 'react-dom'

import './index.css'

//setup vars 
const books =
[ 
//set unique key prop
//as we progress with react, maybe remove items or add items to books array, react wants to keep a track of what we are adding,removing.
//we need to set up special key prop for each and every item taht we're returning, so if we have a list, we need to set unique key prop
  {
    id:1,
    img : 'https://m.media-amazon.com/images/I/617uZq23IPL._AC_UL320_.jpg',
    title: `Reminders of Him: A Novel`,
    author: `Colleen Hoover`,
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

// const newBooks = books.map(book => {
//   const {img,title,author} = book
//   return (
//     <Book key={book.id} book={book} />
//   )
// })
//then inside BookList return(<section>{newBooks}</section>), make sure to conver Book component to function and not es6 arrow function 


function BookList() {
  return (
    <section className='booklist'>
      {books.map((book,index) => {
        return (
          <Book key={book.id} {...book} /> //{...book} is like book={..book} //key is the special key prop (its mandatory) with unique!!! value!!  (dont add index instead of id)
        )
      })}
    </section>
    
  )
}

const Book = ({img,title,author}) => {
  //console.log(props)
  // const {img, title, author } = book
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<BookList/>, document.getElementById('root'))
