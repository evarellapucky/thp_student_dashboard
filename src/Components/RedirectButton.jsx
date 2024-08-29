import PropType from 'prop-types';

const RedirectButton = ({ url, text }) => {
  const handleRedirect = () => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <button onClick={handleRedirect} className='btn btn-primary'>{text}</button>
  );
};

RedirectButton.propTypes = {
  url: PropType.string,
  text: PropType.string
};

export default RedirectButton;