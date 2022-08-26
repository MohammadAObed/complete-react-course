//! look for the books.js & Book.js files below

import React from 'react'
import ReactDOM  from 'react-dom'

//import, export: es6 modules let us split our apps into chunks, which is easier to manage 

// CSS
import './index.css'

//name here must match same name exported, if .js extension then we dont need to type
import {books} from './books'
import Book from './Book'
//the difference above is bcz that the export is diff, one is normal, other is default (default can be named whatever (Bunny, Book, etc...))

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book,index) => {
        return (<Book key={book.id} {...book} />)
      })}
    </section>
    
  )
}


ReactDOM.render(<BookList/>, document.getElementById('root'))




//*********************************************
// books.js
//*********************************************
// export const books =
// [ 
//   {
//     id:1,
//     img : 'https://m.media-amazon.com/images/I/617uZq23IPL._AC_UL320_.jpg',
//     title: `Reminders of Him: A Novel`,
//     author: `Darleen Blumer`,
//   },
//   {
//     id:2,
//     img : 'https://m.media-amazon.com/images/I/61tqfa+xbWL._AC_UL320_.jpg',
//     title: `Verity`,
//     author: `Colleen Hoover`,
//   },
//   {
//     id:3,
//     img : 'https://m.media-amazon.com/images/I/61tqfa+xbWL._AC_UL320_.jpg',
//     title: `Verity`,
//     author: `Colleen Hoover`,
//   },
// ]



//*********************************************
// Book.js
//*********************************************
// import React from 'react'


// const Book = ({img,title,author}) => {

//   const clickHandler = (e) => {
//     alert('Hello world')
//     console.log(e.target);
//   }
//   const complexExample = (author) => {
//     console.log(author);
//   }
//   return (
//     <article className='book' onMouseOver={()=>{
//       console.log(title);
//     }}>
//       <img src={img} alt="" />
//       {/* 1- inline function */}
//       <h1 onClick={()=>console.log(title)}>{title}</h1>
//       <h4>{author}</h4>
//       {/* 2- reference function */}
//       <button type='button' onClick={clickHandler}>
//         reference example
//       </button>
//       {/* 3- reference function with arguments */}
//       <button type='button' onClick={() => complexExample(author)}>
//         complex example
//       </button>
      
//     </article>
//   )
// }

// export default Book