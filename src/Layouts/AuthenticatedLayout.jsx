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
    <div >
        <Navbar/>
        <PostForm open={isPostModalOpen} close={() => dispatch(closeModal())}/>
        <div className='py-4 px-[100px] grid grid-cols-[18vw,auto,22vw] gap-x-8'>
            <LeftSide/>
            {children}
            <RightSide/>
        </div>
    </div>
  )
}

export default AuthenticatedLayout