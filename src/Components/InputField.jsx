import PropTypes from 'prop-types';

const InputField = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="input input-bordered input-primary"
      placeholder={placeholder}
    />
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string
}

export default InputField;