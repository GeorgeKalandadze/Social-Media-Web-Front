import React from 'react'

const Input = ({placeholder, type, value, onChange, error}) => {
  return (
    <div>
    <input
        className="border-b-2 border-gray-300 py-2 px-2 focus:outline-none focus:border-blue-500"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
    {error && <p className='text-red-500 mt-2'>{error}</p>}
    </div>

  )
}

export default Input