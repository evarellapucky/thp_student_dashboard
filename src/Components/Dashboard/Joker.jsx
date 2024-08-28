import JokerImage from '../../Assets/Joker.png';
import './joker.css';

const Joker = () => {
  return (
    <div className='joker-container border-2 rounded-lg w-16 h-18'>
      <img src={JokerImage} alt="Chapeau de clown" className='joker-image'/>
    </div>
  )
}

export default Joker;
