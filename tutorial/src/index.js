import React from 'react'
import ReactDOM  from 'react-dom'

// CSS
import './index.css'

// JS
import {books} from './books'
import Book from './Book'

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book,index) => {
        return (<Book key={book.id} {...book}/>)
      })}
    </section>
    
  )
}

ReactDOM.render(<BookList/>, document.getElementById('root'))


//Advanced React
//Hooks: begins with use
//why? once we make our component dynamic & complex, we will need to use them
//they are functions react provides to help us complete various tasks (adding,removing items from list, toggling modal, fetching data)
//popular ones: useState, useEffect