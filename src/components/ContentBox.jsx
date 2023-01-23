import React from 'react'

const ContentBox = ({quoteRandom}) => {
  return (
    <>
        <i className='bx bxs-quote-left box__icon'></i>
        <p className='box__quote'>{quoteRandom.quote}</p>
        <h1 className='box__author'>{quoteRandom.author}</h1>
    </>
  )
}

export default ContentBox