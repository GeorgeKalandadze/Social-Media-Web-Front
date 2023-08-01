import React from 'react'

const RightSide = ({children, className}) => {
  return (
    <div className={`flex-1 p-10 flex flex-col gap-10  ${className}`} >
      {children}
    </div>

  )
}

export default RightSide