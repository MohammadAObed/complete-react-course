import React from 'react'


const Book = ({img,title,author}) => {

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
      
    </article>
  )
}

export default Book