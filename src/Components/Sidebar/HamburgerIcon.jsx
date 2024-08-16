import PropTypes from 'prop-types';

const HamburgerIcon = ({ isOpen }) => {
  return (
    <div className="w-8 h-8 relative flex justify-center items-center">
      <div className={`absolute w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-4.5' : '-translate-y-2'}`} />
      <div className={`absolute w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
      <div className={`absolute w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-4.5' : 'translate-y-2'}`} />
    </div>
  );
};

HamburgerIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default HamburgerIcon;
