import React from 'react'
import Navbar from './Navbar/Navbar'
import LeftSide from '../Components/Home/LeftSide'
import RightSide from '../Components/Home/RightSide'
import PostForm from '../Components/Post/PostForm'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../Redux/postModalSlice'


const AuthenticatedLayout = ({children}) => {
  const isPostModalOpen = useSelector(state => state.postModal.isOpen);


  const dispatch = useDispatch();
 
  return (
    <div>
      <Navbar />

        <LeftSide />
        <SideBar />
        <div className={`py-4 mr-4 sm:py-0 sm:mr-0 ${isOpenSidebar ? 'blurred' : ''}`}>{children}</div>
        <RightSide />
      </div>
    </div>
  );
}

export default AuthenticatedLayout