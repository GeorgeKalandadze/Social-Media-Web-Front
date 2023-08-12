import React from 'react';

const InputGroup = ({ label, placeholder, type, name, className = '', value, onChange, error }) => {
    return (
        <div className="flex flex-col justify-center  mb-[20px]">
            <label className=" text-[18px] text-gray-400 mb-2">{label}</label>
            <input
                className={`border-gray-200 border-2 rounded py-2.5  px-2 outline-none ${className}`}
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
            <p className="text-red-600 mt-2">{error && error}</p>
        </div>
    );
};

export default InputGroup;