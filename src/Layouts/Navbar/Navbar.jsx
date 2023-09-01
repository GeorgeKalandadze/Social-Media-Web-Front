import React from 'react'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import PersonAvatar from '../../assets/personimg.jpg';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useDispatch } from 'react-redux';
import { openNotificationModal } from '../../Redux/notificationModalSlice';

const Navbar = () => {
    const dispatch = useDispatch();
  return (
    <nav className="w-full py-4 px-[100px] bg-gray-100 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-4">
        <h1 className="text-[25px] font-bold text-purple-800">Giosocial</h1>
        <div className="rounded bg-white flex w-[300px] h-[40px] items-center px-2 gap-3">
          <SearchOutlinedIcon />
          <input
            placeholder="Search"
            className="bg-transparent w-full outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch(openNotificationModal())}
          className="relative"
        >
          <NotificationsOutlinedIcon />
          <div className="w-[8px] h-[8px] rounded-full absolute bg-red-500 top-[20%] right-1"></div>
        </button>
        <div className="flex items-center gap-2">
          <img
            src={PersonAvatar}
            className="h-10 w-10 rounded-full object-cover"
          />
          <p className="cursor-pointer">
            David <ArrowDropDownOutlinedIcon />
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar