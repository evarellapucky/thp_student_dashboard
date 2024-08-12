import React from 'react'

const RedirectButton = ({ url, text }) => {
  const handleRedirect = () => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <button onClick={handleRedirect} className='btn btn-primary'>{text}</button>
  );
};

export default RedirectButton;