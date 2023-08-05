import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import PersonAvatar from '../../assets/personimg.jpg';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-[100px] bg-gray-100 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
            <h1 className="text-[25px] font-bold text-purple-800">Giosocial</h1>
            <div className='rounded bg-white flex w-[300px] h-[40px] items-center px-2 gap-3'>
                <SearchOutlinedIcon/>
                <input placeholder='Search' className="bg-transparent w-full outline-none"/>
            </div>
        </div>
        <div className='flex items-center gap-4'>
            
            <NotificationsOutlinedIcon/>
            <div className='flex items-center gap-2'>
                <img src={PersonAvatar} className="h-10 w-10 rounded-full object-cover" />
                <p className="cursor-pointer">
                    David <ArrowDropDownOutlinedIcon/>
                </p>
            </div>
        </div> 
    </nav>
  )
}

export default Navbar