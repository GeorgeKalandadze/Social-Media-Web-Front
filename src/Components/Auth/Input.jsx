import React from 'react'

const Input = ({placeholder, type}) => {
  return (
    <input
        class=" border-b-2 border-gray-300 py-2 px-2 focus:outline-none focus:border-blue-500"
        type={type}
        placeholder={placeholder}
    />

  )
}

export default Input