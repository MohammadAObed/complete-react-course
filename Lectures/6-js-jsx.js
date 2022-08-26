import React from 'react' 
import ReactDOM from 'react-dom'

// CSS
import './index.css'

function BookList() {
  return  (
    <section className='booklist'>
      <Book />
    </section>
  )
}

const author = `Colleen Hoover`
const Book = () => {
  const title = `Reminders of Him: A Novel`
  return (
    <article className='book'>
      <img src="https://m.media-amazon.com/images/I/617uZq23IPL._AC_UL320_.jpg" alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x = 6}</p>  */}
      <p>{6 + 6}</p>
    </article>
  )
}

//one rule in javascript in jsx is it has!!!! to return a value, not like {let x = 6}

ReactDOM.render(<BookList />,document.getElementById('root')) 


