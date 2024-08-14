import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, label, onSelect }) => {
    const handleChange = (event) => {
        const selectedOption = options.find(option => option.value === event.target.value);
        onSelect(selectedOption);
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <select onChange={handleChange} className="border border-gray-300 rounded p-2">
                <option value="">-- Sélectionnez --</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    label: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Dropdown;
