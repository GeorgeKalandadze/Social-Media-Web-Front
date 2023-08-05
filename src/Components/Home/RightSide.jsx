import React from 'react'
import PersonAvatar from '../../assets/personimg.jpg';

const RightSide = () => {
  return (
    <div className='flex flex-col gap-6 sticky h-max top-0'>
      <div className='flex flex-col  gap-4 bg-gray-100  px-4 py-3 rounded-xl cursor-pointer shadow-md'> 
        <p className='text-gray-500 font-medium'>Latest Activities</p>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
            <img 
              src={PersonAvatar} 
              className="h-11 w-11 rounded-full object-cover" 
            />
            <p><span className='font-medium'>George </span> likes Your post</p>
            </div>
            <p className='text-gray-500'>1 min ago</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col  gap-4 bg-gray-100  px-4 py-3 rounded-xl cursor-pointer shadow-md'> 
        <p className='text-gray-500 font-medium'>Online Friends</p>
        <div>
          <div className='flex items-center gap-3'>
            <div className="relative inline-block">
              <img 
                src={PersonAvatar} 
                className="h-11 w-11 rounded-full object-cover" 
                />
              <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p className='font-medium'>George Kalandadze</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RightSide