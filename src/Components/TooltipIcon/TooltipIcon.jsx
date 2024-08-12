import React from 'react'
import { useState } from 'react';
import "./tooltipIcon.css";

const TooltipIcon = ({ text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
    className='tooltip-container' 
    onMouseEnter={() => setHovered(true)} 
    onMouseLeave={() => setHovered(false)}
    >
      <span className='question-icon'>?</span>
      {hovered && (
        <div className='tooltip-text'>
          {text.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default TooltipIcon;