import React from 'react' 
import ReactDOM from 'react-dom'

// CSS
import './index.css'

//setup vars 
const firstBook = {
  img : 'https://m.media-amazon.com/images/I/617uZq23IPL._AC_UL320_.jpg',
  title: `Reminders of Him: A Novel`,
  author: `Colleen Hoover`,
}
const secondBook = {
  img : 'https://m.media-amazon.com/images/I/61tqfa+xbWL._AC_UL320_.jpg',
  title: `Verity`,
  author: `Colleen Hoover`,
}

function BookList() {
  // when having multiple books, we want to add props (like parameters) so we can add seperate cover and author for every book, nigga this is easy...
  return  (
    <section className='booklist'>
      <Book 
        img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author} 
      /> {/* any properties here are inside the object of props */}
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  )
}

const Book = (props) => { //or destructure it {img,title,author}, best one
  //props: convention, its an object
  // console.log(props);
  const {img, title, author} = props
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<BookList />,document.getElementById('root')) 


