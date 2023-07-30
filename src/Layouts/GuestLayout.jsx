import React from 'react'

const GuestLayout = ({children,className}) => {
  return (
    <div className='h-screen bg-purple-300 flex items-center justify-center'>
        <div className={`w-1/2 flex bg-white rounded-lg min-h-600 overflow-hidden ${className}`}>
            {children}
        </div>
    </div>
  )
}

export default GuestLayout