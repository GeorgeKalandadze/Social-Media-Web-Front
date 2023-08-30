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
  const isOpenSidebar = useSelector((state) => state.sidebar.isOpenSidebar);

  return (
    <div>
      <Navbar />
      <PostForm open={isPostModalOpen} close={() => handleClose()} />
      <div
        className="
          py-0 px-[0px] grid grid-cols-[10vw,auto] gap-x-8
          lg:px-[100px] lg:grid-cols-[18vw,auto,22vw] 
          md:grid-cols-[22vw,auto,22vw] 
          sm:grid-cols-[1fr,2fr]  sm:px-[30px] sm:py-4
         "
      >
        <LeftSide />
        <SideBar />
        <div className={`py-4 mr-4 sm:py-0 sm:mr-0 ${isOpenSidebar ? 'blurred' : ''}`}>{children}</div>
        <RightSide />
      </div>
    </div>
  );
}

export default AuthenticatedLayout