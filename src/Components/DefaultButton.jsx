import PropTypes from 'prop-types';

function DefaultButton({children, name, color = "btn-primary", ...props}) {
  return (
      <button className={`btn ${color} ml-2 md:ml-3`} {...props}>
        {children}
        {name}
      </button>
  );
}

DefaultButton.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string, 
  color: PropTypes.string,
};

export default DefaultButton;