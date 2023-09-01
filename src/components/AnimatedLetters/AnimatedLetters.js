import React from 'react'
import './AnimatedLetters.scss'

//Components for Letter Animation 
 //Three parameters: 1.param(class of characters), 2.param(array of characters ifself), 3.param(index, starting point)

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters