import React from 'react'

const RedirectButton = ({ url, text }) => {
  const handleRedirect = () => {
    window.location.href = url;
  };

  return (
    <button onClick={handleRedirect} className='btn btn-primary'>{text}</button>
  );
};

export default RedirectButton;