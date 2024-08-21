import React from 'react'
import JokerImage from '../../Assets/Joker.png';

const Joker = () => {
  return (
    <div className='border-2 rounded-lg'>
      <img src={JokerImage} alt="Chapeau de clown"/>
    </div>
  )
}

export default Joker