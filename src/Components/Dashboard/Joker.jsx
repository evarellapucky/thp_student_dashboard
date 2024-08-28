import JokerImage from '../../Assets/Joker.png';

const Joker = () => {
  return (
    <div className='joker-container border-2 rounded-lg w-16 h-18'>
      <img src={JokerImage} alt="Chapeau de clown" className='joker-image'/>
    </div>
  )
}

export default Joker;
