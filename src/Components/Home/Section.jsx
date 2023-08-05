import React from 'react'

const Section = ({bgImg, text, className=""}) => {
  return (
    <div className={`flex items-center gap-4 cursor-pointer bg-gray-100 w-[300px] px-4 py-3   ${className} hover:bg-transparent transition duration-300`}>
      <img src={bgImg} className='w-[40px]'/>
      <p className='text-[20px] font-medium '>{text}</p>
    </div>
  )
}

export default Section
