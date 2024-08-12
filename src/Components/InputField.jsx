import PropTypes from 'prop-types';

function InputField({ placeholder, isTextArea }) {
  return isTextArea ? (
    <div className="form-control mb-4">
      <label className="input-group">
        <textarea
          placeholder={placeholder}
          className="textarea textarea-bordered textarea-primary w-full"
          rows="4"
        />
      </label>
    </div>
  ) : (
    <div className="form-control mb-4">
      <label className="input-group">
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered input-primary w-full"
        />
      </label>
    </div>
  );
}

InputField.propTypes = {
  placeholder: PropTypes.string,
  isTextArea: PropTypes.bool
}

export default InputField;