import React from 'react'
import PersonAvatar from '../../assets/personimg.jpg';
import ParisImg from '../../assets/paris.jpg';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
const Post = () => {
  return (
    <div className='w-full rounded-xl bg-gray-100 p-4 flex flex-col gap-4 '>
        <div className='flex items-center gap-4 mb-4'>
            <img 
                src={PersonAvatar} 
                className="h-14 w-14 rounded-full object-cover" 
                // style={{border:"3px solid white"}}
            />
            <div className='flex flex-col gap-1'>
                <p className='text-[20px] font-medium'>George</p>
                <p className="text-gray-500 ">16 Hours ago</p>
            </div>
        </div>
        <p className='font-medium'>one of the greatest day in my life, when i was in paris with my Girlfriend.</p>
        <img src={ParisImg} className='rounded-xl h-[500px]'/>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-3'>
                    <FavoriteOutlinedIcon />
                    <p>0 Likes</p>
                </div>
                <div className='flex items-center gap-3'>
                    <TextsmsOutlinedIcon/>
                    <p>Comments</p>
                </div>
            </div>
            <BookmarkBorderOutlinedIcon/>
        </div>
    </div>
  )
}

export default Post