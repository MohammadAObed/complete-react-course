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
  //children prop is everything we render between the openning and closing tag of the component
  return  (
    <section className='booklist'>
      <Book 
        img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author} 
      > 
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae sapiente assumenda obcaecati eaque architecto atque distinctio, molestias consequatur vero quidem.</p>
      {/* this will be accessed by a special prop called children, in Book component. Only this will have the children prop, second book won't (undefined) */}
      </Book>
      
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  )
}
//name must be children
const Book = ({img, title, author, children}) => { 
  //children is on the props object
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

ReactDOM.render(<BookList />,document.getElementById('root')) 


