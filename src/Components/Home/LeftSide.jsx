import React, { useState } from 'react'
import PersonAvatar from '../../assets/personimg.jpg';
import Section from './Section';
import ThemeIcon from '../../assets/icons/theme.png'
import FriendsIcon from '../../assets/icons/friends.png'
import BookmarksIcon from '../../assets/icons/bookmarks.png'
import HomeIcon from '../../assets/icons/home.png'
import AnalyticIcon from '../../assets/icons/analytics.png'
import NotificationIcon from '../../assets/icons/notification.png'
import { useDispatch } from 'react-redux';
import { openModal } from '../../Redux/postModalSlice';
import { clearSelectPost} from '../../Redux/selectedPostDataSlice';
import { clearPostData } from '../../Redux/postDataSlice';
import { Link } from 'react-router-dom';


const LeftSide = () => {
    const dispatch = useDispatch();
    const openPostModal = () => {
       dispatch(openModal());
       dispatch(clearSelectPost());
    }

  return (
    <>
      <div className="hidden gap-6 sticky h-max top-0 sm:flex flex-col">
        <div className="flex flex-col items-center gap-3 bg-gray-100  px-4 py-3 rounded-xl cursor-pointer shadow-md lg:flex-row">
          <img
            src={PersonAvatar}
            className="h-14 w-14 rounded-full object-cover"
            style={{ border: "3px solid white" }}
          />
          <div className="flex flex-col gap-2">
            <p className="text-[20px] text-center font-bold lg:text-start">George</p>
            <p className="text-gray-500 text-[12px] font-medium lg:text-[17px]">
              George@gmail.com
            </p>
          </div>
        </div>
        <div className="flex flex-col  ">
          <Link to="/home">
            <Section bgImg={HomeIcon} text={"Home"} className="rounded-t-xl" />
          </Link>
          <Section bgImg={NotificationIcon} text={"Notifications"} />
          <Section bgImg={FriendsIcon} text={"Friends"} />
          <Section bgImg={ThemeIcon} text={"Themes"} />
          <Link to="/favorite-posts">
            <Section bgImg={BookmarksIcon} text={"Bookmarks"} />
          </Link>
          <Section
            bgImg={AnalyticIcon}
            text={"Analytic"}
            className="rounded-b-xl"
          />
        </div>
        <button
          className="rounded-2xl bg-purple-800  text-white font-medium text-[20px] py-3 shadow-md"
          onClick={() => openPostModal()}
        >
          Create Post
        </button>
      </div>
    </>
  );
}

export default LeftSide