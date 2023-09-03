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

          <SearchOutlinedIcon />
          <input
            placeholder="Search"
            className="bg-transparent w-full outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">

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