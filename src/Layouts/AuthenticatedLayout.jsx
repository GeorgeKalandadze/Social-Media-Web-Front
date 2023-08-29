import React from 'react'
import Navbar from './Navbar/Navbar'
import LeftSide from '../Components/Home/LeftSide'
import RightSide from '../Components/Home/RightSide'
import PostForm from '../Components/Post/PostForm'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../Redux/postModalSlice'
import SideBar from './Sidebar/Sidebar'


const AuthenticatedLayout = ({children}) => {
  const isPostModalOpen = useSelector(state => state.postModal.isOpen);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  }

  return (
    <div>
      <Navbar />
      <PostForm open={isPostModalOpen} close={() => handleClose()} />
      <div
        className="
          py-4 px-[10px] grid grid-cols-[auto,auto]  gap-x-8 
          lg:py-4 px-[100px] lg:grid-cols-[18vw,auto,22vw] 
          md:grid-cols-[22vw,auto,22vw] 
          sm:px-[30px] grid grid-cols-[1fr,2fr]
          bg-red-500 sm:bg-yellow-500 md:bg-blue-500 lg:bg-green-500 "
      >
        <LeftSide />
        <SideBar />
        {children}
        <RightSide />
      </div>
    </div>
  );
}

export default AuthenticatedLayout