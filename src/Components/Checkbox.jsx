import PropTypes from 'prop-types';

const CheckboxGroup = ({ options, label, onChange }) => {
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);  // Passer la valeur sélectionnée
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <div className="flex flex-col">
                {options.map((option) => (
                    <div key={option.value} className="form-control mb-2">
                        <label className="label cursor-pointer">
                            <span className="label-text">{option.label}</span>
                            <input
                                type="checkbox"
                                value={option.value}
                                onChange={handleChange}
                                className="checkbox"
                                checked={option.checked}
                            />
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

CheckboxGroup.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool,  // Indique si l'option est cochée
    })).isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default CheckboxGroup;
