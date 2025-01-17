import { useState } from 'react';
import "./tooltipIcon.css";
import PropTypes from 'prop-types';

const TooltipIcon = ({ text, direction = "right" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
    className='tooltip-container'
    onMouseEnter={() => setHovered(true)} 
    onMouseLeave={() => setHovered(false)}
    >
      <span className='question-icon'>?</span>
      {hovered && (
        <div className={`tooltip-text tooltip-${direction}`}>
          {text.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

TooltipIcon.propTypes = {
  text: PropTypes.string.isRequired,
  direction: PropTypes.string,
};

export default TooltipIcon;