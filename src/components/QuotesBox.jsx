import React from 'react'
import ButtonBox from './ButtonBox'
import ContentBox from './ContentBox'

const QuotesBox = ({quoteRandom, handleclick, colorRandom}) => {

  return (
    <article style={{color: colorRandom}} className='box'>
        <ContentBox
        quoteRandom={quoteRandom}
        colorRandom={colorRandom}
        />
        <ButtonBox 
        colorRandom={colorRandom}
        handleclick={handleclick}
         />
    </article>
  )
}

export default QuotesBox