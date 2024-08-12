import PropTypes from 'prop-types';

function InputField({ placeholder, value, onChange, isTextArea }) {
  return isTextArea ? (
    <div className="form-control mb-4">
      <label className="input-group">
        <textarea
          placeholder={placeholder}
          className="textarea textarea-bordered textarea-primary w-full"
          rows="4"
          value={value}
          onChange={onChange}
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
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

InputField.propTypes = {
  placeholder: PropTypes.string,
  isTextArea: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default InputField;