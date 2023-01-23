import React from 'react'

const ButtonBox = ({handleclick, colorRandom}) => {
  return (
    <button style={{background: colorRandom}} className='box__btn' onClick={handleclick}>&#62;</button>
  )
}

export default ButtonBox