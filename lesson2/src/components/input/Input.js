import React from 'react';

const Input = ({placeholder, handleChange}) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
        />
        // <div>
        //     placeholder: {placeholder}
        // </div>
    );
};

export default Input;