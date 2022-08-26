import React from 'react' 
import ReactDOM from 'react-dom'

// CSS
import './index.css'

function BookList() {
  return  (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src="https://m.media-amazon.com/images/I/617uZq23IPL._AC_UL320_.jpg" alt="" />
const Title = () => <h1>Reminders of Him: A Novel</h1>
const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>by Colleen Hoover</h4> // the style={} means im in javascript, the style={{}} means we just added an object,  this is inline-styling, so it overrides any style in index.css, (basic css rules), check if a library you will use in future will add style by inline


ReactDOM.render(<BookList />,document.getElementById('root')) 


